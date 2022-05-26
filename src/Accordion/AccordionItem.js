import React, { useState } from 'react';
const AccordionItem = ({ faq, answer }) => {
  const [display, setdisplay] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setdisplay(prevState=>!prevState)
  };
  return (
    <div className="container">
      <div className="faq">
        {faq}
        <button onClick={(e) => handleClick(e)}>{display ? '-' : '+'} </button>
      </div>
      {display? <div className="answer">{answer}</div> : null}
    </div>
  );
};
export default AccordionItem;
