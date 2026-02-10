# Modern Personal Portfolio

A beautiful, colorful, and responsive personal portfolio website built with ReactJS, featuring glassmorphism design, gradient animations, and modern UI components.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portfolio+Preview)

## Features

- 🎨 **Modern UI** - Glassmorphism cards, gradient backgrounds, and neon effects
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Hover effects, scroll animations, and transitions
- 🧩 **Modular Components** - Clean, reusable React components
- 🎯 **Beginner Friendly** - Easy to customize and understand

## Sections

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Animated introduction with gradient text
3. **About** - Profile information and education details
4. **Skills** - Progress bars with icons for each skill
5. **Projects** - Project cards with tech stack and links
6. **Contact** - Contact form with social links
7. **Footer** - Copyright and social media links

## Tech Stack

- React.js (Functional Components)
- CSS3 (Custom styles, animations, transitions)
- React Icons (For icons)

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build folder will contain the optimized production build.

## Customization

### Personal Information

Update your name, details, and information in the following files:

- **Hero.js** - Name, role, and description
- **About.js** - Bio and education
- **Skills.js** - Add/remove skills and adjust progress levels
- **Projects.js** - Add your projects with descriptions and links
- **Contact.js** - Update email and contact details

### Styling

Customize colors, gradients, and styles in:

- `src/index.css` - Global variables and base styles
- `src/App.css` - App-level styles
- Individual component CSS files for section-specific styles

### Color Palette

The project uses CSS variables for easy customization:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  /* ... more variables */
}
```

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Deployment

### Deploy to GitHub Pages

1. Install the package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect React app and deploy

### Deploy to Vercel

1. Push your code to GitHub
2. Import your project in Vercel
3. Vercel will automatically detect React app and deploy

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any issues or have suggestions, please open an issue.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- Inspired by modern portfolio designs

---

Made with ❤️ by Sathyadevi
