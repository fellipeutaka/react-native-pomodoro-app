import { Container, Banner, Text } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "@pomodoro/@types/AppStackNavigationProps";
import { Button } from "@pomodoro/components/Button";
import congrats from "@pomodoro/assets/lottie/congrats.json";

export function Congrats() {
  const { navigate } = useNavigation<AppStackNavigationProps>();

  return (
    <Container>
      <Text>Great!</Text>
      <Text>It's time to rest now!</Text>
      <Banner loop autoPlay autoSize duration={3000} source={congrats} />
      <Button onPress={() => navigate("Timer")}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Button>
    </Container>
  );
}
