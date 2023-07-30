import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const imageData = [
    {
      title: "Forest",
      source: require("../../assets/forest.jpg"),
    },
    {
      title: "Beach",
      source: require("../../assets/beach.jpg"),
    },
    {
      title: "Mountain",
      source: require("../../assets/mountain.jpg"),
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item}
        data={imageData}
        renderItem={({ item }) => {
          return <ImageDetail title={item.title} source={item.source} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
