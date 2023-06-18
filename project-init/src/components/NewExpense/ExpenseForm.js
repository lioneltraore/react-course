import { useState } from 'react';
import './ExpenseForm.scss';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [editMode, setEditMode] = useState(false);

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        props.onSubmitExpense(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        editModeHandler();

    }

    const editModeHandler = () => {
        setEditMode(prevValue => !prevValue);
    }

    if (!editMode) {
        return (
            <div>
                <button onClick={editModeHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} min="2002-01-01" max="2023-11-30" type="date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={editModeHandler} type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;