import React, {useState, useEffect} from 'react';
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BudgetInformation from "./components/BudgetInformation";

function App() {

    // BudgetForm state
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [showBudgetForm, setShowBudgetForm] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState([{}]);
    const [createExpense, setCreateExpense] = useState(false);

    // useEffect to update remaining state
    useEffect(() => {
        // Add new expense
        if (createExpense) {
            setExpenses([
                ...expenses,
                expense
            ])
            // Update remaining
            setRemaining(remaining - expense.amount);

            // update createExpense state to false
            setCreateExpense(false);
        }
    }, [expense, createExpense, expenses, remaining]);

    return (
        <div className="container">
            <header>
                <h1>Weekly expenses</h1>
            </header>
            <div className="main-content content">
                {showBudgetForm ?
                    (
                        <BudgetForm
                            setBudget={setBudget}
                            setRemaining={setRemaining}
                            setShowBudgetForm={setShowBudgetForm}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <ExpenseForm
                                    addNewExpense={setExpense}
                                    setCreateExpense={setCreateExpense}
                                />
                            </div>
                            <div className="one-half column">
                                <ExpenseList
                                    expenses={expenses}
                                />
                                <BudgetInformation
                                    budget={budget}
                                    remaining={remaining}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default App;
