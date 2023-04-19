import React from 'react';
import A from "@/components/ui/A/A";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <A text={'Главная'} href={'/'} />
            <A text={'Лист дел'} href={'/to-do'} />
        </header>
    );
};

export default Header;