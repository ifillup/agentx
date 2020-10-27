import { Button, Form, Container } from 'react-bootstrap';
import { UserContext } from '../context/userContext/userState';
import { useContext, useState } from 'react';
import { Row } from 'react-bootstrap';

const Register = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp, setSignUp] = useState(false);
  const { login, register } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    register(email, password);
  };
  

  return (
    <div>
      <Button variant={signUp || 'outline-primary'} onClick={e => setSignUp(false)}>Sign In</Button>
      <Button variant={signUp && 'outline-primary'} onClick={e => setSignUp(true)}>Registration</Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {signUp && (
          <Form.Group controlId='formBasicPasswordConfirm'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
         {password === confirmPassword || (<Form.Text id="passwordHelpBlock" muted>
           Passwords must match.
          </Form.Text>)}
          </Form.Group>
        
        )}
        {/* <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Keep me logged in' />
        </Form.Group> */}
        {signUp ? (<Button variant='primary' disabled={password !== confirmPassword} onClick={handleRegistration}>
          Register
        </Button>) : (<Button variant='primary' type='submit'>
          Login
        </Button>)} 
        
      </Form>
      <style jsx>{`
        div {
          padding-top: 50px;
          max-width: 400px;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Register;
