import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native"; 
import Home from "./screens/Home";
import QuestIcon from "./components/QuestIcon";
import HomeIcon from "./components/HomeIcon";
import ProfileIcon from "./components/ProfileIcon";
import QuestsScreen from "./screens/QuestsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AgreementScreen from "./screens/AgreementScreen";
import VerificationScreen from "./screens/VerificationScreen";
import DetailRank from "./components/DetailRank";
import DetailChallenge from "./components/DetailChallenge";
import DetailBeforeQuest from "./components/DetailBeforeQuest";

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
          borderTopWidth: 0.5,
          borderTopColor: "#e5e5e5",
          backgroundColor: "#FFF",
          paddingBottom: 12,
          paddingTop: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: "#E6E6E6",
          borderWidth: 2,
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal:10,
        },
        tabBarIcon: ({ focused }) => {
          let iconColor = focused ? "#81C966" : "#b6b6b6";

          switch (route.name) {
            case "Home":
              return <HomeIcon color={iconColor} />;
            case "Quests":
              return <QuestIcon color={iconColor} />;
            case "Profile":
              return <ProfileIcon color={iconColor} />;
          }
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case "Home":
              label = "홈";
              break;
            case "Quests":
              label = "퀘스트";
              break;
            case "Profile":
              label = "마이페이지";
              break;
          }
          return (
            <Text
              style={{
                fontSize: 12,
                color: focused ? "#81C966" : "#8e8e8e",
                marginTop: -2, 
                fontWeight: "bold",
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarItemStyle: {
          marginHorizontal: 15,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Quests" component={QuestsScreen} />
      <Tab.Screen name="Home" component={Home} />
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
    </Stack.Navigator>
  );
}

export default function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Agreement">
          {(props) => <AgreementScreen {...props} setAgreed={setAgreed} />}
        </Stack.Screen>
        <Stack.Screen name="Verification" component={VerificationScreen} />
        {agreed && <Stack.Screen name="Main" component={RootNavigator} />}
      </Stack.Navigator> */}
      <RootNavigator/>
    </NavigationContainer>
  );
}
