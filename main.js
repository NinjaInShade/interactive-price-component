// Here are the different page view ranges and the corresponding monthly price totals (yearly billing is 25% off each price):

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageViews = document.getElementById('pricing-card-pageviews');
const pricingText = document.getElementById('pricing-card-price');
const pricingTextMobile = document.getElementById('pricing-card-price-mobile');

const slider = document.getElementById('pricing-card-slider');
const checkbox = document.getElementById('pricing-card-checkbox');

const monthlyPricing = [
  {
    pageViews: '10K',
    perMonth: 8,
  },
  {
    pageViews: '50K',
    perMonth: 12,
  },
  {
    pageViews: '100K',
    perMonth: 16,
  },
  {
    pageViews: '500K',
    perMonth: 24,
  },
  {
    pageViews: '1M',
    perMonth: 36,
  },
];

// This array is a copy of monthly pricing for now, but changes if the yearly billing option is applied/unapplied.
let finalPricing = monthlyPricing;

function calculateDiscount(num) {
  return num * 0.75;
}

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
  const updatedInformation = finalPricing[trueValue];

  pageViews.innerText = `${updatedInformation.pageViews} Pageviews`;
  pricingText.innerHTML = `$${updatedInformation.perMonth}.00<span>/ month</span>`;
  pricingTextMobile.innerHTML = `$${updatedInformation.perMonth}.00<span>/ month</span>`;
}

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    finalPricing = monthlyPricing.map((data) => {
      return { pageViews: data.pageViews, perMonth: calculateDiscount(data.perMonth) };
    });
  } else {
    finalPricing = monthlyPricing;
  }

  // Update the values
  calculateViewsAndPrice();
});

// Slider CSS colour styling to left + calculate pageviews and pricing
slider.oninput = calculateViewsAndPrice;
