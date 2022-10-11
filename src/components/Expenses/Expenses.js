import { useState } from "react"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021')

    const filterChangeHandler = (selected) => {
        setSelectedYear(selected)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className="expenses">
            <ExpenseFilter 
                onChageFilter={filterChangeHandler}
                selected={selectedYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses