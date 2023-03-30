import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../screens/Home";
import OnboardingScreen from "../screens/OnboardingScreen";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import Signup from "../screens/Signup";


const Stack = createNativeStackNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
         <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
