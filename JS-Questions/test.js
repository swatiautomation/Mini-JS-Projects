function organizePhotos(tags, photos) {
  // Write code here

  let result = {};

  tags.forEach((item, index) => {
    let value = photos[index];
    if (!result[item]) {
      result[item] = [];
    }
    result[item].push(value);
  });
  return result;
}

// console.log(
//   organizePhotos(
//     ["forest", "forest", "lake"],
//     ["photo10", "photo11", "photo12"],
//   ),
// );

function swapArr(arr, position) {
  position = position % arr.length;
  return arr.slice(-position).concat(arr.slice(0, arr.length - position));
}
console.log(swapArr([1, 2, 3], 4));

function reverstedString(str) {
  let reverstedStr = str.split("").reverse().join("");
  res = reverstedStr.split("").map((item) => {
    return item.match(/[a-m]/g) ? item.toUpperCase() : item.toLowerCase();
  });
  return res.join("");
}

console.log(reverstedString("reverse array"));

function gymProgressTracker(day1Exercises, day2Exercises) {
  const result = day1Exercises.every(
    (item, index) => item === day2Exercises[index],
  );
  if (result) {
    return "You did the same workout on both days!";
  } else {
    return "You mixed it up today!";
  }
}

console.log(
  gymProgressTracker(["squats", "squats"], ["squats", "bench press"]),
);

function findScepter(inscription) {
  // Write code here
  let day = 0;
  let night = 0;
  inscription.split(" ").forEach((item) => {
    if (item === "day") {
      day++;
    } else if (item === "night") {
      night++;
    }
  });
  console.log(day, night);
  if (day > night) {
    return "West Wing";
  } else if (night > day) {
    return "East Wing";
  } else {
    return "Central Wing";
  }
}

console.log(findScepter("day day night"));
console.log(findScepter("night"));

function sortFishBySize(fishList) {
  const sizeOrder = {
    Sardine: 1,
    Trout: 2,
    Salmon: 3,
    Tuna: 4,
  };
  // Write code here
  return fishList.sort((a, b) => sizeOrder[a] - sizeOrder[b]);
}
console.log(sortFishBySize(["Salmon", "Sardine", "Tuna"]));
function createBeachNameTag(fullName, dayOfMonth) {
  // Write code here

  const name = fullName.split(" ");
  const firstname = name[0].slice(0, 3);
  const lastname = name[1].slice(-3);
  const reverseDay = dayOfMonth.toString().split("").reverse().join("");
  return `${firstname}-${reverseDay}-${lastname}`;
}
console.log(createBeachNameTag("swati sharma", 15));

function organizePicnicBasket(items) {
  // Write code here
  let result = {};

  items.forEach((item, index) => {
    if (!result[item]) {
      result[item] = 0;
    }
    result[item]++;
    // if (query[index] === 1) {
    //   result[item]++;
    // } else if (query[index] === -1) {
    //   result[item] - 1;
    // }
  });
  return result;
}
console.log(organizePicnicBasket(["cake", "pie", "cake", "pie", "cake"]));
