import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ActivityIndicator, Button } from "react-native";
import { withNavigation } from "react-navigation";
import appColors from "../colors";
import NewsCard from "../components/NewsCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as newsActions from "../redux/actions/newsActions";
import { bindActionCreators } from "redux";

export class NewsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    articles: PropTypes.array
  };
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.getAllNewsList();
  }

  render() {
    return (
      <View>
        {!this.props.isLoading ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={appColors.primaryNavy} />
          </View>
        ) : (
          <View>
            {/* <SearchBox/> */}
            <FlatList
              renderItem={({ item }) => <NewsCard news={item} key={item.url} />}
              onEndReached={() => {
                console.log("isFetchingStories ==>", this.props.isFetchingStories);

                if (!this.props.isFetchingStories) this.props.getMoreStores(this.props.currentStoriesPageNumber + 1, this.props.articles);
              }}
              onEndReachedThreshold={2}
              scrollToEnd={() => {
                console.log("isFetchingStories ==>", this.props.isFetchingStories);
                if (!this.props.isFetchingStories) this.props.getMoreStores(this.props.currentStoriesPageNumber + 1, this.props.articles);
              }}
              data={this.props.articles}
              ListFooterComponent={
                <View style={{ margin: 20, padding: 20 }}>
                  {this.props.isFetchingStories ? (
                    <ActivityIndicator size="large" color={appColors.primaryNavy} />
                  ) : (
                    <Button
                      onPress={() => this.props.getMoreStores(this.props.currentStoriesPageNumber + 1, this.props.articles)}
                      title="Load more"
                      color={appColors.tertiaryBlue}
                    />
                  )}
                </View>
              }
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: 200
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
    paddingTop: 50
  }
});

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  articles: state.articles,
  currentStoriesPageNumber: state.currentStoriesPageNumber,
  isFetchingStories: state.isFetchingStories
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...newsActions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(NewsList));
