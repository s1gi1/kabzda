import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed === false) {
        return <div>
            <AccordionTitle value={props.title}/>
            <AccordionBody/>
        </div>
    }else {
        return <div><AccordionTitle value={props.title}/></div>
    }
}

type AccordionTitlePropsType = {
    value: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.value}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;