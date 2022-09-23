import React, { CSSProperties } from "react";
import { StyleSheet, TouchableOpacity, Text, ViewStyle } from "react-native";

import { AppColor, FontSize } from "../utils/StyleConstants";

type CustomButtonProps = {
  title: string;
  style: ViewStyle;
  color: string;
  btnDisabled?: boolean;
  onPress: () => void;
};
const CustomButton = (props: CustomButtonProps) => {
  let color = !props.btnDisabled ? props.color : "#ccc";
  let textColor = !props.btnDisabled ? AppColor.white : AppColor.gray;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        { ...styles.customButton, ...props.style },
        { backgroundColor: color },
      ]}
      disabled={props.btnDisabled}
      onPress={props.onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: FontSize.Large,
  },
});
