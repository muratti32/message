import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home.js'

const TabNavigator = ({ route, navigation }) => {

    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case "Status":
                        iconName = "ios-refresh-circle";
                        break;
                    case "Calls":
                        iconName = "ios-call";
                        break;
                    case "Camera":
                        iconName = "ios-camera";
                        break;
                    case "Chats":
                        iconName = "ios-chatbubbles";
                        break;
                    case "Settings":
                        iconName = "ios-settings";
                        break;
                    default:
                    iconName = "ios-chatbubbles";
                    break;
                }
                return <Ionicons name={iconName} size={ focused ? 36 : 24} color={color} />;
            },
        })}
      >
        <Tab.Screen name="Status" component={HomeScreen} />
        <Tab.Screen name="Calls" component={HomeScreen} />
        <Tab.Screen name="Camera" component={HomeScreen} />
        <Tab.Screen name="Chats" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    )
}

export default TabNavigator
