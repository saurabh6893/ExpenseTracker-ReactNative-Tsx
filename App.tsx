import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-ionicons'
import ManageExpenses from './Screens/ManageExpenses'
import RecentExpenses from './Screens/RecentExpenses'
import AllExpenses from './Screens/AllExpenses'
import { GloablStyles } from './Constants/Styles'

const Stack = createNativeStackNavigator()
const BottomStack = createBottomTabNavigator()

function ExpenseOverview() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GloablStyles.vintage1950s.paperblue },
        headerTintColor: GloablStyles.normal.white,
        tabBarStyle: { backgroundColor: GloablStyles.vintage1950s.paperblue },
        tabBarActiveTintColor: GloablStyles.vintage1950s.nothing,
      }}
    >
      <BottomStack.Screen
        name='Recent'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Icon name='hourglass' size={size} color={color} />
          ),
        }}
      />

      <BottomStack.Screen name='All' component={AllExpenses} />
    </BottomStack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Expense'
            component={ExpenseOverview}
            options={{ headerShown: true }}
          />
          <Stack.Screen name='Manage' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
