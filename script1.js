const tabs = document.querySelectorAll(".portfolio_tabs button");
const portfolio = document.querySelector(".four_column_layout");
tabs.forEach(tab => tab.addEventListener("click", (event) => {
  if( !event.target.classList.contains("selected") ) {
    let portfolioPictures = [...portfolio.querySelectorAll(".portfolio_picture")];
    portfolioPictures.unshift(portfolioPictures.pop());
    portfolioPictures.forEach( pic => portfolio.append(pic) );
  }
  tags.forEach(t => t.classList.remove('selected'));
  event.target.classList.add("selected");
}));