import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Linking } from "react-native";
import appColors from "../colors";

export class newsDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("item", "A Nested Details Screen").title,
      headerStyle: {
        backgroundColor: appColors.primaryBlue
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        maxWidth: "80%"
      }
    };
  };
  render() {
    const { navigation } = this.props;

    const item = navigation.getParam("item", {});
    console.log("item -=-=-=->", item);

    return (
      <ScrollView>
        {/* <Image style={styles.img} source={{ uri: item.media[0]["media-metadata"][2].url }} /> */}
        <Image style={styles.img} source={{ uri: item.urlToImage }} />
        <View style={styles.container}>
          <Text style={styles.titleContent}> {item.title} </Text>
          {/* <Text style={styles.publichedDateContent}> {item.published_date} </Text> */}
          <Text style={styles.publichedDateContent}> {item.publishedAt} </Text>
          <Text style={styles.abstractContent}>{item.abstract}</Text>
          <Text style={styles.abstractContent}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
            a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like)
          </Text>
          <Text style={{ color: appColors.primaryOrange, marginTop: 30, marginBottom: 50 }} onPress={() => Linking.openURL(item.url)}>
            Read the article on publisher website 
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15
  },
  img: {
    width: "100%",
    height: 293,
    resizeMode: "cover",
    padding: 0,
    margin: 0
  },
  titleContent: {
    color: appColors.tertiaryBlue,
    fontSize: 28,
    marginTop: 30,
    marginBottom: 10
  },
  publichedDateContent: {
    color: appColors.secondaryBlue,
    fontSize: 22,
    // marginTop: 30,
    marginBottom: 40
  },
  abstractContent: {
    color: appColors.primaryNavy,
    fontSize: 24,
    marginBottom: 10
  }
});

export default newsDetails;

/**
 * 
{
  "abstract": "They thought college was too soon for lifelong love, so they scheduled their next date for a little later — 60 months.",
  "adx_keywords": "Love (Emotion);Dating and Relationships;Libraries and Librarians;New York Public Library",
  "asset_id": 100000006667155,
  "byline": "By KAREN B. KAPLAN",
  "column": "Modern Love",
  "count_type": "SHARED-FACEBOOK",
  "des_facet": Array [
    "LOVE (EMOTION)",
    "DATING AND RELATIONSHIPS",
  ],
  "eta_id": 0,
  "geo_facet": "",
  "id": 100000006667155,
  "media": Array [
    Object {
      "approved_for_syndication": 1,
      "caption": "",
      "copyright": "Brian Rea",
      "media-metadata": Array [
        Object {
          "format": "Standard Thumbnail",
          "height": 75,
          "url": "https://static01.nyt.com/images/2019/08/25/fashion/25MODERNLOVE/25MODERNLOVE-thumbStandard.jpg",
          "width": 75,
        },
        Object {
          "format": "mediumThreeByTwo210",
          "height": 140,
          "url": "https://static01.nyt.com/images/2019/08/25/fashion/25MODERNLOVE/25MODERNLOVE-mediumThreeByTwo210.jpg",
          "width": 210,
        },
        Object {
          "format": "mediumThreeByTwo440",
          "height": 293,
          "url": "https://static01.nyt.com/images/2019/08/25/fashion/25MODERNLOVE/25MODERNLOVE-mediumThreeByTwo440.jpg",
          "width": 440,
        },
      ],
      "subtype": "photo",
      "type": "image",
    },
  ],
  "nytdsection": "style",
  "org_facet": Array [
    "LIBRARIES AND LIBRARIANS",
    "NEW YORK PUBLIC LIBRARY",
  ],
  "per_facet": "",
  "published_date": "2019-08-23",
  "section": "Style",
  "share_count": 2,
  "source": "The New York Times",
  "subsection": "",
  "title": "Let’s Meet Again in Five Years",
  "type": "Article",
  "updated": "2019-08-23 20:41:06",
  "uri": "nyt://article/2163aefb-a652-5483-b39b-2d4d178e2d5d",
  "url": "https://www.nytimes.com/2019/08/23/style/modern-love-lets-meet-again-in-five-years.html",
}
 */
