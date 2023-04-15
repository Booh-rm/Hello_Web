const contactForm = document.getElementById('contact-form');
const contactsList = document.getElementById('contacts');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  const name = nameInput.value;
  const phone = phoneInput.value;

  const newContact = createContactElement(name, phone);
  contactsList.appendChild(newContact);

  nameInput.value = '';
  phoneInput.value = '';
});

function createContactElement(name, phone) {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('name');
  nameSpan.textContent = name;

  const phoneSpan = document.createElement('span');
  phoneSpan.classList.add('phone');
  phoneSpan.textContent = phone;

  li.appendChild(nameSpan);
  li.appendChild(phoneSpan);

  return li;
}

document.addEventListener("DOMContentLoaded", function(event) {
    function updateBodySize() {
      document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
    }
    updateBodySize();
    window.addEventListener("resize", updateBodySize);
  });
  