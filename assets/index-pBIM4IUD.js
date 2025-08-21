(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();function r(){return`
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
  `}function n(){return`
    <header class="content-header">
      <div class="header-bar">
        <h1>Overview</h1>
        <div>
          <a href="#">Hello, sori!</a>
          <button class="menu">
            <i class="ico-menu"></i>
          </button>
        </div>
      </div>
      <ul class="tabs">
        <li class="is-active">music</li>
        <li>podcast</li>
      </ul>
    </header>
  `}function o(){return`  
    <section class="section-overview">
      <ul>
        <li>
          <small>총 재생 수</small>
          <span class="cases">2,486</span>
        </li>
        <li>
          <small>총 재생 시간</small>
          <span class="hours">120</span>
        </li>
        <li>
          <small>좋아요한 곡</small>
          <span class="cases">165</span>
        </li>
        <li>
          <small>내 플레이리스트</small>
          <span class="cases">6</span>
        </li>
      </ul>
    </section>
  `}async function d(){return` 
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
        ${(await(await fetch("http://itunes.apple.com/search?term=coldplay&entity=song&limit=20")).json()).results.map((e,s)=>({artist:e.artistName,title:e.trackName,artwork:e.artworkUrl60,index:s+1,genre:e.primaryGenreName,preview:e.previewUrl})).map(e=>`
      <ul>
        <li title="check">
          <div class="checkbox">
            <input id="check-${e.index}" type="checkbox" />
            <label for="check-${e.index}"></label>
          </div>
        </li>
        <li title="title">
          <img
            src="${e.artwork}"
            alt=""
          />
          <div>${e.title}</div>
        </li>
        <li>${e.artist}</li>
        <li>${e.genre}</li>
        <li>
          <audio
            controls=""
            src="${e.preview}"
          ></audio>
        </li>
      </ul>
    `).join("")}
      </div>
    </section>
  `}(async()=>{document.querySelector("#app").innerHTML=`
  ${r()}
  <main class="content-music">
    ${n()}
    ${o()}
    ${await d()}
  </main>
`;const l=document.getElementById("checkAll"),i=document.querySelectorAll("input[type='checkbox']");l.addEventListener("click",t=>{i.forEach(e=>{e.checked=t.target.checked})}),i.forEach(t=>{t.addEventListener("click",()=>{const e=[...i].filter(s=>s!==l).every(s=>s.checked);l.checked=e})}),document.querySelector("header .menu").addEventListener("click",()=>{document.querySelector(".sidebar").classList.toggle("is-active")})})();
