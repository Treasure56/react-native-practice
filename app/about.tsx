import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function About() {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={{ flexDirection: "row-reverse" }}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={{ flexDirection: "row-reverse" }}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>

      {/* rainbow */}

      <View style={{ flexDirection: "column" }}>
        <View style={styles.red}></View>
        <View style={styles.orange}></View>
        <View style={styles.yellow}></View>
        <View style={styles.green}></View>
        <View style={styles.blue}></View>
        <View style={styles.indigo}></View>
        <View style={styles.violet}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginTop: 20,
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={styles.profile}></View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Esther💖</Text>
            <Text numberOfLines={1}>
              You are welcome Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Possimus, error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusantium.
            </Text>
          </View>
        </View>
        <View style={{ gap: 2, alignItems: "flex-end", }}>
          <Text style={{ fontWeight: "thin", color: "green" }}>07:05</Text>
          <Text style={styles.number}>1</Text>
        </View>
      </View>

      <View className="bg-red-500">
        <Text>07:05</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blackBox: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "black",
  },
  whiteBox: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "white",
  },
  red: {
    height: 25,
    backgroundColor: "red",
  },
  orange: {
    height: 25,
    backgroundColor: "orange",
  },
  yellow: {
    height: 25,
    backgroundColor: "yellow",
  },
  green: {
    height: 25,
    backgroundColor: "green",
  },
  blue: {
    height: 25,
    backgroundColor: "blue",
  },
  indigo: {
    height: 25,
    backgroundColor: "indigo",
  },
  violet: {
    height: 25,
    backgroundColor: "violet",
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  number: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "green",
    color: "black",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
