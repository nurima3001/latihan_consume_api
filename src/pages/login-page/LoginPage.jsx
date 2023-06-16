import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonGoogleLogin } from "../../components/ButtonGoogleLogin";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const credentials = useSelector((state) => state.auth.credentials);
  const navigate = useNavigate();

  useEffect(() => {
    if (credentials) {
      navigate("/home");
    }
  }, [credentials, navigate]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>
      <ButtonGoogleLogin />
    </div>
  );
};

export default LoginPage;
