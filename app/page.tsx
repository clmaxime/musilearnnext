import { ArrowRightIcon, PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { signOut } from "@/auth";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1a202c]">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl text-black">MusiLearn</h1>
        <Link href="/login" legacyBehavior>
          <a className="flex items-center space-x-2 rounded-lg bg-black px-4 py-2 text-lg font-semibold text-white">
            <span>Se connecter</span>
          </a>
        </Link>
      </div>
    </main>
  );
}
