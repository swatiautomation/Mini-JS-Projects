const arr = [
  {
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg',
    name: 'Swati Sharma',
    email: 'swati@test.com',
  },
  {
    image:
      'https://i.pinimg.com/236x/d0/7b/b1/d07bb1d4e5fedae0246a3061a2a911b7.jpg',
    name: 'aadhya sharma',
    email: 'aadhya@test.com',
  },
  {
    image:
      'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    name: 'romi',
    email: 'romi@test.com',
  },
  {
    image:
      'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'freewill',
    email: 'freewill@test.com',
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg',
    name: 'kumari',
    email: 'kumari@test.com',
  },
];

const userContainer = document.querySelector('.searchContainer');
const userContainer1 = document.querySelector('.userContainer');
const inputBox = document.querySelector('#inputBox');

function handleSearch(e) {
  let searchText = e.target.value;
  let filterResult = arr.filter((item) => {
    if (!item.name.toLowerCase().includes(searchText.toLowerCase())) {
      console.log('no result found');
      userContainer.textContent = 'No rsults found';
    }
    return (
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  randerArray(filterResult);
}
inputBox.addEventListener('input', handleSearch);

function randerArray(arr) {
  userContainer.innerHTML = '';
  arr.map((item) => {
    const ele = document.createElement('div');
    ele.className = 'userContainer';

    ele.innerHTML = ` 
  <img
          class="image"
          src="${item.image}"
          alt="default image"
          width="80px"
        />
        <div class="userDetails">
          <h3>${item.name}</h3>
          <p>${item.email}</p>
        </div>
        `;

    userContainer.append(ele);
  });
}
randerArray(arr);
