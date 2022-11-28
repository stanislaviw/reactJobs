function Pagination() {

  const handleClick = (event) => {
    
    let link = document.getElementsByClassName('pagination_item');

    for (let i = 0; i < link.length; i++) {
      link[i].classList.remove("active");
    }

    event.currentTarget.classList.add("active")
  };

  return (
    <div className="pagination">
        <div className="pagination_links">
          <a href="#" className="pagination_item pagination_icon"><i className="large material-icons">keyboard_arrow_left</i></a>
          <a href="#" onClick={handleClick} className="pagination_item active">1</a>
          <a href="#" onClick={handleClick} className="pagination_item">2</a>
          <a href="#" onClick={handleClick} className="pagination_item">3</a>
          <a href="#" onClick={handleClick} className="pagination_item">4</a>
          <a href="#" onClick={handleClick} className="pagination_item">5</a>
          <a href="#" onClick={handleClick} className="pagination_item">6</a>
          <a href="#" onClick={handleClick} className="pagination_item">7</a>
          <a href="#" className="pagination_item pagination_icon"><i className="large material-icons">keyboard_arrow_right</i></a>
        </div>
    </div>
  )
}

export {Pagination};