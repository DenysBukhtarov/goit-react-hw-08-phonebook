import{
    configureStore,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {ContactsApi} from './ContactsApi';
import {AuthApi} from './AuthApi';
import {FilterSlice} from './FilterSlice';
import {AuthSlice} from './AuthSlice';
import { getDefaultNormalizer } from '@testing-library/react';

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer,
        filter: FilterSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [ContactsApi.reducerPath]: ContactsApi.reducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        AuthApi.middleware,
        ContactsApi.middleware,
    ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);