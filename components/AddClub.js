import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { ClubsContext } from '../context/clubsContext/clubsState';

const AddClub = () => {
  const [club, setClub] = useState({
    currency: 'RMB',
    platform: 'PPP',
  });
  const { addClub } = useContext(ClubsContext);

  const changeHandler = (e) => {
    let update = { [e.target.name]: e.target.value };
    console.log(update);
    setClub((prevClub) => ({
      ...prevClub,
      ...update,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClub(club);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Club name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Club name'
          onChange={changeHandler}
          name='name'
        />
        <Form.Control
          type='text'
          placeholder='ClubID'
          onChange={changeHandler}
          name='clubID'
        />
        <Form.Control
          type='text'
          placeholder='Club code'
          onChange={changeHandler}
          name='code'
        />
        <Form.Control
          type='number'
          step='0.01'
          placeholder='Chip value'
          onChange={changeHandler}
          name='chipValue'
        />
        <Form.Control as='select' onChange={changeHandler} name='currency'>
          <option selected value='RMB'>
            RMB
          </option>
        </Form.Control>
        <Form.Control as='select' onChange={changeHandler} name='platform'>
          <option selected value='PPP'>
            PPPoker
          </option>
          <option value='PB'>PokerBros</option>
        </Form.Control>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddClub;
