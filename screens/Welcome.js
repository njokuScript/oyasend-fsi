import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

//signup route
export class Welcome extends Component {
  goToLogin = () => this.props.navigation.navigate("Login");
  goToSignUp = () => this.props.navigation.navigate("Register");
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.goToLogin}>
          <Text>Login screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToSignUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
