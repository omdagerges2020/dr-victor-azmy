"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignInForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign in:", form);
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-lg p-6 md:p-8">

        <h1 className="text-2xl font-semibold text-[hsl(var(--foreground))] text-center">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-[hsl(var(--border))] px-3 py-2 bg-transparent"
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-[hsl(var(--border))] px-3 py-2 bg-transparent"
            />

            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-2.5"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-xs text-[hsl(var(--primary))]">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button className="w-full rounded-xl bg-[hsl(var(--primary))] text-white py-2.5">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-[hsl(var(--muted-foreground))]">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[hsl(var(--primary))]">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}