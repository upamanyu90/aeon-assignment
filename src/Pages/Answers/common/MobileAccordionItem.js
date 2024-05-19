import React from 'react';
import './MobileAccordionItem.css';

const MobileAccordionItem = ({ label, action }) => {
  return (
    <a href={action} className="accordion-item">{label}</a>
  )
}

export default MobileAccordionItem