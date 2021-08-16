document.getElementById('pricing-card-slider').oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    'linear-gradient(to right, var(--green-light) 0%, var(--green-light) ' +
    value +
    '%, var(--light-gray) ' +
    value +
    '%, var(--light-gray) 100%)';
};
