const rowsofgame = document.querySelector("#rowsofgame");
fetch("games_data.json")
  .then((response) => {
    
    console.log(response);
    return response.text();})
  
  
  .then((text) => {

    
    
    console.log(text);
    console.log(typeof(text));
    
    const gameList = JSON.parse(text)
    console.log(typeof(gameList))
    console.log(gameList)
    for (const game of gameList) { 
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img class="cover" src="${game.image}" alt="${game.name}"></td>
      <td class="title">${game.name}</td>
      <td>${game.system}</td>
      <td>${game.dev}</td>
    `;
    rowsofgame.append(tr);
    }
  });
