"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) return <p className="p-8">Loading...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Logged in as {user.email}</p>
      <button
        onClick={async () => {
          await logout();
          router.push("/login");
        }}
        className="bg-black text-white rounded px-4 py-2"
      >
        Logout
      </button>
    </main>
  );
}
