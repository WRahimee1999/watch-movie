import "../../css/DetailsSkeleton.css";
export default function DetailsSkeleton() {
  return (
    <div className="details-skeleton">
      <div className="poster shimmer"></div>

      <div className="info">
        <div className="title shimmer"></div>
        <div className="sub-info shimmer"></div>
        <div className="genre shimmer"></div>

        <div className="section shimmer"></div>
        <div className="section shimmer"></div>
        <div className="section shimmer"></div>
      </div>
    </div>
  );
}
