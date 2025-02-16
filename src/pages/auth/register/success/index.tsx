import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterSuccess from "@/components/views/RegisterSuccess/RegisterSuccess";
import React from "react";

const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="GoVent | Register Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
