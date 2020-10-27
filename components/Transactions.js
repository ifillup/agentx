import Transaction from '../components/Transaction';

const Transactions = ({ transactions }) => {
  return (
    <table class='table table-striped'>
      <thead>
        <tr>
          <th>Club</th>
          <th>Account</th>
          <th>WinLoss</th>
          <th>Rake</th>
          <th>Rakeback</th>
          <th>Total Chips</th>
          <th>TOTAL USD</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
