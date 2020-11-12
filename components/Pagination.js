

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
  
    const pageNumbers = [];
    for(let i = 1; i <=Math.ceil(totalItems/itemsPerPage); i++){
      pageNumbers.push(i)
    }
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li className={number === currentPage ? 'page-item active' : 'page-item'}   key={number}>
              <a onClick={()=> paginate(number)} href="#" className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  export default Pagination