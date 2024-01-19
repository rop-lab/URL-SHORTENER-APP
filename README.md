# URL-SHORTENER-APP with Like 

## This project implements a simple URL shortening service with a like functionality using HTML, CSS, and JavaScript. The backend functionality is simulated using a JSON file (db.json) to store data.

## Features
-Shorten a URL and display the shortened version.
-Like the shortened URL and update the like count.
-Simulated database interactions with db.json.

## Usage
-Open index.html in your preferred web browser.

-Fill out the form with the original URL and submit it.

-The shortened URL will be displayed along with a like button.

-Click the like button to increase the like count.

## Code Explanation

# HTML (index.html)
-The HTML file contains the structure of the web page, including the form, input fields, and containers for displaying the shortened URL and like button.

# CSS (styles.css)
The CSS file provides basic styling for the web page elements to enhance the user interface.


URL Shortener with Like Functionality
This project implements a simple URL shortening service with a like functionality using HTML, CSS, and JavaScript. The backend functionality is simulated using a JSON file (db.json) to store data.

Features
Shorten a URL and display the shortened version.
Like the shortened URL and update the like count.
Simulated database interactions with db.json.
Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Web browser (e.g., Chrome, Firefox, Safari)
Code editor (e.g., Visual Studio Code)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/url-shortener.git
Navigate to the project directory:

bash
Copy code
cd url-shortener
Usage
Open index.html in your preferred web browser.

Fill out the form with the original URL and submit it.

The shortened URL will be displayed along with a like button.

Click the like button to increase the like count.

Code Explanation
HTML (index.html)
The HTML file contains the structure of the web page, including the form, input fields, and containers for displaying the shortened URL and like button.

CSS (styles.css)
The CSS file provides basic styling for the web page elements to enhance the user interface.

# JavaScript (script.js)

-The JavaScript file handles the dynamic functionality of the URL shortener:

- Event Listeners: Sets up event listeners for form submission and like button clicks.

-URL Shortening: Fetches data from db.json and simulates API responses. Checks if the URL already exists, and if not, generates a shortened URL.

-Like Functionality: Updates the like count when the user clicks the like button and simulates updating the database.

-Database Interaction: Simulates updating the database (db.json) with the latest data, both when shortening a URL and when liking a URL.

-Display Shortened URL: Updates the UI to display the shortened URL in an alert container.
