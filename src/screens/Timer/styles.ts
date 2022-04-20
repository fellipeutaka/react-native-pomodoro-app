import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const CircularProgressbar = styled(AnimatedCircularProgress).attrs(
  ({ theme }) => ({
    tintColor: theme.colors.primary,
    backgroundColor: theme.colors.secondary,
    rotation: 0,
    size: 260,
    width: 10,
  })
)``;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.colors.text};
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: ${(props) => props.theme.colors.text};
`;
