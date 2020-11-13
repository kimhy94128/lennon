import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

function Contact() {
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ message, setMessage ] = useState('')

    const onChange = (event) => {
        const { name, value } = event.target
        if(name === 'name'){
            setName(value)
        } else if (name === 'email'){
            setEmail(value)
        } else if (name === 'phone'){
            setPhone(value)
        } else if (name === 'message'){
            setMessage(value)
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const inputs = {
            name, phone, email, message
        }
        axios.put('/api/contact', inputs)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

  return (
    <section className="page-section" id="contact">
    <div className="container">
    <Header title="CONTACT" />
        <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={onSubmit}>
            <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" name="name" type="text" onChange={onChange} value={name} placeholder="성함" required />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="email" type="email" onChange={onChange} value={email} placeholder="이메일" required/>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group mb-md-0">
                        <input className="form-control" name="phone" type="tel" onChange={onChange} value={phone} placeholder="연락처" required/>
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea className="form-control" name="message" onChange={onChange} value={message} placeholder="내용" required />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div id="success"></div>
                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" onClick={onSubmit}>문의</button>
            </div>
        </form>
    </div>
    </section>
  )
}

export default Contact
