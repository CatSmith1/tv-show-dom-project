//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  const episodeContainer = document.createElement("section");
  rootElem.appendChild(episodeContainer);

  episodeList.forEach((episode) => {
    const heading = document.createElement("h2");
    const image = document.createElement("img");
    const episodeDescription = document.createElement("div");
    heading.textContent = `${episode.name} - ${episodeCode(episode)}`;
    image.src = episode.image.medium;
    episodeDescription.innerHTML = episode.summary;
    const episodeCard = document.createElement("article");
    episodeCard.append(heading, image, episodeDescription);
    episodeContainer.appendChild(episodeCard);
  });
}
function episodeCode(episode) {
  const { season, number } = episode;
  return `S${season.toString().padStart(2, "0")}E${number
    .toString()
    .padStart(2, "0")}`;
}

window.onload = setup;
