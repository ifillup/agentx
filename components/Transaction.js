const Transaction = ({ transaction }) => {
  return (
    //   <h5>{Object.values(transaction)}</h5>
    <table class='table table-striped'>
      <thead>
        <tr>
          <th>Club</th>
          <th>Account</th>
          <th>WinLoss</th>
          <th>Rake</th>
          <th>Rakeback</th>
          <th>Total NET</th>
          <th>MYR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{transaction.club}</td>
          <td>{transaction.playername}</td>
          <td>{transaction.playerID}</td>
          <td>{transaction.rake}</td>
          <td>{+transaction.rake * 0.5}</td>
          <td>{transaction.profit}</td>
          <td>
            <span class='net'>
              {+transaction.profit + +transaction.rake * 0.5}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;

{
  /* club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '', */
}
