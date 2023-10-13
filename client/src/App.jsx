import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
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
import Background from './components/Background';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Auth from './utils/auth';

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
      <Provider store={store}>
        <Background>
          <div className='container-fluid'>
            <div className='row'>
              <Header />
            </div>
            <Nav />
            <Outlet />
            {Auth.loggedIn() && (
              <div className="d-flex justify-content-center align-items-center">
                <Cart />
              </div>
            )}
          </div>
          <Footer />
        </Background>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
