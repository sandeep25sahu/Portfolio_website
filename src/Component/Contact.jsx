import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";


function ContactForm() {
  const [ setsent] = useState(false);
  const [state, handleSubmit] = useForm("moveloyv");
  if (state.succeeded) {
    return <k className="w-full text-center"><p className="text-2xl md:text-5xl">Thanks for joining! <span className="text-sm">(Refresh for resend message!)</span></p></k> ;
}
 const handleSubmit1=()=>{
  setsent(true);
  }
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="border-t border-stone-500 pb-20"
    >
       <motion.h1
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:-100}}
              transition={{duration:.6}} className="mt-24 mb-4 text-center text-4xl "> Contact</motion.h1>

      <form onSubmit={handleSubmit} className='text-stone-400 flex flex-col gap-4 w-[60%] p-5 text-center mx-auto '>
<div className="space-y-1">
<label htmlFor="name" className="text-lg font-medium block mb-1 ">
  Name:
</label>
<input
  type="text"
  id="name"
  name="name"
  required
  className=" p-1 rounded-md focus:outline-none bg-stone-300 focus:ring-1 ring-gray md:w-[40%] w-full"
/>
</div>



<div>
<label htmlFor="email" className='text-lg font-medium block mb-1 '>
Email Address:
</label>
<input
className=' p-1 rounded-md focus:outline-none bg-stone-300 focus:ring-1 ring-gray md:w-[40%] w-full '
id="email"
type="email" 
name="email"
/>
<ValidationError 
prefix="Email" 
field="email"
errors={state.errors}
/>
</div>

<div>
<label htmlFor="email" className='text-lg font-medium block mb-1 '>
Write your message here:
</label>
<textarea
className=' p-1 rounded-md focus:outline-none bg-stone-300 focus:ring-1 ring-gray md:w-[40%] w-full '
id="message"
name="message"
/>
<ValidationError 
prefix="Message" 
field="message"
errors={state.errors}
/>
</div>

<button type="submit" disabled={state.submitting} onClick={handleSubmit1} className=' bg-stone-500  hover:bg-stone-600  w-36 h-10 mx-auto rounded-md p-2' >
Send Message
</button>
</form>
    </motion.div>
  );
};

export default ContactForm;
