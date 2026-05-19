
<input type="text" id="username" />;
//input[@id='username']

<button>Login</button>;
page.getByRole('button',{name:'Login'})
//button[text()='Login']

<div class="container"></div>
//div[@class='container']

<input id="user_12345" />
//input[contains(@id,'user')]

<button>Submit Form</button>
//button[contains(text(),'Submit')]

<div class="btn primary large"></div>
//div[contains(@class,'primary')]

<div id="form">
  <input type="text" name="email" />
</div>
//div[@id='form']//input[@name='email']


<label>Email</label>
<input type="text" />
//label[text(),'Email']/following-sibling::input


<label>Password</label>
<input type="password" />
//label[text(),'Password']/following-sibling::input

<input type="checkbox" />
<span>Remember me</span>
//span[text(),'Remember me']/preceding-sibling::input

<table>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
//td[text(),'John']/following-sibling::td


<div class="card">
  <h2>Product A</h2>
  <button>Add to Cart</button>
</div>
//h2[text(),'Product A']/following-sibling::button

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
//ul/li[2]

<button class="btn">Submit</button>
//button[@class='btn' and text()='Submit']

<div>
  <span>Price</span>
  <span>$100</span>
</div>
//span[text(),'Price']/following-sibling::span

//tag[@attribute='value']

<div>
  <label>Email</label>
  <div>
    <input type="text" />
  </div>
</div>
//label[text(),'Email']/parent::div//input

<input id="user_98765_input" />
//input[contains(@id,'user')]

<div class="card">
  <h3>iPhone 15</h3>
  <button>Add to Cart</button>
</div>

<div class="card">
  <h3>Samsung S23</h3>
  <button>Add to Cart</button>
</div>
//h3[text(),'Samsun S23']/following-sibling::button

<div class="product">
  <span>Product A</span>
  <span class="price">$200</span>
</div>
//span[text(),'Product A']/following-sibling::span[@class='price']

<table>
  <tr>
    <td>Swati</td>
    <td>QA</td>
    <td>India</td>
  </tr>
</table>
//td[text(),'Swati']/following-sibling::td[2]

<div>
  <input type="checkbox" />
  <span>Accept Terms</span>
</div>
//span[text(),'Accept Terms']/preceding-sibling::input

<div>
  <span>Username</span>
  <input type="text" />
</div>

<div>
  <span>Password</span>
  <input type="password" />
</div>
//span[text(),'Password']/following-sibling::input

<button>   Submit   </button>
//button[normalize-space(),'Submit']

<button>LOGIN</button>
//button[translate(text(),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')='login']

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
//li[last()]
//li[last()-1]

<div class="btn   primary   large"></div>
//div[contains(@class='primary')]

<div class="container">
  <p>Order ID: 12345</p>
</div>
//p[text(),'Order ID']//parent::div

<span>Total: $500</span>
//span[contains(text(),'Total')]

<button>Login</button>
page.getByRole('button',{name:'Login'})

<input placeholder="Enter email" />
page.getByPlaceholder('Enter email')

<label>Email</label>
<input type="text" />
page.getByLabel('Email')

<button aria-label="Close"></button>
page.getByRole('button',{name:'Close'})

<a href="/home">Go Home</a>
page.getByRole('link',{name:'Go Home'})

<button>Add</button>
<button>Add</button>
<button>Delete</button>
page.getByRole('button',{name:'Add'}).nth(1)

<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
page.getByText('Banana')

<label>Password</label>
<input type="password" />
page.getByLabel('Password')

<input type="checkbox" />
<span>Accept Terms</span>
page.getByText('Accept Terms').click()

<div class="card">
  <h2>Product A</h2>
  <button>Add to Cart</button>
</div>

<div class="card">
  <h2>Product B</h2>
  <button>Add to Cart</button>
</div>
page.locator('.card',{hasText:'Product B'}).getByRole('button',{name:'Add to Cart'})

<tr>
  <td>John</td>
  <td>25</td>
</tr>
page.getByText('John').locator('..').getByText('25') // Go from name → parent row → sibling cell


<button>LOGIN</button>
page.getByRole('button',{name:/login/i})

<button>Submit Form</button>
page.getByRole('button',{name:/submit/i})

<button style="display:none">Hidden</button>
<button>Visible</button>

page.getByRole('button').filter({hasText:'Visible'))

<button data-testid="submit-btn">Submit</button>
page.getByTextId('submit-btn')

// Playwright scenario

<input placeholder="Email" />
<input placeholder="Password" />
<button>Login</button>
<h2>Welcome Swati</h2>

page.getByPlaceholder('Email').fill('swati@test.com');
page.getByPlaceholder('Password').fill('test123');
page.getByRole('button',{name:/login/i}).click();
await expect(page.getByText('Welcome Swati')).toBeVisible();


page.getByPlaceholder('Email').fill('');
page.getByPlaceholder('Password').fill('');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText('Invalid Credentials')).toBeVisible()

<div class="card">
  <h3>iPhone</h3>
  <button>Add to Cart</button>
</div>

await page
.locator('.card',{hasText:'iPhone'})
.getByRole('button',{name:'Add to Card'})
.click();
await expect(page.getByText('Added to Cart')).toBeVisible()

<span data-testid="cart-count">0</span>
await expect(page.getByTestId('cart-count')).toHaveText('1')


await page.locator('.card',{hasText:'iPhone'}).getByRole('button',{name:'Add to Cart'}).click();
page.getByRole('button',{name:'Remove item'}).click();
await expect(page.getByText('Card is empty')).toBeVisible()


<select>
  <option>India</option>
  <option>USA</option>
</select>
 
await page.locator('select').selectOption('USA');
await expect(page.locator('select')).toHaveValue('USA')


await expect(page).toHaveURL(/cart/)

<div class="login-form">
  <button type="submit">Login</button>
</div>

await page.locator('.login-form').getByRole('button',{name:'Login'}).click()

//Handle iFrame

<iframe id="login-frame"></iframe>
const frame=page.frameLocator('#login-frame')
frame.getByRole('button',{name:'Login'}).click();

<iframe id="outer">
   <iframe id="inner"></iframe>
</iframe>
const frame1=page.frameLocator('#outer').frameLocator('#inner').getByText('Submit').click();

await page.getByText('Delete').click();
alert('Deleted Successfully')

page.on('dialog',async(dialog)=>{
    console.log(dialog.message())
    await dialog.accept();
    await dialog.dismiss();
   await  dialog.accept('swati');
})
await page.getByText('Delete').click();

await page.getByText('Cart').click(); // page opens in same tab
await expect(page).toHaveURL('/cart/')


//click opens new tab/window

const [newPage]=await Promise.all([

    page.waitForEvent('popup'),
    page.getByText('open report').click();
]);

await newPage.getByText('report').click();

//multiple tabs
const pages=context.pages();
const secondPage=pages[1]   // selet second tab

//File Download

const [download]=Promise.all([

    page.waitForEvent('download'),
    page.getByText('Download').click();

]);

const downloadPath= path.join(__dirname,'..','folderName',download.suggestedFilename())

await download.saveAs('downalod path')

//Upload file
await page.setInputFiles('input[type="file"]','test.pdf')

/*

Clicking "Pay Now":

opens popup
popup contains iframe
iframe has "Confirm Payment"

👉 Expected flow:

wait for popup
switch popup
switch iframe
click confirm
**/

const [popup]=await Promise.all([

page.waitForEvent('popup'),
page.getByText('Pay Now').click();
]);

const frame=await popup.frameLocator('#payment-frame');
frame.getByRole('button',{name:'Confirm Payment'}).click()