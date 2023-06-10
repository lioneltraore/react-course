import './ExpenseItem.scss';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 27th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$300.43</div>
            </div>
        </div>
    );
}

export default ExpenseItem;