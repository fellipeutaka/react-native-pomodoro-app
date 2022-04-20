import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Banner = styled(LottieView)`
  width: 85%;
  margin-bottom: 10%;
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  max-width: 240px;
  color: ${(props) => props.theme.colors.text};
  align-self: flex-start;
  margin-left: 14%;
`;
