import React from "react";
import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpenseList = ({expenses}) => {
    return (
        <div className="expenses-made">
            <h2>Expenses</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default ExpenseList;