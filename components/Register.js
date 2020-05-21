import { Button, Form } from 'react-bootstrap';

const Register = ({ handleRegistration, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Login / Register </Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
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
