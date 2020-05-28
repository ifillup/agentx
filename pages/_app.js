import Layout from '../components/Layout';
import { useEffect } from 'react';
import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';
import { ClubsProvider } from '../context/clubsContext/clubsState';
import { UserProvider } from '../context/userContext/userState';

function MyApp({ Component, pageProps }) {
  //spin up the heroku instance on page load
  useEffect(() => {
    fetch('https://agentx-strapi.herokuapp.com/');
    console.log('spining up the db');
  }, []);
  return (
    <UserProvider>
      <StatementProvider>
        <PlayersProvider>
          <ClubsProvider>
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
