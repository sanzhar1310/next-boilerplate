// ----------------------------------------------------------------------

const ROOTS = {
  ROOT: '/',
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  root: ROOTS.ROOT,
  profile: '/profile',
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
    signUp: `${ROOTS.AUTH}/sign-up`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
    verify: `${ROOTS.AUTH}/verify`,
    changePassword: `${ROOTS.AUTH}/change-password`,
  }
};
