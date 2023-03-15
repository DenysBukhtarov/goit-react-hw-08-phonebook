import React from "react";
import { Navigate } from "react-router-dom";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getLoggedin } from "redux/AuthSlice";
import {Box} from '@chakra-ui/react';

function ContactsView(props){
    const isLoggedin = useSelector(getLoggedin);
    return (
        <Box w="400px" mx="auto" my="6">
            {!isLoggedin && <Navigate to="/" replace={true} />}
            <Heading mb={5}>Phonebook</Heading>
            <ContactForm />
            <Heading mb={5}>Contacts</Heading>
            <Filter />
            <ContactList />
        </Box>
    );
}

export default ContactsView;
