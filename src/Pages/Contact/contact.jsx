import React from "react";
import ContactForm from "../../Components/ContactForm/contactForm";
import ContactHead from "../../Components/ContactHead/contactHead";
import ContactSection from "../../Components/ContactSection/contactSection";
import Navbar from "../../Components/Navbar/navbar";


function Contact() {
    return (
        <>
        
            <ContactHead />
            <ContactSection />
            <ContactForm />
        </>
    )
}

export default Contact
