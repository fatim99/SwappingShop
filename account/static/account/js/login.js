/* ----------------------------------------check password--------------------------------------------*/ 
document.getElementById('password').addEventListener('blur', function() {
    var password = this.value.trim();
    /* check password field is not empty or very large*/
    if (password.length < 1 || password.length > 255) {
      this.classList.add('is-invalid');
      if (password.length < 1){
        document.getElementById('password-error').textContent = 'Please enter password';}
      else{
        document.getElementById('password-error').textContent = 'Password must be less than 255 characters';
      }
    } else {
      this.classList.remove('is-invalid');
      document.getElementById('password-error').textContent = '';
    }
  });
/* ------------------------------------------------------------------------------------------------*/ 
/* -----------------------------------------check email--------------------------------------------*/ 
document.getElementById('email').addEventListener('blur', function() {
    var email = this.value.trim();
    /* check user email field is not empty or very large*/
    if (email.length < 1 || email.length > 255) {
      this.classList.add('is-invalid');
      if (email.length < 1){
        document.getElementById('email-error').textContent = 'Please enter email';}
      else{
        document.getElementById('email-error').textContent = 'Email must be less than 255 characters';
      }
    } else {
      this.classList.remove('is-invalid');
      document.getElementById('email-error').textContent = '';
    }
  });
/* ------------------------------------------------------------------------------------------------*/ 
