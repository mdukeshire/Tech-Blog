const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  console.log('hello');
    // Gather the data from the form elements on the page
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();
    const user_name = document.querySelector("#exampleInputUser1").value.trim();
  
    if (email && password && user_name) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ email, password, user_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  console.log('connected')
  document
    .querySelector('#form-group')
    .addEventListener('submit', signupFormHandler);