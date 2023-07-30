import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const myName = "Shiva";
  return (
    <View>
      <Text style={styles.text1}>Greeting started with React Native!</Text>
      <Text style={styles.text2}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
