import LabelInput from "../LabelInput";
import { useState } from "react";

function PasswordVerification() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [matchstatus, setMatchstatus] = useState("");

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    if (password === "" || confirmpassword === "") {
      setMatchstatus("Please Fill all fields!");
    } else if (password === confirmpassword) {
      setMatchstatus("Login succesful");
      window.open("https://vmtraining.netlify.app/allcourses", "_blank");
    } else {
      setMatchstatus("Passwords are not matching!");
    }
  };

  return (
    <div className="form-passwordgroup">
      <LabelInput name="Password : " />
      <input
        type="password"
        className="form-input"
        value={password}
        onChange={updatePassword}
        placeholder="Enter your password"
      />

      <LabelInput name="ConfirmPassword : " />
      <input
        type="password"
        className="form-input"
        value={confirmpassword}
        onChange={updateConfirmPassword}
        placeholder="Confirm your password"
      />

      <p className="password-error-message">{matchstatus}</p>
      <button className="button" onClick={validatePassword}>
        Sign Up
      </button>
    </div>
  );
}

export default PasswordVerification;
