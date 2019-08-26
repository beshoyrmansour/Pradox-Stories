import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./app/views/Home";
import store from "./app/redux/store";
import newsDetails from "./app/views/newsDetails";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";

const AppNavigator = createStackNavigator(
  {
    HomeRT: { screen: Home },
    newsDetailsRT: { screen: newsDetails }
  },
  {
    initialRouteName: "HomeRT"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <AppContainer />
          {/* <Home/> */}
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
