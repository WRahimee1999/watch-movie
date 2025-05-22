export default function NoFavorites() {
  return (
    <div className="favorites-empty">
      <img src="/logo.png" alt="No Favorites" className="empty-icon" />
      <h2>No Favorite Movies or TV Shows Yet!</h2>
      <p className="empty-subtext">
        Start exploring and add some to your watchlist!
      </p>
      <a href="/" className="explore-btn">
        Explore Now
      </a>
    </div>
  );
}
