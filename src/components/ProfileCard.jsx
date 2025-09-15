import React, { useEffect } from "react";

function ProfileCard({ name, bio, avatar, isFollowed, toggleFollow, darkMode }) {
  // Log whenever follow state changes
  useEffect(() => {
    console.log(`${name} is now ${isFollowed ? "followed" : "unfollowed"}`);
  }, [isFollowed, name]);

  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      backgroundColor: darkMode ? "#333" : "white",
      color: darkMode ? "white" : "black",
      transition: "0.3s",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={avatar}
        alt={name}
        style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "10px" }}
      />
      <h2 style={{ margin: "10px 0" }}>{name}</h2>
      <p style={{ fontSize: "14px", marginBottom: "15px" }}>{bio}</p>
      <button
        onClick={toggleFollow}
        style={{
          backgroundColor: isFollowed ? "red" : "green",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
