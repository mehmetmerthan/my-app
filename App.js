import React, { useEffect } from "react";
import Router from "./src/Routers/Router";
import awsExports from "./src/aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
Amplify.configure(awsExports);

export default function App() {
  useEffect(() => {
    Amplify.configure(awsExports);
  }, []);

  return (
    <Authenticator.Provider>
      <Authenticator>
        <Router />
      </Authenticator>
    </Authenticator.Provider>
  );
}
