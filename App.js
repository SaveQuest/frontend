import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import QuestIcon from './components/QuestIcon';
import HomeIcon from './components/HomeIcon';
import ProfileIcon from './components/ProfileIcon';
import QuestsScreen from './screens/QuestsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AgreementScreen from './screens/AgreementScreen'; 
import VerificationScreen from './screens/VerificationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderTopWidth: 0.5,
          borderTopColor: '#e5e5e5',
          backgroundColor: '#FFF',
          paddingBottom: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: '#E6E6E6',
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 20,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return <HomeIcon />;
          } else if (route.name === 'Quests') {
            return <QuestIcon />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon />;
          }
        },
        tabBarItemStyle: {
          marginHorizontal: 15,
        },
      })}
    >
      <Tab.Screen name="Quests" component={QuestsScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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
        {agreed && <Stack.Screen name="Main" component={TabNavigator} />}
      </Stack.Navigator> */}
      <TabNavigator/>
    </NavigationContainer>
  );
}
