import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ManageExpenses from './Screens/ManageExpenses'
import RecentExpenses from './Screens/RecentExpenses'
import AllExpenses from './Screens/AllExpenses'

const Stack = createNativeStackNavigator()
const bottomStack = createBottomTabNavigator()

function ExpenseOverview() {
  return (
    <bottomStack.Navigator>
      <bottomStack.Screen name='Recent' component={RecentExpenses} />
      <bottomStack.Screen name='All' component={AllExpenses} />
    </bottomStack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Expense' component={ExpenseOverview} />
          <Stack.Screen name='Manage' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
