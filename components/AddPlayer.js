import { Button, Form } from 'react-bootstrap';

const AddPlayer = () => {
  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>
        <Form.Control type='text' placeholder='Player name' />
        <Form.Text className='text-muted'>
          A player is a grouping of accounts for accounting purposes
        </Form.Text>
        <Button variant='primary' type='submit'>
          Add Player
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddPlayer;
