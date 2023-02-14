import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

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
