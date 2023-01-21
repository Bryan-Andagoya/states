import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ padding: 16, paddingBottom: 24 }}>
        <Text style={styles.titleText}>Tasp counter</Text>
      </View>
      <View style={{ paddingBottom: 16 }}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => count > 0 && setCount((prev) => prev - 5)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-5</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity
          onPress={() => count > 0 && setCount((prev) => prev - 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity
          onPress={() => setCount((prev) => prev + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <View style={{ width: 16 }} />
        <TouchableOpacity
          onPress={() => setCount((prev) => prev + 5)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "deepskyblue",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { CounterScreen };
