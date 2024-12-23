# Project 1: Expanding Cards

Expanding Cards is a visually captivating and interactive project that displays a set of panels. Each panel expands smoothly on click, revealing a title and creating a focus effect for a delightful user experience.

---

## 🎨 **Live Demo**
[View Live Project](https://bloivating-major.github.io/50-Projects-Using-HTML-CSS-JS/02%20Day%201%20Expanding%20Cards/index.html) 

---

## 🌟 **Features**
- Interactive card panels that expand on click.
- Smooth animations for a polished look.
- Responsive design for seamless viewing on smaller screens.
- Elegant typography using Google Fonts.
- Unique and vibrant background images for each panel.

---

## 🚀 **Technologies Used**
- HTML5
- CSS3
- JavaScript (ES6)

---

## 📜 **Code Structure**
### HTML
The panels are dynamically styled using inline `background-image` attributes and CSS classes.
```html
<div class="panel" style="background-image: url('image_url');">
  <h3>Panel Title</h3>
</div>
```

### CSS
Flexible layout, responsive design, and smooth animations:
```css
.panel {
  flex: 0.5;
  transition: flex 0.5s ease-in;
}
.panel.active {
  flex: 3;
  transition: flex 0.5s ease-in;
}
```

### JavaScript
Handles the panel expansion logic efficiently:
```javascript
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActivePanel();
    panel.classList.add('active');
  });
});
```

---

## 📂 **Project Structure**
```
Expanding Cards/
├── index.html    # HTML File
├── style.css     # CSS File
├── script.js     # JavaScript File
```

---

## 📖 **How It Works**
1. The `container` div holds all panels.
2. Panels are styled to shrink and expand based on the `active` class.
3. On click, JavaScript toggles the `active` class for smooth animations.

---

## 📱 **Responsive Design**
The project uses a media query to adapt to small screens by hiding extra panels and ensuring the layout remains user-friendly:
```css
@media(max-width: 420px) {
  .panel:nth-of-type(4), .panel:nth-of-type(5) {
    display: none;
  }
}
```

---

## 🛠️ **How to Run**
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Enjoy the interactive experience!

---

## 🔗 **Links**
- [GitHub Repository](https://github.com/Bloivating-Major/50-Projects-Using-HTML-CSS-JS) 
- [Live Demo](https://bloivating-major.github.io/50-Projects-Using-HTML-CSS-JS/02%20Day%201%20Expanding%20Cards/index.html) 

---

## 💡 **Potential Improvements**
- Add keyboard navigation for accessibility.
- Include dynamic panel creation using JavaScript.
- Enhance responsiveness for tablet devices.

---

## 🏗️ **Learnings**
This project provided hands-on experience with:
- DOM manipulation in JavaScript.
- Flexbox for layout management.
- CSS transitions for smooth animations.

---

## 🤝 **Contributing**
Feel free to submit a pull request for improvements or suggestions!

---

### 🙌 Thank you for checking out Project 1: Expanding Cards!

