import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Timer from "screens/Timer";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
}
