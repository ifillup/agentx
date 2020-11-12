import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CopyPasteInput from '../components/CopyPasteInput';
import Transactions from '../components/Transactions';
import { StatementContext } from '../context/statementContext/statementState';
import Pagination from '../components/Pagination'
const InputData = () => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const { transactions } = useContext(StatementContext);

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Row>
      <Col xl={7}>
        <CopyPasteInput />
      </Col>
      <Col  >
      {currentItems.length >0 ? (<table className='table table-sm '>
      <thead>
        <tr>
          <th>Club</th>
          <th>Account</th>
          <th>WinLoss</th>
          <th>Rake</th>
          <th>Rakeback</th>
        </tr>
        </thead>
      {currentItems.map((t, i) => (
        <tr key={i}>
          <td>{t.club}</td>
          <td>{t.playerID}</td>
          <td>{t.playername}</td>
          <td>{t.profit}</td>
          <td>{t.rake}</td>
        </tr>
      ))}
      </table>) : <p>No data found</p>}
      <Pagination currentPage={currentPage} paginate={paginate} itemsPerPage={itemsPerPage} totalItems={transactions.length} />
      </Col>
    </Row>
  );
};

export default InputData;
