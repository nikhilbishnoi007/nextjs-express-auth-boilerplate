"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Auth Boilerplate</h1>
      {user ? (
        <>
          <p>Welcome back, {user.name} 👋</p>
          <Link href="/dashboard" className="text-blue-600 underline">
            Go to Dashboard
          </Link>
        </>
      ) : (
        <div className="flex gap-4">
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
          <Link href="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>
        </div>
      )}
    </main>
  );
}
