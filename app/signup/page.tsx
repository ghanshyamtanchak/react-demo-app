import SignUp from "@/modules/SignUp/SignUp";

export default function SignUpPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="">
        <h1 className="font-sans font">Sign Up</h1>
        <SignUp />
      </div>
    </main>
  );
}
