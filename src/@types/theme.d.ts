import type { Theme } from "@pomodoro/@types/Theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
