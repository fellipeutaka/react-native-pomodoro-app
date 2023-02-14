import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

export function Button(props: TouchableOpacityProps) {
  return <Container {...props} />;
}
