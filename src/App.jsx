import React from "react";
import MenuItem from "./components/MenuItem";
import { mainCourses, desserts } from "./data/menuData";
import "./styles/App.css";

export default function App() {
  const allItems = [...mainCourses, ...desserts];
  const totalItems = allItems.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="header">
        <h1 className="restaurant-name">La Mesa Delicioso</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <main className="content">
        <section className="menu-section">
          <h2 className="category-heading">Main Courses</h2>
          <div className="items-grid">
            {mainCourses.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2 className="category-heading">Desserts</h2>
          <div className="items-grid">
            {desserts.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <aside className="restaurant-info">
          <h3>Restaurant Info</h3>
          <p><strong>Total items on menu:</strong> {totalItems}</p>
          <p><strong>Hours:</strong> Open Daily: 11 AM - 10 PM</p>
          <p><strong>Contact:</strong> +91 98765 43210</p>
        </aside>
      </main>

      <footer className="footer">
        <div>La Mesa Delicioso</div>
        <div><a href="mailto:hello@lamesa.example">hello@lamesa.example</a></div>
        <div>© {currentYear} La Mesa Delicioso</div>
      </footer>
    </div>
  );
}
