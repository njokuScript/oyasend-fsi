import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'random1',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/intro_slider_1.svg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'random2',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/intro_slider_2.svg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'random3',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/intro_slider_3.svg'),
    backgroundColor: '#22bcb5',
  }
];
const styles = StyleSheet.create({
  slide: {},
  image: {},
  title: {},
  image: {
    width: 320,
    height: 320,
  },
});
//signup route
export class Welcome extends Component {
  goToLogin = () => this.props.navigation.navigate("Login");
  goToSignUp = () => this.props.navigation.navigate("Register");
  _renderItem = (item) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  render() {

    return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this.goToLogin} />;
  }
}



export default Welcome;
