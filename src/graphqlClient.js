import React from 'react';
import {GraphQLClient} from 'graphql-request';

const url = "https://qiliyuteke.us-east-a.ibm.stepzen.net/api/belligerent-waterbuffalo/__graphql";

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient (url, {
        headers: {
            Authorization: `apiKey ${apiKey}`,
        },
});

export default client;