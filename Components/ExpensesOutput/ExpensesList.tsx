import React from 'react'
import { FlatList, Text } from 'react-native'

function renderExpenseItem(itemData: any) {
  return <Text>{itemData.item.description}</Text>
}

const ExpensesList = ({ expenses }: any) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList
