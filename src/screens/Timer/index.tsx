import Button from "components/Button";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Container, Title, Text } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

export default function Timer() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        setActive(false);
        clearInterval(interval);
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
      <AnimatedCircularProgress
        size={260}
        width={10}
        fill={progress}
        rotation={0}
        tintColor="#f54477"
        backgroundColor="#2c303f"
      >
        {() => (
          <Text>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        )}
      </AnimatedCircularProgress>
      <Button onPress={toggleTimer}>{iconButton}</Button>
    </Container>
  );
}
