import React from 'react'
import { FlatList, Text, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'

export const ExpensesOutput: any = ({ expenses }: any) => {
  return (
    <View>
      <ExpensesSummary />
      <FlatList />
    </View>
  )
}
