module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-surface': 'var(--color-bg-surface)',
        'btn-primary': 'var(--color-btn-primary)',
        'btn-primary-hover': 'var(--color-btn-primary-hover)',
        'tag-bg': 'var(--color-tag-bg)',
        'tag-text': 'var(--color-tag-text)',
        'bar-fill': 'var(--color-bar-fill)',
        'bar-track': 'var(--color-bar-track)',
        'link-bg': 'var(--color-link-bg)',
        'link-bg-hover': 'var(--color-link-bg-hover)',
        'link-text': 'var(--color-link-text)',
        'social': 'var(--color-social)',
        'social-hover': 'var(--color-social-hover)',
      },
      textColor: {
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)',
        'muted': 'var(--color-text-muted)',
        'accent': 'var(--color-text-accent)',
      },
      borderColor: {
        'card': 'var(--color-border-card)',
        'card-hover': 'var(--color-border-card-hover)',
        'nav': 'var(--color-border-nav)',
        'subtle': 'var(--color-border-subtle)',
        'accent': 'var(--color-border-accent)',
      },
    },
  },
  plugins: [],
};
