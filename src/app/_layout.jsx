import  React from 'react';
import { Stack } from "expo-router";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={client}>
        <Stack>
            <Stack.Screen name="index" options={{title: 'Exercises'}} />
        </Stack>
        </QueryClientProvider>
    );
}