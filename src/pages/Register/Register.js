import "./register.css";
import styled from "styled-components";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import Icon from "../../components/LoginComponents/Icon";

function Register() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GithubBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <div className="register">
      <span className="registerTitle">Register Below</span>
      <form className="registerForm">
      <label>Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your name..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
        <IconsContainer className="iconscontainer">
          <Icon color={GoogleBackground}>
            <FaGoogle />
          </Icon>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={GithubBackground}>
            <FaGithub />
          </Icon>
        </IconsContainer>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin: 2rem 0 2rem 0;
  width: 50%;
`;