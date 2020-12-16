import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMore from '@material-ui/icons/ExpandMore'

import './Accordion.css'

const Accordions = ({items}) =>{
    const [index, setIndex] = useState(null)

    return (
        <div className="accordion">
            {items.map((item, i)=>{
                return  (
                <Accordion onClick={()=>setIndex(i)}
                key={i}>
                <AccordionSummary expandIcon={<ExpandMore />} >
                    {item.title}
                </AccordionSummary>
                <AccordionDetails>
                    {item.content}
                </AccordionDetails>
            </Accordion>)
            })}

            <p> {index} </p>
            
        </div>
    )
}

export default Accordions
