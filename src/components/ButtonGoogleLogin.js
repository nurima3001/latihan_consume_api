import { GoogleLogin } from "@react-oauth/google";
import { setCredential } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ButtonGoogleLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onCredentialSuccess = (response) => {
    dispatch(setCredential(response.credential));
  };

  const onCredentialError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const credential = localStorage.getItem("credential");
    if (credential) {
      history.push("/home");
    }
  }, [history]);

  return (
    <div>
      <GoogleLogin onSuccess={onCredentialSuccess} onError={onCredentialError} />
    </div>
  );
};
