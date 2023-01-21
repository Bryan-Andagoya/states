/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const CalculatorScreen = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("");

  const [items, setItems] = useState([
    { label: "Add", value: "add" },
    { label: "Subtract", value: "subtract" },
    { label: "Multiply", value: "multiply" },
    { label: "Divide", value: "divide" },
  ]);

  const calculate = () => {
    if (num1 && num2 && operation) {
      const number1 = parseInt(num1, 10);
      const number2 = parseInt(num2, 10);

      switch (operation) {
        case "add":
          setResult(number1 + number2);
          break;
        case "subtract":
          setResult(number1 - number2);
          break;
        case "multiply":
          setResult(number1 * number2);
          break;
        case "divide":
          const r = number1 / number2;

          if (isNaN(r) || !isFinite(r))
            return Alert.alert("Error", "Division error");

          setResult(r);
          break;
      }
    } else {
      Alert.alert("Required", "Fill all fields");
    }
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setOperation(null);
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 16, paddingBottom: 24 }}>
        <Text style={styles.titleText}>Calculator</Text>
      </View>
      <View style={{ padding: 8, alignItems: "center" }}>
        <TextInput
          value={num1}
          onChangeText={(num) => setNum1(num)}
          style={styles.input}
          placeholder="Enter the first number"
          keyboardType="numeric"
          placeholderTextColor="lightgrey"
        />
      </View>
      <View style={{ padding: 8, alignItems: "center" }}>
        <TextInput
          value={num2}
          onChangeText={(num) => setNum2(num)}
          style={styles.input}
          placeholder="Enter the second number"
          placeholderTextColor="lightgrey"
          keyboardType="numeric"
        />
      </View>
      <View style={{ padding: 16, alignItems: "center" }}>
        <DropDownPicker
          open={open}
          value={operation}
          items={items}
          setOpen={setOpen}
          setValue={setOperation}
          setItems={setItems}
          style={{
            width: "78%",
            alignSelf: "center",
            borderColor: "deepskyblue",
          }}
          placeholderStyle={{ color: "lightgrey" }}
        />
      </View>
      <View style={{ padding: 16, alignItems: "center" }}>
        <TouchableOpacity onPress={calculate} style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16, alignItems: "center", paddingTop: 0 }}>
        <TouchableOpacity onPress={reset} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      {result != null && (
        <View style={{ padding: 16 }}>
          <Text style={styles.titleText}>{result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  input: {
    borderColor: "deepskyblue",
    borderWidth: 1,
    width: "75%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "deepskyblue",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    justifyContent: "center",
    width: "75%",
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
