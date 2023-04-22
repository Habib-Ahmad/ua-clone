import { useEffect, useState } from "react";
import axios from "axios";
import Toast from "react-native-root-toast";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";
import useRefreshToken from "../hooks/useRefreshToken";
import { colors } from "../utils";
import store from "../utils/store";

const instance = axios.create({
  baseURL: "https://api-ultra.herokuapp.com",
});

const AxiosInterceptor = ({ children }) => {
  const {
    state: { accessToken, accessExpiry },
    dispatch,
  } = useGlobalContext();
  const refresh = useRefreshToken();

  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    setIsSet(true);

    const requestInterceptor = instance.interceptors.request.use(
      async (request) => {
        dispatch({ type: actions.setLoading, payload: true });
        const refreshToken = await store.getRefreshToken();
        if (refreshToken && request.headers) {
          // Check if access token has expired
          const now = new Date();
          const expiryDate = new Date(accessExpiry);
          if (!accessToken || !accessExpiry || now > expiryDate) {
            const newAccessToken = await refresh();
            request.headers["Authorization"] = `Bearer ${newAccessToken}`;
          } else {
            request.headers["Authorization"] = `Bearer ${accessToken}`;
          }
        }
        return request;
      },
      (error) => {
        dispatch({ type: actions.setLoading, payload: false });
        Promise.reject(error);
      }
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        dispatch({ type: actions.setLoading, payload: false });
        return response;
      },
      async (error) => {
        dispatch({ type: actions.setLoading, payload: false });
        if (error.response.status === 401) {
          dispatch({ type: actions.logout });
          await store.removeRefreshToken();
          await store.removeRefreshExpiry();
        }
        {
          error.response &&
            Toast.show(error.response.data.message, {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              keyboardAvoiding: true,
              delay: 0,
              opacity: 1,
              backgroundColor: colors.pink,
              textColor: colors.red,
            });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      dispatch({ type: actions.setLoading, payload: false });
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessExpiry, accessToken, dispatch]);

  return isSet && children;
};

export default instance;
export { AxiosInterceptor };
