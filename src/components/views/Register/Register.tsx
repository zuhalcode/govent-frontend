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
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    errors,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
  } = useRegister();

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
            <h2 className="text-xl font-bold text-danger-500">
              Create Account
            </h2>
            <p className="text-small">
              Have an account? &nbsp;
              <Link
                href="/login"
                className="font-semibold text-danger-400 underline-offset-2 hover:underline"
              >
                Login here
              </Link>
            </p>
          </CardHeader>

          <Divider />

          <CardBody>
            <Form
              onSubmit={handleSubmit(handleRegister)}
              className="w-full min-w-[300px] gap-3"
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Full Name"
                    type="text"
                    variant="bordered"
                    size="sm"
                    isInvalid={errors.fullName !== undefined}
                    errorMessage={errors.fullName?.message}
                  />
                )}
              />

              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Username"
                    type="text"
                    variant="bordered"
                    size="sm"
                    isInvalid={errors.username !== undefined}
                    errorMessage={errors.username?.message}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Email"
                    type="text"
                    variant="bordered"
                    autoComplete="off"
                    size="sm"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
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
                    type={visiblePassword.password ? "text" : "password"}
                    variant="bordered"
                    autoComplete="off"
                    size="sm"
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => handleVisiblePassword("password")}
                      >
                        {visiblePassword.password ? (
                          <FaEye className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                          <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
                        )}
                      </button>
                    }
                  />
                )}
              />

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label="Password Confirmation"
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    variant="bordered"
                    autoComplete="off"
                    size="sm"
                    isInvalid={errors.confirmPassword !== undefined}
                    errorMessage={errors.confirmPassword?.message}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => handleVisiblePassword("confirmPassword")}
                      >
                        {visiblePassword.confirmPassword ? (
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
                isLoading={isPendingRegister}
                color="danger"
                size="lg"
                className="w-full"
              >
                Register
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
