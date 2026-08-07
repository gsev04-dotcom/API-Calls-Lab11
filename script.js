document.getElementById('fetchBtn').addEventListener('click', function() {
  fetch ('https://jsonplaceholder.typicode.com/posts/1')
   .then (response => {
    if (!response.ok) throw new Error ("Failed to retrieve data. Try Again");
    return response.json()
   })
});
