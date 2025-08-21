export function Aside() {
  return `
      <aside class="sidebar">
        <a href="/" class="logo">
          <span>soricode</span>
        </a>
        <nav>
          <a href="#" class="is-active">
            <i class="ico-list"></i>
            <span>overview</span>
          </a>
          <a href="#">
            <i class="ico-music"></i>
            <span>playlist</span>
          </a>
          <a href="#">
            <i class="ico-star"></i>
            <span>favorites</span>
          </a>
          <a href="#">
            <i class="ico-chart"></i>
            <span>charts</span>
          </a>
        </nav>
      </aside>
  `;
}
