import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./navigation/AuthNavigation.js";
import StackNavigation from "./navigation/StackNavigation.js";
export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: StackNavigation
    },
    {
      initialRouteName: "Auth"
    }
  )
);
