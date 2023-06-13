
import './ExpenseForm.scss';

function ExpenseForm() {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input min="2002-01-01" max="2023-11-30" type="date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add New Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;