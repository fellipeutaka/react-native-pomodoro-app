import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import AppStack from "routes/AppStack";
import theme from "themes/dark";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
