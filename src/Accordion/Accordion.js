import React,{useState,useEffecct} from 'react'
import AccordionItem from './AccordionItem'
import data from './data.json'
const Accordion=()=>{
  const [data,setData]=useState({})
  useEffecct(()=>{
    setData(data)
  },[])
return(
  <div>
    {!!data.length && data.map((e,i)=><AccordionItem key={i} faq={e.faq} answer={e.answer}/>)}
    </div>
)
}
export default Accordion