import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

export default function Button(props: TouchableOpacityProps) {
  return <Container {...props}>{props.children}</Container>;
}
