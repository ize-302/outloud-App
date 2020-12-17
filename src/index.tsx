import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppIntroScreen from "./screens/AppIntro";
import CarouselsScreen from "./screens/AppIntro/Carousels";
import FeedScreen from "./screens/Feed";
import SearchScreen from "./screens/Search";
import NotesScreen from "./screens/Notes";
import WriteNoteScreen from "./screens/WriteNote";
import NotificationsScreen from "./screens/Notifications";
import ProfileScreen from "./screens/Profile";
import ReadNoteScreen from "./screens/ReadNote";
import getStyles from "./utils/globalStyles";
import { colors, getHeight, getWidth } from "./utils";
import Icon from "./components/Icon";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  const styles = getStyles();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        style: styles.tabs,
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Feed") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="home"
                  color={focused ? colors.orange : colors.taiga}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? colors.orange : colors.taiga },
                  ]}
                >
                  Feed
                </Text>
              </View>
            );
          } else if (route.name === "Search") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="maginifier"
                  color={focused ? colors.orange : colors.taiga}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? colors.orange : colors.taiga },
                  ]}
                >
                  Search
                </Text>
              </View>
            );
          } else if (route.name === "Notes") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="feather"
                  color={focused ? colors.orange : colors.taiga}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? colors.orange : colors.taiga },
                  ]}
                >
                  Notes
                </Text>
              </View>
            );
          } else if (route.name === "Notifications") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="heart_solid"
                  color={focused ? colors.orange : colors.taiga}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? colors.orange : colors.taiga },
                  ]}
                >
                  Notifications
                </Text>
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View style={styles.tabStyle}>
                <Icon
                  name="profile"
                  color={focused ? colors.orange : colors.taiga}
                />
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? colors.orange : colors.taiga },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigation = () => {
  const styles = getStyles();

  return (
    // <SafeAreaView style={styles.safeArea}>
    <NavigationContainer fallback={<View />}>
      <Stack.Navigator initialRouteName="AppIntro" headerMode="none">
        <Stack.Screen name="ReadNote" component={ReadNoteScreen} />
        <Stack.Screen name="App" component={AppNavigation} />
        <Stack.Screen name="AppIntro" component={AppIntroScreen} />
        <Stack.Screen name="CarouselsIntro" component={CarouselsScreen} />
        <Stack.Screen name="WriteNote" component={WriteNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default Navigation;
