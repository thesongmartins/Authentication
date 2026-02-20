// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { loginSchema } from "@/lib/validators/auth";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// type LoginFormFields = z.infer<typeof loginSchema>;

// const loginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginFormFields>({
//     resolver: zodResolver(loginSchema),
//     // mode: "onSubmit",
//   });
//   return (
//     <>
//       {/* Login Form */}
//       <form className="space-y-5">
//         <div>
//           <Label
//             className="block text-[13px] font-medium mb-2 uppercase"
//             style={{
//               color: "var(--burgundy-800)",
//               letterSpacing: "0.04em",
//             }}
//           >
//             Email Address
//           </Label>
//           <Input
//             type="email"
//             placeholder="you@example.com"
//             {...register("email")}
//             className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white placeholder:text-gray-400 border"
//             style={{ borderColor: "var(--warm-gray)" }}
//           />
//           <p className="text-red-500 text-[13px] mt-1">
//             {errors.email?.message}
//           </p>
//         </div>

//         <div>
//           <div className="flex items-center justify-between mb-2">
//             <Label
//               className="text-[13px] font-medium uppercase"
//               style={{
//                 color: "var(--burgundy-800)",
//                 letterSpacing: "0.04em",
//               }}
//             >
//               Password
//             </Label>
//             <Link
//               href="#"
//               className="text-[13px]"
//               style={{ color: "var(--burgundy)" }}
//             >
//               Forgot?
//             </Link>
//           </div>
//           <Input
//             type="password"
//             placeholder="Enter your password"
//             {...register("password")}
//             className="h-12 px-4 rounded-xl text-[15px] text-gray-900 bg-white placeholder:text-gray-400 border"
//             style={{ borderColor: "var(--warm-gray)" }}
//           />
//           <p>{errors.password?.message}</p>
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             id="remember"
//             className="w-4 h-4 rounded"
//             style={{
//               borderColor: "var(--warm-gray)",
//               accentColor: "var(--burgundy)",
//             }}
//           />
//           <label
//             htmlFor="remember"
//             className="ml-2 text-[15px] text-gray-600 cursor-pointer"
//           >
//             Remember me
//           </label>
//         </div>

//         <Button
//           type="submit"
//           className="w-full h-14 rounded-full text-[15px] font-semibold"
//           style={{
//             backgroundColor: "var(--burgundy)",
//             color: "var(--gold)",
//             boxShadow: "0 2px 8px rgba(139, 21, 56, 0.16)",
//           }}
//         >
//           Sign In
//         </Button>
//       </form>
//     </>
//   );
// };
// export default loginForm;
