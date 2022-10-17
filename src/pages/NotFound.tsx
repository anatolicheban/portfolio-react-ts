import { useNavigate } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("hv");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, [navigate]);
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <h3 className="notfound__subtitle">Page not found</h3>
      <h6 className="notfound__text">You will be redirected to homepage in 3 seconds...</h6>
    </div>
  );
};

export default NotFound;
