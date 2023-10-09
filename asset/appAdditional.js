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

if (sectionNews) {
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
}
const sectionDocument = document.querySelector(".document");

if (sectionDocument) {
  const documnetDots = sectionDocument.querySelectorAll(".switch-item");
  const documnetContents = sectionDocument.querySelectorAll(".document__card");
  const documnetButton = sectionDocument.querySelector(".document-button");

  let falseInnerButtonDocument = " ";
  //   documnetContents.forEach((item) => logicdocumnetPage(item));

  documnetDots.forEach((item) =>
    item.addEventListener("click", () => {
      toggleDocumentContent();
    })
  );
  toggleDocumentContent();

  documnetButton.addEventListener("click", () => {
    if (documnetButton.attributes["contentActive"].value === "true") {
      documnetButton.attributes["contentActive"].value = "false";
      toggleDocumentContent();
    } else {
      documnetButton.attributes["contentActive"].value = "true";
      toggleDocumentContent();
    }
  });

  function toggleDocumentContent() {
    let countContent = 0;
    documnetDots.forEach((dotNode) => {
      if (dotNode.className.includes("active")) {
        documnetContents.forEach((contentNode) => {
          contentNode.classList.remove("active");
          if (dotNode.attributes["key-switch"].value === "all") {
            countContent++;
            contentNode.classList.add("active");
            return;
          }
          if (
            contentNode.attributes["data-switch"].value ===
            dotNode.attributes["key-switch"].value
          ) {
            countContent++;
            contentNode.classList.add("active");
          }
        });
        calcInnerButton();
      }
    });
  }
  function calcInnerButton() {
    if (documnetButton.attributes["contentActive"].value === "true") {
      console.log(documnetContents.length);
      falseInnerButtonDocument = `Закрыть`;
      documnetButton.innerHTML = falseInnerButtonDocument;
      let countContent = 0;
      documnetContents.forEach((itemDoc, index) => {
        if (itemDoc.className.includes("active")) {
          countContent++;
          //   if (countContent > 8) {
          //     itemDoc.classList.remove("active");
          //   }
        }
      });
      if (countContent <= 8) {
        console.log("documnetContents.length");
        documnetButton.style.display = "none";
      } else {
        documnetButton.style.display = "block";
      }
    } else {
      let countContent = 0;
      documnetContents.forEach((itemDoc, index) => {
        if (itemDoc.className.includes("active")) {
          countContent++;
          if (countContent > 8) {
            itemDoc.classList.remove("active");
          }
        }
      });
      if (countContent > 8) {
        documnetButton.style.display = "block";
        falseInnerButtonDocument = `Показать еще <span>${
          countContent - 8
        } док.</span>`;
        documnetButton.innerHTML = falseInnerButtonDocument;
      } else {
        documnetButton.style.display = "none";
      }
    }
  }
}
