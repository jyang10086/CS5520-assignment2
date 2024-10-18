import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Settings";
import AddActivity from "./screens/AddActivity";
import { ItemsListProvider } from "./components/context/ItemListContext";
import {
  ThemeProvider,
  useThemeContext,
} from "./components/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddDiet from "./screens/AddDiet";
import { navHeaderBgColor, naviHeaderFontColor } from "./Styles";
import Items from "./screens/Items";
import AddButton from "./components/AddButton";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
  const routeMappings = {
    Activities: "Add An Activity",
    Diets: "Add A Diet",
  };
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        // Adding a custom AddButton in the header for Activities and Diets, not for Settings
        headerRight: () => {
          return route.name !== "Settings" ? (
            <AddButton
              icon={route.name === "Activities" ? "bicycle" : "fast-food"}
              onAdd={() => {
                navigation.navigate(routeMappings[route.name], { mode: "add" }); // Navigate to the corresponding screen
              }}
            />
          ) : null;
        },
        // Setting the tab bar icons for each route with dynamic colors based on focus state
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
        // Customizing header and tab bar styles
        headerStyle: { backgroundColor: navHeaderBgColor },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: navHeaderBgColor },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {/* Defining tab screens for Activities, Diets, and Settings */}
      <Tab.Screen name="Activities" component={Items} />
      <Tab.Screen name="Diets" component={Items} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

// MainScreen component wrapping Home in a Stack Navigator to handle additional screens
const MainScreen = () => {
  const { theme } = useThemeContext();
  const screenOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: navHeaderBgColor, // Custom header background color
    },
    headerTintColor: naviHeaderFontColor, // Custom header text color
  };
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme.backgroundColor,
        },
      }}
    >
      <Stack.Navigator>
        {/* Home screen without header */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* Screen for adding an activity with custom header styles */}
        <Stack.Screen
          name="Add An Activity"
          component={AddActivity}
          options={screenOptions}
        />
        {/* Screen for adding a diet with custom header styles */}
        <Stack.Screen
          name="Add A Diet"
          component={AddDiet}
          options={screenOptions}
        />
        {/* Screen for editing an activity with custom header styles */}
        <Stack.Screen
          name="Edit An Activity"
          component={AddActivity}
          options={screenOptions}
        />
        {/* Screen for editing a diet with custom header styles */}
        <Stack.Screen
          name="Edit A Diet"
          component={AddDiet}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// App component as the main entry point
export default function App() {
  return (
    <ThemeProvider>
      <ItemsListProvider>
        <MainScreen />
      </ItemsListProvider>
    </ThemeProvider>
  );
}
