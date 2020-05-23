import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../context/userContext/userState';
import { useContext, useState } from 'react';

const Register = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Login / Register </Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Keep me logged in' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Login
      </Button>
      <Button variant='outline-primary' onClick={handleRegistration}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
