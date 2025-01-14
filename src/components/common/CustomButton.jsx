import React from "react";
import { TouchableOpacity, Text } from "react-native";
import EStyleSheet from "../../styles/global";

export const WideButton = ({ text, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.wideButton,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : EStyleSheet.value("$Blue01"),
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: textColor ? textColor : EStyleSheet.value("$White01") },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const NarrowButton = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.narrowButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// halfButton
export const HalfButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.halfButton]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

//smallButton
export const SmallButton = ({text, onPress, right})=>{
  return(
      <TouchableOpacity style={[styles.button, styles.smallButton, {right : right}]}  onPress={onPress}>
          <Text style={styles.smallButtonText}>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    backgroundColor: "$Blue01",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  text: {
    color: "$White01",
    fontSize: "15px",
    fontFamily: "Pretendard",
  },

  wideButton: {
    width: "100%",
    height: 50,
  },
  narrowButton: {
    width: "20%",
    height: 45,
  },
  halfButton: {
    width: "50%",
    height: 50,
    marginHorizontal: 5,
  },
  smallButton : {
    backgroundColor : "$Blue02",
    borderRadius : 10,
    padding : 10,
    position : "absolute",
  },
  smallButtonText : {
    color : "$Blue01",
      fontSize : "16px",
      fontWeight : "bold",
  }
});
