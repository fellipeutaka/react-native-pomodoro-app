import Button from "components/Button";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Title, Text, CircularProgressbar } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "types/AppStackNavigationProps";

const INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

export default function Timer() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const navigation = useNavigation<AppStackNavigationProps>();

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        navigation.navigate("Congrats");
        setActive(false);
        setCount(INITIAL_TIME_IN_SECONDS);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count]);

  const minutes = useMemo(() => Math.floor(count / 60), [count]);
  const seconds = useMemo(() => count % 60, [count]);
  const progress = useMemo(
    () => (count * 100) / INITIAL_TIME_IN_SECONDS,
    [count]
  );
  const iconButton = useMemo(
    () => (
      <Ionicons
        name={active ? "pause-outline" : "play-outline"}
        size={24}
        color="white"
      />
    ),
    [active]
  );

  const toggleTimer = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Let&apos;s focus for</Title>
      <CircularProgressbar fill={progress}>
        {() => (
          <Text>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        )}
      </CircularProgressbar>
      <Button onPress={toggleTimer}>{iconButton}</Button>
    </Container>
  );
}
