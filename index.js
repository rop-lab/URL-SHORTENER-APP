document.addEventListener('DOMContentLoaded', () =>{
    // get references to html elements
    const shortenForm = document.getElementById('shortenForm');
    const shortenedurlContainer = document.getElementById('shortenedUrlContainer');
    const likeButton = document.getElementById('likeButton');

    // variable to store the current URL information
    let currentUrl;

shortenForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;
   try{
    const response = await fetch('db.json');
    const data = await response.json();
    const existingUrl = data.urls.find(url => url.originalUrl === originalUrl)
    if(existingUrl){
        currentUrl = existingUrl;
    } else {
        currentUrl = {
            id: data.urls.length + 1,
            originalUrl: originalUrl
            shortenedUrl: `https://yourshortenedurl.com/${data.urls.length + 1}`,
            likes: 0
        };
        data.urls.push(currentUrl);
    }
    }
   } 
})
})