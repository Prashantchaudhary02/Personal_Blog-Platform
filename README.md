# Chronicle — Minimalist Personal Blog Platform

A sleek, modern, and distraction-free personal blog platform built with vanilla web technologies (HTML, CSS, JavaScript). Designed for writers, engineers, and thinkers who appreciate calm interfaces, intentional design, and deep reading experiences.

---

## 🌟 Key Features

- **📖 Immersive Reader Mode**: Distraction-free full-screen reading with reading progress indicator, smooth typography, and Markdown formatting.
- **✍️ Pure Markdown Composer**: Live side-by-side or tabbed preview, one-click markdown formatting toolbar (Headings, Quotes, Code snippets, Lists, Links).
- **🌓 Dark & Light Modes**: Seamless theme transitions with high-contrast, accessible color palettes that remember your preference.
- **⚡ Instant Search & Filtering**: Real-time search by keyword, title, tag, or author (press `/` to search anytime), plus interactive category pills.
- **🏷️ Tags & Categories**: Organize your thoughts into clean topics like Engineering, Design, AI, and Life.
- **❤️ Interactions**: Like / clap counter and persistent personal Bookmarks list.
- **💬 Discussion**: In-thread comments stored directly in your browser.
- **💾 100% Client-Side & Private**: Runs fully offline in your browser. All posts and comments persist in `localStorage`.
- **📦 Data Hub**: Export your entire blog database as a portable `.json` backup, restore anytime, or reset to sample essays.

---

## 🚀 Quick Start

You can run the blog in two simple ways:

### Option 1: Direct File (No Server Needed)
Simply double-click **`index.html`** in your browser (Chrome, Edge, Firefox, Safari). Everything works immediately out of the box!

### Option 2: Local Node.js Server
If you prefer running via local HTTP:
```bash
node server.js
```
Then open: **`http://localhost:3000`** in your browser.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `/` | Instantly jump to the Search bar |
| `Esc` | Close any open modal (Reader, Story Editor, Data Hub, About) |

---

## 🎨 How to Personalize

### 1. Update Author Information
Open `index.html` and search for `heroProfile`:
- Change **Prashant Chaudhary** to any custom name if needed.
- Change the bio paragraph to your own intro.
- Update the avatar image URL to your own photo or GitHub avatar:
  ```html
  <img src="YOUR_IMAGE_URL" alt="Your Name" class="author-avatar">
  ```
- Update social links (GitHub, Twitter, LinkedIn, Email).

### 2. Default Author in Editor
Open `Script.js` and update the default author name:
```javascript
elements.postAuthor.value = "Your Name";
```

### 3. Change Categories
In `index.html`, update the `<select id="postCategory">` dropdown options to match your preferred subjects (e.g. Travel, Photography, Tech, Books).

---

## 📁 File Structure

```
personal_Blog_Platform/
├── index.html       # Clean semantic layout (Hero, Feed, Reader, Editor, Modals)
├── style.css        # Modern design system with CSS custom properties & responsive queries
├── Script.js        # Core controller (Storage, Markdown parser, Reader, Search, Reactions)
├── server.js        # Optional zero-dependency Node.js HTTP server
└── README.md        # Documentation and customization guide
```

---

## 💡 Built With
- Pure Vanilla HTML5 & CSS3
- Modern Vanilla JavaScript (ES6+)
- [Lucide Icons](https://lucide.dev) (with automatic SVG fallbacks)
- [Marked.js](https://marked.js.org) for markdown rendering
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Newsreader](https://fonts.google.com/specimen/Newsreader) typography

