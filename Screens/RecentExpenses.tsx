import React from 'react'

import { ExpensesOutput } from '../Components/ExpensesOutput/ExpensesOutput'

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod='last few days' />
}
