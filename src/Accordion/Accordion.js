import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import { faqs } from './data';
const Accordion = () => {
  const [faqData, setfaqData] = useState({});
  useEffect(() => {
    setfaqData(faqs);
  }, []);
  return (
    <div>
      {!!faqData.length &&
        faqData.map((e, i) => (
          <AccordionItem key={i} faq={e.faq} answer={e.answer} />
        ))}
    </div>
  );
};
export default Accordion;
