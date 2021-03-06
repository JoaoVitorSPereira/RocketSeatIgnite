import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Register } from '../screens/Register';
import { Dashboard } from '../screens/Dashboard';
import theme from '../global/styles/theme';
import { Platform } from 'react-native';
import { Resume } from '../screens/Resume';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name='List'
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name='Register'
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='attach-money' size={size} color={color} />
          ),
        }}
      />
      <Screen
        name='Resume'
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='pie-chart' size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
