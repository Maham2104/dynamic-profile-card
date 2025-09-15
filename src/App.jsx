import mhmPhoto from "./assets/mhmPhoto.jpg";
import amrPhoto from "./assets/amrPhoto.jpg";
import hrPhoto from "./assets/hrPhoto.jpeg";
import saudPhoto from "./assets/saudPhoto.jpeg";
import mobPhoto from "./assets/mobPhoto.jpg";
import myPhoto from "./assets/myPhoto.jpg";
import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Maham", bio: "Frontend Developer", avatar: mhmPhoto, isFollowed: false },
    { id: 2, name: "Ammar", bio: "Backend Developer", avatar: amrPhoto, isFollowed: false },
    { id: 3, name: "Alizay", bio: "HR Manager", avatar: hrPhoto, isFollowed: false },
    { id: 4, name: "Saud", bio: "UI/UX Designer", avatar: saudPhoto, isFollowed: false },
    { id: 5, name: "Mubashir", bio: "Mobile Developer", avatar: mobPhoto, isFollowed: false },
    { id: 6, name: "Babar", bio: "Data Scientist", avatar: myPhoto, isFollowed: false }
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const toggleFollow = (id) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === id ? { ...profile, isFollowed: !profile.isFollowed } : profile
      )
    );
  };

  // Filter profiles based on search text
  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "#f9f9f9",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: "20px",
      boxSizing: "border-box"
    }}>
      {/* Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚀 Dynamic Profile Cards
      </h1>

      {/* Controls */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px"
      }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#444" : "#ddd",
            color: darkMode ? "white" : "black",
            fontSize: "14px"
          }}
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>

        <input
          type="text"
          placeholder="🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid gray",
            fontSize: "14px"
          }}
        />
      </div>

      {/* Profile cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        width: "100%"
      }}>
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            bio={profile.bio}
            avatar={profile.avatar}
            isFollowed={profile.isFollowed}
            toggleFollow={() => toggleFollow(profile.id)}
            darkMode={darkMode} // pass dark mode to cards
          />
        ))}
      </div>
    </div>
  );
}

export default App;
