import React from "react";
import { TextInput } from "react-native";
import EStyleSheet from "../../styles/global";

export const CustomInput = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#A8A8A8"
    />
  );
};
export const CustomInputWithButton = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={[styles.input, styles.inputWithBtn]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#A8A8A8"
    />
  );
};

const styles = EStyleSheet.create({
  input: {
    backgroundColor: "$Blue02",
    padding: 15,
    borderRadius: 10,
    margintVertical: 2,
  },
  inputWithBtn: {
    width: "75%",
    marginRight: 10,
  },
});
