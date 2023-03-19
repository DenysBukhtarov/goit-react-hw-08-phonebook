import {Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() { 
    return (
<Box 
backgroundColor="#004c97"
padding="20px"
backgroundImage="linear-gradient(
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
)"
>
<Helmet>
    <title>Save Contacts</title>
</Helmet>
<Text 
height="100%"
textAlign="center"
margin="15px"
fontWeight="bold"
color="#f5f5f5"
fontSize="24px"
>
Save your contacts - this is a convenient application this is always at hand,
 with which you no longer need to look fro such an important contact in you notes,
 now all contacts are on your phone. An intuitive interface will help you add new contacts
 very quickly, and a convenient filter will help you sort contacts by name and you will
no longer have to scroll through endless lists of contacts.
<div>Save your contacts - welcome and have a nice day</div>
</Text>
</Box>
    );
}