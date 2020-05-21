import Link from 'next/link';
import Head from 'next/head';
import { Nav } from 'react-bootstrap';

export default function Layout({ children, title = 'agentX' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossOrigin='anonymous'
        ></link>
      </Head>
      <header>
        <Nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |
          <Link href='/clubs'>
            <a>Clubs</a>
          </Link>{' '}
          |
          <Link href='/players'>
            <a>Players</a>
          </Link>
          |
          <Link href='/inputData'>
            <a>Input Data</a>
          </Link>
          |
          <Link href='/reports'>
            <a>Reports</a>
          </Link>
        </Nav>
      </header>

      {children}

      <footer>{'Copyright agentx 2020'}</footer>
      <style jsx global>{`
        .form-group {
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}
