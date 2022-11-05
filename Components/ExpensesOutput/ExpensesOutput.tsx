import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GloablStyles } from '../../Constants/Styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES = [
  {
    id: 'one',
    description: 'pair of Shoes',
    amount: 2300,
    date: new Date('2022-08-06'),
  },
  {
    id: 'two',
    description: 'Speaker',
    amount: 1300,
    date: new Date('2022-08-09'),
  },
  {
    id: 'three',
    description: 'Internet Topup',
    amount: 1200,
    date: new Date('2022-08-13'),
  },
  {
    id: 'four',
    description: 'Dinner',
    amount: 1100,
    date: new Date('2022-08-18'),
  },
]

export const ExpensesOutput: any = ({ expenses, expensesPeriod }: any) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GloablStyles.vintage1950s.paperblue,
  },
})
