import React from "react";
import { Platform, View, Text } from "react-native";

// Conditionally load NativeMap if not web
let MapComponent;

if (Platform.OS !== "web") {
  // Only requires NativeMap on iOS/Android
  MapComponent = require("./NativeMap").default;
} else {
  // Fallback for web
  MapComponent = () => (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text>Maps are not supported on the web</Text>
    </View>
  );
}

const Map = () => {
  return <MapComponent />;
};

export default Map;
