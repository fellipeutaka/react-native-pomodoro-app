import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #181a20;
`;

export const Banner = styled(LottieView)`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 20%;
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  max-width: 240px;
  color: #ffffff;
  align-self: flex-start;
  margin-left: 14%;
`;
