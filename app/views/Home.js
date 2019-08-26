import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import NewsList from "./NewsList";
import appColors from "../colors";
// import Headers from "../sections/Header";
// import { StackNavigator } from "react-navigation";

export default class Home extends Component {
  static navigationOptions = {
    title: "Pradox Stories",
    headerStyle: {
      backgroundColor: appColors.primaryNavy,
      minHeight: 110
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      maxWidth: "80%"
    }
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Headers /> */}

        <NewsList navigate={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15,
    // backgroundColor:"#eee",
    height: "100%"
  },
  homeWrapper: {
    flex: 1
  }
});
