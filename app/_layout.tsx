import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "My App",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
        }}
      />
      <Stack.Screen
        name="text"
        options={{
          headerTitle: "text",
        }}
      />
    </Stack>
  );
}
