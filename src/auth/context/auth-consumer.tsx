'use client';


import { auth } from 'src/lib/auth';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export async function AuthConsumer({ children }: Props) {
  const session = await auth();

  console.log('session', session?.user);

  return <>{children}</>;
}
