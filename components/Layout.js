import Link from 'next/link';
import Head from 'next/head';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import { UserContext } from '../context/userContext/userState';
import userReducer from '../context/userContext/userReducer';
import Register from '../components/Register';
export default function Layout({ children, title = 'agentX' }) {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <link
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossOrigin='anonymous'
        ></link> */}
        {/* <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        /> */}
      </Head>
      <Navbar sticky='top'>
        <Link href='/' passHref>
          <Navbar.Brand>{title}</Navbar.Brand>
        </Link>
        <Nav className='mr-auto'>
          <Link href='/clubs' passHref>
            <Nav.Link>Clubs</Nav.Link>
          </Link>
          <Link href='/players' passHref>
            <Nav.Link>Players</Nav.Link>
          </Link>
          <Link href='/inputData' passHref>
            <Nav.Link>Input Data</Nav.Link>
          </Link>
          <Link href='/reports' passHref>
            <Nav.Link>Reports</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Navbar.Text bsPrefix='ml-auto p-2 bd-highlight'>
            {user?.username || 'please login'}
          </Navbar.Text>
          {user && <Nav.Link onClick={logout}>Logout</Nav.Link>}
        </Nav>
      </Navbar>

      {user === null ? <Register /> : children}

      <footer className='fixed-bottom'>
        Copyright {title} {new Date().getFullYear()}
      </footer>
      <style jsx global>{`
        body {
          min-height: 100vh;
        }
        // .container {
        //   max-width: 400px;
        // }
      `}</style>
    </>
  );
}
