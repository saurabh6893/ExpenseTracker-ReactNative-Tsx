import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GloablStyles } from '../../Constants/Styles'

const ExpensesSummary: any = ({ periodName, expenses }: any) => {
  const ExpensesTotal: any = expenses.reduce((sum: any, expense: any) => {
    return sum + expense.amount
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{ExpensesTotal.toFixed(2)}</Text>
    </View>
  )
}
export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: GloablStyles.vintage1950s.pista,
    borderBottomEndRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 15,
    color: GloablStyles.vintage1950s.paperblue,
    fontWeight: 'bold',
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GloablStyles.vintage1950s.ragi,
  },
})
