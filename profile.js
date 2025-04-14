import React, { useState } from "react";
import { fakeAuth } from "../fakeAuth";

function Profile() {
  const user = fakeAuth.user;
  const [favorites, setFavorites] = useState(user.favorites);
  const [orders, setOrders] = useState(user.orderHistory);

  const addFavorite = () => {
    const item = prompt("Enter favorite item:");
    if (item) {
      const updated = [...favorites, item];
      setFavorites(updated);
      user.favorites = updated;
    }
  };

  return (
    <div className="p-4">
      <h2>Welcome, {user.email}</h2>

      <h4>Favorites</h4>
      <ul>
        {favorites.map((f, idx) => <li key={idx}>{f}</li>)}
      </ul>
      <button className="btn btn-secondary" onClick={addFavorite}>Add Favorite</button>

      <h4 className="mt-4">Order History</h4>
      <ul>
        {orders.length === 0 ? <li>No orders yet.</li> : orders.map((o, i) => <li key={i}>{o}</li>)}
      </ul>
    </div>
  );
}

export default Profile;
