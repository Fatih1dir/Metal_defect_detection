import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomePage from "./Components/pages/HomePage/HomePage";
import HelpPage from "./Components/pages/HelpPage/HelpPage";
import FeedBack from "./Components/pages/FeedBackPage/FeedBack";
import AboutUsPage from "./Components/pages/AboutUsPage/AboutUsPage";
import CameraPage from "./Components/pages/CameraPage/CameraPage";
import LoadImagePage from "./Components/pages/LoadImagePage/LoadImage";
import ScanPage from "./Components/pages/ScanPage/ScanPage";

import Button from "./Components/Button/Button";

const Stack = createNativeStackNavigator();


const HomeStackScreen =() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => (
            <Button
              iconName={"help-sharp"}
              size={32}
              onPress={() => navigation.navigate("HelpPage")}
            ></Button>
          ),
        })}
      />
      <Stack.Screen
        name="HelpPage"
        component={HelpPage}
        options={{ title: "Help" }}
      />
      <Stack.Screen
        
        name="CameraPage"
        component={CameraPage}
        options={{ title: "Camera" ,headerShown:false }}
      />
      <Stack.Screen
        name="LoadImagePage"
        component={LoadImagePage}
        options={{ title: "Gallery" }}
      />
      <Stack.Screen
        name="ScanPage"
        component={ScanPage}
        options={{ title: "Scan Page" }}
      />
      
    </Stack.Navigator>
  );
}
const FeedBackStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="FeedBackPage"
        component={FeedBack}
        options={{ title: "FeedBack" }}
      />
    </Stack.Navigator>
  )
}
const AboutUsStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="AboutUsPage"
        component={AboutUsPage}
        options={{ title: "About Us" }}
      />
    </Stack.Navigator>
  )
}
const Drawer = createDrawerNavigator();
const App = () => {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator
       initialRouteName="Home"
       overlayColor="rgba(0,0,0,5)"
       screenOptions={{
        headerShown:false,
        overlayColor: 'transparent',
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
          borderTopRightRadius:10,
          marginTop:80
        },
      }
    }
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Send Feedback" component={FeedBackStack} />
        <Drawer.Screen name="About Us" component={AboutUsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
