import "./login.css";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import Icon from "../../components/LoginComponents/Icon";



function Login() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GithubBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `../register`; 
    navigate(path);
  }
  
  return (
    <div className="login">
      <span className="loginTitle">Login Details</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
        <button className="loginButton">Login</button>
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
      <button className="loginRegisterButton" onClick={routeChange}>Register</button>
    </div>
  );
}

export default Login;


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin: 2rem 0 2rem 0;
  width: 50%;
`;

const ForgotPassword = styled.h4`
padding-top:5px;
  cursor: pointer;
  color: #000000;
  letter-spacing: 0.1rem;
  font-size: 12px;
  align-self: end;
`;
