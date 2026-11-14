/**
 * CHRONICLE - PERSONAL BLOG PLATFORM
 * Core Engine & Interactive Controller
 */

// ================= CONSTANTS & DEMO SEED DATA =================
const STORAGE_KEY_POSTS = "chronicle_blogs_v2";
const STORAGE_KEY_BOOKMARKS = "chronicle_bookmarks_v2";
const STORAGE_KEY_LIKES = "chronicle_likes_v2";
const STORAGE_KEY_THEME = "chronicle_theme";

const DEFAULT_AVATAR = "";

const SEED_POSTS = [
    {
        id: "post-1",
        title: "The Art of Intentional Software: Building Tools that Endure",
        author: "Prashant Chaudhary",
        authorAvatar: DEFAULT_AVATAR,
        category: "Engineering & Architecture",
        tags: ["Architecture", "Craftsmanship", "Systems", "CleanCode"],
        coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        createdAt: "2026-11-10",
        readTime: "5 min read",
        likes: 38,
        isDraft: false,
        content: `Software development is perpetually trapped in a cycle of churn. New frameworks arrive with fanfare, dominate mindshare for twenty-four months, and slowly retreat into legacy maintenance.

Yet, some systems endure for decades. Unix pipes, SQLite, Git, and Markdown remain as vital today as the week they were conceived. What separates disposable code from tools that outlive their hype?

> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra

### 1. Primitives Over Complex Abstractions
The secret of resilient software is finding the right **primitives**. When you build on atomic, orthogonal concepts, users can compose them in ways the original architect never anticipated.

Consider Unix pipes:
\`\`\`bash
cat server.log | grep "ERROR 500" | awk '{print $4}' | sort | uniq -c
\`\`\`
No centralized monolithic reporting engine was needed. Just small, single-purpose tools communicating over plain text streams.

### 2. Designing for Degradation
A remarkable piece of software degrades gracefully:
- It handles intermittent network failure without hanging.
- It stores data in human-readable formats where possible.
- It prioritizes offline readiness over mandatory cloud handshakes.

When we build with restraint, our systems reward us with durability and quiet reliability.`,
        comments: [
            {
                id: "c-1",
                author: "Elena Rostova",
                text: "The point about SQLite and plain primitives resonates deeply. We spend so much energy on accidental complexity.",
                createdAt: "2026-11-11"
            },
            {
                id: "c-2",
                author: "Marcus Chen",
                text: "Designing for degradation is the most underrated engineering skill today. Great essay!",
                createdAt: "2026-11-12"
            }
        ]
    },
    {
        id: "post-2",
        title: "Why Micro-Interactions and Tactile Feedback Define Modern UX",
        author: "Prashant Chaudhary",
        authorAvatar: DEFAULT_AVATAR,
        category: "Design & UX",
        tags: ["Design", "UI/UX", "Animation", "CSS"],
        coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        createdAt: "2026-11-06",
        readTime: "4 min read",
        likes: 54,
        isDraft: false,
        content: `When you interact with a physical object—a fountain pen nib touching vellum, the weighted click of a mechanical camera shutter—your brain receives instant, multi-sensory feedback.

Digital screens, by default, are glass sheets devoid of texture. That is why **micro-interactions** are not superficial polish: they are the digital equivalent of physical tactility.

### The Anatomy of Delight
A great micro-interaction possesses four phases:
1. **The Trigger:** A hover, click, pull-to-refresh, or toggle switch.
2. **The Condition:** The system assesses state (e.g., success, pending, active).
3. **The Feedback:** A subtle spring animation, a 50ms haptic tap, or a color bloom.
4. **The Loop & Mode:** What remains in the aftermath.

### Spring Physics vs Linear Transitions
Linear easing feels robotic. Human eyes expect inertia, friction, and bounce. When adding motion to web components:

\`\`\`css
/* Stiff and natural feeling spring transition */
.button-pop {
    transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.button-pop:active {
    transform: scale(0.96);
}
\`\`\`

The best digital products don't shout; they whisper reassurance with every single click.`,
        comments: [
            {
                id: "c-3",
                author: "Sarah Jenkins",
                text: "Spring transitions transform a flat web page into something that feels alive. Love this breakdown.",
                createdAt: "2026-11-08"
            }
        ]
    },
    {
        id: "post-3",
        title: "Exploring the Frontiers of Local AI Models & Private Computing",
        author: "Prashant Chaudhary",
        authorAvatar: DEFAULT_AVATAR,
        category: "Artificial Intelligence",
        tags: ["AI", "OpenSource", "MachineLearning", "Privacy"],
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
        createdAt: "2026-10-28",
        readTime: "6 min read",
        likes: 82,
        isDraft: false,
        content: `For the past three years, the dominant paradigm in generative AI was centralized cloud APIs. You sent your prompts to massive remote clusters, and answers returned over HTTPS.

However, a quiet revolution has unfolded on personal workstations and edge devices. Thanks to **quantization** (4-bit and 2-bit GGUF formats) and optimized inference engines like \`llama.cpp\`, powerful reasoning models now execute directly on consumer silicon.

### Why Local Inference Matters
- **Absolute Privacy:** Sensitive personal notes, medical queries, and proprietary source code never leave your RAM.
- **Zero Latency & Offline:** Work in a train cabin or cabin in the woods without broadband.
- **Predictable Cost:** No token billing or sudden subscription tier hikes.

\`\`\`python
# Running lightweight local inferences with Python
from llama_cpp import Llama

llm = Llama(model_path="./models/mistral-7b-instruct.Q4_K_M.gguf", n_ctx=2048)
output = llm("Q: Explain entropy in simple terms.\nA: ", max_tokens=100)
print(output["choices"][0]["text"])
\`\`\`

The computing pendulum has always swung between centralization and decentralization. The edge is claiming its rightful place again.`,
        comments: []
    },
    {
        id: "post-4",
        title: "Calm Productivity: Escaping the Hyperactive Hive Mind",
        author: "Prashant Chaudhary",
        authorAvatar: DEFAULT_AVATAR,
        category: "Life & Philosophy",
        tags: ["Mindset", "DeepWork", "Habits", "Writing"],
        coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        createdAt: "2026-10-15",
        readTime: "4 min read",
        likes: 67,
        isDraft: false,
        content: `We have mistaken responsiveness for effectiveness. The constant chime of Slack pings, unread notification badges, and calendar tetris fracture human cognition into sixty-second fragments.

In his book *A World Without Email*, Cal Newport terms this **The Hyperactive Hive Mind**: a workflow centered around ad-hoc, unstructured digital messaging.

### Three Rules for Quiet Focus
1. **Asynchronous by Default:** Write complete, thoughtful briefs instead of starting twenty real-time chat threads.
2. **Batching Inputs:** Check email and social feeds twice daily at scheduled intervals rather than keeping tabs open.
3. **The Two-Hour Sacred Block:** Protect your first two hours of the morning for creative production before consuming other people's priorities.

> "Your mind is for having ideas, not holding them." — David Allen

Protecting your attention is not antisocial; it is the prerequisite for doing work that actually matters.`,
        comments: []
    }
];

// ================= GLOBAL STATE =================
let posts = [];
let bookmarks = new Set();
let likedPosts = new Set();
let activeFilter = "all";
let searchQuery = "";
let sortMode = "newest";
let viewMode = "grid"; // 'grid' | 'list'
let currentReadingPost = null;
let currentEditingId = null;

// ================= DOM ELEMENT REFERENCES =================
const elements = {
    // Containers
    blogContainer: document.getElementById("blogContainer"),
    emptyState: document.getElementById("emptyState"),
    emptyStateTitle: document.getElementById("emptyStateTitle"),
    emptyStateText: document.getElementById("emptyStateText"),
    emptyStateActionBtn: document.getElementById("emptyStateActionBtn"),
    categoryFilters: document.getElementById("categoryFilters"),
    resultsCount: document.getElementById("resultsCount"),
    readingProgressBar: document.getElementById("readingProgressBar"),

    // Stats
    statArticlesCount: document.getElementById("statArticlesCount"),
    statLikesCount: document.getElementById("statLikesCount"),
    statReadMinutes: document.getElementById("statReadMinutes"),
    bookmarkCountBadge: document.getElementById("bookmarkCountBadge"),
    draftCountBadge: document.getElementById("draftCountBadge"),

    // Search & Sort & View
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    sortSelect: document.getElementById("sortSelect"),
    gridViewBtn: document.getElementById("gridViewBtn"),
    listViewBtn: document.getElementById("listViewBtn"),

    // Navigation Buttons
    navHomeBtn: document.getElementById("navHomeBtn"),
    navFeedBtn: document.getElementById("navFeedBtn"),
    navBookmarksBtn: document.getElementById("navBookmarksBtn"),
    navDraftsBtn: document.getElementById("navDraftsBtn"),
    navAboutBtn: document.getElementById("navAboutBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    themeIcon: document.getElementById("themeIcon"),
    openEditorBtn: document.getElementById("openEditorBtn"),
    backupDataBtn: document.getElementById("backupDataBtn"),
    resetDemoBtn: document.getElementById("resetDemoBtn"),
    quickDraftsBtn: document.getElementById("quickDraftsBtn"),

    // Reader Modal
    readerModal: document.getElementById("readerModal"),
    closeReaderBtn: document.getElementById("closeReaderBtn"),
    readerCategory: document.getElementById("readerCategory"),
    readerDate: document.getElementById("readerDate"),
    readerReadTime: document.getElementById("readerReadTime"),
    readerTitle: document.getElementById("readerTitle"),
    readerAuthor: document.getElementById("readerAuthor"),
    readerAuthorAvatar: document.getElementById("readerAuthorAvatar"),
    readerCoverWrap: document.getElementById("readerCoverWrap"),
    readerCoverImg: document.getElementById("readerCoverImg"),
    readerContent: document.getElementById("readerContent"),
    readerTags: document.getElementById("readerTags"),
    readerClapBtn: document.getElementById("readerClapBtn"),
    readerClapCount: document.getElementById("readerClapCount"),
    readerBookmarkBtn: document.getElementById("readerBookmarkBtn"),
    readerBottomBookmarkBtn: document.getElementById("readerBottomBookmarkBtn"),
    readerBottomBookmarkText: document.getElementById("readerBottomBookmarkText"),
    readerShareBtn: document.getElementById("readerShareBtn"),
    readerEditBtn: document.getElementById("readerEditBtn"),

    // Comments
    commentForm: document.getElementById("commentForm"),
    commentAuthor: document.getElementById("commentAuthor"),
    commentText: document.getElementById("commentText"),
    commentsList: document.getElementById("commentsList"),
    commentCount: document.getElementById("commentCount"),

    // Editor Modal
    editorModal: document.getElementById("editorModal"),
    editorModalTitle: document.getElementById("editorModalTitle"),
    closeEditorBtn: document.getElementById("closeEditorBtn"),
    cancelEditorBtn: document.getElementById("cancelEditorBtn"),
    blogForm: document.getElementById("blogForm"),
    postTitle: document.getElementById("postTitle"),
    postAuthor: document.getElementById("postAuthor"),
    postCategory: document.getElementById("postCategory"),
    postTags: document.getElementById("postTags"),
    postCover: document.getElementById("postCover"),
    coverPresets: document.getElementById("coverPresets"),
    postContent: document.getElementById("postContent"),
    editorLivePreview: document.getElementById("editorLivePreview"),
    tabWriteBtn: document.getElementById("tabWriteBtn"),
    tabPreviewBtn: document.getElementById("tabPreviewBtn"),
    markdownToolbar: document.getElementById("markdownToolbar"),
    postIsDraft: document.getElementById("postIsDraft"),
    publishSubmitBtn: document.getElementById("publishSubmitBtn"),
    submitBtnText: document.getElementById("submitBtnText"),
    editorWordCount: document.getElementById("editorWordCount"),
    editorCharCount: document.getElementById("editorCharCount"),
    editorEstTime: document.getElementById("editorEstTime"),

    // Data Hub Modal
    dataModal: document.getElementById("dataModal"),
    closeDataModalBtn: document.getElementById("closeDataModalBtn"),
    exportDataBtn: document.getElementById("exportDataBtn"),
    triggerImportBtn: document.getElementById("triggerImportBtn"),
    importFileInput: document.getElementById("importFileInput"),
    resetDemoFromModalBtn: document.getElementById("resetDemoFromModalBtn"),

    // About Modal
    aboutModal: document.getElementById("aboutModal"),
    closeAboutModalBtn: document.getElementById("closeAboutModalBtn"),

    // Confirm Modal
    confirmModal: document.getElementById("confirmModal"),
    confirmTitle: document.getElementById("confirmTitle"),
    confirmMessage: document.getElementById("confirmMessage"),
    confirmCancelBtn: document.getElementById("confirmCancelBtn"),
    confirmProceedBtn: document.getElementById("confirmProceedBtn"),

    // Toasts
    toastContainer: document.getElementById("toastContainer")
};

// ================= INITIALIZATION =================
function initApp() {
    loadTheme();
    loadState();
    setupEventListeners();
    renderCategoryFilters();
    renderPosts();
    updateGlobalStats();
    refreshIcons();
}

// ================= STORAGE & STATE =================
function loadState() {
    try {
        const rawPosts = localStorage.getItem(STORAGE_KEY_POSTS);
        if (rawPosts) {
            posts = JSON.parse(rawPosts);
            // Migrate author name if previously seeded with demo name
            posts.forEach(p => {
                if (p.author === "Alex Vance") {
                    p.author = "Prashant Chaudhary";
                    p.authorAvatar = DEFAULT_AVATAR;
                }
            });
            savePosts();
        } else {
            // Seed with high quality defaults
            posts = JSON.parse(JSON.stringify(SEED_POSTS));
            savePosts();
        }

        const rawBookmarks = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
        bookmarks = rawBookmarks ? new Set(JSON.parse(rawBookmarks)) : new Set();

        const rawLikes = localStorage.getItem(STORAGE_KEY_LIKES);
        likedPosts = rawLikes ? new Set(JSON.parse(rawLikes)) : new Set();
    } catch (e) {
        console.error("Storage error:", e);
        posts = JSON.parse(JSON.stringify(SEED_POSTS));
        bookmarks = new Set();
        likedPosts = new Set();
    }
}

function savePosts() {
    localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(posts));
}

function saveBookmarks() {
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(Array.from(bookmarks)));
    elements.bookmarkCountBadge.textContent = bookmarks.size;
}

function saveLikes() {
    localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(Array.from(likedPosts)));
}

// ================= THEME CONTROLLER =================
function loadTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    if (theme === "dark") {
        elements.themeIcon.setAttribute("data-lucide", "sun");
    } else {
        elements.themeIcon.setAttribute("data-lucide", "moon");
    }
    refreshIcons();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`, "info");
}

// ================= MARKDOWN PARSER (WITH FALLBACK) =================
function renderMarkdown(content) {
    if (!content) return "";

    // If external marked library is available
    if (typeof marked !== "undefined" && typeof marked.parse === "function") {
        try {
            return marked.parse(content);
        } catch (err) {
            console.warn("Marked parser error, falling back to basic parser", err);
        }
    }

    // Built-in resilient regex markdown parser
    let html = escapeHtml(content);

    // Code blocks
    html = html.replace(/```([a-z0-9]*)\n([\s\S]*?)```/gm, (match, lang, code) => {
        return `<pre><code class="language-${lang}">${code.trim()}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Headers
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

    // Bold & Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    // Links & Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />');
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Lists
    html = html.replace(/^\s*-\s+(.*$)/gim, "<ul><li>$1</li></ul>");
    html = html.replace(/<\/ul>\s*<ul>/g, "");

    // Paragraphs
    html = html.split(/\n\s*\n/).map(paragraph => {
        if (/^<(h[1-6]|ul|ol|pre|blockquote)/.test(paragraph.trim())) {
            return paragraph;
        }
        return `<p>${paragraph.replace(/\n/g, "<br>")}</p>`;
    }).join("");

    return html;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// ================= METRICS & STATS =================
function calculateReadTime(text) {
    if (!text) return "1 min read";
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}

function updateGlobalStats() {
    const published = posts.filter(p => !p.isDraft);
    const drafts = posts.filter(p => p.isDraft);

    elements.statArticlesCount.textContent = published.length;
    elements.draftCountBadge.textContent = drafts.length;
    elements.bookmarkCountBadge.textContent = bookmarks.size;

    const totalLikes = posts.reduce((sum, p) => sum + (p.likes || 0), 0);
    elements.statLikesCount.textContent = totalLikes;

    const totalMinutes = published.reduce((sum, p) => {
        const words = (p.content || "").trim().split(/\s+/).length;
        return sum + Math.max(1, Math.ceil(words / 200));
    }, 0);
    elements.statReadMinutes.textContent = `${totalMinutes}m`;
}

// ================= CATEGORY FILTERS =================
function getUniqueCategories() {
    const categories = new Set();
    posts.forEach(p => {
        if (p.category) categories.add(p.category);
    });
    return Array.from(categories);
}

function renderCategoryFilters() {
    const categories = getUniqueCategories();
    elements.categoryFilters.innerHTML = "";

    // "All" filter pill
    const allPill = document.createElement("button");
    allPill.className = `filter-pill ${activeFilter === "all" ? "active" : ""}`;
    allPill.innerHTML = `<span>All Stories</span> <span class="pill-count">${posts.filter(p => !p.isDraft).length}</span>`;
    allPill.addEventListener("click", () => setFilter("all"));
    elements.categoryFilters.appendChild(allPill);

    // Individual categories
    categories.forEach(cat => {
        const count = posts.filter(p => !p.isDraft && p.category === cat).length;
        const pill = document.createElement("button");
        pill.className = `filter-pill ${activeFilter === cat ? "active" : ""}`;
        pill.innerHTML = `<span>${cat}</span> <span class="pill-count">${count}</span>`;
        pill.addEventListener("click", () => setFilter(cat));
        elements.categoryFilters.appendChild(pill);
    });
}

function setFilter(filter) {
    activeFilter = filter;
    
    // Update nav links active state
    elements.navFeedBtn.classList.toggle("active", filter === "all");
    elements.navBookmarksBtn.classList.toggle("active", filter === "bookmarks");
    elements.navDraftsBtn.classList.toggle("active", filter === "drafts");

    renderCategoryFilters();
    renderPosts();
}

// ================= POSTS RENDERING =================
function getFilteredPosts() {
    let filtered = [...posts];

    // Filter by category / view tab
    if (activeFilter === "bookmarks") {
        filtered = filtered.filter(p => bookmarks.has(p.id));
    } else if (activeFilter === "drafts") {
        filtered = filtered.filter(p => p.isDraft);
    } else if (activeFilter === "all") {
        filtered = filtered.filter(p => !p.isDraft);
    } else {
        filtered = filtered.filter(p => !p.isDraft && p.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => {
            const inTitle = (p.title || "").toLowerCase().includes(q);
            const inAuthor = (p.author || "").toLowerCase().includes(q);
            const inCategory = (p.category || "").toLowerCase().includes(q);
            const inContent = (p.content || "").toLowerCase().includes(q);
            const inTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
            return inTitle || inAuthor || inCategory || inContent || inTags;
        });
    }

    // Sort
    filtered.sort((a, b) => {
        if (sortMode === "newest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortMode === "oldest") {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortMode === "popular") {
            return (b.likes || 0) - (a.likes || 0);
        } else if (sortMode === "quick") {
            const timeA = parseInt(a.readTime) || 1;
            const timeB = parseInt(b.readTime) || 1;
            return timeA - timeB;
        }
        return 0;
    });

    return filtered;
}

function renderPosts() {
    const list = getFilteredPosts();
    elements.blogContainer.innerHTML = "";

    // Update count description
    let countText = `Showing ${list.length} ${list.length === 1 ? "story" : "stories"}`;
    if (activeFilter === "bookmarks") countText += " in your Bookmarks";
    else if (activeFilter === "drafts") countText += " in Drafts";
    else if (activeFilter !== "all") countText += ` in ${activeFilter}`;
    if (searchQuery.trim()) countText += ` matching "${searchQuery}"`;
    elements.resultsCount.textContent = countText;

    if (list.length === 0) {
        elements.emptyState.style.display = "block";
        elements.blogContainer.style.display = "none";

        if (activeFilter === "bookmarks") {
            elements.emptyStateTitle.textContent = "No saved stories yet";
            elements.emptyStateText.textContent = "Click the bookmark icon on any story to save it for offline reading.";
            elements.emptyStateActionBtn.style.display = "none";
        } else if (activeFilter === "drafts") {
            elements.emptyStateTitle.textContent = "No drafts in progress";
            elements.emptyStateText.textContent = "Start writing and toggle 'Save as Draft' to keep your thoughts private.";
            elements.emptyStateActionBtn.style.display = "inline-flex";
        } else if (searchQuery.trim()) {
            elements.emptyStateTitle.textContent = "No matching stories found";
            elements.emptyStateText.textContent = `We couldn't find anything matching "${searchQuery}". Try different keywords.`;
            elements.emptyStateActionBtn.style.display = "none";
        } else {
            elements.emptyStateTitle.textContent = "No stories published";
            elements.emptyStateText.textContent = "Be the first to share your perspective with the world.";
            elements.emptyStateActionBtn.style.display = "inline-flex";
        }
        refreshIcons();
        return;
    }

    elements.emptyState.style.display = "none";
    elements.blogContainer.style.display = viewMode === "list" ? "flex" : "grid";
    elements.blogContainer.className = viewMode === "list" ? "stories-list-view" : "stories-grid";

    list.forEach(post => {
        const card = createPostCard(post);
        elements.blogContainer.appendChild(card);
    });

    refreshIcons();
}

function createPostCard(post) {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.setAttribute("data-id", post.id);

    const isBookmarked = bookmarks.has(post.id);
    const isLiked = likedPosts.has(post.id);

    // Excerpt: strip markdown characters
    const cleanExcerpt = (post.content || "")
        .replace(/[#*`>\[\]\(\)-]/g, "")
        .trim()
        .slice(0, 160) + "...";

    // Tags HTML
    const tagsHtml = (post.tags || [])
        .slice(0, 3)
        .map(t => `<span class="tag-pill">#${escapeHtml(t)}</span>`)
        .join("");

    const coverUrl = post.coverImage || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

    card.innerHTML = `
        <div class="card-media" onclick="window.ChronicleApp.openReader('${post.id}')">
            <img src="${coverUrl}" alt="${escapeHtml(post.title)}" class="card-cover-img" loading="lazy">
            <span class="card-category-badge">${escapeHtml(post.category || "General")}</span>
            ${post.isDraft ? '<span class="card-draft-badge">Draft</span>' : ''}
        </div>
        <div class="card-content">
            <div class="card-meta-row">
                <span>${post.createdAt || "Recent"}</span>
                <span>•</span>
                <span>${post.readTime || calculateReadTime(post.content)}</span>
            </div>
            <h3 class="card-title" onclick="window.ChronicleApp.openReader('${post.id}')">${escapeHtml(post.title)}</h3>
            <p class="card-excerpt">${escapeHtml(cleanExcerpt)}</p>
            <div class="card-tags">${tagsHtml}</div>
            <div class="card-footer">
                <div class="card-author">
                    <span class="card-author-name">${escapeHtml(post.author)}</span>
                </div>
                <div class="card-actions">
                    <button class="card-action-btn ${isLiked ? 'active-like' : ''}" title="Like this story" onclick="window.ChronicleApp.toggleLike('${post.id}', event)">
                        <i data-lucide="heart"></i>
                        <span>${post.likes || 0}</span>
                    </button>
                    <button class="card-action-btn ${isBookmarked ? 'active-bookmark' : ''}" title="Bookmark" onclick="window.ChronicleApp.toggleBookmark('${post.id}', event)">
                        <i data-lucide="bookmark"></i>
                    </button>
                    <button class="card-action-btn" title="Edit story" onclick="window.ChronicleApp.openEditor('${post.id}', event)">
                        <i data-lucide="edit-3"></i>
                    </button>
                    <button class="card-action-btn delete-icon" title="Delete story" onclick="window.ChronicleApp.confirmDeletePost('${post.id}', event)">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// ================= READER VIEW CONTROLLER =================
function openReader(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    currentReadingPost = post;

    elements.readerCategory.textContent = post.category || "General";
    elements.readerDate.textContent = post.createdAt || "Recently published";
    elements.readerReadTime.textContent = post.readTime || calculateReadTime(post.content);
    elements.readerTitle.textContent = post.title;
    elements.readerAuthor.textContent = post.author;
    if (elements.readerAuthorAvatar) {
        elements.readerAuthorAvatar.src = post.authorAvatar || "";
    }

    if (post.coverImage) {
        elements.readerCoverImg.src = post.coverImage;
        elements.readerCoverWrap.style.display = "block";
    } else {
        elements.readerCoverWrap.style.display = "none";
    }

    elements.readerContent.innerHTML = renderMarkdown(post.content);

    // Tags
    elements.readerTags.innerHTML = (post.tags || [])
        .map(t => `<span class="tag-pill">#${escapeHtml(t)}</span>`)
        .join("");

    // Likes & Bookmarks State
    updateReaderInteractions(post);

    // Comments
    renderComments(post);

    // Open Modal
    elements.readerModal.classList.add("active");
    elements.readerModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Attach scroll progress listener to reader dialog
    const dialog = elements.readerModal.querySelector(".reader-dialog");
    dialog.scrollTop = 0;
    elements.readingProgressBar.style.width = "0%";
    dialog.onscroll = () => {
        const total = dialog.scrollHeight - dialog.clientHeight;
        const progress = total > 0 ? (dialog.scrollTop / total) * 100 : 0;
        elements.readingProgressBar.style.width = `${progress}%`;
    };

    refreshIcons();
}

function closeReader() {
    elements.readerModal.classList.remove("active");
    elements.readerModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    elements.readingProgressBar.style.width = "0%";
    currentReadingPost = null;
}

function updateReaderInteractions(post) {
    const isLiked = likedPosts.has(post.id);
    const isBookmarked = bookmarks.has(post.id);

    elements.readerClapCount.textContent = post.likes || 0;
    elements.readerClapBtn.classList.toggle("clapped", isLiked);

    elements.readerBookmarkBtn.classList.toggle("active-bookmark", isBookmarked);
    elements.readerBottomBookmarkBtn.classList.toggle("btn-primary", isBookmarked);
    elements.readerBottomBookmarkBtn.classList.toggle("btn-secondary", !isBookmarked);
    elements.readerBottomBookmarkText.textContent = isBookmarked ? "Saved in Bookmarks" : "Save Story";
}

function toggleLike(postId, event) {
    if (event) event.stopPropagation();

    const post = posts.find(p => p.id === postId);
    if (!post) return;

    if (likedPosts.has(postId)) {
        likedPosts.delete(postId);
        post.likes = Math.max(0, (post.likes || 1) - 1);
        showToast("Like removed", "info");
    } else {
        likedPosts.add(postId);
        post.likes = (post.likes || 0) + 1;
        showToast("Thanks for the love! ❤️", "success");
    }

    saveLikes();
    savePosts();
    renderPosts();
    updateGlobalStats();

    if (currentReadingPost && currentReadingPost.id === postId) {
        updateReaderInteractions(post);
    }
}

function toggleBookmark(postId, event) {
    if (event) event.stopPropagation();

    const post = posts.find(p => p.id === postId);
    if (!post) return;

    if (bookmarks.has(postId)) {
        bookmarks.delete(postId);
        showToast("Removed from Bookmarks", "info");
    } else {
        bookmarks.add(postId);
        showToast("Saved to Bookmarks", "success");
    }

    saveBookmarks();
    renderPosts();
    updateGlobalStats();

    if (currentReadingPost && currentReadingPost.id === postId) {
        updateReaderInteractions(post);
    }
}

// ================= COMMENTS CONTROLLER =================
function renderComments(post) {
    const comments = post.comments || [];
    elements.commentCount.textContent = comments.length;
    elements.commentsList.innerHTML = "";

    if (comments.length === 0) {
        elements.commentsList.innerHTML = `<p class="text-muted" style="color: var(--text-muted); font-size: 0.9rem;">No thoughts shared yet. Be the first to start the conversation!</p>`;
        return;
    }

    comments.forEach(c => {
        const item = document.createElement("div");
        item.className = "comment-item";
        const initial = (c.author || "A").charAt(0).toUpperCase();

        item.innerHTML = `
            <div class="comment-avatar">${initial}</div>
            <div class="comment-content">
                <div class="comment-author-line">
                    <span class="comment-author-name">${escapeHtml(c.author)}</span>
                    <span class="comment-time">${escapeHtml(c.createdAt || "Recently")}</span>
                </div>
                <div class="comment-body">${escapeHtml(c.text)}</div>
            </div>
        `;
        elements.commentsList.appendChild(item);
    });
}

function handleAddComment(e) {
    e.preventDefault();
    if (!currentReadingPost) return;

    const author = elements.commentAuthor.value.trim();
    const text = elements.commentText.value.trim();

    if (!author || !text) return;

    if (!currentReadingPost.comments) {
        currentReadingPost.comments = [];
    }

    const newComment = {
        id: `c-${Date.now()}`,
        author,
        text,
        createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    };

    currentReadingPost.comments.push(newComment);
    savePosts();

    elements.commentText.value = "";
    renderComments(currentReadingPost);
    showToast("Your thought has been posted!", "success");
}

// ================= EDITOR CONTROLLER =================
function openEditor(postId = null, event = null) {
    if (event) event.stopPropagation();

    currentEditingId = postId;
    elements.editorModal.classList.add("active");
    elements.editorModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Switch to write tab by default
    switchEditorTab("write");

    if (postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            elements.editorModalTitle.textContent = "Edit Story";
            elements.submitBtnText.textContent = "Update Story";
            elements.postTitle.value = post.title || "";
            elements.postAuthor.value = post.author || "Prashant Chaudhary";
            elements.postCategory.value = post.category || "Engineering & Architecture";
            elements.postTags.value = (post.tags || []).join(", ");
            elements.postCover.value = post.coverImage || "";
            elements.postContent.value = post.content || "";
            elements.postIsDraft.checked = !!post.isDraft;
        }
    } else {
        elements.editorModalTitle.textContent = "Write a New Story";
        elements.submitBtnText.textContent = "Publish Story";
        elements.blogForm.reset();
        elements.postAuthor.value = "Prashant Chaudhary";
        elements.postIsDraft.checked = false;
    }

    updateEditorStats();
    refreshIcons();
}

function closeEditor() {
    elements.editorModal.classList.remove("active");
    elements.editorModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentEditingId = null;
}

function switchEditorTab(tab) {
    if (tab === "write") {
        elements.tabWriteBtn.classList.add("active");
        elements.tabPreviewBtn.classList.remove("active");
        elements.postContent.style.display = "block";
        elements.editorLivePreview.style.display = "none";
        elements.markdownToolbar.style.display = "flex";
    } else {
        elements.tabWriteBtn.classList.remove("active");
        elements.tabPreviewBtn.classList.add("active");
        elements.postContent.style.display = "none";
        elements.editorLivePreview.style.display = "block";
        elements.markdownToolbar.style.display = "none";

        // Render preview
        const content = elements.postContent.value.trim();
        elements.editorLivePreview.innerHTML = content
            ? renderMarkdown(content)
            : `<p class="preview-empty">Nothing written yet. Start drafting to see your preview here.</p>`;
    }
    refreshIcons();
}

function insertMarkdownTool(tool) {
    const textarea = elements.postContent;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);

    let replacement = "";
    switch (tool) {
        case "bold":
            replacement = `**${selected || "bold text"}**`;
            break;
        case "italic":
            replacement = `*${selected || "italic text"}*`;
            break;
        case "h2":
            replacement = `\n## ${selected || "Section Heading"}\n`;
            break;
        case "h3":
            replacement = `\n### ${selected || "Subsection Heading"}\n`;
            break;
        case "quote":
            replacement = `\n> ${selected || "Thoughtful quotation..."}\n`;
            break;
        case "code":
            replacement = `\n\`\`\`javascript\n${selected || "// Code snippet"}\n\`\`\`\n`;
            break;
        case "list":
            replacement = `\n- ${selected || "List item 1"}\n- List item 2\n`;
            break;
        case "link":
            replacement = `[${selected || "Link text"}](https://example.com)`;
            break;
    }

    textarea.setRangeText(replacement, start, end, "select");
    textarea.focus();
    updateEditorStats();
}

function updateEditorStats() {
    const text = elements.postContent.value;
    const charCount = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const estTime = calculateReadTime(text);

    elements.editorWordCount.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
    elements.editorCharCount.textContent = `${charCount} characters`;
    elements.editorEstTime.textContent = estTime;
}

function handleEditorSubmit(e) {
    e.preventDefault();

    const title = elements.postTitle.value.trim();
    const author = elements.postAuthor.value.trim() || "Anonymous";
    const category = elements.postCategory.value;
    const tags = elements.postTags.value
        .split(",")
        .map(t => t.trim())
        .filter(t => t.length > 0);
    const coverImage = elements.postCover.value.trim() || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";
    const content = elements.postContent.value.trim();
    const isDraft = elements.postIsDraft.checked;
    const readTime = calculateReadTime(content);

    if (!title || !content) {
        showToast("Title and content are required.", "danger");
        return;
    }

    if (currentEditingId) {
        // Update existing post
        const index = posts.findIndex(p => p.id === currentEditingId);
        if (index !== -1) {
            posts[index] = {
                ...posts[index],
                title,
                author,
                category,
                tags,
                coverImage,
                content,
                isDraft,
                readTime
            };
            showToast("Story updated successfully!", "success");
        }
    } else {
        // Create new post
        const newPost = {
            id: `post-${Date.now()}`,
            title,
            author,
            authorAvatar: DEFAULT_AVATAR,
            category,
            tags,
            coverImage,
            createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            readTime,
            likes: 0,
            isDraft,
            content,
            comments: []
        };
        posts.unshift(newPost);
        showToast(isDraft ? "Draft saved successfully!" : "Story published to your feed!", "success");
    }

    savePosts();
    closeEditor();
    renderCategoryFilters();
    renderPosts();
    updateGlobalStats();
}

// ================= DELETE CONFIRMATION =================
let pendingDeleteId = null;

function confirmDeletePost(postId, event) {
    if (event) event.stopPropagation();
    pendingDeleteId = postId;

    const post = posts.find(p => p.id === postId);
    const title = post ? post.title : "this story";

    elements.confirmTitle.textContent = "Delete Story?";
    elements.confirmMessage.textContent = `Are you sure you want to permanently delete "${title}"? This cannot be undone.`;
    elements.confirmModal.classList.add("active");
    elements.confirmModal.setAttribute("aria-hidden", "false");
}

function proceedDeletePost() {
    if (!pendingDeleteId) return;

    posts = posts.filter(p => p.id !== pendingDeleteId);
    bookmarks.delete(pendingDeleteId);
    likedPosts.delete(pendingDeleteId);

    savePosts();
    saveBookmarks();
    saveLikes();

    elements.confirmModal.classList.remove("active");
    elements.confirmModal.setAttribute("aria-hidden", "true");
    pendingDeleteId = null;

    if (currentReadingPost && currentReadingPost.id === pendingDeleteId) {
        closeReader();
    }

    renderCategoryFilters();
    renderPosts();
    updateGlobalStats();
    showToast("Story was deleted", "info");
}

// ================= DATA HUB (BACKUP & IMPORT) =================
function exportData() {
    const backup = {
        exportedAt: new Date().toISOString(),
        version: "2.0",
        posts,
        bookmarks: Array.from(bookmarks),
        likedPosts: Array.from(likedPosts)
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chronicle-blog-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Blog snapshot exported successfully!", "success");
}

function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (Array.isArray(data.posts)) {
                posts = data.posts;
                if (Array.isArray(data.bookmarks)) bookmarks = new Set(data.bookmarks);
                if (Array.isArray(data.likedPosts)) likedPosts = new Set(data.likedPosts);

                savePosts();
                saveBookmarks();
                saveLikes();
                elements.dataModal.classList.remove("active");
                renderCategoryFilters();
                renderPosts();
                updateGlobalStats();
                showToast(`Restored ${posts.length} stories successfully!`, "success");
            } else {
                showToast("Invalid backup format.", "danger");
            }
        } catch (err) {
            showToast("Failed to parse JSON backup.", "danger");
        }
    };
    reader.readAsText(file);
    e.target.value = "";
}

function resetToDemo() {
    posts = JSON.parse(JSON.stringify(SEED_POSTS));
    bookmarks.clear();
    likedPosts.clear();

    savePosts();
    saveBookmarks();
    saveLikes();

    elements.dataModal.classList.remove("active");
    renderCategoryFilters();
    renderPosts();
    updateGlobalStats();
    showToast("Restored 4 curated demo stories!", "success");
}

// ================= SHARE CONTROLLER =================
function shareCurrentArticle() {
    if (!currentReadingPost) return;

    const url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Article link copied to clipboard!", "success");
        }).catch(() => {
            showToast("Link: " + url, "info");
        });
    } else {
        showToast("Sharing: " + currentReadingPost.title, "info");
    }
}

// ================= TOAST SYSTEM =================
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconName = "info";
    if (type === "success") iconName = "check-circle";
    if (type === "danger") iconName = "alert-circle";

    toast.innerHTML = `
        <i data-lucide="${iconName}"></i>
        <span>${escapeHtml(message)}</span>
    `;

    elements.toastContainer.appendChild(toast);
    refreshIcons();

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 3200);
}

// ================= LUCIDE ICONS HELPER =================
function refreshIcons() {
    if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
}

// ================= EVENT LISTENERS =================
function setupEventListeners() {
    // Theme toggle
    elements.themeToggleBtn.addEventListener("click", toggleTheme);

    // Search inputs
    elements.searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        elements.clearSearchBtn.style.display = searchQuery ? "block" : "none";
        renderPosts();
    });

    elements.clearSearchBtn.addEventListener("click", () => {
        elements.searchInput.value = "";
        searchQuery = "";
        elements.clearSearchBtn.style.display = "none";
        elements.searchInput.focus();
        renderPosts();
    });

    // Keyboard shortcut '/' to search
    window.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== elements.searchInput && 
            document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            elements.searchInput.focus();
        } else if (e.key === "Escape") {
            if (elements.readerModal.classList.contains("active")) closeReader();
            if (elements.editorModal.classList.contains("active")) closeEditor();
            if (elements.dataModal.classList.contains("active")) elements.dataModal.classList.remove("active");
            if (elements.aboutModal.classList.contains("active")) elements.aboutModal.classList.remove("active");
            if (elements.confirmModal.classList.contains("active")) elements.confirmModal.classList.remove("active");
        }
    });

    // Sort select
    elements.sortSelect.addEventListener("change", (e) => {
        sortMode = e.target.value;
        renderPosts();
    });

    // View toggles
    elements.gridViewBtn.addEventListener("click", () => {
        viewMode = "grid";
        elements.gridViewBtn.classList.add("active");
        elements.listViewBtn.classList.remove("active");
        renderPosts();
    });

    elements.listViewBtn.addEventListener("click", () => {
        viewMode = "list";
        elements.listViewBtn.classList.add("active");
        elements.gridViewBtn.classList.remove("active");
        renderPosts();
    });

    // Navigation links
    elements.navHomeBtn.addEventListener("click", () => setFilter("all"));
    elements.navFeedBtn.addEventListener("click", () => setFilter("all"));
    elements.navBookmarksBtn.addEventListener("click", () => setFilter("bookmarks"));
    elements.navDraftsBtn.addEventListener("click", () => setFilter("drafts"));
    elements.quickDraftsBtn.addEventListener("click", () => setFilter("drafts"));
    elements.navAboutBtn.addEventListener("click", () => elements.aboutModal.classList.add("active"));
    elements.closeAboutModalBtn.addEventListener("click", () => elements.aboutModal.classList.remove("active"));

    // Backup & Data Hub
    elements.backupDataBtn.addEventListener("click", () => elements.dataModal.classList.add("active"));
    elements.closeDataModalBtn.addEventListener("click", () => elements.dataModal.classList.remove("active"));
    elements.exportDataBtn.addEventListener("click", exportData);
    elements.triggerImportBtn.addEventListener("click", () => elements.importFileInput.click());
    elements.importFileInput.addEventListener("change", handleImportFile);
    elements.resetDemoBtn.addEventListener("click", resetToDemo);
    elements.resetDemoFromModalBtn.addEventListener("click", resetToDemo);

    // Empty state CTA
    elements.emptyStateActionBtn.addEventListener("click", () => openEditor());

    // Reader modal listeners
    elements.closeReaderBtn.addEventListener("click", closeReader);
    elements.readerClapBtn.addEventListener("click", () => {
        if (currentReadingPost) toggleLike(currentReadingPost.id);
    });
    elements.readerBookmarkBtn.addEventListener("click", () => {
        if (currentReadingPost) toggleBookmark(currentReadingPost.id);
    });
    elements.readerBottomBookmarkBtn.addEventListener("click", () => {
        if (currentReadingPost) toggleBookmark(currentReadingPost.id);
    });
    elements.readerShareBtn.addEventListener("click", shareCurrentArticle);
    elements.readerEditBtn.addEventListener("click", () => {
        if (currentReadingPost) {
            const id = currentReadingPost.id;
            closeReader();
            openEditor(id);
        }
    });

    // Reader Comments Form
    elements.commentForm.addEventListener("submit", handleAddComment);

    // Editor modal listeners
    elements.openEditorBtn.addEventListener("click", () => openEditor());
    elements.closeEditorBtn.addEventListener("click", closeEditor);
    elements.cancelEditorBtn.addEventListener("click", closeEditor);
    elements.blogForm.addEventListener("submit", handleEditorSubmit);

    // Editor tabs
    elements.tabWriteBtn.addEventListener("click", () => switchEditorTab("write"));
    elements.tabPreviewBtn.addEventListener("click", () => switchEditorTab("preview"));

    // Editor content input stats
    elements.postContent.addEventListener("input", updateEditorStats);

    // Markdown toolbar
    elements.markdownToolbar.querySelectorAll(".tool-btn").forEach(btn => {
        btn.addEventListener("click", () => insertMarkdownTool(btn.getAttribute("data-tool")));
    });

    // Preset cover image buttons
    elements.coverPresets.querySelectorAll(".preset-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            elements.postCover.value = btn.getAttribute("data-url");
            showToast("Preset cover selected", "info");
        });
    });

    // Confirm dialog
    elements.confirmCancelBtn.addEventListener("click", () => {
        elements.confirmModal.classList.remove("active");
        pendingDeleteId = null;
    });
    elements.confirmProceedBtn.addEventListener("click", proceedDeletePost);

    // Modal background click dismissal
    [elements.readerModal, elements.editorModal, elements.dataModal, elements.aboutModal, elements.confirmModal].forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    });
}

// ================= PUBLIC INTERFACE =================
window.ChronicleApp = {
    openReader,
    closeReader,
    openEditor,
    closeEditor,
    toggleLike,
    toggleBookmark,
    confirmDeletePost,
    subscribeNewsletter: () => {
        const emailInput = document.getElementById("newsletterEmail");
        if (emailInput && emailInput.value) {
            showToast(`Thank you for subscribing (${emailInput.value})!`, "success");
            emailInput.value = "";
        }
    }
};

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
