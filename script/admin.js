const adminEmail = document.querySelector('#adminEmail');
const adminPassword = document.querySelector('#adminPassword');
const signIn = document.querySelector('#signIn');

const check = () => {
  if (adminEmail.value === '') {
    alert('Please Enter Valid Email');
  } else if (
    adminPassword.value.length < 8 ||
    adminPassword.value.length > 32
  ) {
    alert('Please Enter Valid Password');
  } else {
    window.location.href = 'adminDashBoard.html';
  }
};

signIn.addEventListener('click', check);
