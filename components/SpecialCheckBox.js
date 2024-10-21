import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { checkboxStyle } from "../Styles";
import { useThemeContext } from "./context/ThemeContext";
export default function SpecialCheckBox({ visible, isChecked, setChecked }) {
  const { theme } = useThemeContext();

  return (
    visible && (
      <View style={styles.defaultStyle}>
        <Text style={[styles.textStyle, { color: theme.textColor }]}>
          This item is marked as special. Select the checkbox if you would like
          to approve it.
        </Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  defaultStyle: checkboxStyle.checkboxStyle,
  textStyle: checkboxStyle.text,
});
