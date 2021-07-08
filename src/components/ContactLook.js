import React,{useState} from 'react';
function Contact({contact,setContact}) {

function handleChange({target}){
setContact((prev)=>{
return [{...prev}]





})




}












  return (
    <div>
    <h1>Add Contact</h1>
<input placeholder='name' name='name' value={contact.name}/>
<input placeholder='contact phone' name='phone' value={contact.phone}/>
<input placeholder='contact email' type='email' name='email' value={contact.email}/>
<button>Add Contact</button>

    </div>
   

  );
}

export default Contact;
