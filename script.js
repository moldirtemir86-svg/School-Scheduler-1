const form = document.getElementById('schedule-form');
const list = document.getElementById('schedule-list');

// Браузерден бұрын сақталған мәліметтерді жүктеу
let items = JSON.parse(localStorage.getItem('schoolSchedules')) || [];

function renderItems() {
  list.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>[${item.type}]</strong> ${item.title} - <em>${item.date}</em></span>
      <button class="delete-btn" onclick="deleteItem(${index})">Өшіру</button>
    `;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const type = document.getElementById('type').value;

  items.push({ title, date, type });
  localStorage.setItem('schoolSchedules', JSON.stringify(items));
  
  form.reset();
  renderItems();
});

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem('schoolSchedules', JSON.stringify(items));
  renderItems();
}

// Бастапқы жүктеу
renderItems();
