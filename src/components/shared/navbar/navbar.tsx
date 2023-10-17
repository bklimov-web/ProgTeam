"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const params = useParams();

  return (
    <div className="w-screen h-[60px] shadow-lg">
      <div className="w-[1200px] h-full mx-auto flex justify-between items-center">
        {!!params.projectId && (
          <Button asChild>
            <Link href={`/preview/${params.projectId}`}>Preview</Link>
          </Button>
        )}

        <div className="flex gap-4 ml-auto">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
