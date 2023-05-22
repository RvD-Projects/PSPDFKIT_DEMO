import { DefaultTheme } from "@react-navigation/native";

export const Colors = {
  black: "rgb(0,0,0)",
  white: "rgb(255,255,255)",
  primary: "#00C2CE",
  secondary: "#00C2BE",
  disabled: "#DDCE",
  background: "rgb(242, 242, 242)",
  card: "rgb(255, 255, 255)",
  border: "rgb(199, 199, 204)",
  notification: "rgb(255, 69, 58)"
};

export const Theme = {
  ...DefaultTheme,
  colors: Colors,
  centered: {
    alignItems: "center",
  },
};
