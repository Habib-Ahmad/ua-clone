import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";
import useRefreshToken from "../hooks/useRefreshToken";
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
        return { data: response.data };
      },
      (error) => {
        dispatch({ type: actions.setLoading, payload: false });
        Promise.reject(error);
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
