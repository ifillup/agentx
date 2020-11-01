import { Button, Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { ClubsContext } from '../context/clubsContext/clubsState';
import { Container, Row } from 'react-bootstrap';
const AddClub = ({clubId }) => {
  const [club, setClub] = useState({
    currency: 'USD',
    platform: 'PPP',
        
  });
  useEffect(() => {
    setClub(prev => ({...prev, clubID: clubId}))
    
  }, [clubId])
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
      <Form.Label>
        <em>Add a new Club</em>
      </Form.Label>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Club name</Form.Label>
        <Form.Control
          type='text'
          placeholder='ie Asia Union'
          onChange={changeHandler}
          value={club.name}
          name='name'
        />
        <Form.Label>Club ID</Form.Label>
        <Form.Control
          type='text'
          placeholder='6 digit club id code'
          onChange={changeHandler}
          name='clubID'
          value={club.clubID}
        />
        <Form.Label>Chip value</Form.Label>
        <Form.Control
          type='number'
          step='0.01'
          placeholder='if 5 chips equal 1 USD enter 5'
          onChange={changeHandler}
          name='chipValue'
          value={club.chipValue}
        />
        <Form.Label>Currency</Form.Label>
        <Form.Control as='select' onChange={changeHandler} name='currency'>
          <option selected value='USD'>
            USD
          </option>
        </Form.Control>
        <Form.Label>Platform</Form.Label>
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
