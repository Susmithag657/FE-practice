import React,{useState} from 'react'
const AccordionItem=({faq,answer})=>{
return (
  <div>
    <div>{faq}<span> + </span></div>
    <div>{answer}</div>
    </div>
)
}
export default AccordionItem