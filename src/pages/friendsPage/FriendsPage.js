import React, { useEffect } from "react";

import useAxios from "../../hooks/useAxios";
import "../friendsPage/FriendsPage.css";

const FriendsPage = () => {
  const [getFriends, friends, loading] = useAxios([]);

  useEffect(() => {
    getFriends("/friends", "get");
  }, []);

  console.log("friends list >", friends);
  return (
    <div className="friends-list">
      <h2>Friends List</h2>
      {loading
        ? "Yukleniyor"
        : friends.map((friend) => (
            <p key={friend.name} className="friends">
              - {friend.name} - {friend.email}
            </p>
          ))}
    </div>
  );
};

export default FriendsPage;
