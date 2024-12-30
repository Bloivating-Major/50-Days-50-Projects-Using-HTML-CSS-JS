# Project 7: Animated Loader with GSAP

## Overview

This project showcases a beautifully designed animated loader using HTML, CSS, and JavaScript, enhanced by the GSAP animation library. The loader is designed to grab attention with creative animations and a clean layout, making it suitable for use in modern web applications and portfolios.

## Features

1. **Dynamic Loading Animation**:
   - A marquee text effect displaying "Kodr®" that smoothly moves across the screen.
   - Top and bottom clipping animations that reveal and hide the marquee text.

2. **Responsive Design**:
   - Fully responsive layout optimized for devices with different screen sizes, including mobile.
   - Adaptive text and layout adjustments for smaller screens.

3. **Stylish Navigation and Footer**:
   - A clean navigation bar with links to "Design," "Code," and "Info."
   - A footer section with branding and additional details about the project.

## Technologies Used

### 1. **HTML**
- Structured the layout with semantic tags for better readability.
- Included a container for navigation, loader animation, and footer.

### 2. **CSS**
- Used `clip-path` for advanced clipping effects on the loader.
- Designed the marquee effect with flexible layouts and animations.
- Incorporated responsive styles for better performance on mobile devices.

### 3. **GSAP (GreenSock Animation Platform)**
- Created smooth and dynamic animations for elements such as the marquee and clipping areas.
- Managed delays and easing for polished and professional effects.

## File Structure

```
project-7/
|— index.html   # Main HTML file
|— style.css   # Styling for the project
|— script.js   # JavaScript for animations
|— gsap.min.js  # GSAP library for animations
```

## Code Breakdown

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loader</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="loader">
      <div class="loader-clip clip-top">
        <div class="marquee">
          <div class="marquee-container">
            <span>Kodr®</span>
            <span>Kodr®</span>
            Kodr®
            <span>Kodr®</span>
            <span>Kodr®</span>
          </div>
        </div>
      </div>
      <div class="loader-clip clip-bottom">
        <div class="marquee">
          <div class="marquee-container">
            <span>Kodr®</span>
            <span>Kodr®</span>
            Kodr®
            <span>Kodr®</span>
            <span>Kodr®</span>
          </div>
        </div>
      </div>
      <div class="clip-center">
        <div class="marquee">
          <div class="marquee-container">
            <span>Kodr®</span>
            <span>Kodr®</span>
            Kodr®
            <span>Kodr®</span>
            <span>Kodr®</span>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="nav">
          <div class="logo">Brand</div>
          <div class="nav-items">
            <a href="#">Design</a>
            <a href="#">Code</a>
            <a href="#">Info</a>
          </div>
        </div>
        <div class="footer">
          <p>Play Code</p>
          <p>High Quality Coding School.<br>Made In India</p>
          <p>Sheryians 2024</p>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

### CSS
The CSS focuses on:
- Creating clipping effects with `clip-path`.
- Styling the marquee text and ensuring a seamless animation.
- Responsive styling using media queries.

### JavaScript (GSAP)
```javascript
gsap.from(".clip-top, .clip-bottom", 2, {
  delay: 1,
  height: "50vh",
  ease: "power4.inOut",
});

gsap.to(".marquee", 3.5, {
  delay: 0.74,
  top: "50%",
  ease: "power4.inOut",
});

gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
  delay: 1,
  left: "100%",
  ease: "power3.inOut",
});

gsap.from(".clip-center .marquee", 5, {
  delay: 1,
  left: "-50%",
  ease: "power3.inOut",
});

gsap.to(".clip-top", 2, {
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power3,inOut",
});

gsap.to(".clip-bottom", 2, {
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power3,inOut",
});

gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 1, {
  delay: 6,
  opacity: 0,
  ease: "power2,inOut",
});
```

## How It Works
1. **Loader Animation**:
   - The top and bottom sections expand and contract with smooth animations.
   - The text marquee animates horizontally and vertically.

2. **Final View**:
   - After the animations complete, the navigation and footer sections remain visible, providing a polished interface.

## Screenshots
Include screenshots or GIFs of the loader animation and responsive views to showcase the final design.

## Challenges and Learnings
- Understanding GSAP's animation timeline and easing functions.
- Fine-tuning responsive design for various screen sizes.
- Managing overlapping animations for a seamless experience.

## Future Enhancements
- Add interactive hover effects on navigation links.
- Introduce customizable themes for different branding requirements.
- Optimize performance for slower devices.

## Conclusion
This project demonstrates the power of GSAP combined with modern web design principles to create a visually appealing and engaging user experience. It serves as an excellent starting point for building creative web animations.

