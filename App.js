import React from "react";
import { TranslationProvider } from "./src/contexts/TranslationContext";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Cats from "./src/screens/Cats";
import Dogs from "./src/screens/Dogs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <TranslationProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Cats"
            component={Cats}
            options={{
              headerShown: true,
              // color, size 由 react-navigation 傳入
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cat" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Dogs"
            component={Dogs}
            options={{
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="dog" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TranslationProvider>
  );
};

export default App;
