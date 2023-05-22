import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Theme } from "../../styles/theme";
import Home from "../Home";
import { Icon } from "@rneui/themed";
import Pdfviewer from "../Pdfviewer.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{ title: "Home" }}
        name="HomeTabs"
        component={HomeTabs}
      />
    </Drawer.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="ant-design" name="home" size={24} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Viewer"
        component={Pdfviewer}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome" name="file-pdf-o" size={24} color="#900" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer theme={Theme}>
      <RootStack />
    </NavigationContainer>
  );
}

export default RootNavigation;
