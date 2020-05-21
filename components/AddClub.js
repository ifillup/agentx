import { Button, Form } from 'react-bootstrap';

const AddClub = () => {
  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Club name</Form.Label>
        <Form.Control type='text' placeholder='Club name' />
        <Form.Control type='text' placeholder='Club code' />
        <Form.Control type='text' placeholder='Chip value' />
        <Form.Control as='select'>
          <option>RMB</option>
        </Form.Control>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddClub;
