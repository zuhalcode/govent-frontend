import AuthLayout from "@/components/layouts/AuthLayout";
import Activation from "@/components/views/Auth/Activation";
import authServices from "@/services/auth.service";
import React from "react";

interface PropTypes {
  status: "success" | "failed";
}

const ActivationPage = (props: PropTypes) => {
  console.log(props);

  return (
    <AuthLayout>
      <Activation {...props} />
    </AuthLayout>
  );
};

export const getServerSideProps = async (context: {
  query: { code: string };
}) => {
  try {
    const result = await authServices.activation({ code: context.query.code });
    console.log(result.data);

    if (result.data.data) return { props: { status: "success" } };
    return { props: { status: "failed" } };
  } catch (error) {
    return { props: { status: "failed" } };
  }
};

export default ActivationPage;
