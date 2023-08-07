import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Gradient,
  Wrapper,
  Content,
  Form,
  Input,
  Button,
  LogoWrapper,
  ContentWrapper,
  ToSignUp,
} from "./style";

export const Signin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const login = () => {
    fetch("https://shohjahon-sohibov.jprq.live/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        } else {
          alert("Login yoki parol xato!");
        }
      });
  };
  return (
    <Gradient>
      <Wrapper>
        <div className="container">
          <ContentWrapper>
            <LogoWrapper>
              <div>
                <span className="logo-med">Med</span>
                <span className="logo-dical">dical</span>
              </div>
            </LogoWrapper>
            <Content>
              <Form>
                <Input placeholder="Login" ref={usernameRef} />
                <Input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
                <Button type="button" onClick={login}>
                  Login
                </Button>
                <ToSignUp>
                  Don't have an account?{" "}
                  <span onClick={() => navigate("/signup")}>Sign up</span>
                </ToSignUp>
              </Form>
            </Content>
          </ContentWrapper>
        </div>
      </Wrapper>
    </Gradient>
  );
};

export default Signin;
