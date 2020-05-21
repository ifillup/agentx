import { useState, useContext } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
const CopyPasteInput = ({}) => {
  const [formState, setFormState] = useState({
    club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '',
  });

  //total, second for is for my sanity
  const [total, setTotal] = useState('');
  const onUploadTotal = (e) => {
    let totalArr = total.split(/\t|\n/);
    totalArr.pop();
    let players = [];
    for (let i = 0; i < totalArr.length; i = i + 5) {
      let player = {
        club: totalArr[i],
        playername: totalArr[i + 1],
        playerID: totalArr[i + 2],
        profit: totalArr[i + 3],
        rake: totalArr[i + 4],
      };
      players.push(player);
    }

    return addTransactions(players);
  };

  //above might be messy

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const { addTransactions } = useContext(StatementContext);

  const onUpload = (e) => {
    e.preventDefault();
    let upload = parseUpload();
    console.log(upload);
    addTransactions(upload);
  };

  const parseUpload = () => {
    console.log(formState.club.split('\n'));
    let clubArr = formState.club.split('\n');
    let playernameArr = formState.playername.split('\n');
    let playerIDArr = formState.playerID.split('\n');
    let profitArr = formState.profit.split('\n');
    let rakeArr = formState.rake.split('\n');

    return clubArr.map((club, i) => {
      return {
        club,
        playername: playernameArr[i],
        playerID: playerIDArr[i],
        profit: profitArr[i],
        rake: rakeArr[i],
      };
    });
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
      <h5>
        messy upload, same format as above - C/P straight from spreadsheet
      </h5>
      <textarea
        id='spreedsheet'
        onChange={(e) => setTotal(e.target.value)}
        placeholder='the lot'
        rows='20'
        cols='70'
      />
      <button onClick={onUploadTotal}>Upload</button>
      {/* 
      {upload.length > 0 && <h1>{upload.length} entries uploaded</h1>}
      {upload.length > 0 && <p>{upload.map((i) => Object.entries(i))}</p>} */}
    </>
  );
};

export default CopyPasteInput;
