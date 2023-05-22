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
  marginedView: {
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  appPressable: {
    elevation: 6,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: Colors.black,
    backgroundColor: Colors.secondary,
  },
  appButtonContainer: {
    elevation: 6,
    marginBottom: 10,
    backgroundColor: Colors.primary,
  },
  appButton: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  appButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding: 10,
  },
  viewContainer: {
    marginVertical: 12,
    flex: 1,
  },
  title: {
    padding: 4,
    margin: 4,
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
  },
};
