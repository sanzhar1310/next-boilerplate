import React from 'react';

import { AuthGuard } from 'src/auth/guard';

export default function Layout(props: React.PropsWithChildren) {
  const { children } = props;

  return <AuthGuard>{children}</AuthGuard>;
}
