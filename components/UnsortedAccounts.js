import { useState, useContext } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import Account from './Account';

const UnsortedAccounts = () => {
  const { transactions } = useContext(StatementContext);

  return (
    <>
    unsorted accounts
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <Account transaction={transaction} />
        ))}
    </>
  );
};

export default UnsortedAccounts;
