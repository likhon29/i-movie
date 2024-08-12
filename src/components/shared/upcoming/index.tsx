const UpcomingPage = ({ title }: { title: string }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>{title}</h1>
      <p> This page is currently under construction,see you soon...</p>
    </div>
  );
};

export default UpcomingPage;
