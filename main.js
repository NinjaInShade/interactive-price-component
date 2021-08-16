// Here are the different page view ranges and the corresponding monthly price totals (yearly billing is 25% off each price):

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageViews = document.getElementById('pricing-card-pageviews');
const pricingText = document.getElementById('pricing-card-price');

const slider = document.getElementById('pricing-card-slider');

const pricing = [
  {
    pageViews: '10K',
    perMonth: '8.00',
  },
  {
    pageViews: '50K',
    perMonth: '12.00',
  },
  {
    pageViews: '100K',
    perMonth: '16.00',
  },
  {
    pageViews: '500K',
    perMonth: '24.00',
  },
  {
    pageViews: '1M',
    perMonth: '36.00',
  },
];

function calculateViewsAndPrice() {
  const trueValue = slider.value;
  const percentageValue = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  slider.style.background =
    'linear-gradient(to right, var(--green-light) 0%, var(--green-light) ' +
    percentageValue +
    '%, var(--light-gray) ' +
    percentageValue +
    '%, var(--light-gray) 100%)';

  // The appropriate object in the pricing array depending on value of slider
  const updatedInformation = pricing[trueValue];

  pageViews.innerText = `${updatedInformation.pageViews} Pageviews`;
  pricingText.innerHTML = `$${updatedInformation.perMonth}<span>/ month</span>`;
}

// Slider CSS colour styling to left + calculate pageviews and pricing
slider.oninput = calculateViewsAndPrice;
