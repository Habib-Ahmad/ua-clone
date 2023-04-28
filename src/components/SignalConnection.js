/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";

const SignalConnection = () => {
  const { state, dispatch } = useGlobalContext();

  const id = state.user.id;

  const [connection, setConnection] = useState(undefined);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://api-ultra.herokuapp.com/pubsub")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, [id]);

  useEffect(() => {
    if (connection) {
      if (id)
        connection
          .start()
          .then(() => {
            console.log("Connected!");

            connection.stream("UltraStream", parseInt(id)).subscribe({
              next: (item) => {
                item.data = JSON.parse(item.data);
                dispatch({ type: actions.setRealTimeData, payload: item });
                console.log("New Item!!!!!:", item);
              },
              complete: () => {
                console.log("completed");
              },
              error: (err) => {
                console.log(`error ${err}`);
              },
            });
          })
          .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection, dispatch, id]);
};

export default SignalConnection;
