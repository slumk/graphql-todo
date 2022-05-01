import { createRoot } from 'react-dom/client'
import App from './App'
import './main.css'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";

const divElement = document.getElementById('root')
const client = new ApolloClient({
    uri: 'http://localhost:7000/graphql',
    cache: new InMemoryCache()
  });
const root = createRoot(divElement)
root.render(
    <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
)