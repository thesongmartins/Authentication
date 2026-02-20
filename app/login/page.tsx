"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import GeometricBackground from "@/components/geometric-background";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginFormFields = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormFields) => {
    try {
      console.log("Login data:", data);
      // Add your authentication logic here

      // Simulating a network request for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Geometric Background */}
      <GeometricBackground />

      {/* Right Panel - Form (55%) */}
      <div
        className="w-full lg:w-[55%] flex items-center justify-center px-6 py-12 overflow-y-auto"
        style={{ backgroundColor: "var(--cream)", height: "100vh" }}
      >
        <div className="w-full max-w-105 py-8">
          {/* Header */}
          <div className="mb-10">
            <h1
              className="text-[32px] font-semibold text-gray-900 mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Welcome back
            </h1>
            <p className="text-[15px] text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-8">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-xl text-[15px] font-medium text-gray-900 flex items-center justify-center gap-3 border-2"
              style={{
                borderColor: "var(--gold)",
                backgroundColor: "var(--cream)",
              }}
            >
              <FcGoogle />
              Continue with Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-xl text-[15px] font-medium text-gray-900 flex items-center justify-center gap-3 border-2"
              style={{
                borderColor: "var(--gold)",
                backgroundColor: "var(--cream)",
              }}
            >
              <FaGithub />
              Continue with Github
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div
                className="w-full border-t"
                style={{ borderColor: "var(--warm-gray)" }}
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="px-4 text-gray-500 text-[13px]"
                style={{ backgroundColor: "var(--cream)" }}
              >
                OR
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <Label
                className="block text-[13px] font-medium mb-2 uppercase"
                style={{
                  color: "var(--burgundy-800)",
                  letterSpacing: "0.04em",
                }}
              >
                Email Address
              </Label>
              <Input
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
              <p className="text-red-500 text-[13px] mt-1">
                {errors.email?.message}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label
                  className="text-[13px] font-medium uppercase"
                  style={{
                    color: "var(--burgundy-800)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-[13px]"
                  style={{ color: "var(--burgundy)" }}
                >
                  Forgot?
                </Link>
              </div>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
              <p>{errors.password?.message}</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded"
                style={{
                  borderColor: "var(--warm-gray)",
                  accentColor: "var(--burgundy)",
                }}
              />
              <label
                htmlFor="remember"
                className="ml-2 text-[15px] text-gray-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-full text-[15px] font-semibold"
              style={{
                backgroundColor: "var(--burgundy)",
                color: "var(--gold)",
                boxShadow: "0 2px 8px rgba(139, 21, 56, 0.16)",
              }}
            >
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-[15px] text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium"
              style={{ color: "var(--burgundy)" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
function signIn(
  arg0: string,
  arg1: { redirect: boolean; email: string; password: string },
) {
  throw new Error("Function not implemented.");
}
