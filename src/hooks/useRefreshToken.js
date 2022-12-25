import axios from "axios";
import urls from "../api/urls";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";
import store from "../utils/store";

const instance = axios.create({
  baseURL: "https://api-ultra.herokuapp.com",
});

const useRefreshToken = () => {
  const { dispatch } = useGlobalContext();

  const refresh = async () => {
    const refreshToken = await store.getRefreshToken();
    const response = await instance.post(urls.auth.refreshToken, { refreshToken });

    dispatch({
      type: actions.setAccessToken,
      payload: {
        token: response.data.tokens.accessToken,
        expiry: response.data.tokens.tokenExpiry,
      },
    });
    return response.data.tokens.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
