import Layout from '../components/Layout';

import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';
import { ClubsProvider } from '../context/clubsContext/clubsState';

function MyApp({ Component, pageProps }) {
  return (
    <StatementProvider>
      <PlayersProvider>
        <ClubsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClubsProvider>
      </PlayersProvider>
    </StatementProvider>
  );
}

export default MyApp;
