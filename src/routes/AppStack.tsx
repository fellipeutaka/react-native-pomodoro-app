import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { AppStackParamsList } from "@pomodoro/@types/AppStackParamsList";
import { Congrats } from "@pomodoro/screens/Congrats";
import { Welcome } from "@pomodoro/screens/Welcome";
import { Timer } from "@pomodoro/screens/Timer";

const Stack = createNativeStackNavigator<AppStackParamsList>();

export function AppStack() {
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
