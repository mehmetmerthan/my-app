import React, { useEffect } from "react";
import Router from "./src/Routers/Router";
import awsExports from "./src/aws-exports";
import { Amplify, Hub } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";

Amplify.configure(awsExports);
//const url = awsExports.aws_appsync_graphqlEndpoint;
//console.log(url);
const listener = (data) => {
  switch (data?.payload?.event) {
    case "confirmSignUp":
      console.log("success");
      break;
  }
};

export default function App() {
  useEffect(() => {
    Amplify.configure(awsExports);
    Hub.listen("auth", listener);
  }, []);
  
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Router />
      </Authenticator>
    </Authenticator.Provider>
  );
}
