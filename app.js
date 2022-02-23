// Refresh Page
function refresh(){
    document.location.reload(true);
}
function google(){
    window.location.href ="https://www.w3schools.com";
}
//   Load test data
  function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  }

//   Load User's Data
  function loadUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resources => resources.json())
        .then(inputs => displayUsers(inputs) )
  }

  function displayUsers(data){
      const ul = document.getElementById('list-item');
      for(const user of data){
          const li = document.createElement('li');
          li.innerHTML = `<span class="title">Id: </span> ${user.id} <br>
                        <span class="title">Name: </span> ${user.name} <br>
                        <span class="title">Email: </span> ${user.email} <br>
                    `;
          ul.appendChild(li);
          console.log(user)
      }
  }


// Load Pictures
function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resources => resources.json())
        .then(data => displayPic(data))
}

function displayPic(picData){
    const imgArea =document.getElementById('content');
    for(const pic of picData){
        if(pic.id <= 24 ){
            const img = document.createElement('img');
            img.src = pic.thumbnailUrl;
            imgArea.appendChild(img);
            console.log(pic.title);
        }
        
    }
}

// Load Posts
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resources => resources.json())
        .then(data => displayPost(data))
}

function displayPost(posts){
    const postArea = document.getElementById('content');
    for(const post of posts){
        if(post.id<=3){
            const newDiv = document.createElement('div');
            newDiv.classList='posts';
            newDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `
            postArea.appendChild(newDiv);
        }
        // console.log(post)
    }
}


// Load Kanye Quote
function kanyeQuote(){
    fetch('https://api.kanye.rest/')
        .then(resource => resource.json())
        .then(data => displayQuote(data))
}

function displayQuote(quote){
    // console.log(quote.quote);
    const postArea = document.getElementById('content');
    let todaysQuote = quote.quote;
    const quoteText = document.createElement('p');
    quoteText.classList ='quote';
    quoteText.innerText = todaysQuote;
    postArea.appendChild(quoteText);
    console.log(quote.quote);
}

// Load Random Users from randomusers.me

function randomUsers(){
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayRandomUsers(data))
}

// =============================================== Using Normal Function ===============================================

// function displayRandomUsers(users){
//     const usersData = users.results;
//     document.getElementById('table-section').style.display='block';
//     for(const user of usersData){
//         console.log(user)
//         console.log(user.name.title)
//         console.log(user.name.first)
//         console.log(user.name.last)
//         console.log(user.email)

//         const nameTitle = user.name.title;
//         const nameFirst = user.name.first;
//         const nameLast = user.name.last;
//         const email = user.email;
//         const tableBody = document.createElement('tr');
//         tableBody.innerHTML = `
//             <th scope="row">${nameTitle}</th>
//             <td>${nameFirst}</td>
//             <td>${nameLast}</td>
//             <td>${email}</td>
//         `
//         const tBody = document.getElementById('table-body');
//         tBody.appendChild(tableBody);
//     }
// }

//  =============================================== Using Arrow Function ===============================================
const displayRandomUsers = users => {
    const usersData = users.results;
    document.getElementById('table-section').style.display='block';
    for(const user of usersData){
        console.log(user)
        console.log(user.name.title)
        console.log(user.name.first)
        console.log(user.name.last)
        console.log(user.email)

        const nameTitle = user.name.title;
        const nameFirst = user.name.first;
        const nameLast = user.name.last;
        const email = user.email;
        const tableBody = document.createElement('tr');
        tableBody.innerHTML = `
            <th scope="row">${nameTitle}</th>
            <td>${nameFirst}</td>
            <td>${nameLast}</td>
            <td>${email}</td>
        `
        const tBody = document.getElementById('table-body');
        tBody.appendChild(tableBody);
    }
}