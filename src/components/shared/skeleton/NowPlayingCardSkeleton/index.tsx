// Skeleton Loader component with professional styling
const NowPlayingSkeletonLoader = () => (
  <div
    className="position-relative bg-light rounded overflow-hidden"
    style={{
      width: "100%",
      height: "300px",
      backgroundColor: "#e0e0e0",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    ></div>
    {/* Placeholder elements */}
    <div className="position-relative d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <div
        className="bg-secondary rounded"
        style={{
          width: "60%",
          height: "50%",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        className="bg-secondary rounded"
        style={{
          width: "80%",
          height: "30%",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        className="bg-secondary rounded"
        style={{
          width: "50%",
          height: "20%",
        }}
      ></div>
    </div>
  </div>
);

export default NowPlayingSkeletonLoader;
