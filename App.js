import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import QuestIcon from './components/QuestIcon';
import HomeIcon from './components/HomeIcon';
import ProfileIcon from './components/ProfileIcon';
import StoreIcon from './components/StoreIcon';
import QuestsScreen from './screens/QuestsScreen';
import ProfileScreen from './screens/ProfileScreen';
import StoreScreen from './screens/StoreScreen';
import DetailRank from './components/DetailRank';
import DetailChallenge from './components/DetailChallenge';
import DetailBeforeQuest from './components/DetailBeforeQuest';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: "#FFF",
          borderRadius: 40,
          marginHorizontal: 20,
          paddingBottom: 12,
          paddingTop: 1,
          position: 'reletive', 
          left: 0,
          right: 0,
          bottom: 10, 
        },
        tabBarIcon: ({ focused }) => {
          let iconColor = focused ? "#FFF" : "#b6b6b6"; 
          let backgroundColor = focused ? "#43b319" : "#FFF";
        
          const isHomeOrQuests = route.name === "Home" || route.name === "Quests";
        
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: backgroundColor,
                  width: 78,
                  height: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 40,
                  marginTop: 30,
                }}
              >
                <View style={{ position: 'absolute', top: isHomeOrQuests ? 15 : 10 }}> 
                  {route.name === "Home" && <HomeIcon color={iconColor} />}
                  {route.name === "Quests" && <QuestIcon color={iconColor} />}
                  {route.name === "Store" && <StoreIcon color={iconColor} />}
                  {route.name === "Profile" && <ProfileIcon color={iconColor} />}
                </View>
              </View>
            </View>
          );
        },
        
        tabBarLabel: ({ focused }) => {
          let labelColor = focused ? "#FFF" : "#b6b6b6";

          return (
            <Text
              style={{
                fontSize: 12,
                color: labelColor,
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              {route.name === "Home" && "홈"}
              {route.name === "Quests" && "퀘스트"}
              {route.name === "Store" && "상점"}
              {route.name === "Profile" && "내 정보"}
            </Text>
          );
        },
        tabBarItemStyle: {
          marginHorizontal: 15,
          paddingBottom: 2,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Quests" component={QuestsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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

function ScreenWithScroll({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }} 
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
