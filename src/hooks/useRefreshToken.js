import axios from "axios";
import urls from "../api/urls";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";
import store from "../utils/store";

const useRefreshToken = () => {
  const { dispatch } = useGlobalContext();

  const refresh = async () => {
    try {
      const refreshToken = await store.getRefreshToken();
      const response = await axios.post(
        `https://api-ultra.herokuapp.com${urls.auth.refreshToken}`,
        { refreshToken }
      );

      dispatch({
        type: actions.setAccessToken,
        payload: {
          token: response.data.tokens.accessToken,
          expiry: response.data.tokens.tokenExpiry,
        },
      });
      return response.data.tokens.accessToken;
    } catch (error) {
      Promise.reject(error.response);
      await store.removeRefreshToken();
      await store.removeRefreshExpiry();
    }
  };

  return refresh;
};

export default useRefreshToken;
