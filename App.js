import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CenterTextWithBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Zulfiana Jumadilla Lubis</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});

export default CenterTextWithBoxes;
