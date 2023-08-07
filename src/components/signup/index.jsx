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
} from "./style";

export const SignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const surnameRef = useRef();
  const usernameRef = useRef();
  const ageRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const signup = () => {
    let body = {
      first_name: nameRef.current.value,
      last_name: surnameRef.current.value,
      username: usernameRef.current.value,
      age: +ageRef.current.value,
      phone_number: phoneNumberRef.current.value,
      password: passwordRef.current.value,
      gmail: emailRef.current.value,
    };
    fetch("http://shohjahon-sohibov.jprq.live/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.success) {
          alert("Successfully registrated!");
          navigate("/signin");
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
                <Input placeholder="Ism" ref={nameRef} />
                <Input placeholder="Familiya" ref={surnameRef} />
                <Input placeholder="Foydalanuvchi nomi" ref={usernameRef} />
                <Input placeholder="Yosh" type="number" ref={ageRef} />
                <Input placeholder="Telefon raqam" ref={phoneNumberRef} />
                <Input
                  placeholder="Password"
                  type="password"
                  ref={passwordRef}
                />
                <Input placeholder="Email" type="email" ref={emailRef} />
                <Button type="Button" onClick={signup}>
                  Registrate
                </Button>
              </Form>
            </Content>
          </ContentWrapper>
        </div>
      </Wrapper>
    </Gradient>
  );
};

export default SignUp;
