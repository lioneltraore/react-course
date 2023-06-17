import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = ()=> {
    //     console.log('button clicked!');
    //     setTitle('Updated');
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;