import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const dynamicButtons = [
    {
      title: "Go to Component Screen",
      navigator: () => navigation.navigate("Components"),
    },
    {
      title: "Go to List Screen",
      navigator: () => navigation.navigate("List"),
    },
    {
      title: "Go to Image Screen",
      navigator: () => navigation.navigate("Image"),
    },
    {
      title: "Go to Counter Screen",
      navigator: () => navigation.navigate("Counter"),
    },
    {
      title: "Go to Color Screen",
      navigator: () => navigation.navigate("Color"),
    },
    {
      title: "Go to Square Screen",
      navigator: () => navigation.navigate("Square"),
    },
    {
      title: "Go to Text Screen",
      navigator: () => navigation.navigate("Text"),
    },
    { title: "Go to Box Screen", navigator: () => navigation.navigate("Box") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are in Home Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        data={dynamicButtons}
        renderItem={({ item }) => {
          return (
            <View style={styles.buttonContainer}>
              <Button title={item.title} onPress={item.navigator} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    margin: 25,
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
