import "@/assets/styles/common.scss";
import "@/assets/styles/style.scss";
import "@/assets/styles/responsive.scss";
import { Aside } from "@/components/Aside.js";
import { Header } from "@/components/Header.js";
import { Overview } from "@/components/Overview.js";
import { SongList } from "@/components/SongList.js";

document.querySelector("#app").innerHTML = `
  ${Aside()}
  <main class="content-music">
    ${Header()}
    ${Overview()}
    ${SongList()}
  </main>
`;
