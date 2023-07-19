import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./screens/InputScreen";
import ResultScreen from "./screens/ResultScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Major: require("./assets/fonts/MajorMonoDisplay-Regular.ttf"),
    Arvo: require("./assets/fonts/Arvo-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
            fontFamily: "Major",
          },
        }}
      >
        <Stack.Screen
          name="Pocket Dictionary"
          component={InputScreen}
          options={{
            headerTitleStyle: {
              color: "#999999",
              fontFamily: "Major",
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            presentation: "modal",
            headerTitle: "Answer",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
