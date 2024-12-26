# Gift Box Animation Project

## Overview

This project is a creative and interactive web animation featuring a bouncing gift box with a "Thank You" message. Users can interact with the gift box to reveal a beautiful animation that expresses gratitude. The combination of HTML, CSS, and JavaScript brings this delightful design to life.

---

## Features

- **Interactive Gift Box:** A clickable gift box that animates to reveal a "Thank You" message.
- **Smooth Animations:** Includes bounce, vibration, and scale animations for an engaging user experience.
- **Responsive Design:** The layout adapts to various screen sizes for a seamless experience.
- **Minimalist UI:** A simple, elegant design with vibrant colors.

---


## Technologies Used

- **HTML5:** For the structure and semantic elements.
- **CSS3:** For styling and animations.
- **JavaScript:** For adding interactivity and handling user events.

---

## File Structure

```
project-directory/
├── index.html      # Main HTML file
├── style.css       # CSS file for styling and animations
├── script.js       # JavaScript file for interactivity
```

---

## Code Highlights

### HTML
```html
<div class="gift-container">
  <div class="gift-box">
    <div class="shadow"></div>
    <div class="click"></div>
  </div>
  <div class="text">
    <h2>Thank You</h2>
  </div>
</div>
```

### CSS
```css
@keyframes Bounce {
  0% {
    transform: translateY(-24px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-24px);
  }
}
```

### JavaScript
```javascript
click.addEventListener('click', ()=>{
    if(click.className === 'click'){
        click.classList.add('active');
        giftBox.classList.add('active');
        shadow.classList.add('active');
        giftContainer.classList.add('active');
        text.classList.add('active');
    } else {
        click.classList.remove('active');
        giftBox.classList.remove('active');
        shadow.classList.remove('active');
        giftContainer.classList.remove('active');
        text.classList.remove('active');
    }
});
```

---

## Customization

- **Colors:** Adjust the colors in the CSS file to suit your theme.
  ```css
  background-color: #25252b; /* Change background color */
  color: #ec9c4a;           /* Change text color */
  ```

- **Animation Timing:** Modify animation durations and delays in the CSS keyframes.

- **Message:** Change the "Thank You" message in the HTML for a personalized experience.
  ```html
  <h2>Your Custom Message</h2>
  ```

---

## Future Improvements

- Add more themes and styles for the gift box.
- Include sound effects for interaction.
- Make the gift box draggable.

---

## Credits

Designed and developed by [Bloivating Major](https://github.com/Bloivating-Major).

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

