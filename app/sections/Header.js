import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerWrapper}>
        <Image style={{ flex: 1, width: undefined, height: "100%" , resizeMode:"center"}} source={require("../sections/img/newsLogo.png")} />
        <Text style={{ flex: 3, color: "#000", fontSize: 24 }}>Header Component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    // flex: 1,
    display:"flex",
    // position:"fixed",
    flexDirection: "row",
    paddingTop: 80,
    paddingBottom: 10,
    // height:150,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  }
});
