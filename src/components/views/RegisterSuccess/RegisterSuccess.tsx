import { Button } from "@heroui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";

const RegisterSuccess = () => {
  return (
    <div className="bg-slate-100">
      {/* Background */}
      <div className="success-clip relative flex h-screen w-screen rotate-180 flex-col bg-[#526193]" />
      {/* Background */}

      <div className="absolute top-0 flex h-screen w-full items-center justify-center">
        <div className="flex h-screen w-1/2 flex-col items-center gap-10 py-20">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-white">GoVent</h1>
            <h2 className="text-lg font-semibold text-slate-300">
              Event Management System
            </h2>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-10 rounded-lg bg-white p-10 text-center shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 p-2 ring-[20px] ring-teal-500/10">
              <FaCheck color="white" className="size-8" />
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Well Done !</h1>
              <h2 className="max-w-sm text-lg">
                Aww yeah, you successfully read this important message.
              </h2>
            </div>

            <Button
              size="lg"
              className="w-full rounded-md bg-teal-500 text-white"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
