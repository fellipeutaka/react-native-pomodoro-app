import { useState, useEffect } from "react";
import { Container, Title, Text } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "@pomodoro/@types/AppStackNavigationProps";
import { Button } from "@pomodoro/components/Button";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useTheme } from "styled-components/native";
import BackgroundTimer from "react-native-background-timer";
import * as Notifications from "expo-notifications";

const INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

type RenderCurrentTimeProps = {
  minutes: number;
  seconds: number;
};

function renderCurrentTime(props: RenderCurrentTimeProps) {
  const minutes = String(props.minutes).padStart(2, "0");
  const seconds = String(props.seconds).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function Timer() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const { colors } = useTheme();
  const { navigate } = useNavigation<AppStackNavigationProps>();

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const progress = (count * 100) / INITIAL_TIME_IN_SECONDS;

  useEffect(() => {
    if (active) {
      const interval = BackgroundTimer.setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Pomodoro Timer",
            body: "Your pomodoro session has ended!",
          },
          trigger: null,
        }).then(() => {
          navigate("Congrats");
          setActive(false);
          setCount(INITIAL_TIME_IN_SECONDS);
        });
      }

      return () => {
        BackgroundTimer.clearInterval(interval);
      };
    }
  }, [active, count]);

  return (
    <Container>
      <Title>Let's focus for</Title>
      <AnimatedCircularProgress
        size={260}
        width={10}
        rotation={0}
        tintColor={colors.primary}
        backgroundColor={colors.secondary}
        fill={progress}
      >
        {() => <Text>{renderCurrentTime({ minutes, seconds })}</Text>}
      </AnimatedCircularProgress>
      <Button onPress={() => setActive((state) => !state)}>
        <Ionicons
          name={active ? "pause-outline" : "play-outline"}
          size={24}
          color="white"
        />
      </Button>
    </Container>
  );
}
