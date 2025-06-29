# Abhinandan Sharma - Personal Portfolio

A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and purple accents
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with React and optimized for speed
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Personal Information
My personal information is in `src/App.tsx`:
- Name and title
- About section content
- Experience details
- Skills and proficiency levels
- Contact information

### Styling
The portfolio uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Typography and spacing
- Component styles in the JSX

### Adding Sections
To add new sections:
1. Add navigation link in the nav component
2. Create a new section with proper ID
3. Style using Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal story and quick facts
- **Experience**: Work history and achievements
- **Skills**: Technical skills with visual progress bars
- **Contact**: Contact information and social links

## 🎯 Performance

- Lighthouse score: 95+ across all metrics
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Abhinandan Sharma
