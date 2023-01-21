import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const EffectScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`I have rendered ${count} times!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export { EffectScreen };
