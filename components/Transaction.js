const Transaction = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.club}</td>
      <td>{transaction.playername}</td>
      <td>{transaction.playerID}</td>
      <td>{transaction.rake}</td>
      <td>{+transaction.rake * 0.5}</td>
      <td>{transaction.profit}</td>
      <td>
        <span class='net'>{+transaction.profit + +transaction.rake * 0.5}</span>
      </td>
    </tr>
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
