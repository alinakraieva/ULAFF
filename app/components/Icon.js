import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Icon({
  name,
  size = 30,
  iconColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={name} color={iconColor} size={size} />
    </View>
  );
}

export default Icon;