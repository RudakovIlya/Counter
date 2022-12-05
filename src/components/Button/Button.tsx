import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.css'

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type XType = 'default' | 'secondary';

type ButtonPropsType = DefaultButtonProps & {
    xType?: XType
}

const Button: React.FC<ButtonPropsType> = ({
                                               xType,
                                               disabled,
                                               ...restProps
                                           }) => {
    const classesButton = `${styles.button} ${xType === 'secondary' ? styles.secondary : styles.default}`
    return (
        <button className={classesButton} disabled={disabled} {...restProps}/>
    );
};

export default Button;