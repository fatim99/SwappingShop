/*------------------------------------- check item name----------------------------------------------*/ 
document.getElementById('ItemName').addEventListener('blur', function() {
  var ItemName = this.value.trim(); 
  /* check ItemName name field is not empty or very large*/
  if (ItemName.length < 1 || ItemName.length > 100) {
    this.classList.add('is-invalid');
    if (ItemName.length < 1){
      this.nextElementSibling.textContent = 'Please enter item name';}
    else{
      this.nextElementSibling.textContent = 'Item name must be less than 100 characters';
    }
  } else {
    this.classList.remove('is-invalid');
    this.nextElementSibling.textContent = '';
  }
});
/*--------------------------------------------------------------------------------------------------*/ 
/*------------------------------------- check owner name----------------------------------------------*/ 
  document.getElementById('owner').addEventListener('blur', function() {
    var owner = this.value.trim();
    /* check owner field is not empty or very large*/ 
    if (owner.length < 1 || owner.length > 255) {
      this.classList.add('is-invalid');
      if (owner.length < 1){
        document.getElementById('ownername-error').textContent = 'Please enter owner';
      } else {
        document.getElementById('ownername-error').textContent = 'Owner name must be less than 255 characters';
      }
    } 
    /* check if owner name contains only letters */
    else if (!/^[a-zA-Z]+$/.test(owner)) {
      this.classList.add('is-invalid');
      document.getElementById('ownername-error').textContent = 'Owner name can only contain letters';
    } else {
      this.classList.remove('is-invalid');
      document.getElementById('ownername-error').textContent = '';
    }
  });
/*---------------------------------------------------------------------------------------------------*/ 
/*------------------------------------- check phone number--------------------------------------------*/ 
document.getElementById('phoneNumber').addEventListener('blur', function() {
    var phone = this.value.trim();
    /* check phone number length */
    var phoneRegex = /^\d{10}$/; // matches 10 digits
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
    } else {
      document.getElementById('phone-error').textContent = '';
    }
  });
/*-----------------------------------------------------------------------------------------------------*/ 
/*------------------------------------- check Selecting sharing type-----------------------------------*/ 
  document.getElementById('sharingType').addEventListener('blur', function() {
    var selectedValue = this.value;
    if (selectedValue === '') {
      this.classList.add('is-invalid');
      document.getElementById('requesttype-error').textContent = 'Please choose a request type';
    } else {
      this.classList.remove('is-invalid');
      document.getElementById('requesttype-error').textContent = '';
    }
  });
/*----------------------------------------------------------------------------------------------------*/ 
/*------------------------------------- check all required fields----------------------------------------------*/ 
  function validateForm() {
    var isFormValid = true;
    // Get all required input fields
    var inputElements = document.querySelectorAll('input[required], select[required], textarea[required]');
    // Loop through each input field and check if it has a value
    for (var i = 0; i < inputElements.length; i++) {
      if (!inputElements[i].value.trim()) {
        inputElements[i].classList.add('is-invalid');
        isFormValid = false;
      } else {
        inputElements[i].classList.remove('is-invalid');
      }
    }
    // Show error message if form is not valid
    var requiredFieldsError = document.getElementById('requiredfields-error');
    if (!isFormValid) {
      requiredFieldsError.textContent = 'Please fill in all required fields';
    } else {
      requiredFieldsError.textContent = '';
    }
    // Return whether the form is valid or not
    return isFormValid;
  }
/*----------------------------------------------------------------------------------------------------*/ 