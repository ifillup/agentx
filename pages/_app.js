import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';
import { ClubsProvider } from '../context/clubsContext/clubsState';
import { UserProvider } from '../context/userContext/userState';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  
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
