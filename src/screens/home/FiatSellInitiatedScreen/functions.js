import axios from "../../../api/axios";
import urls from "../../../api/urls";
import actions from "../../../context/actions";
import { getFiatData } from "../../../functions";

export const fetchTrade = async (tradeId, setFetchedTrade) => {
  await axios.get(`${urls.p2p.getTrade}/${tradeId}`).then((res) => setFetchedTrade(res.data.data));
};

export const initiateReceive = async (
  session,
  id,
  setTransferred,
  pin,
  setModalVisible2,
  setModalVisible3
) => {
  await axios
    .post(urls.payment.initiateReceive, {
      tradeSessionId: session?.sessionId || id,
      pin,
    })
    .then(() => {
      setTransferred(true);
      setModalVisible2(false);
      setModalVisible3(true);
    });
};

export const receive = async (session, id, pin, otp, setModalVisible3, navigation, dispatch) => {
  await axios
    .post(urls.payment.receive, {
      tradeSessionId: session?.sessionId || id,
      pin,
      code: otp,
    })
    .then(() => {
      setModalVisible3(false);
      getFiatData(dispatch);
      navigation.navigate("SuccessScreen", {
        text: "Trade completed",
        route: "HomeScreen",
      });
    });
};

export const cancelTrade = async (session, id, navigation) => {
  await axios
    .post(urls.trades.cancel, {
      tradeSessionId: session?.sessionId || id,
      reason: "string",
    })
    .then(() => {
      navigation.navigate("HomeScreen");
    });
};

export const updateWallet = async (dispatch, navigation) => {
  await Promise.all([axios.get(urls.fiat.worth), axios.get(urls.fiat.baseUrl)]).then(
    ([res1, res2]) => {
      dispatch({ type: actions.setFiatWorth, payload: res1.data.data });
      dispatch({ type: actions.setFiatWallets, payload: res2.data.data });
    }
  );
  navigation.navigate("SuccessScreen", {
    text: "Trade completed",
    route: "HomeScreen",
  });
};
