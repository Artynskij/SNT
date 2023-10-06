// burger ----------------------------------------------------------------------------------------
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;
document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  });
});

// показать больше news page ----------------------------------------------------------------------------------------
let widthWindwow = getWidthWindow();
const switchNodes = document.querySelectorAll(".switch");

switchNodes.forEach((switchN) => {
  const switchItems = switchN.querySelectorAll(".switch-item");
  let prevNode = switchItems[0];
  switchItems.forEach((itemNode, index) => {
    if (index === 0) itemNode.classList.add("active");

    itemNode.addEventListener("click", () => {
      prevNode.classList.remove("active");
      itemNode.classList.add("active");
      prevNode = itemNode;
    });
  });
});

const logicNewsPage = (newsContent) => {
  const newsCards = newsContent.querySelectorAll(".news__card");

  const buttonOpenAllNews = newsContent.querySelector(".news-open");
  const falseInnerButton = `Показать ещё <span>${contentHidden(
    newsCards
  )} публикация</span>`;

  buttonOpenAllNews.innerHTML = falseInnerButton;
  buttonOpenAllNews.addEventListener("click", () => {
    if (buttonOpenAllNews.attributes["contentActive"].value === "false") {
      buttonOpenAllNews.attributes["contentActive"].value = "true";
      buttonOpenAllNews.innerHTML = "скрыть новости";
      newsCards.forEach((item, index) => {
        item.classList.add("active");
      });
    } else {
      buttonOpenAllNews.attributes["contentActive"].value = "false";
      buttonOpenAllNews.innerHTML = falseInnerButton;
      contentHidden(newsCards);
    }
  });
};
function getWidthWindow() {
  if (window.innerWidth > 1000) {
    return "big";
  }
  if (window.innerWidth < 1000 && window.innerWidth > 570) {
    return "middle";
  }
  if (window.innerWidth < 570) {
    return "small";
  }
}

function contentHidden(newsCards) {
  let countContent = widthWindwow === "big" ? 9 : 6;
  let hiddenContent = 0;
  //   console.log(countContent);
  newsCards.forEach((item, index) => {
    if (index + 1 > countContent) {
      hiddenContent++;
      item.classList.remove("active");
    }
  });
  return hiddenContent;
}

// переключатель контента news page ----------------------------------------------------------------------------------------

const sectionNews = document.querySelector(".news");

const newsDots = sectionNews.querySelectorAll(".switch-item");
const newsContents = sectionNews.querySelectorAll(".news-content--block");

newsContents.forEach((item) => logicNewsPage(item));

newsDots.forEach((item) =>
  item.addEventListener("click", () => {
    toggleProgressContent();
  })
);
toggleProgressContent();
function toggleProgressContent() {
  newsDots.forEach((dotNode) => {
    if (dotNode.className.includes("active")) {
      newsContents.forEach((contentNode) => {
        contentNode.classList.remove("active");
        if (
          contentNode.attributes["data-switch"].value ===
          dotNode.attributes["key-switch"].value
        ) {
          contentNode.classList.add("active");
        }
      });
      console.log(dotNode.attributes["key-switch"].value);
    }
  });
}
