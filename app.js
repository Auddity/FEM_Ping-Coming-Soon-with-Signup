const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('err-msg');
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', e => {
  e.preventDefault(); 

  if (emailInput.validity.typeMismatch || emailInput.value === '') {
    emailInput.setCustomValidity('');
    errorMessage.innerHTML = 'Please provide a valid email address';
    errorMessage.classList.add('show');
  } else {
    errorMessage.innerHTML = 'Thank you for signing up!';
    errorMessage.classList.add('show');
    errorMessage.style.color = '#4C7BF3';
  };
});
