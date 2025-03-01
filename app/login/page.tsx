import Cdclogo from "../ui/cdc-logo";
import LoginForm from "../ui/login-form";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-l p-3 md:h-36">
          <Cdclogo />
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
