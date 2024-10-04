import { Button, StyleSheet, View } from "react-native";
import { settingContainer } from "../Styles";
export default function Settings({ changeBgcolor }) {
  const handleToggleTheme = () => {
    changeBgcolor('red');
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
