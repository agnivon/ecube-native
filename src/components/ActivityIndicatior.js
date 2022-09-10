import React from "react";
import { ActivityIndicator as AI, StyleSheet, View } from "react-native";

const ActivityIndicator = () => (
  <View style={[styles.container, styles.horizontal]}>
    <AI size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default ActivityIndicator;