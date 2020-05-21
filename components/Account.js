import React from 'react';

const Account = ({ transaction }) => {
  return <div>{Object.entries(transaction)}</div>;
};

export default Account;
