import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { React } from "react";
import { Amplify } from "aws-amplify";
import ConfigurationUser from "./ConfigUser";

export default function Authentication() {
  Amplify.configure(awsExports);
  return (
    <Authenticator.Provider>
      <Authenticator>
        < ConfigurationUser/>
      </Authenticator>
    </Authenticator.Provider>
  );
}
