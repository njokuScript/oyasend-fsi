import React, { Component } from "react";

import { StyleSheet, View, Text, Platform, Image } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from "@expo/vector-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_App: false
    };
  }

  onDone = () => {
    this.setState({ show_App: true });
  };

  onSkip = () => {
    this.setState({ show_App: true });
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  onDone = () => this.props.navigation.navigate("Login");
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={this.onDone}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 20,
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  text: {
    color: "#888",
    fontSize: 18,
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: 320,
    resizeMode: "contain"
  }
});

const slides = [
  {
    key: "s1",
    title: "Online Payment",
    text: "Making payments online has never been easier",
    image: require("../assets/intro_slider_1.png")
  },
  {
    key: "s2",
    title: " Facial Recognition",
    text: "Make payment in the most secured way using face recognition",
    image: require("../assets/intro_slider_2.png")
  }
];
