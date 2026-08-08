document.getElementById('fetchBtn').addEventListener('click', function() {

  fetch('https://jsonplaceholder.typicode.com/posts/1')
 

   .then(response => {

    if (!response.ok) 
        {throw new Error("Failed to retrieve data.Try Again");
   }

    return response.json();
   
})


   .then(post => {

    document.getElementById('display').innerHTML = 
   `<h3>${post.title}</h3>
    <p>${post.body}</p>`;
   })

    .catch(error =>  {

        document.getElementById('display').innerHTML = 
        `<span style="color:red;">Error: ${error.message}</span>`;

        });

});


    document.getElementById("xhrBtn").addEventListener('click', function() {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);
         
        xhr.onload = function() {

            if (xhr.status === 200) {

                const post = JSON.parse(xhr.responseText);
                
                document.getElementById('display').innerHTML = 
                `<h3>${post.title}</h3>
                 <p>${post.body}</p>`;

            } else {

                document.getElementById('display').innerHTML = 
                `<span class="error">Error: ${xhr.statusText}</span>`;

            }
        };
            
            xhr.onerror = function() {
                document.getElementById('display').innerHTML =
                `<span class="error">Unable to connect to server</span>`;
            };

            xhr.send();
           
        });


    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    document.getElementById('apiform').addEventListener('submit', function(e) {
    
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const body = document.querySelector('textarea[name="body"]').value;

    fetch(apiEndpoint, {

        method: 'POST',

        headers: {
             'Content-Type': 'application/json'
         },

       body: JSON.stringify({ title, body}),
        
        })


        .then(response => response.json())

        .then(data => {

        document.getElementById('display').innerHTML =
        `<span style="color:green;">Your post has been created successfully!</span>
        <br>Post ID: ${data.id}
        <br>Title: ${data.title}
        <br>Body: ${data.body}`;

        })

        .catch(error => {

            document.getElementById('display').innerHTML = 
            `<span style="color:red;">Sorry we could not create your post: ${error.message}</span>`;
        });

    });
 

 document.getElementById('putBtn').addEventListener('click', function() {

    const id = document.getElementById('postId').value;
    const title = document.querySelector('input[name="title"]').value;
    const body = document.querySelector('textarea[name="body"]').value;




    const xhr = new XMLHttpRequest();

    xhr.open('PUT', 

        `https://jsonplaceholder.typicode.com/posts/${id}`, 
        true
    );


    xhr.setRequestHeader(
        'Content-Type', 
        'application/json;charset=UTF-8'
    );
    
       
xhr.onload = function() {

if (xhr.status === 200) {

    const updated = JSON.parse(xhr.responseText);

    document.getElementById('display').innerHTML =
    `<span style="color:green;">Post updated sucessfully!</span>
    <br>Post Id: ${updated.id}
    <br>Title: ${updated.title}
    <br>Body: ${updated.body}`;

} else {

    document.getElementById('display').innerHTML = 
    `<span style="color:red;">Unable to update the post. 
    (${xhr.statusText})</span>`;

}
};

xhr.send(JSON.stringify({ 
    title, body

}));


});

document.getElementById('deleteBtn').addEventListener('click', function(){
    const id = document.getElementById('postId').value;

    if (!id) {
        document.getElementById('display').innerHTML =
        `<span style=color:orange;>Post ID is missing</span>`
        return;
    }
    fetch('https://jsonplaceholder.typicode.com/posts/${id', {
        method: 'DELETE'
    })

    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete post");
        }
        return response.json();
    })
.then(() => {
    document.getElementById('display').innerHTML = 
    `<span style="color:green;">Success! Post #${id} has been deleted.</span>`
})
.catch(error =>  {
    document.getElementById('display').innerHTML = 
    `<span style="color:red;">Could not delete post: ${error.message}</span>`


});


});