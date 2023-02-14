import { Container, Banner, Text } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "@pomodoro/@types/AppStackNavigationProps";
import { Button } from "@pomodoro/components/Button";
import banner from "@pomodoro/assets/lottie/banner.json";

export function Welcome() {
  const navigation = useNavigation<AppStackNavigationProps>();

  return (
    <Container>
      <Text>Focused, motivated.</Text>
      <Banner loop autoPlay autoSize source={banner} />
      <Button onPress={() => navigation.navigate("Timer")}>
        <Entypo name="chevron-right" size={24} color="white" />
      </Button>
    </Container>
  );
}
