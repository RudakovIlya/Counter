import React, {useState} from 'react';
import Count from "./Count/Count";
import Button from "../Button/Button";
import styles from './Counter.module.css'

const maxValue = 10;
const minValue = 0;

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(minValue);

    const onClickIncrementCount = () => {
        setCount((prevValue) => prevValue + 1);
    }
    const onClickDecrementCount = () => {
        setCount((prevValue) => prevValue - 1);
    }

    return (
        <div className={styles.counter}>
            <Count count={count} maxValue={maxValue}/>
            <div className={styles['button-container']}>
                <Button onClick={onClickIncrementCount} disabled={count === maxValue}>Inc</Button>
                <Button xType={'secondary'} onClick={onClickDecrementCount} disabled={count <= 0}>Reset</Button>
            </div>
        </div>
    );
};

export default Counter;