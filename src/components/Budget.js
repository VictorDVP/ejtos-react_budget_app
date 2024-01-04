import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    /**const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }*/
    const changeBudget = (val) => {
        if(val < totalExpenses){
            alert("Cant reduce the budget value lower than the spending")
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            });
        }
        
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{}</span>
<input type="number" step="10" value={budget} onChange={event=>changeBudget(event.target.value)}></input>
</div>
    );
};
export default Budget;

