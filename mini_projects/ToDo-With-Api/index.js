const addBtn = document.querySelector(".addBtn");
const inputBox = document.querySelector("#input");
const taskContainer = document.querySelector(".taskContainer");
const editBtn = document.querySelector(".editBtn");

addBtn.disabled = true;

let task = [];
let api = "https://69c7dbd263393440b31736e9.mockapi.io/api/v1/todos";

async function fetchData() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);

  taskContainer.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("taskContent");

    div.innerHTML = `
          <div class="editWrapper">
            <input class="editInput" type="text" value="${item.text}" />
            <span class="editError">Content is required</span>
          </div>
          <p class="taskText">${item.text}</p>
          <div class="btnContainer">
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
            <button class="deleteBtn">Delete</button>
          </div>
  `;

    const saveBtn = div.querySelector(".saveBtn");
    const editWrapper = div.querySelector(".editWrapper");
    const editInput = div.querySelector(".editInput");
    const editError = div.querySelector(".editError");
    const taskText = div.querySelector(".taskText");

    editWrapper.style.display = "none";
    saveBtn.style.display = "none";

    editInput.addEventListener("input", () => {
      if (editInput.value.trim()) editError.style.display = "none";
    });

    saveBtn.addEventListener("click", async () => {
      let value = editInput.value.trim();
      if (!value) {
        editError.style.display = "block";
        return;
      }
      editError.style.display = "none";
      saveBtn.style.display = "none";
      editButton.style.display = "block";
      taskText.style.display = "block";
      editWrapper.style.display = "none";
      div.classList.remove("editing");
      taskText.innerHTML = value;
      putData(item.id, value);
    });

    const editButton = div.querySelector(".editBtn");
    editButton.addEventListener("click", () => {
      saveBtn.style.display = "block";
      editButton.style.display = "none";
      editWrapper.style.display = "flex";
      taskText.style.display = "none";
      editError.style.display = "none";
      div.classList.add("editing");
      editInput.focus();
      editInput.setSelectionRange(
        editInput.value.length,
        editInput.value.length,
      );
    });
    const deleteButton = div.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", () => {
      deleteData(item.id);
    });
    taskContainer.append(div);
  });
}
fetchData();

inputBox.addEventListener("input", () => {
  const hasValue = inputBox.value.trim() !== "";
  addBtn.disabled = !hasValue;
  if (hasValue) {
    addBtn.classList.add("enabled");
  } else {
    addBtn.classList.remove("enabled");
  }
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") postData();
});

addBtn.addEventListener("click", () => {
  postData();
});

async function postData() {
  let value = inputBox.value.trim();
  if (!value) return;
  let obj = {
    text: value,
  };
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  console.log(response);
  if (response.status === 201) {
    fetchData();
    inputBox.value = "";
    addBtn.disabled = true;
    addBtn.classList.remove("enabled");
  }
}

async function deleteData(id) {
  let response = await fetch(`${api}/${id}`, {
    method: "DELETE",
  });
  console.log(response);
  if (response.status === 200) {
    fetchData();
  }
}

async function putData(id, value) {
  let obj = {
    text: value,
  };
  const response = await fetch(`${api}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  // console.log(response);
  if (response.status === 201) {
    fetchData();
  }
}
