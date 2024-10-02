import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from "./screens/Activities";
import Diets from "./screens/Diets";
import Settings from "./screens/Settings";
import AddButton from "./components/AddButton";
import AddActivity from "./screens/AddActivity";
import { ItemsListProvider } from "./components/context/ItemListContext";
import AddDiet from "./screens/AddDiet";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <AddButton
            onAdd={() => {
              if (route.name === "Activities") {
                navigation.navigate("Add An Activity");
              } else if (route.name === "Diets") {
                navigation.navigate("Add A Diet");
              }
            }}
          />
        ),
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
    <ItemsListProvider>
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
          <Stack.Screen
            name="Add A Diet"
            component={AddDiet}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemsListProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
