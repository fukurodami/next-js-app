import React, {ChangeEventHandler} from 'react';
import styles from './Input.module.scss'

interface Props {
    type: string
    name: string
    value: string
    placeholder: string
    onChange: ChangeEventHandler
}

const Input = ({type, name, onChange, placeholder, value}: Props) => {
    return (
        <input
            className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;