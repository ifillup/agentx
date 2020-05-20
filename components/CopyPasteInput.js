import { useState } from 'react';
const CopyPasteInput = ({}) => {
  const [formState, setFormState] = useState({
    club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '',
  });
  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form>
      <textarea
        onChange={changeHandler}
        id='club'
        placeholder='club'
        rows='20'
        cols='14'
      />
      <textarea
        onChange={changeHandler}
        id='playername'
        placeholder='playername'
        rows='20'
        cols='14'
      />
      <textarea
        onChange={changeHandler}
        id='playerID'
        placeholder='playerID'
        rows='20'
        cols='14'
      />
      <textarea
        id='profit'
        onChange={changeHandler}
        placeholder='chips won/loss'
        rows='20'
        cols='14'
      />
      <textarea
        id='rake'
        onChange={changeHandler}
        placeholder='rake paid'
        rows='20'
        cols='14'
      />
      <button>Upload</button>
    </form>
  );
};

export default CopyPasteInput;
