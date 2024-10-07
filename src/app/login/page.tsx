"use client";
import React from "react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginURL, UrlProducts } from "@/controller/api";
import { ILogin } from "@/controller/interface";
import Link from "next/link";
import {
  LRButton,
  LoginRegisterContainer,
  LRForm,
  LRInput,
  LRLabel,
  LRTitle,
  RegisterLink,
} from "@/public/style/Styles.login-register";
import { useTranslations } from "next-intl";

const LoginPage: React.FC = () => {
  const translate = useTranslations("LoginPage");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const dataLogin: ILogin = { username, password };

    const response: Response = await fetch(LoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Inicio de Sesión exitoso");

      console.log("Datos de respuesta:", data);

      if (data.access_token) {
        sessionStorage.setItem("token", data.access_token);
        const token = sessionStorage.getItem("token");

        console.log("Token almacenado:", token);

        await fetchProducts(token);
        console.log("Token almacenado:", token);
      } else {
        alert("No se recibió un token. Verifica la respuesta del servidor.");
      }
    } else {
      if (confirm("Datos no existentes, \n\n ¿Te gustaría registrarte?")) {
        router.push("/Register");
      } else {
        alert(
          "Inicio de sesión fallido. Por favor, verifica tus credenciales."
        );
      }
    }

    setUsername("");
    setPassword("");
  };

  const fetchProducts = async (token: string) => {
    try {
      const response = await fetch(UrlProducts, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al cargar los productos: " + response.status);
      }

      const products = await response.json();
      console.log("Productos:", products);

      router.push("/products");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert(
        "No se pudieron cargar los productos. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <LoginRegisterContainer>
      <LRForm>
        <LRTitle> {translate("title")}</LRTitle>
        <form onSubmit={handleSubmit}>
          <LRLabel htmlFor="username">{translate("username")}</LRLabel>
          <LRInput
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
          <LRLabel htmlFor="password">{translate("password")}</LRLabel>
          <LRInput
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <LRButton type="submit">{translate("signup")}</LRButton>
        </form>
        <RegisterLink href="/Register">{translate("navegacion")}</RegisterLink>
      </LRForm>
    </LoginRegisterContainer>
  );
};

export default LoginPage;
