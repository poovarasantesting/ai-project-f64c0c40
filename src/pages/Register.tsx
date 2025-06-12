import { RegisterForm } from "@/components/RegisterForm";
import { Toaster } from "@/components/ui/toaster";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
      <Toaster />
    </div>
  );
}