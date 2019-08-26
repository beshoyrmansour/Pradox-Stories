import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import appColors from "../colors";
import { withNavigation } from "react-navigation";

export class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      newsData: this.props.news
    };
    this.onPressNewsCard = this.onPressNewsCard.bind(this);
  }
  onPressNewsCard(item) {
    console.log("onPress News  Card", item);
    // this.props.navigation.navigate("newsDetailsRT", { title: item.title, img: item.img });
    this.props.navigation.navigate("newsDetailsRT", { item });

    // alert("SSSS")
  }
  render() {
    {
    //   console.log('this.state.newsData.media[0]["media-metadata"].url', this.state.newsData.media[0]["media-metadata"][0].url);
    }
    return (
      <TouchableOpacity style={styles.newsCard} onPress={() => this.onPressNewsCard(this.state.newsData)}>
        <View style={styles.newsCardContnet}>
          {/* <Image style={{ width: 66, height: 58 }} source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnV" }} /> */}
          <Image
            style={{ width: "100%", height: 200, resizeMode: "cover", padding: 0, margin: 0 }}
            // source={{ uri: this.state.newsData.media[0]["media-metadata"][2].url }}
            source={{ uri: this.state.newsData.urlToImage }}
          />
          {/* <Text> {section}</Text> */}
          <View style={styles.newsCardText}>
            <Text style={styles.newsCardTitle}> {this.state.newsData.title}</Text>
            <Text style={styles.newsCardAbstract}> {this.state.newsData.abstract}</Text>

            {/* <Text style={styles.newsCardDate}> {this.state.newsData.published_date}</Text> */}
            <Text style={styles.newsCardDate}> {this.state.newsData.publishedAt}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  newsCard: {
    borderWidth: 1,
    minHeight: 90,
    borderColor: "#eee",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // padding: 20,
    marginTop: 20
  },
  newsCardContnet: {
    width: "100%",
    backgroundColor: "#fff"
  },
  newsCardImg: { width: "100%", height: 150, resizeMode: "cover", padding: 0, margin: 0 },
  newsCardText: {
    width: "100%",
    padding: 12
  },
  newsCardTitle: {
    marginBottom: 8,
    fontSize: 20,
    color: appColors.primaryOrange
  },
  newsCardAbstract: {
    marginBottom: 8,
    fontSize: 16,
    color: appColors.secondaryNavy
  },
  newsCardDate: {
    color: appColors.secondaryGreen
  }
});

export default withNavigation(NewsCard);
