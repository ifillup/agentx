import Layout from '../components/Layout';

import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';
import { ClubsProvider } from '../context/clubsContext/clubsState';
import { UserProvider } from '../context/userContext/userState';

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
