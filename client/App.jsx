import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Results from './pages/Results';
import background from './assets/images/goldback';

import { StoreProvider } from './utils/GlobalState';

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
      <StoreProvider>
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
          <Nav />
          <Outlet />
          <Footer />
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </div>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;