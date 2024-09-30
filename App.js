import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from "./screens/Activities";
import Diets from "./screens/Diets";
import Settings from "./screens/Settings";
import AddButton from "./components/AddButton";
import AddActivity from "./screens/AddActivity";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Home = ({ navigation }) => {
  const handleAdd = () => {
    navigation.navigate("Add An Activity");
  };
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => <AddButton onAdd={handleAdd} />,
      })}
    >
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Diets" component={Diets} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add An Activity"
          component={AddActivity}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
