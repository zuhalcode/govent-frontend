import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Form,
  Input,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";
import useLogin from "./useLogin";

const Login = () => {
  const {
    isPendingLogin,
    isVisible,
    toggleVisibility,
    errors,
    control,
    handleSubmit,
    handleLogin,
  } = useLogin();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          alt="logo"
          src="/images/general/logo.svg"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          alt="login"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>

      <div>
        <Card className="p-5">
          <CardHeader className="flex flex-col items-start gap-2">
            <h2 className="text-xl font-bold text-danger-500">Login Page</h2>
            <p className="text-small">
              Don&apos;t have an account? &nbsp;
              <Link
                href="/auth/register"
                className="font-semibold text-danger-400 underline-offset-2 hover:underline"
              >
                Register here
              </Link>
            </p>
          </CardHeader>

          <Divider />

          <CardBody>
            <Form
              onSubmit={handleSubmit(handleLogin)}
              className="w-full min-w-[300px] gap-3"
            >
              <Controller
                name="identifier"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Email or Username"
                    type="text"
                    variant="bordered"
                    size="sm"
                    isInvalid={errors.identifier !== undefined}
                    errorMessage={errors.identifier?.message}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                    autoComplete="off"
                    size="sm"
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <FaEye className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                          <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
                        )}
                      </button>
                    }
                  />
                )}
              />

              <Button
                type="submit"
                isLoading={isPendingLogin}
                color="danger"
                size="lg"
                className="w-full"
              >
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
