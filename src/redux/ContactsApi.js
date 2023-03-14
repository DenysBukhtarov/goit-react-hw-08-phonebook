import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ContactsApi = createApi({
reducerPath: 'contactsApi',

baseQuery: fetchBaseQuery({
baseUrl: 'https://connection-api.herokuapp.com/',
prepareHeaders: (headers, {getState}) => {
    const token = getState().auth.token;
    if (token) {
        headers.set('authorization', `Bearer ${token}`)
    }
    return headers;
 },
}),

tagTypes: ['Contacts'],

endpoints: builder => ({
    getContact: builder.query({
        query: () => '/contacts',
        keepUnusedDataFor: 1,
        providesTags: ['Contacts'],

    }),

    addContacts: builder.Mutation({
            query: contact => ({
            url: `/contacts `,
            method: 'POST',
            body: contact,
        }),

        invalidatesTags: ['Contacts'],
    }),

    deleteContacts: builder.Mutation({
        query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
    }),

    invalidatesTags: ['Contacts'],
   }),
  }),
});


export const {
    useGetContactQuery,
    useAddContactsMutation,
    useDeleteContactsMutation,
} = ContactsApi;