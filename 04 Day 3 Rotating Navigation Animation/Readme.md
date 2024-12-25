# Navigation with Smooth Animation and Auto-Closing Menu

This project implements a responsive navigation menu with smooth animations. When a user clicks on a navigation link, the menu automatically closes and smoothly scrolls to the targeted section on the page.

## Features
- Responsive navigation menu with a modern toggle design.
- Smooth animation for opening and closing the menu.
- Auto-closing of the menu upon clicking a navigation link.
- Smooth scrolling to the targeted section after menu closure.

## File Structure
```
project-folder/
|-- index.html
|-- style.css
|-- script.js
```

## HTML Structure
The navigation menu and sections are defined in the `index.html` file:
```html
<nav>
  <ul>
    <li><i class="fas fa-home"></i><a href="#home">Home</a></li>
    <li><i class="fas fa-user-alt"></i><a href="#about">About</a></li>
    <li><i class="fas fa-envelope"></i><a href="#contact">Contact</a></li>
  </ul>
</nav>

<div id="home" class="content">
  <h1>Home Section</h1>
  <p>Welcome to the Home Section.</p>
</div>

<div id="about" class="content">
  <h1>About Section</h1>
  <p>Information about us.</p>
</div>

<div id="contact" class="content">
  <h1>Contact Section</h1>
  <p>How to contact us.</p>
</div>
```

## CSS Styling
The `style.css` file includes styling for the navigation menu, transitions, and sections:
```css
.container {
  transition: transform 0.5s ease;
}

.show-nav {
  transform: translateX(0);
}

nav ul li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #007bff;
}

.content {
  padding: 20px;
  margin: 50px 0;
}
```

## JavaScript Functionality
The `script.js` file handles the interactivity:
```javascript
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('nav ul li a');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    container.classList.remove('show-nav');

    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  });
});
```

## How It Works
1. **Opening and Closing the Menu**:
   - The `show-nav` class is toggled to open and close the menu with a smooth animation.

2. **Smooth Scrolling**:
   - The `scrollIntoView` method is used for smooth scrolling to the target section.

3. **Auto-Closing Menu**:
   - The menu closes first, and after a delay (500ms), the page scrolls to the target section.

## Usage
1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Click on the navigation links to see the smooth animation and auto-closing menu in action.

## Customization
- **Animation Duration**: Adjust the `transition` property in the CSS and the `setTimeout` delay in JavaScript for faster or slower animations.
- **Styling**: Modify the `style.css` file to customize colors, fonts, and layouts.

## Browser Compatibility
Tested on the latest versions of:
- Chrome
- Firefox
- Edge
- Safari

## Credits
Icons used are from Font Awesome.

## License
This project is open-source and available under the MIT License.

