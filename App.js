import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import QuestIcon from './components/QuestIcon';
import HomeIcon from './components/HomeIcon';
import ProfileIcon from './components/ProfileIcon';
import StoreIcon from './components/StoreIcon';
import ChallengeScreen from './screens/ChallengeScreen';
import ProfileScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';
import DetailRank from './components/DetailRank';
import DetailChallenge from './components/DetailChallenge';
import DetailBeforeQuest from './components/DetailBeforeQuest';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f5f6' }}>
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

            return (
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
    </View>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainPage" component={TabNavigator} />
      <Stack.Screen name="DetailRank" component={DetailRank} />
      <Stack.Screen name="DetailChallenge" component={DetailChallenge} />
      <Stack.Screen name="DetailBeforeQuest" component={DetailBeforeQuest} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "WantedSans-Medium": require("./assets/fonts/WantedSans-Medium.otf"),
    "WantedSans-SemiBold": require("./assets/fonts/WantedSans-SemiBold.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}