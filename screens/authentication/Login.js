import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}> Oya Send </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: 28,
    fontStyle: "bold",
    textAlign: "center",
    marginTop: "0",
    width: "200"
  }
});
export default Login;
