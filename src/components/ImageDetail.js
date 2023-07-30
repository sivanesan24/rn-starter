import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ImageDetail = ({title, source}) => {
  return (
    <View>
      <Image source={source} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
