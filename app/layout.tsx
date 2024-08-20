import React from "react";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

//add metadata

export const metadata: Metadata = {
  title: {
    template: " %s | ACME",
    default: "ACME",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

interface RootLayoutProps {
  children: React.ReactNode;
  test2: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, test2 }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
