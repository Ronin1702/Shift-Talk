import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Auth from './utils/auth';
import './index.css';

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

const cart = {
  zIndex: 1001,
  position: 'fixed',
  top: '88px',
  right: '15px',
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className='row-fluid'>
          <Header />
        </div>
        <Nav />
        <div style={cart}>{Auth.loggedIn() && <Cart />}</div>
        <div className='outlet-container'>
          <Outlet />
        </div>
      </Provider>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
