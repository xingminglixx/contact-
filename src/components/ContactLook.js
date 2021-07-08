import React,{useState} from 'react';
function Contact({contact,setContact,totalContact,setTotalContact}) {

function handleChange({target}){
  const {name,value}=target;
setContact((prev)=>{
return ({...prev,[name]:value })

})




}
function handleSubmit(){
setTotalContact(prev=>{ return [...prev,contact] })
setContact({})


}











  return (
    <div>
    <h1>Add Contact</h1>
<input placeholder='name' name='name' onChange={handleChange} value={contact.name}/>
<input placeholder='contact phone' onChange={handleChange} name='phone' value={contact.phone}/>
<input placeholder='contact email' onChange={handleChange} type='email' name='email' value={contact.email}/>
<button onClick={handleSubmit}>Add Contact</button>

    </div>
   

  );
}

export default Contact;
