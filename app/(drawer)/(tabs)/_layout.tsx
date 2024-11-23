import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        },
      }}>
      {/* Left Tab for Donate */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Msg"
        options={{
          title: 'Msg',
          tabBarIcon: ({ color }) => <TabBarIcon name="send" color={color} />,
        }}
      />

      {/* Center Tab for Home with Custom Style */}
      <Tabs.Screen
        name="Donate"
        options={{
          title: 'Donate',
          tabBarIcon: () => (
            <View style={styles.centerButton}>
              <TabBarIcon name="plus" color="white" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Requests"
        options={{
          title: 'Requests',
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        }}
      />

      {/* Right Tab for Profile */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ed631a', // Main color for the floating button
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40, // Lift the button slightly above the tab bar
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
