/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform)
  });


  function filterGames(search) {
    allGameListItems.forEach((e) => {
      if (e.innerText.toLowerCase().includes(search)) {
        e.classList.remove('hidden-item');
      } else (
        e.classList.add('hidden-item'));
    }
    )
  }



  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game)

  })


  function renderFavouriteList() {
    myGamesList.innerHTML = '';
    myGames.forEach(game => {
      let listItemHTML = `<li class="list-group-item">${game}</li>`;
      myGamesList.innerHTML += listItemHTML;
    })
  }

  function addToFavouriteGames(game) {
    myGames.push(game);
    renderFavouriteList()
  }


  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
  })

});