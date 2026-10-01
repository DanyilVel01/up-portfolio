You are an elite AI Senior Full-Stack Developer, Creative Technologist, and WebGL Expert. Your task is to generate a fully functional, production-ready, highly polished personal portfolio web application inside my Visual Studio Code workspace. 

### CONTEXT & IDENTITY
- **User / Owner Name:** Danyil
- **Professional Identity:** AI Developer & 3D Web Integrator
- **Core Competencies:** JavaScript (ES6+), HTML5, CSS3, PHP (Custom backend integration/templates), Three.js / WebGL (Interactive 3D models and environments), and Artificial Intelligence integration solutions.
- **Design Inspiration & Evolution:** Evolved from a modern cyber-security template layout (similar to image_0.png) into a futuristic, dark-themed, isometric 3D "antigravity" ecosystem. Elements float at different depths with glassmorphism, neon red accents, space-blue nebulas, and depth-of-field effects.

---

### FILE STRUCTURE TO GENERATE IN VS CODE
Please create and populate the following files with clean, modular, well-commented, and production-ready code:
1. `index.html` - Semantic HTML structure containing all required sections, modal overlays, and CDN links for Three.js, GSAP (GreenSock Animation Platform), and Google Fonts.
2. `style.css` - Advanced CSS styling including CSS variables, glassmorphism (`backdrop-filter`), flexbox/grid layouts, responsive media queries, floating keyframe animations, and custom scrollbars.
3. `script.js` - Main JavaScript file initializing Three.js canvas, managing camera angles, handling window resize events, implementing scroll listener parallax, handling project category expansion logic, and modal toggles.
4. `backend/process.php` - A secure PHP handler script for contact form submissions, data sanitization, and a dynamic JSON/PHP project loader template.
5. `assets/` - Placeholder directory structure for 3D assets (`models/`), textures, and holographic icons.

---

### DETAILED SECTION-BY-SECTION SPECIFICATIONS

#### 1. GLOBAL & SETUP (`index.html` & `style.css`)
- **Theme Palette:** Deep space background (`#0b0b16` to `#15132d`), primary neon red (`#ff334b`), glowing cyber blue (`#00f0ff`), translucent glass panels (`rgba(255, 255, 255, 0.03)` with border `rgba(255, 255, 255, 0.08)`).
- **Typography:** Modern sans-serif (Inter / Poppins via Google Fonts).
- **Antigravity Atmosphere:** Add a subtle background particle system or CSS animation of floating microscopic code dust and slow-moving light trails.

#### 2. NAVIGATION HEADER (`<header class="floating-nav">`)
- Rendered as a fixed, floating translucent glass panel across the top center.
- **Logo:** Glowing cyber rings on the left (`Danyil.` typography).
- **Menu Links:** `About Me`, `Services`, `Portfolio`, `Blog`, `Contact Us`, and a heavily accented call-to-action button/link: `3D Projects`.
- **CV Button:** A distinct red button on the far right: `Download CV`.

#### 3. HERO SECTION (`<section class="hero-section">`)
- **Background:** Deep cosmic grid plane with a subtle perspective warp.
- **Left Column (Text Content):**
  - Small uppercase glowing red badge: `Welcome! I'M`
  - Main Heading: `Danyil` (Extra large, bold, gradient text).
  - Subtitle / Role: `AI Developer & 3D Web Integrator`
  - Bio Paragraph: "Specializing in creating immersive 3D experiences and integrating cutting-edge Artificial Intelligence solutions into modern web applications. Proficient in JS, HTML, CSS, PHP, and neural interface prototyping."
  - Action buttons: `Explore Portfolio` and `Contact Me`.
- **Right Column (3D Avatar / Portal):**
  - A large glowing red circular portal frame with a spinning nebula aura effect.
  - Inside the portal, embed a Three.js canvas rendering a dynamic, stylized 3D developer avatar or floating interactive geometry that reacts to mouse movement (parallax tilt).

#### 4. STATS SECTION (`<section class="stats-section">`)
- Four floating 3D translucent cards arranged horizontally (collapsing to a 2x2 grid on mobile).
- Each card features an animated holographic icon and bold counter typography:
  1. `05+` / `AI & Web Awards` (Icon: Holographic rotating trophy)
  2. `80+` / `Global Projects` (Icon: Rotating wireframe network globe)
  3. `05+` / `Years Combined Expertise` (Icon: Quantum timeline hourglass)
  4. `12+` / `AI & 3D Solutions` (Icon: Pulsing neural network node)

#### 5. EXPANDABLE PORTFOLIO SECTION (`<section class="portfolio-section">`)
- Section Header: `Portfolio` with subtitle text.
- **Main Interaction Button:** A prominent central red glassmorphism button labeled **`Expand All Project Categories`** with a chevron-down icon.
- **Behavior:** Clicking this button triggers a smooth GSAP/CSS expansion animation, sliding open a sub-tier grid layer containing category filter tabs:
  - Tab 1: `AI Models` (Projects featuring machine learning scripts, LLM integrations, text/image generation dashboards).
  - Tab 2: `JS/3D WebGL` (Projects featuring Three.js interactive scenes, shaders, custom particle systems).
  - Tab 3: `Custom PHP` (Projects utilizing backend scripting, database management, dynamic forms).
- **Project Cards:** Each card is a 3D glass container. Hovering over a card causes its inner preview element (e.g., wireframe cube or mini-canvas) to spin faster. Clicking any card opens an interactive fullscreen modal overlay with detailed case study text, live code snippets, and a demo link.

#### 6. SIDEBAR SOCIALS (`<aside class="sidebar-socials">`)
- Vertical floating dock on the right edge of the screen.
- Vertical text label: `FOLLOW ME ON:`
- Floating 3D glowing icons for: Facebook (`f`), Behance (`Be`), LinkedIn (`in`), GitHub (`gh`), and an extra custom button: `3D Demo Reel`.

---

### TECHNICAL IMPLEMENTATION REQUIREMENTS (`script.js`)

1. **Three.js Scene Setup:**
   - Create a responsive WebGL renderer attached to a canvas element in the Hero section (and mini-canvases for cards if performant).
   - Add ambient light and directional colored point lights (red and blue).
   - Load a sample geometry (e.g., an interactive TorusKnot or custom icosahedron representing an AI core) that rotates continuously and tilts based on mouse `mousemove` coordinates.

2. **Interactivity & Event Listeners:**
   - Implement smooth scrolling behavior for navigation links.
   - Write the exact vanilla JavaScript logic for the **`Expand All Project Categories`** button: toggle an `.expanded` class on the container, smoothly change max-height/opacity, and filter project grid items based on active tabs (`AI Models`, `JS/3D WebGL`, `Custom PHP`).
   - Implement modal open/close handlers for project card clicks, capturing ESC key to close and trapping focus.

3. **PHP Backend (`backend/process.php`):**
   - Write a secure PHP snippet that receives POST data from a Contact form (Name, Email, Message), validates inputs, prevents SQL injection/XSS, and returns a JSON response indicating success or error.

Please generate the complete source code for all these files now, ensuring everything is fully integrated, clean, and ready to run immediately in VS Code.