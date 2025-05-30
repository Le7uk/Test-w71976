document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const fullName = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());

  let errorMessage = '';

  if (!fullName || !email || !age) {
    errorMessage = 'All fields are required!';
  }
  else if (age <= 0) {
    errorMessage = 'Age must be greater than 0.';
  }
  else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
    errorMessage = 'Please enter a valid email address.';
  }

  if (errorMessage) {
    document.getElementById('error-message').textContent = errorMessage;
  } else {
    document.getElementById('error-message').textContent = ''; 

    if (age > 18) {
      addPersonToList(fullName, email, age);
    } else {
      document.getElementById('error-message').textContent = 'You must be over 18 to submit.';
    }
  }
});

function addPersonToList(fullName, email, age) {
  const personList = document.getElementById('people-list');
  const listItem = document.createElement('li');
  listItem.textContent = `Full Name: ${fullName}, Email: ${email}, Age: ${age}`;
  personList.appendChild(listItem);
}
