import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";
import React from "react";

const LoginPage = () => {
  return (
    <AuthLayout title="GoVent | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
