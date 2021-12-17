const postFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    console.log('hello');
    // Gather the data from the form elements on the page
    const postTitle = document.querySelector('#exampleFormControlInput1').value.trim();
    const postBody = document.querySelector('#exampleFormControlTextarea1').value.trim();
  
    if (postTitle && postBody) {
      // Send the e-mail and password to the server
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postBody }),
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
    .addEventListener('submit', postFormHandler);