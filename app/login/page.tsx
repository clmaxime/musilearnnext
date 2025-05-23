import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1a202c]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
