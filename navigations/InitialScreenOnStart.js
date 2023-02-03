import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="UserComplaints"
        component={UserComplaints}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};
