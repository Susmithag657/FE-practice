import React,{useState} from 'react'
const AccordionItem=({faq,answer})=>{
  console.log(faq)
  console.log(answer)
return (
  <div>
    <div>{faq}<span> + </span></div>
    <div>{answer}</div>
    </div>
)
}
export default AccordionItem