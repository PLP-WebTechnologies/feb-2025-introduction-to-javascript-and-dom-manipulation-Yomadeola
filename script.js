// Change text and background color
const changeBtn = document.getElementById('change-btn');
const description = document.getElementById('description');
let toggleColor = false;

changeBtn.addEventListener('click', () => {
  description.textContent = "You've clicked the button! JavaScript is awesome!";
  document.body.style.backgroundColor = toggleColor ? '#f5f5f5' : '#dff9fb';
  toggleColor = !toggleColor;
});

// Add/remove a new element
const toggleBtn = document.getElementById('toggle-btn');
const container = document.getElementById('container');
let elementExists = false;

toggleBtn.addEventListener('click', () => {
  if (!elementExists) {
    const newEl = document.createElement('p');
    newEl.textContent = "I was added with JavaScript!";
    newEl.style.color = "#4a90e2";
    newEl.id = "new-paragraph";
    container.appendChild(newEl);
    elementExists = true;
  } else {
    const oldEl = document.getElementById('new-paragraph');
    if (oldEl) container.removeChild(oldEl);
    elementExists = false;
  }
});
