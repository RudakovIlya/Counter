import React, {useState} from 'react';
import Count from "./Count/Count";
import Button from "../Button/Button";
import styles from './Counter.module.css'


const Counter: React.FC = () => {

    const maxValue = 10;
    const minValue = 0;

    const [count, setCount] = useState<number>(minValue);

    const onClickIncrementCount = () => {
        setCount(count + 1);
    }

    const onClickResetCount = () => {
        setCount(minValue);
    }

    const onClickDecrementCount = () => {
        setCount(count - 1);
    }

    return (
        <div className={styles.counter}>
            <Count count={count} maxValue={maxValue}/>
            <div className={styles['button-container']}>
                <Button onClick={onClickIncrementCount} disabled={count === maxValue}>Inc</Button>
                <Button xType={'secondary'} onClick={onClickResetCount} disabled={count <= 0}>Reset</Button>
                <Button onClick={onClickDecrementCount} disabled={count <= 0}>Dec</Button>
            </div>
        </div>
    );
};

export default Counter;