import SignInForm from "./SignInForm";

export const metadata = {
  title: "Sign In | Dr. Victor Azmy Clinic",
  description: "Sign in to access your dashboard and manage appointments",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] px-4">
      <SignInForm />
    </div>
  );
}