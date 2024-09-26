import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import QuestIcon from './components/QuestIcon';
import HomeIcon from './components/HomeIcon';
import ProfileIcon from './components/ProfileIcon';
import StoreIcon from './components/StoreIcon';
import ChallengeScreen from './screens/ChallengeScreen';
import ProfileScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';
import VerificationScreen from './screens/VerificationScreen';
import AgreementScreen from './screens/AgreementScreen';
import DetailRank from './components/DetailRank';
import ChallengeJoinScreen from './screens/ChallengeJoinScreen';
import DetailBeforeQuest from './components/DetailBeforeQuest';
import NotificationScreen from './screens/NotificationScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyRoomScreen from './screens/MyRoomScreen'; 
import AuthCodeScreen from './screens/AuthCodeScreen';
import SplashScreen from './screens/SplashScreen'; 
import { useFonts } from 'expo-font';
import CardAuthentication from './screens/CardAuth';
import KBCardAuthScreen from './screens/KBAuth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: "#43b319",
        tabBarItemStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          margin: 6,
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: "#FFF",
          borderRadius: 40,
          marginHorizontal: 13,
          marginBottom: 10,
          marginTop: 10,
          shadowColor: "transparent",
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? "#FFF" : "#b6b6b6";
          const scale = new Animated.Value(focused ? 1 : 1);

          Animated.spring(scale, {
            toValue: focused ? 1.2 : 1,
            friction: 3,
            useNativeDriver: true,
          }).start();

          return (
            <Animated.View style={{ transform: [{ scale }] }}>
              <View style={{ gap: 4, alignItems: "center" }}>
                <View>
                  {route.name === "Home" && <HomeIcon color={color} />}
                  {route.name === "Challenge" && <QuestIcon color={color} />}
                  {route.name === "Store" && <StoreIcon color={color} />}
                  {route.name === "Profile" && <ProfileIcon color={color} />}
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color,
                    fontFamily: "WantedSans-Medium",
                  }}
                >
                  {route.name === "Home" && "홈"}
                  {route.name === "Challenge" && "챌린지"}
                  {route.name === "Store" && "상점"}
                  {route.name === "Profile" && "내 정보"}
                </Text>
              </View>
            </Animated.View>
          );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenge" component={ChallengeScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [agreed, setAgreed] = useState(false);

  const [loaded] = useFonts({
    "WantedSans-Regular": require("./assets/fonts/WantedSans-Regular.otf"),
    "WantedSans-Medium": require("./assets/fonts/WantedSans-Medium.otf"),
    "WantedSans-SemiBold": require("./assets/fonts/WantedSans-SemiBold.otf"),
    "WantedSans-Bold": require("./assets/fonts/WantedSans-Bold.otf"),
  });

  if (!loaded) return null; 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} /> 
        
        <Stack.Screen name="Agreement">
          {(props) => <AgreementScreen {...props} setAgreed={setAgreed} />}
        </Stack.Screen>
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="AuthCode" component={AuthCodeScreen}/>
        <Stack.Screen name="CardAuthentication" component={CardAuthentication} />
        <Stack.Screen name='KBCardAuthScreen' component={KBCardAuthScreen} />
        
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="DetailRank" component={DetailRank} />
        <Stack.Screen name="ChallengeJoinScreen" component={ChallengeJoinScreen} />
        <Stack.Screen name="DetailBeforeQuest" component={DetailBeforeQuest} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="NotificationList" component={NotificationScreen} />
        <Stack.Screen name="MyRoom" component={MyRoomScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
