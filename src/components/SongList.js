export function SongList() {
  return ` 
    <section>
      <div class="list">
        <ul>
          <li title="check">
            <div class="checkbox">
              <input id="check" type="checkbox" />
              <label for="check"></label>
            </div>
          </li>
          <li title="title">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/60x60bb.jpg"
              alt=""
            />
            <div>A Sky Full of Stars</div>
          </li>
          <li>Coldplay</li>
          <li>Alternative</li>
          <li>
            <audio
              controls=""
              src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/31/4b/a2314b97-10b6-190c-72b3-45cc21bbf56b/mzaf_740612971315603868.plus.aac.p.m4a"
            ></audio>
          </li>
        </ul>
      </div>
    </section>
  `;
}
