import Link from 'next/link';
import Head from 'next/head';
import { Navbar, Nav, Container, Spinner } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import { ClubsContext } from '../context/clubsContext/clubsState';
import { UserContext } from '../context/userContext/userState';
import { PlayersContext } from '../context/playersContext/playersState';
import userReducer from '../context/userContext/userReducer';
import Register from '../components/Register';
export default function Layout({ children, title = 'agentX' }) {
  const { user, logout, loading } = useContext(UserContext);
  const { getClubs } = useContext(ClubsContext);
  const { getPlayers } = useContext(PlayersContext);
  //spin up the heroku instance on page load
  const [ready, setReady] = useState(false)
  useEffect(() => {
    fetch('https://agentx-strapi.herokuapp.com/').then(res => setReady(res.status < 400));
    getClubs();
    getPlayers();
  }, []);
  
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
          <Link href='/inputData' passHref>
            <Nav.Link>Input Data</Nav.Link>
          </Link>
          <Link href='/clubs' passHref>
            <Nav.Link>Clubs</Nav.Link>
          </Link>
          <Link href='/players' passHref>
            <Nav.Link>Players</Nav.Link>
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
    
      {user === null ? <Register loading={loading} /> : <Container className='' fluid={true}>{children}</Container>}
      
      {!ready && (<div className="d-flex"><Spinner animation='grow' ></Spinner> <span>it's been a while, let me start the development server </span> </div>)}
      <footer className=''>
        Copyright {title} {new Date().getFullYear()}
      </footer>
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          margin-bottom: 24px;
        }
        .container-fluid {
          margin-top: 40px;
        }
        footer {
          
          position: fixed;
          bottom: 0;
        }
        input, select {
          max-width: 400px
        }
        
      `}</style>
    </>
  );
}
