import React from "react";
import { StyleSheet, View } from "react-native";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export default function MapWeb() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: 37.78825,
    lng: -122.4324,
  };

  return (
    <View style={styles.container}>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
