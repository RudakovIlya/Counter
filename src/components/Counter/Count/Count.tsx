import React from 'react';
import styles from './Count.module.css'

type CountPropsType = {
    count: number
    maxValue: number
}

const Count: React.FC<CountPropsType> = ({count, maxValue}) => {
    return (
        <div className={styles.count}>
            <span className={`${styles.span} ${count === maxValue && styles.red}`}>{count}</span>
        </div>
    );
};

export default Count;