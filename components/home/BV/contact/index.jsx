import Image from 'next/image'
import React, {useState, useRef} from 'react'
import { Button, Form } from 'reactstrap'
import CustomInput from '../../../form/input'
import emailjs from '@emailjs/browser'

export default function BV() {

    // const img = "/Images/contact_banner.png";

    // <style JSX>{`
    // .homeContactBV {
    //     width:100%;
    //     height:100%;
    //     position:absolute;
    //     background: url('`+img+`') no-repeat;
    // }
    // `}</style>

    // const bgImageStyle = {
    //     backgroundImage: 'url("/Images/contact_banner.png")',
    //     backgroundSize: 'cover',
    //     backgroundAttachment: 'fixed',
    //     backgroundRepeat: 'no-repeat'
    // }

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const imageStyle = {
        width: '100vw',
        height: '75vh',
        margin: 0,
        padding: 0
    }


    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(fullName + email + message);
    //     console.log(form.current);

    //     return emailjs.sendForm('service_9vc5m34', 'template_8jlgepp', form.current, 'publicKey')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       }).catch(err=>console.log(err)).finally(()=>console.log("This is final now."));
    
    // }

  return (
    <div className='homeContactBV'>
        <div>
            <img
                src="/Images/contact_banner.png"
                style={imageStyle}
            />
        </div>
        <div className='d-flex justify-content-end align-items-start'>
        <div className='d-flex justify-content-center align-items-start flex-column cardSection'>
            <div className='title h1'>
                <p>Contact Us</p>   
            </div>
            <div className='text'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sed.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sed architecto sequi voluptatum eligendi corrupti illo maiores adipisci veritatis, totam iste quaerat nam voluptas delectus ea fugiat incidunt porro.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sed architecto sequi voluptatum eligendi corrupti illo maiores adipisci veritatis, totam iste quaerat nam voluptas delectus ea fugiat incidunt porro.
                </p>
                <Button className='homeContactButton block' size='lg' block>Contact Now</Button>
                {/* <form ref={form} onSubmit={handleSubmit}>
                    <CustomInput
                        // labelName="Full Name"
                        name="Full Name"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={e=>{setfullName(e.target.value)}}
                    />
                    <CustomInput
                        // labelName="Full Name"
                        name="Email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={e=>{setEmail(e.target.value)}}
                    />
                    <CustomInput
                        // labelName="Full Name"
                        name="Message"
                        type="textarea"
                        placeholder="Message"
                        value={message}
                        onChange={e=>{setMessage(e.target.value)}}
                    />
                    <Button className='homeContactButton block' size='lg' block type='submit'>Submit</Button>    
                </form> */}
                
            </div>
            {/* <div className='d-flex justify-content-center'>
                <Button className='homeContactButton block' size='lg' block>Contact Now</Button>
            </div> */}
        </div>
        </div>
    </div>
  )
}
