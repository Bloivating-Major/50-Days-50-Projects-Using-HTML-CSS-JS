# Progress Steps

A beautiful and interactive Progress Steps component built with **HTML**, **CSS**, and **JavaScript**, designed to showcase a multi-step process. The design is fully responsive, adapting seamlessly to different screen sizes, while maintaining its proportions and aesthetics.

---

## Live Demo
✨ **Experience the component in action**: [Live Demo Link](https://bloivating-major.github.io/50-Projects-Using-HTML-CSS-JS/03%20Day%202%20Progress%20Steps/) 

---

## Features

- **Interactive Steps**: Navigate between steps using `Next` and `Prev` buttons.
- **Dynamic Progress Bar**: The progress bar dynamically adjusts as you move through the steps.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.
- **Elegant Animations**: Smooth transitions and hover effects.

---


## Technologies Used

- **HTML5**: For the structure of the component.
- **CSS3**: For styling, animations, and responsive design.
- **JavaScript**: For interactivity and dynamic behavior.

---

## Code Structure

### HTML
```html
<h1>Progress Steps</h1>
<div class="container">
    <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
        <div class="circle">4</div>
    </div>
    <div id="btns">
        <div class="btn" id="prev">Prev</div>
        <div class="btn" id="next">Next</div>
    </div>
</div>
```

### CSS
```css
/* Responsive design, animations, and styling */
.progress-container {
    width: 600px;
    display: flex;
    justify-content: space-between;
}
```

### JavaScript
```javascript
/* Handles step navigation and progress bar updates */
next.addEventListener('click', () => {
    count++;
    if (count > circles.length) count = circles.length;
    update();
});
```

---


## Responsive Design

### Breakpoints
- **Desktop**: Default layout with a width of 600px.
- **Tablet**: Reduced width with slightly smaller circles and buttons.
- **Mobile**: Compact layout with a width of 90% and smaller font sizes.

---

## Customization

### Colors
Change the colors by updating the `:root` variables in the CSS file:
```css
:root {
    --line-border-fill: #2563EB;
    --line-border-empty: #4c4b4b;
    --background-dark: #1A1A1A;
}
```

### Number of Steps
Add or remove steps by editing the HTML:
```html
<div class="circle">5</div>
```
Update the `circles` array in JavaScript to match the new steps.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- Inspired by modern web design principles.
- Fonts by [Google Fonts](https://fonts.google.com/).

---



