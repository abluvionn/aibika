# aibika
Config files for my GitHub profile.
1. Project Setup:
HTML Structure: The project started with creating the basic HTML structure, including the necessary <div> elements to represent different sections of the portfolio, such as about me, education, experience, skills, hobbies, and contacts.
External Libraries: The project used Google Fonts to apply the Raleway font family to the text elements. This was done by linking the appropriate CSS file in the <head> section of the HTML.
2. Content and Styling:
Text Content: The content for each section was written, including details about my background, education, work experience, skills, hobbies, and contact information.
CSS Styling: The styling of the webpage was done using an external CSS file (style.css). CSS was used to define the layout, colors, fonts, and other visual aspects of the elements on the webpage.
Responsive Design: Media queries might have been used to ensure the website is responsive and looks good on various screen sizes, such as desktops, tablets, and mobile phones.
3. Dynamic Elements and Interactivity:
Dark Mode Toggle: JavaScript was used to create the Dark Mode feature. A JavaScript function named ChangeTheme() was implemented, which likely toggles the appearance of the webpage between dark and light themes when the "Dark Mode" button is clicked. This function was called when the button was clicked (onclick="ChangeTheme()").
4. Images and Icons:
Image Assets: Various image assets were used, including icons representing hobbies and a QR code image.
Image Placement: Images were placed in appropriate sections of the webpage, such as hobbies. The <img> tag was used for image insertion, and the alt attribute was utilized for providing alternative text for accessibility.
5. Links and Navigation:
Navigation Links: Links to external websites (such as social media profiles and email) were created using anchor tags (<a>). These links allow visitors to navigate to Aibika's social media pages and contact information.
Internal Navigation: Internal navigation within the webpage was achieved through anchor tags and unique IDs assigned to specific sections. For example, clicking on a navigation link might scroll the page to the corresponding section.
6. Validation and Testing:
Code Validation: The HTML and CSS code was likely validated to ensure it follows the correct syntax and standards. Tools like W3C Markup Validation Service and W3C CSS Validation Service can be used for this purpose.
Cross-Browser Testing: The website might have been tested across different web browsers (such as Chrome, Firefox, Safari, and Edge) to ensure consistent appearance and functionality.
7. Version Control and Deployment:
Version Control: The project files were managed using a version control system, such as Git. GitHub was used to host the repository, providing version history and collaboration features.
Deployment: The website might have been deployed to a web hosting service, making it accessible to anyone on the internet.
This process outlines the typical steps involved in creating a portfolio website like the one you provided. It involves a combination of HTML for structure, CSS for styling, and JavaScript for interactivity, resulting in a visually appealing and functional web presence.

ChangeTheme()
This function toggles the dark mode theme on the page. It does this by adding and removing the dark-theme class from the main-content element and all of the h3-name elements. It also toggles the about-me-text-dark-theme class on the text-about-me element, the edu-date-dark-theme class on the edu-date element, the school-name-dark-theme class on the school-name element, the college-name-dark-theme class on the college-name element, the exp-dark-theme class on all of the .exp elements, the skill-dark-theme class on all of the .skill elements, the skill-name-dark-theme class on all of the .skill-name elements, the hobby-name-dark-theme class on all of the .hobby-name elements, and the link-dark-theme class on all of the .link elements.

window.onscroll
This function is called whenever the user scrolls the page. It checks if the user has scrolled past the 400 pixel mark. If so, it adds the animated class to all of the .bar elements. This causes the skill bars to animate.


JavaScript
This project uses JavaScript to add functionality to the page, such as toggling the dark mode theme and animating the skill bars. The following functions are defined in the JavaScript code:

ChangeTheme()
This function toggles the dark mode theme on the page.

window.onscroll
This function is called whenever the user scrolls the page. It animates the skill bars when the user has scrolled past the 400 pixel mark.

You could also add a link to the JavaScript file in the README file so that users can easily view the code.





