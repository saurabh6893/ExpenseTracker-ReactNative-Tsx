import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GloablStyles } from '../../Constants/Styles'

const ExpenseItem = ({ description, amount, date }: any) => {
  return (
    <Pressable>
      <View style={style.expenseItem}>
        <View>
          <Text style={[style.textBase, style.description]}>{description}</Text>
          <Text>{date.toString()}</Text>
        </View>
        <View style={style.amountContainer}>
          <Text style={style.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const style = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GloablStyles.vintage1950s.paperblue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GloablStyles.normal.black,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GloablStyles.vintage1950s.nothing,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GloablStyles.vintage1950s.nothing,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: GloablStyles.vintage1950s.ragi,
    fontWeight: 'bold',
  },
})
