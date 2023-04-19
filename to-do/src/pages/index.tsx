import React from 'react';
import A from "@/components/ui/A/A";

const Index = () => {
    return (
        <div>
            <h1 className={'title'}>Главная страница</h1>
            <p className={'description'}>Данный сайт разработан с помощью
                <b className={'description__link'}><A href={'https://nextjs.org'} text={' Next.js'} /></b>
            </p>
            <p className={'description'}>На сайте реализован To-Do-list с использованием
                <b className={'description__link'}><A href={'https://redux-toolkit.js.org'} text={' Redux Toolkit'} /></b>
            </p>
        </div>
    );
};

export default Index;
