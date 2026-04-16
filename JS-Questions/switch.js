const animal = 'Tuesday';
if (animal === 'Monkey') {
  console.log('It is a Monkey');
} else if (animal === 'Dog') {
  console.log('It is a Dog');
} else if (animal === 'Cat') {
  console.log('It is a Cat');
}

switch (animal) {
  case 'Dog': {
    console.log('It is a Dog');
    break;
  }
  case 'Monkey':
  case 'Tuesday': {
    console.log('It is a Monkey');
    // break;
  }
  case 'Cat': {
    console.log('It is a Cat');
    break;
  }
  default:
    console.log('Unknown Animal');
}

//==========================================

const food = 'Sushi';
switch (food) {
  case 'Fish': {
    console.log('It is a Fish');
    break;
  }
  case 'Hummus': {
    console.log('It is Hummus');
    break;
  }
  case 'Sushi': {
    console.log('It is Sushi');
    break;
  }
  default:
    console.log('Unknown Food');
}

//==========================================
const activities = ['Swimming', 'Cycling', 'Running'];
for (const activity of activities) {
  switch (activity) {
    case 'Swimming': {
      console.log('Like a fish');
      break;
    }
    case 'Cycling': {
      console.log('Like a horse');
      break;
    }
    case 'Running': {
      console.log('Like a cheetah');
      break;
    }
    default:
      console.log('Unknown Activity');
  }
}

//==========================================
const enemies = {
  rat: { hp: 20, attack: 5 },
  goblin: { hp: 30, attack: 10 },
  orc: { hp: 50, attack: 15 },
};
for (const enemy of Object.values(enemies)) {
  //console.log(enemy.attack);
  switch (enemy.attack) {
    case 5: {
      console.log('Low attack enemy');
      break;
    }
    case 10: {
      console.log('Medium attack enemy');
      break;
    }
    case 15: {
      console.log('High attack enemy');
      break;
    }
    default:
      console.log('Unknown attack value');
  }
}

//==========================================
const points = [3, 4, 1, 0, 1, 5, 6];
for (const point of points) {
  switch (point) {
    case 0:
    case 1:
    case 2: {
      console.log('Beginner level');
      break;
    }
    case 3:
    case 4:
    case 5: {
      console.log('Intermediate level');
      break;
    }
    default: {
      console.log('Advanced level');
    }
  }
}
