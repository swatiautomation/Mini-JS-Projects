const amount = document.querySelector('.amount');
const convertedAmount = document.querySelector('.convertedAmount');
const fromCurrency = document.querySelector('.fromCurrency');
const toCurrency = document.querySelector('.toCurrency');
const result = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

const countries = [
  { code: 'USD', name: 'United States Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'MXN', name: 'Mexican Peso' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'ZAR', name: 'South African Rand' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'AED', name: 'UAE Dirham' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'PHP', name: 'Philippine Peso' },
  { code: 'PKR', name: 'Pakistani Rupee' },
  { code: 'BDT', name: 'Bangladeshi Taka' },
];

countries.forEach((country) => {
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');

  option1.value = option2.value = country.code;

  option1.textContent =
    option2.textContent = `${country.code} (${country.name})`;

  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);

  //default selections
  fromCurrency.value = 'USD';
  toCurrency.value = 'INR';
});

async function convertCurrency() {
  const amt = parseFloat(amount.value);
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  result.innerHTML = 'Converting...';
  try {
    const url = `https://v6.exchangerate-api.com/v6/8fcdcd12fde88e465b02836a/latest/${fromCurrencyValue}`;
    const response = await fetch(`${url}`);

    const data = await response.json();
    //console.log(data);

    const conversionRate = data.conversion_rates[toCurrencyValue];
    const convertedAmt = (amt * conversionRate).toFixed(2);

    if (typeof conversionRate === 'undefined') {
      result.innerHTML = 'Invalid conversion rate';
      convertedAmount.value = '';
      throw new Error('Invalid conversion rate');
    }
    // console.log(conversionRate);
    convertedAmount.value = `${convertedAmt}`;
    result.innerHTML = `${amt} ${fromCurrencyValue} = ${convertedAmt} ${toCurrencyValue}`;
  } catch (error) {
    converterContainer.innerHTML = 'Error in conversion';
  }
}

amount.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);
window.addEventListener('load', convertCurrency);
