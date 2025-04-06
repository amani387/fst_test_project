"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function SessionProviderClientComponent() {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}