import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

// function declaration
function App(props: any) {
    // что-то полезное


    // обязательно вернуть JSX
    return (
        <div>
            <PageTitle value={"This is APP component"}/>
            <PageTitle value={"My friends"}/>
            Article 1
            <Rating value={2}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    value: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.value}</h1>
    )
}

export default App;