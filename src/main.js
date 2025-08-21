import "@/assets/styles/common.scss";
import "@/assets/styles/style.scss";
import "@/assets/styles/responsive.scss";
import { Aside } from "@/components/Aside.js";
import { Header } from "@/components/Header.js";
import { Overview } from "@/components/Overview.js";
import { SongList } from "@/components/SongList.js";

(async () => {
  document.querySelector("#app").innerHTML = `
  ${Aside()}
  <main class="content-music">
    ${Header()}
    ${Overview()}
    ${await SongList()}
  </main>
`;

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

  const menu = document.querySelector("header .menu");
  menu.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("is-active");
  });
})();
