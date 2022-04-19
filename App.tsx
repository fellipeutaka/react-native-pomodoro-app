import { NavigationContainer } from "@react-navigation/native";
import AppStack from "routes/AppStack";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
