import { Button, StyleSheet, View } from "react-native";
import { settingContainer } from "../Styles";
import { useThemeContext } from "../components/context/ThemeContext";
export default function Settings() {
  const { toggleTheme } = useThemeContext();
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: settingContainer,
});
