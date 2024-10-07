"use client";
import React from "react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { IRegister } from "../../controller/interface";
import { RegisterURL } from "@/controller/api";
import {
  LoginRegisterContainer,
  LRButton,
  LRForm,
  LRInput,
  LRLabel,
  LRTitle,
  RegisterLink,
} from "@/public/style/Styles.login-register";
import { useTranslations } from "next-intl";

const RegisterPage: React.FC = () => {
  const translate = useTranslations("RegisterPage");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const dataRegister: IRegister = {
      email,
      username,
      password,
      name,
      phone,
    };
    console.log("errorregister", dataRegister);

    const response = await fetch(RegisterURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegister),
    });

    if (response.ok) {
      alert("Usuario creado");
      setName("");
      setEmail("");
      setPassword("");
      setUsername("");
      setPhone("");
      router.push("/login");
    }
  };

  return (
    <LoginRegisterContainer>
      <LRForm>
        <LRTitle>{translate("title")}</LRTitle>
        <form className="form" onSubmit={handleSubmit}>
          <LRLabel htmlFor="name">Name</LRLabel>
          <LRInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="name"
          />

          <LRLabel htmlFor="username">{translate("username")}</LRLabel>
          <LRInput
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />

          <LRLabel htmlFor="email">{translate("email")}</LRLabel>
          <LRInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />

          <LRLabel htmlFor="phone">{translate("phone")}</LRLabel>
          <LRInput
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="phone"
          />

          <LRLabel htmlFor="password">{translate("password")}</LRLabel>
          <LRInput
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          <LRButton type="submit">{translate("button")}</LRButton>
        </form>
        <RegisterLink href="/login">{translate("navegacion")}</RegisterLink>
      </LRForm>
    </LoginRegisterContainer>
  );
};

export default RegisterPage;
