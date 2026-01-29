import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import GeometricBackground from "@/components/geometric-background";

const Signup = () => {
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
              Create your account
            </h1>
            <p className="text-[15px] text-gray-600">
              Join us today and get started
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

          {/* Sign Up Form */}
          <form className="space-y-5">
            <div>
              <Label
                className="block text-[13px] font-medium mb-2 uppercase"
                style={{
                  color: "var(--burgundy-800)",
                  letterSpacing: "0.04em",
                }}
              >
                Full Name
              </Label>
              <Input
                type="text"
                placeholder="John Doe"
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white input-focus placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
            </div>

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
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white input-focus placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
            </div>

            <div>
              <Label
                className="block text-[13px] font-medium mb-2 uppercase"
                style={{
                  color: "var(--burgundy-800)",
                  letterSpacing: "0.04em",
                }}
              >
                Password
              </Label>
              <Input
                type="password"
                placeholder="Create a strong password"
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white input-focus placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
            </div>

            <div>
              <Label
                className="block text-[13px] font-medium mb-2 uppercase"
                style={{
                  color: "var(--burgundy-800)",
                  letterSpacing: "0.04em",
                }}
              >
                Confirm Password
              </Label>
              <Input
                type="password"
                placeholder="Re-enter your password"
                className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white input-focus placeholder:text-gray-400 border"
                style={{ borderColor: "var(--warm-gray)" }}
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 rounded"
                style={{
                  borderColor: "var(--warm-gray)",
                  accentColor: "var(--burgundy)",
                }}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-[15px] text-gray-600 cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="transition-colors hover:text-burgundy-800"
                  style={{ color: "var(--burgundy)" }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="transition-colors hover:text-burgundy-800"
                  style={{ color: "var(--burgundy)" }}
                >
                  Privacy Policy
                </Link>
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
              Create Account
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-[15px] text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium transition-colors hover:text-burgundy-800"
              style={{ color: "var(--burgundy)" }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
