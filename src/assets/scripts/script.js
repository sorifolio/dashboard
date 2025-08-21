document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("header .menu");
  menu.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("is-active");
  });

  async function renderSongList() {
    const response = await fetch(
      "http://itunes.apple.com/search?term=coldplay&entity=song&limit=20"
    );
    const data = await response.json();

    const songs = data.results.map((item, idx) => ({
      artist: item.artistName,
      title: item.trackName,
      artwork: item.artworkUrl60,
      index: idx + 1,
      genre: item.primaryGenreName,
      preview: item.previewUrl,
    }));

    const list = document.querySelector(".list");
    list.innerHTML = `
                <ul class="title">
              <li title="check">
                <div class="checkbox">
                  <input id="checkAll" type="checkbox" />
                  <label for="checkAll"></label>
                </div>
              </li>
              <li title="title">title</li>
              <li>artist</li>
              <li>genre</li>
              <li>preview</li>
            </ul>
    `;

    songs.forEach((item) => {
      list.innerHTML += `
            <ul>
              <li title="check">
                <div class="checkbox">
                  <input id="check-${item.index}" type="checkbox" />
                  <label for="check-${item.index}"></label>
                </div>
              </li>
              <li title="title">
                <img
                  src="${item.artwork}"
                  alt=""
                />
                <div>${item.title}</div>
              </li>
              <li>${item.artist}</li>
              <li>${item.genre}</li>
              <li>
                <audio
                  controls=""
                  src="${item.preview}"
                ></audio>
              </li>
            </ul>
      `;
    });

    const checkAll = document.getElementById("checkAll");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkAll.addEventListener("click", (event) => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = event.target.checked;
      });
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        const allChecked = [...checkboxes]
          .filter((checkbox) => checkbox !== checkAll)
          .every((checkbox) => checkbox.checked);
        checkAll.checked = allChecked;
      });
    });
  }

  renderSongList();
});
