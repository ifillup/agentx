import Layout from '../components/Layout';

import { StatementProvider } from '../context/statementContext/statementState';
import { PlayersProvider } from '../context/playersContext/playersState';

function MyApp({ Component, pageProps }) {
  return (
    <StatementProvider>
      <PlayersProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlayersProvider>
    </StatementProvider>
  );
}

export default MyApp;
