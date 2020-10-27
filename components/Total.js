const Total = ({ total, formatNumber }) => {
  return (
    <div className="d-flex justify-content-end">
    <h4>Total: {formatNumber(total)} USD</h4>
    </div>
  )
};

export default Total;
