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
    
      {user === null ? <Register /> : <Container className='' fluid={true}>{children}</Container>}
      
      <footer className=''>
        Copyright {title} {new Date().getFullYear()}
      </footer>
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          margin-bottom: 24px;
        }
        footer {
          
          position: fixed;
          bottom: 0;
        }
        
      `}</style>
    </>
  );
}
