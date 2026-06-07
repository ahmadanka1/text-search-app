import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    excerpt:
      "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template and grid-auto properties.",
  },
  {
    id: 2,
    title: "A deep dive into Flexbox",
    date: "Mar 15, 2019",
    excerpt:
      "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space or shrink to fit into smaller spaces.",
  },
  {
    id: 3,
    title: "Getting started with React Hooks",
    date: "Jun 22, 2020",
    excerpt:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class component.",
  },
  {
    id: 4,
    title: "CSS Variables and how to use them",
    date: "Jan 10, 2021",
    excerpt:
      "CSS variables, also known as custom properties, allow you to store values that you want to reuse throughout your stylesheet.",
  },
  {
    id: 5,
    title: "JavaScript Array methods you should know",
    date: "Aug 05, 2021",
    excerpt:
      "Arrays are a fundamental part of JavaScript. Methods like map, filter, and reduce can make your code cleaner and more expressive.",
  },
  {
    id: 6,
    title: "Understanding async and await in JavaScript",
    date: "Nov 18, 2022",
    excerpt:
      "Async functions allow you to write promise-based code as if it were synchronous. The await keyword pauses execution until the promise resolves.",
  },
];

const highlight = (text, query) => {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} style={{ backgroundColor: "#ffd700" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const App = () => {
  const [query, setQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "750px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px" }}>Search</h1>

      <div style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 12px", marginBottom: "16px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          style={{ border: "none", outline: "none", width: "100%", fontSize: "1rem" }}
        />
        {query && (
          <button onClick={() => setQuery("")} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1rem", color: "#999" }}>
            ✕
          </button>
        )}
      </div>

      <p style={{ marginBottom: "24px" }}>
        <strong>{filtered.length} posts</strong> were found.
      </p>

      {filtered.map((article) => (
        <div key={article.id} style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "4px" }}>
            {highlight(article.title, query)}
          </h2>
          <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "8px", fontStyle: "italic" }}>
            {article.date}
          </p>
          <p>{highlight(article.excerpt, query)}</p>
        </div>
      ))}
    </div>
  );
};

export default App;