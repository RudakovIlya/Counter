import React from 'react';
import styles from './Count.module.css'

type CountPropsType = {
    count: number
    maxValue: number
}

const Count: React.FC<CountPropsType> = ({count, maxValue}) => {
    const countClassName = `${styles.span} ${count === maxValue && styles.red}`;
    return (
        <div className={styles.count}>
            <span className={countClassName}>{count}</span>
        </div>
    );
};

export default Count;