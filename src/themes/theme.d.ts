import "styled-components";
import { Theme } from "types/Theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
