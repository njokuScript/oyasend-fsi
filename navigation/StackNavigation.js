import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Send from "../screens/Send";
import AtmCard from "../screens/AtmCard";
import Profile from "../screens/Profile";
import BottomNavigation from "./BottomNavigation";
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="Send" component={Send} />
          <Stack.Screen name="Cards" component={AtmCard} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
