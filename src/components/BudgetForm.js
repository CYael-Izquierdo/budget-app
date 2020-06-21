import React, {Fragment, useState} from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const BudgetForm = ({setBudget, setRemaining, setShowBudgetForm}) => {

    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    // Read budget
    const changeBudget = e => {
        // the input fields return string values
        setQuantity(parseInt(e.target.value));
    }

    // Submit budget
    const addBudget = e => {
        e.preventDefault();

        // Validations
        if (quantity <= 0 || isNaN(quantity)) {
            setError(true);
            return;
        }

        // Common flow
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowBudgetForm(false);
    }


    return (
        <Fragment>
            <h2>Enter your budget</h2>
            {error ? <Error message="The budget entered is no valid"/> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your budget"
                    onChange={changeBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Confirm budget"
                />
            </form>
        </Fragment>
    );
}

BudgetForm.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowBudgetForm: PropTypes.func.isRequired
};

export default BudgetForm;