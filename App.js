import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import QuestIcon from './components/QuestIcon';
import HomeIcon from './components/HomeIcon';
import ProfileIcon from './components/ProfileIcon';
import QuestsScreen from './screens/QuestsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            borderTopWidth: 0.5,
            borderTopColor: '#e5e5e5',
            display: 'inline-flex',
            padding: '8.013px 35.091px 34.668px 35.628px',
            justifyContent: 'center',
            alignItems: 'center',
         
            border: '2px solid #E6E6E6',
            backgroundColor: '#FFF',
          },
          tabBarItemStyle: {
            marginHorizontal: 45,
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
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Quests" component={QuestsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}