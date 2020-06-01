import Club from '../components/Club';
import { Table } from 'react-bootstrap';
const ClubList = ({ clubs }) => {
  return (
    <div>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Club</th>
            <th>Club ID</th>
            <th>Chipvalue</th>
          </tr>
        </thead>
        <tbody>
          {clubs.length > 0 && clubs.map((club) => <Club club={club} />)}
        </tbody>
      </Table>
      <style jsx>{`
        div {
          max-width: 70%;
        }
      `}</style>
    </div>
  );
};

export default ClubList;
