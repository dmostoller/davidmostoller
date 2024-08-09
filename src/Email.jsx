
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    MenuItem,
    Form,
    Icon,
    FormField,
    FormTextArea,
    
  } from 'semantic-ui-react'


const Email = () => {
    const form = useRef();
    const [open, setOpen] = useState(false)


    const formSchema = yup.object().shape({
        from_name: yup.string().required("please enter your name"),
        reply_to: yup.string().email().required("please enter a valid email address"),
        message: yup.string().required("please enter a message"),
    })
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            from_name:'',
            reply_to:'',
            message:'',
          },
        validationSchema: formSchema,
        onSubmit: (values) => {
            setLoading(true)
            emailjs.sendForm('service_jz3d31c', 'template_sau8r19', form.current, {
                publicKey: '2CBV5usGCJRMr4WbB',
            }).then(() => {
                    toast.dark("Your Message Has Been Sent")
                    formik.resetForm()
                    setLoading(false)
                }, (error) => {
                    toast.dark("Your Message Cannot Be Sent", error.text)
                    setLoading(false)
                });
        },
        })
 
   const [loading, setLoading] = useState(false)

    return (
      <>
      <ToastContainer/>
      <Modal
    closeIcon inverted
    dimmer={"blurring"}
    size={"small"}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button labeled secondary labelPosition='right' size="massive" basic icon><Icon name='mail' />Get In Touch</Button>}
  > 
    <ModalHeader>Get In Touch</ModalHeader>
    <ModalContent>
      <ModalDescription>
          <form className="ui large form" ref={form} onSubmit={formik.handleSubmit}>
              <div style={{justifyContent: "center"}} className="field">
                  <label>Name</label>
                  <input type='text' name="from_name" placeholder="Your Name..." value={formik.values.from_name} onChange={formik.handleChange}/>
                  {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.from_name}</p>}
              </div>
              <div className="field">
                  <label>Email</label>
                  <input type='email' name="reply_to" placeholder="Your Email..." value={formik.values.reply_to} onChange={formik.handleChange}/>
                  {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.reply_to}</p>}
              </div>
              <div className="field">
              <label>Message</label>
                  <textarea name="message" placeholder="Your Message..." value={formik.values.message} onChange={formik.handleChange}/>
                  {formik.errors && <p style={{color:'red', textAlign:'center'}}>{formik.errors.message}</p>}
              </div>
                { loading ?
                <button className="ui basic fluid large loading button" type="submit">Send Email</button>
                :
                <button className="ui secondary fluid large button" type="submit">Send Email</button>
                }
            </form>
            </ModalDescription>
    </ModalContent>
  </Modal>

      </>
    )    
}
export default Email