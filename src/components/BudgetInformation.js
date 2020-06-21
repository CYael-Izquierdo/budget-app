import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getBackgroundByPercent} from "../helpers"

const BudgetInformation = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={getBackgroundByPercent(budget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </Fragment>
    );
}

BudgetInformation.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
};


export default BudgetInformation;