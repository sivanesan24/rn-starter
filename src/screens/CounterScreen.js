import { View, Text, Button } from "react-native";
import React, { useReducer, useState } from "react";

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, counter: state.counter + action.payload };
      case "decrease":
        return { ...state, counter: state.counter - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: 1 })}
      />
      <View>
        <Text>Count is: {state.counter}</Text>
      </View>
    </View>
  );
};

export default CounterScreen;
