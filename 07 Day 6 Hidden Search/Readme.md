# Hidden Search

A simple, sleek, and interactive **Hidden Search Bar** component built with HTML, CSS, and JavaScript. This project demonstrates how to create a search bar that expands when clicked, offering a clean and engaging user experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Code Structure](#code-structure)
- [Future Enhancements](#future-enhancements)
- [Acknowledgments](#acknowledgments)

---

## Features
- Expandable search bar triggered by a single button click.
- Smooth animations for opening and closing.
- Minimalistic and responsive design.
- Enhanced user interaction with focus behavior.

---

## Technologies Used
- **HTML5**: For structuring the layout.
- **CSS3**: For styling and animations.
- **JavaScript (ES6)**: For interactivity.
- **Font Awesome**: For the search icon.

---


## How It Works
1. The search bar is initially hidden, showing only the search button.
2. When the search button is clicked:
   - The `active` class is toggled on the `.search` container.
   - The search bar smoothly expands using a CSS transition.
3. Clicking the button again hides the search bar.
4. Input focus is automatically triggered for a better user experience.

---

## Code Structure

### HTML
Defines the structure of the search component:
```html
<main>
  <h1>Hidden Search</h1>
  <div class="search active">
    <input type="text" class="input" placeholder="Search" />
    <button class="btn"><i class="fas fa-search"></i></button>
  </div>
</main>
```

### CSS
Styles the search bar and handles animations:
```css
.search .input {
  transition: width 0.3s ease;
}
.search.active .input {
  width: 200px;
}
.search.active .btn {
  transform: translateX(125px);
}
```

### JavaScript
Adds interactivity to toggle the search bar:
```javascript
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
```

---

## Future Enhancements
Here are some ideas to improve the project:
- Add a close button to manually collapse the search bar.
- Add a "Search" functionality to fetch and display results.
- Improve accessibility (ARIA roles, labels).
- Add more responsive styles for mobile devices.

---

## Acknowledgments
- **Font Awesome** for providing the search icon.
- Inspiration from modern UI/UX design trends.

Feel free to fork, improve, and share this project! 😊

