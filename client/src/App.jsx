import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/images/goldback.png';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;