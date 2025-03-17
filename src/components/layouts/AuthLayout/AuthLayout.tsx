import PageHead from "@/components/commons/PageHead";
import React, { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div className="flex min-h-screen items-center justify-center py-10 lg:py-0">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container">{children}</section>
    </div>
  );
};

export default AuthLayout;
