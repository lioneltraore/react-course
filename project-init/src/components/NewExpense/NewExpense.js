
import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';

function NewExpense(props) {

    const submitExpenseHandler = (expenseData)=> {
        console.log('from new expense', expenseData);
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={submitExpenseHandler} />
        </div>
    );
}

export default NewExpense;