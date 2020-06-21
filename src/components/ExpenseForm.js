import React, {useState} from "react";
import shortid from "shortid"
import PropTypes from "prop-types"
import Error from "./Error";

const ExpenseForm = ({addNewExpense, setCreateExpense}) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const addExpense = e => {
        e.preventDefault();

        // Validations
        if (name.trim() === "" || isNaN(amount)) {
            setErrorMessage("The entered name is nos valid")
            setError(true);
            return
        }
        if (amount < 1 || isNaN(amount)) {
            setErrorMessage("The entered amount is nos valid")
            setError(true);
            return;
        }
        // If there is no error
        setError(false);

        // Create expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        // Sent to app.js
        addNewExpense(expense);
        setCreateExpense(true);

        // Restart form
        setName("");
        setAmount(0);
    }

    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses</h2>
            {error ? <Error message={errorMessage}/> : null}
            <div className="field">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Food"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Expense amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={amount}
                    onChange={e => setAmount(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Add expense"
            />
        </form>
    );
}

ExpenseForm.propTypes = {
    addNewExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
};

export default ExpenseForm;