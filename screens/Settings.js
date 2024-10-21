import { StyleSheet, Text, View } from "react-native";
import { settingContainer } from "../Styles";
import { useThemeContext } from "../components/context/ThemeContext";
import PressableButton from "../components/PressableButton";
export default function Settings() {
  const { toggleTheme } = useThemeContext();
  return (
    <View style={styles.container}>
      <PressableButton
        customStyle={styles.button}
        onPress={toggleTheme}
      >
        <Text style={styles.text}>Toggle Theme</Text>
      </PressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: settingContainer.container,
  button: settingContainer.button,
  text: settingContainer.text,
});
