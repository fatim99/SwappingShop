/*------------------------------------- check user name----------------------------------------------*/ 
document.getElementById('userName').addEventListener('blur', function() {
  var userName = this.value.trim();
  /* check user name field is not empty or very large*/ 
  if (userName.length < 1 || userName.length > 255) {
    this.classList.add('is-invalid');
    if (userName.length < 1){
      document.getElementById('name-error').textContent = 'Please enter user name';
    } else {
      document.getElementById('name-error').textContent = 'User name must be less than 255 characters';
    }
  } 
  /* check if user name contains only letters */
  else if (!/^[a-zA-Z]+$/.test(userName)) {
    this.classList.add('is-invalid');
    document.getElementById('name-error').textContent = 'User name can only contain letters';
  } else {
    this.classList.remove('is-invalid');
    document.getElementById('name-error').textContent = '';
  }
});
/*--------------------------------------------------------------------------------------------------*/
/*------------------------------------- check password----------------------------------------------*/
  document.getElementById('password').addEventListener('blur', function() {
    var password =this.value.trim();
    /* check user password field is not empty or too long */ 
    if (password.length < 1 || password.length > 255) {
      this.classList.add('is-invalid');
      if (password.length < 1){
        document.getElementById('password-error').textContent = 'Please enter password';
      } else {
        document.getElementById('password-error').textContent = 'Password must be less than 255 characters';
      }
    } else {
      /* Check password strength */
      if (!checkPasswordStrength(password)) {
        this.classList.add('is-invalid');
        document.getElementById('password-error').textContent = 'Password must ninclude: at least 8 characters, at least one uppercase letter, one digit,  one special character.';
      } else {
        this.classList.remove('is-invalid');
        document.getElementById('password-error').textContent = '';
      }
    }
  });
  function checkPasswordStrength(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;\'?/\|.,><~`]).{8,}$/;
    return passwordRegex.test(password);
  }
/*--------------------------------------------------------------------------------------------------*/
/*---------------------------------------- check email----------------------------------------------*/
  document.getElementById('email').addEventListener('blur', function() {
    var email = this.value.trim();
    /* check user email field is not empty or very large*/
    if (email.length < 1 || email.length > 255) {
      this.classList.add('is-invalid');
      if (email.length < 1){
        document.getElementById('email-error').textContent = 'Please enter email';}
      else{
        document.getElementById('email-error').textContent = 'email must be less than 255 characters';
      }
    } else {
      this.classList.remove('is-invalid');
      document.getElementById('email-error').textContent = '';
    }
  });
/*--------------------------------------------------------------------------------------------------*/