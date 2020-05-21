import { useState } from 'react';
const CopyPasteInput = ({}) => {
  const [formState, setFormState] = useState({
    club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '',
  });
  const [upload, setUpload] = useState([]);
  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const onUpload = (e) => {
    e.preventDefault();
    parseUpload();
  };

  const parseUpload = () => {
    console.log(formState.club.split('\n'));
    let clubArr = formState.club.split('\n');
    let playernameArr = formState.playername.split('\n');
    let playerIDArr = formState.playerID.split('\n');
    let profitArr = formState.profit.split('\n');
    let rakeArr = formState.rake.split('\n');

    let statement = clubArr.map((club, i) => {
      return {
        club,
        playername: playernameArr[i],
        playerID: playerIDArr[i],
        profit: profitArr[i],
        rake: rakeArr[i],
      };
    });
    console.log(statement);
    setUpload(statement);
  };

  return (
    <>
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
        <button onClick={onUpload}>Upload</button>
      </form>

      {upload.length > 0 && <h1>{upload.length} entries uploaded</h1>}
    </>
  );
};

export default CopyPasteInput;
