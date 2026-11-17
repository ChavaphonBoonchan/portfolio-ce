const rows = document.querySelector("#rows");


fetch("anime_data.json")
  .then((response) => {
    
    console.log(response);
    return response.text();})
  
  
  .then((text) => {

    
    
    console.log(text);
    console.log(typeof(text));
    
    const animeList = JSON.parse(text)
    console.log(typeof(animeList))
    console.log(animeList)
    for (const anime of animeList) { 
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img class="cover" src="${anime.image}" alt="${anime.title}"></td>
      <td class="title">${anime.title}</td>
      <td>${anime.type}</td>
      <td>${anime.episodes}</td>
      <td>${anime.year}</td>
      <td>${anime.studio}</td>
    `;
    rows.append(tr);
    }
  });


