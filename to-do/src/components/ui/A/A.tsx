import React from 'react';
import Link from "next/link";
import styles from './A.module.scss'

interface Props {
    text: string,
    href: string
}

const A = ({text, href}: Props) => {
    return (
        <Link className={styles.link} href={href}>
            {text}
        </Link>
    );
};

export default A;