import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamsList } from "types/AppStackParamsList";

import Welcome from "screens/Welcome";
import Timer from "screens/Timer";
import Congrats from "screens/Congrats";

const Stack = createNativeStackNavigator<AppStackParamsList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="Congrats" component={Congrats} />
    </Stack.Navigator>
  );
}
