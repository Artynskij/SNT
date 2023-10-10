class SliderCost {
  constructor({ rangeElement, valueElement, options }) {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;

    // Attach a listener to "change" event
    this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute("min", this.options.min);
    this.rangeElement.setAttribute("max", this.options.max);
    this.rangeElement.value = this.options.cur;

    this.updateSlider();
  }

  // Format the money
  asMoney(value) {
    return (
      parseFloat(value).toLocaleString("en-US", { maximumFractionDigits: 2 }) +
      this.options.afterNumber
    );
  }

  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.rangeElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;
    return (
      "background: linear-gradient(to right,  #2E7A6E " +
      percentage +
      "%, #d3edff " +
      percentage +
      "%, #dee1e2 100%)"
    );
  }

  updateSlider(newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}
// 1 range
let rangeElementCreditCost = document.querySelector(
  '.range--credit__cost [type="range"]'
);
let valueElementCreditCost = document.querySelector(
  ".range--credit__cost .range__value span"
);

const optionsCreditCost = {
  min: 1000000,
  max: 30000000,
  cur: 1000000,
  afterNumber: " ₽",
};

if (rangeElementCreditCost) {
  let sliderOne = new SliderCost({
    rangeElement: rangeElementCreditCost,
    valueElement: valueElementCreditCost,
    options: optionsCreditCost,
  });

  sliderOne.init();
}
// 2 range
let rangeElementCreditInitial = document.querySelector(
  '.range--credit__initial [type="range"]'
);
let valueElementCreditInitial = document.querySelector(
  ".range--credit__initial .range__value span"
);

let optionsCreditInitial = {
  min: 1000000,
  max: 15000000,
  cur: 1000000,
  afterNumber: " ₽",
};

if (rangeElementCreditInitial) {
  let sliderTwo = new SliderCost({
    rangeElement: rangeElementCreditInitial,
    valueElement: valueElementCreditInitial,
    options: optionsCreditInitial,
  });

  sliderTwo.init();
}


// 3 range
let rangeElementCreditTerm = document.querySelector(
  '.range--credit__term [type="range"]'
);
let valueElementCreditTerm = document.querySelector(
  ".range--credit__term .range__value span"
);

let optionsCreditTerm = {
  min: 5,
  max: 50,
  cur: 5,
  afterNumber: " лет",
};

if (rangeElementCreditInitial) {
  let sliderTwo = new SliderCost({
    rangeElement: rangeElementCreditTerm,
    valueElement: valueElementCreditTerm,
    options: optionsCreditTerm,
  });

  sliderTwo.init();
}