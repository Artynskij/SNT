// burger ----------------------------------------------------------------------------------------
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;
console.log(headerHeight);
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

// switch ----------------------------------------------------------------------------------------
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

// range ----------------------------------------------------------------------------------------

// const createRange = (range, inputOne, inputTwo) => {
const rangeSliderParadise = document.getElementById("range-slider--paradise");
const rangeSliderPlanCost = document.getElementById("range-slider--plancost");
const rangeSliderPlanSquare = document.getElementById(
  "range-slider--plansquare"
);

if (rangeSliderParadise) {
  noUiSlider.create(rangeSliderParadise, {
    start: [2, 6],
    connect: true,
    step: 0.1,
    range: {
      min: [1],
      max: [8],
    },
  });

  const input0 = document.getElementById("input-0--paradise");
  const input1 = document.getElementById("input-1--paradise");
  const inputs = [input0, input1];

  rangeSliderParadise.noUiSlider.on("update", function (values, handle) {
    // console.log(typeof values[handle]);
    // inputs[handle].value = Math.round(values[handle]);
    const number = Number(values[handle]);
    console.log(number);
    inputs[handle].value = Number(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSliderParadise.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
if (rangeSliderPlanCost) {
  noUiSlider.create(rangeSliderPlanCost, {
    start: [2, 6],
    connect: true,
    step: 0.1,
    range: {
      min: [1],
      max: [8],
    },
  });

  const input0 = document.getElementById("input-0--plancost");
  const input1 = document.getElementById("input-1--plancost");
  const inputs = [input0, input1];

  rangeSliderPlanCost.noUiSlider.on("update", function (values, handle) {
    // console.log(typeof values[handle]);
    // inputs[handle].value = Math.round(values[handle]);
    const number = Number(values[handle]);
    console.log(number);
    inputs[handle].value = Number(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSliderPlanCost.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
if (rangeSliderPlanSquare) {
  noUiSlider.create(rangeSliderPlanSquare, {
    start: [30, 92],
    connect: true,
    step: 0.1,
    range: {
      min: [25],
      max: [100],
    },
  });

  const input0 = document.getElementById("input-0--plansquare");
  const input1 = document.getElementById("input-1--plansquare");
  const inputs = [input0, input1];

  rangeSliderPlanSquare.noUiSlider.on("update", function (values, handle) {
    // console.log(typeof values[handle]);
    // inputs[handle].value = Math.round(values[handle]);
    const number = Number(values[handle]);
    console.log(number);
    inputs[handle].value = Number(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSliderPlanSquare.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
// };

// createRange('range-slider--paradise', "input-0--paradise", "input-1--paradise")
// createRange('range-slider--plancost', "input-0--plancost", "input-1--plancost")
// createRange('range-slider--plansquare', "input-0--plansquare", "input-1--plansquare")

//  slider ----------------------------------------------------------------------------------------
const swiperOne = new Swiper(".paradise-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination--paradise",
    clickable: true,
  },
});
const swiperTwo = new Swiper(".forlife-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//  change to icon on marketing ----------------------------------------------------------------------------------------

if (window.innerWidth < 570) {
  const marketingButton = document.querySelector(".marketing-button");
  const img = document.createElement("img");
  img.src = "/asset/img/icons/seeIcon.svg";
  marketingButton.innerHTML = " ";
  marketingButton.append(img);
}
//  switch progress content --------------------------------------------------------------

const progressBlock = document.querySelector(".progress");

const progressDots = progressBlock.querySelectorAll(".switch-item");
const progressContents = progressBlock.querySelectorAll(".progress-content");
progressDots.forEach(item => item.addEventListener('click', ()=> {toggleProgressContent()}));
toggleProgressContent();
function toggleProgressContent() {
  progressDots.forEach((dotNode) => {
    if (dotNode.className.includes("active")) {
      progressContents.forEach(contentNode => {
        contentNode.classList.remove('active')
        if(contentNode.attributes["data-content"].value === dotNode.attributes["key-content"].value){
          contentNode.classList.add('active')
        }
      })
      console.log(dotNode.attributes["key-content"].value);
    }
  });
}

//  switch plan content --------------------------------------------------------------

const planBlock = document.querySelector(".plan");
const planSwitchDots = planBlock.querySelector(".plan-switch--dots");

const planDots = planSwitchDots.querySelectorAll(".switch-item");
const planContent = planBlock.querySelectorAll(".plan-card");
console.log(planDots);
planDots.forEach(item => item.addEventListener('click', ()=> {togglePlanContent()}));
togglePlanContent();

function togglePlanContent() {
  planDots.forEach((dotNode) => {
    
    if (dotNode.className.includes("active")) {
      planContent.forEach(contentNode => {
        contentNode.classList.remove('active')
        if(contentNode.attributes["data-content"].value === dotNode.attributes["key-content"].value){
          contentNode.classList.add('active')
        }
      })
      console.log(dotNode.attributes["key-content"].value);
    }
  });
}


//  Block credit --------------------------------------------------------------


const rangeSliderCredit = document.getElementById("range-slider--creditcost");
