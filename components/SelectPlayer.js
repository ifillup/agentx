import { Button, Form } from 'react-bootstrap';

const SelectPlayer = () => {
  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>
        <Form.Control as='select'>
          <option>make a dropdown of all a users players</option>
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Retrive statement
      </Button>
    </Form>
  );
};

export default SelectPlayer;
