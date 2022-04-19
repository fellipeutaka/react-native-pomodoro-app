import { StatusBar } from "expo-status-bar";
import { Container, Banner, Text } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "types/AppStackNavigationProps";
import Button from "components/Button";

export default function Welcome() {
  const navigation = useNavigation<AppStackNavigationProps>();

  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Focused, motivated.</Text>
      <Banner loop autoPlay autoSize source={require("assets/banner.json")} />
      <Button onPress={() => navigation.navigate("Timer")}>
        <Entypo name="chevron-right" size={24} color="white" />
      </Button>
    </Container>
  );
}
