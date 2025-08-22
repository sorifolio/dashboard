export async function SongList() {
  const response = await fetch(
    "https://itunes.apple.com/search?term=coldplay&entity=song&limit=20"
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

  const rows = songs
    .map(
      (item) => `
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
    `
    )
    .join("");

  return ` 
    <section>
      <div class="list">
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
        ${rows}
      </div>
    </section>
  `;
}
