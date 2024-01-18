document.addEventListener('DOMContentLoaded', () => {
    const shortenForm = document.getElementById('shortenForm');
    const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');
    const likeButton = document.getElementById('likeButton');
    
    let currentUrl;

    shortenForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const originalUrl = document.getElementById('originalUrl').value;

        try {
            // Simulating API call and response using a JSON file
            const response = await fetch('db.json');
            const data = await response.json();

            const existingUrl = data.urls.find(url => url.originalUrl === originalUrl);

            if (existingUrl) {
                currentUrl = existingUrl;
            } else {
                currentUrl = {
                    id: data.urls.length + 1,
                    originalUrl: originalUrl,
                    shortenedUrl: `https://yourshortenedurl.com/${data.urls.length + 1}`,
                    likes: 0
                };
                data.urls.push(currentUrl);
            }

            displayShortenedUrl(currentUrl.shortenedUrl);
            likeButton.innerHTML = `Like! (${currentUrl.likes})`;
            likeButton.disabled = false;

            // Simulate updating the database
            await fetch('db.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error('Error fetching or updating data:', error);
        }
    });

    likeButton.addEventListener('click', () => {
        // Simulate liking the URL and update the like count
        currentUrl.likes += 1;
        likeButton.innerHTML = `Liked! (${currentUrl.likes})`;

        // Simulate updating the database with the new like count
        fetch('db.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urls: data.urls }),
        });
    });

    function displayShortenedUrl(shortenedUrl) {
        shortenedUrlContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                Shortened URL: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>
            </div>
        `;
    }
});
