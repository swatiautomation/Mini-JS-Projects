//Check status code
pm.test('check status code to be 200', () => {
  pm.response.to.have.status(200);
});

//check response time
pm.test('response time is less than 500ms', () => {
  pm.expect(pm.response.responsetime).to.be.below(500);
});

//validate response body
pm.test('check user id is 1', () => {
  var jsonData = pm.response.json();
  pm.expect(jsonData.id).to.eql(1);
});

//check if key exists
pm.test('name field exists', () => {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property('name');
});

//validate response contains value
pm.test('response contain success message', () => {
  pm.expect(pm.response.text()).to.include('success');
});

//validate header
pm.test('content-Type is JSON', () => {
  pm.response.to.have.header('Content-Type', 'application/json');
});

//Set Variable
pm.environment.set('token', pm.response.json().token);

//use variable
pm.test('check stored token', () => {
  pm.expect(pm.environment.get('token')).to.eql(1);
});

// how to use in another request = {{token}}

pm.test('validate user response', () => {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.be.an('object');
  pm.expect(jsonData.name).to.be.an('string');
  pm.expect(jsonData.age).to.be.above(39);
});
