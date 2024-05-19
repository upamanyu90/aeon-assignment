import React, { useState } from "react";
import MobileAccordionItem from "./MobileAccordionItem";
import { Menu, Close, Search } from '@mui/icons-material'
import './MobileMenuAccordion.css'

const MobileMenuAccordion = ({ items=[] }) => {
    const [openAccordion, setOpenAccordion] = useState(true)
    const accordionContent = items.map(item => <MobileAccordionItem label={item.label} action={item.to}/>)
    return (
        <div className="accordion-parent-container">
          <div className="accordion-header">
            <div className= {openAccordion ? "open-header-label" : ""}>AEON</div>
            <div onClick={() => setOpenAccordion(!openAccordion)}>
                <Search />
                {openAccordion ? <Close /> : <Menu />}
            </div>
          </div>
          {openAccordion && <div className="accordion-content">
            {accordionContent}
          </div>}
        </div>
    )
}

export default MobileMenuAccordion
