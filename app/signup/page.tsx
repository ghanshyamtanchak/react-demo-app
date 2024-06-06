import SignUpForm from "@/forms/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="bg-gray-50 w-1/4">
        <h1 className="font-sans font">Geist</h1>
        <SignUpForm />
      </div>
    </main>
  );
}
