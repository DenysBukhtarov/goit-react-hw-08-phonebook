import { useSelector } from "react-redux";
import { useGetContactQuery } from "redux/ContactsApi";
import ContactListItem from "components/ContactListItem";
import { Spinner } from "@chakra-ui/react";

function ContactsList() {
    
    const { data, isFetching } = useGetContactQuery();
    const filter = useSelector(state => state.filter);

    const contacts = 
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));
     
    return (
        <>
            {data && data.lenght !== 0 && (
                <ul>
                    {contacts.lenght !== 0 ? (
                    contacts.map(contact => (
                        <ContactListItem key={contact.id} {...contact} />
                    ))
                    ) : (
                        <p>No Search Contacts: {filter}</p>
                                                        )}
                </ul>
            )}
            {data && data.lenght === 0 && <p>'You don not have contacts'</p>}
            {isFetching && (
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
            />
            )}
        </>
    );
}



export default ContactsList;