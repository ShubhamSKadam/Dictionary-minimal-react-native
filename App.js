import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./screens/InputScreen";
import ResultScreen from "./screens/ResultScreen";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [loaded] = useFonts({
    Major: require("./assets/fonts/MajorMonoDisplay-Regular.ttf"),
    Arvo: require("./assets/fonts/Arvo-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const InputLogo = () => {
    return (
      <MaterialCommunityIcons
        name="book"
        size={24}
        color="#999999"
        style={{ marginRight: 18 }}
      />
    );
  };

  const BackLogo = () => {
    return <AntDesign name="back" size={22} color="#999999" />;
  };

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
            headerRight: () => <InputLogo />,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            presentation: "modal",
            headerTitle: "Answer",
            headerBackImage: () => <BackLogo />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
