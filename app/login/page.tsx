import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <section className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <article className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <section className="w-32 text-white md:w-36">
            <AcmeLogo />
          </section>
        </article>
        
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}