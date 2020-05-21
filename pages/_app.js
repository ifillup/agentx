import Layout from '../components/Layout';

import { StatementProvider } from '../context/statementContext/StatementState';

function MyApp({ Component, pageProps }) {
  return (
    <StatementProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StatementProvider>
  );
}

export default MyApp;
