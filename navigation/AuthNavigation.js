import { createStackNavigator } from "react-navigation-stack";
import Welcome from "../screens/Welcome.js";
import Register from "../screens/authentication/Register.js";
import BvnScreen from "../screens/authentication/BvnScreen";
import UploadScreen from "../screens/authentication/UploadScreen";
import Login from "../screens/authentication/Login.js";
import ForgotPassword from "../screens/authentication/ForgotPassword.js";
const AuthNavigation = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Register: Register,
    Bvn: BvnScreen,
    Upload: UploadScreen,
    ForgotPassword: ForgotPassword
  },
  {
    headerMode: "none"
  }
);

export default AuthNavigation;
