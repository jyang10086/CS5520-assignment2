import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { pressableButtonStyles, androidRippleColor } from "../Styles";

// The PressableButton component is a simple component that displays a
// pressable button.
export default function PressableButton({
  customStyle,
  onPress,
  isDisabled,
  children,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        isDisabled && styles.disabled,
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: androidRippleColor }}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: pressableButtonStyles.defaultStyle,
  pressed: pressableButtonStyles.pressed,
  disabled: pressableButtonStyles.disabled,
});
