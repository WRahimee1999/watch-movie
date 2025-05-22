export default function SkeletonLoader() {
  return (
    <div className="movies-grid">
      {[...Array(12)].map((_, index) => (
        <div className="movie-card skeleton" key={index}>
          <div className="poster-placeholder shimmer"></div>
          <div className="title-placeholder shimmer"></div>
          <div className="rating-placeholder shimmer"></div>
          <div className="genre-placeholder">
            <div className="genre-tag shimmer"></div>
            <div className="genre-tag shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
