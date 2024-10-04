import { Button, StyleSheet, View } from "react-native";
import { settingContainer } from "../Styles";
export default function Settings({ toggleTheme }) {
  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={handleToggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: settingContainer,
});
