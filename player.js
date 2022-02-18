function getPlayer(player) {
    player.style.border = "3px solid red"
    player.style.margin = '10px'
    player.style.fontSize = "30px"
    player.style.padding = '20px'
    player.style.borderRadius = '25px'
}

function getplayerName(players) {
    players.style.color = 'green'
    players.style.textAlign = 'center'
}
const players = document.getElementsByClassName('player')
const playersName = document.getElementsByClassName('player-name')
for (const player of players) {
    getPlayer(player)
    player.addEventListener('click', function () {
        player.style.backgroundColor = 'green'
    })

}
for (const players of playersName) {
    getplayerName(players)

}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player')
    newPlayer.innerHTML = `
      <h4 class="player-name">player</h4>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        doloremque illum non necessitatibus! Accusantium incidunt id
        suscipit, qui beatae excepturi amet explicabo, eveniet quisquam sit
        rerum ut recusandae vitae voluptatem!
       </p>
    `;

    getPlayer(newPlayer)
    getplayerName(newPlayer)
    playersContainer.appendChild(newPlayer)
    players.addEventListener('click', function () {
        players.style.backgroundColor = 'red'
    });

}