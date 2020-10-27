import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';
import { ClubsProvider } from '../context/clubsContext/clubsState';
import { UserProvider } from '../context/userContext/userState';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import { Spinner } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  //spin up the heroku instance on page load
  const [ready, setReady] = useState(false)
  useEffect(() => {
    fetch('https://agentx-strapi.herokuapp.com/').then(res => setReady(res.status < 400));
    
  }, []);
  return (
    <UserProvider>
      <StatementProvider>
        <PlayersProvider>
          <ClubsProvider>
            {!ready && (<Spinner animation='grow' > <span>it's been a while, let me start the development server </span> </Spinner>)}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ClubsProvider>
        </PlayersProvider>
      </StatementProvider>
    </UserProvider>
  );
}

export default MyApp;
