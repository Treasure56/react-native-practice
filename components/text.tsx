import { View, Text, StyleSheet, TextProps } from "react-native";
import React from "react";

export function H1(props: TextProps) {
  return <Text {...props} style={[styles.h1, props.style]} />;
}

export function H2(props: TextProps) {
  return <Text {...props} style={[styles.h2, props.style]} />;
}

export function H3(props: TextProps) {
  return <Text {...props} style={[styles.h3, props.style]}  />;
}

export function H4(props: TextProps) {
  return <Text {...props} style={[styles.h4, props.style]} />;
}



const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "800",
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
  },
  h3: {
    fontSize: 18,
    fontWeight: "400",
  },
  h4: {
    fontSize: 16,
    fontWeight: "300",
  },
});
