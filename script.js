//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// let showId = ;
// let episodeStore=;

function makePageForEpisodes(episodeList) {
  searchBar(episodeList);
  const rootElem = document.getElementById("root");
  const episodeContainer = document.createElement("section");
  rootElem.appendChild(episodeContainer);

  episodeList.forEach((episode) => {
    const heading = document.createElement("h2");
    const image = document.createElement("img");
    const episodeDescription = document.createElement("div");
    heading.textContent = `${episode.name} - ${episodeCode(episode)}`;
    image.src = episode.image.medium;
    episodeDescription.innerHTML = episode.summary;
    episodeDescription.classList.add("summary");
    const episodeCard = document.createElement("article");
    episodeCard.setAttribute("id", episodeCode(episode));
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

function searchBar(episodeList) {
  const nav = document.createElement("nav");
  const episodeSearch = document.createElement("input");
  episodeSearch.setAttribute("type", "search");
  nav.appendChild(episodeSearch);
  const rootElem = document.getElementById("root");
  rootElem.appendChild(nav);
  episodeSearch.addEventListener("input", function () {
    episodeList.forEach((episode) => {
      const { name, summary } = episode;
      let shouldShow;
      if (episodeSearch.value === "") {
        shouldShow = true;
      } else {
        name.includes(episodeSearch.value === "search".toLowerCase) ||
          summary.includes(episodeSearch.value === "search".toLowerCase);
      }
    });
  });
}
window.onload = setup;
