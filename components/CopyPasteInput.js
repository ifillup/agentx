import { useState, useContext } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import { Button} from 'react-bootstrap';
const CopyPasteInput = ({}) => {
  const [columnsView, setColumnsView] = useState(false);
  const [formState, setFormState] = useState({
    club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '',
  });
  const [total, setTotal] = useState('');
  
  //for tab seperated spreadsheet data
  const onUploadTotal = (e) => {
    e.preventDefault();
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
    setTotal('');
    return addTransactions(players);
  };

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
    setFormState({
      club: '',
      playername: '',
      playerID: '',
      profit: '',
      rake: '',
    });
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
    <Button variant={'light'} onClick={e => setColumnsView(prev=> !prev)}>{columnsView ? 'Aggregate' : 'Columns'}</Button>
    {columnsView ? (<form>
        <textarea
          onChange={changeHandler}
          id='club'
          value={formState.club}
          placeholder='club'
          rows='20'
          cols='14'
        />
        <textarea
          onChange={changeHandler}
          id='playername'
          value={formState.playername}
          placeholder='playername'
          rows='20'
          cols='14'
        />
        <textarea
          onChange={changeHandler}
          id='playerID'
          value={formState.playerID}
          placeholder='playerID'
          rows='20'
          cols='14'
        />
        <textarea
          id='profit'
          value={formState.profit}
          onChange={changeHandler}
          placeholder='chips won/loss'
          rows='20'
          cols='14'
        />
        <textarea
          id='rake'
          onChange={changeHandler}
          value={formState.rake}
          placeholder='rake paid'
          rows='20'
          cols='14'
        />
        <button onClick={onUpload}>Upload</button>
      </form>) : (
        <div>
          <div className="">
        <textarea
        id='spreedsheet'
        onChange={(e) => setTotal(e.target.value)}
        value={total}
        placeholder='Club  Account  Win/Loss  Rake  Rakeback'
        rows='20'
        cols='70'
      />
      </div>
      <button onClick={onUploadTotal}>Upload</button>
      </div>
      )}
      
      </>
      
      
  );
};

export default CopyPasteInput;
