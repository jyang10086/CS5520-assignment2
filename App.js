import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from "./screens/Activities";
import Diets from "./screens/Diets";
import Settings from "./screens/Settings";
import AddButton from "./components/AddButton";
import AddActivity from "./screens/AddActivity";
import { ItemsListProvider } from "./components/context/ItemListContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddDiet from "./screens/AddDiet";
import {
  navHeaderBgColor,
  naviHeaderFontColor,
  primaryBgColor,
} from "./Styles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = ({ setBgColor }) => {
  const changeBgColor = (color) => {
    setBgColor(color);
  };
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerRight: () => {
          return route.name !== "Settings" ? (
            <AddButton
              onAdd={() => {
                const routeMappings = {
                  Activities: "Add An Activity",
                  Diets: "Add A Diet",
                };

                navigation.navigate(routeMappings[route.name]);
              }}
            />
          ) : null;
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Diets: focused ? "fast-food" : "fast-food-outline",
            Activities: focused ? "bicycle" : "bicycle-outline",
            Settings: focused ? "settings" : "settings-outline",
          };
          const iconColor = focused ? "orange" : color;
          return (
            <Ionicons name={icons[route.name]} size={size} color={iconColor} />
          );
        },
        headerStyle: { backgroundColor: navHeaderBgColor },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: navHeaderBgColor },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Diets" component={Diets} />
      <Tab.Screen
        name="Settings"
        children={() => <Settings changeBgcolor={changeBgColor} />}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [bgColor, setBgColor] = useState(primaryBgColor);

  return (
    <ItemsListProvider>
      <NavigationContainer
        theme={{
          colors: {
            background: bgColor,
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} setBgColor={setBgColor} />}
          </Stack.Screen>
          <Stack.Screen
            name="Add An Activity"
            component={AddActivity}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: navHeaderBgColor,
              },
              headerTintColor: naviHeaderFontColor,
            }}
          />
          <Stack.Screen
            name="Add A Diet"
            component={AddDiet}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: navHeaderBgColor,
              },
              headerTintColor: naviHeaderFontColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemsListProvider>
  );
}
