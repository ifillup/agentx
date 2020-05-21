import { Button, Form } from 'react-bootstrap';

const AddRelationship = () => {
  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>
        <Form.Control as='select'>
          <option>make a dropdown of all a users players</option>
        </Form.Control>
        <Form.Control as='select'>
          <option>make a dropdown of all loaded accounts ID+USERNAME</option>
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add Account
      </Button>
    </Form>
  );
};

export default AddRelationship;
