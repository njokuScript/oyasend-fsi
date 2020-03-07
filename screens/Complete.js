import React, { Component } from "react";
import { Text, View } from "react-native";

export class Complete extends Component {
  render() {
    return (
      <View>
        <Text> Payment Succesful </Text>
      </View>
    );
  }
}
const style = styles.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Complete;
