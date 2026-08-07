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


    document.getElementById("xhrBtn"). addEventListener ('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open (GET, 'https://jsonplaceholder.typicode.com/posts/2', true);
         
        xhr.onload = function () {
            if (xhr.status === 200) {
                const post =JSON.parse(xhr.responseText);
                
                document.getElementById('display').innerHTML = `<h3>${post.title}</h3> <p>${post.body}</p>`;

            }else{
                document.getElementById('display').innerHTML = `<span class="error> Error: ${xhr.statusText}</span>`;

            };
            
            xhr.onerror = function () {
                document.getElementById('display').innerHTML =`<span class="error> Unable to comment to server</span>`;
            };
            xhr.send();
            }
        }
    







});
});
