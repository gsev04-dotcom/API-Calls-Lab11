document.getElementById('fetchBtn').addEventListener('click', function() {
  fetch ('https://jsonplaceholder.typicode.com/posts/1')
   .then (response => {
    if (!response.ok) throw new Error ("Failed to retrieve data. Try Again");
    return response.json()
   })


   .then (post => {
    document.getElementedById("display").innerHTML = `<h3>
        ${post.title}</h3>
    <p>${post.body}</p>`
   })
    .catch (error =>  {
        document.getElementById("display").innerHTML = 
        `<span style=color:red;"> Error: ${error.message}</span>`;

        });

});
