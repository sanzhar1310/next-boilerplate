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
  settings: '/settings',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  product: {
    root: `/p`,
    checkout: `/p/checkout`,
    details: (slug: string) => `/p/${slug}`,
  },
  catalog: {
    root: '/catalog',
    all: '/catalog/all',
    catalog: (catalogs: Array<string | number>) => `/catalog/${catalogs.join('/')}`,
  },

  cart: '/cart',
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    verify: `${ROOTS.AUTH}/verify`,
    register: `${ROOTS.AUTH}/register`,
    newPassword: `${ROOTS.AUTH}/new-password`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    cms:{
      root: `${ROOTS.DASHBOARD}/cms`,
      main: `${ROOTS.DASHBOARD}/cms/main`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/user/${id}`,
    },
    product: {
      root: `${ROOTS.DASHBOARD}/product`,
      list: `${ROOTS.DASHBOARD}/product/list`,
      new: `${ROOTS.DASHBOARD}/product/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/product/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/product/${id}`,
    },
    category: {
      root: `${ROOTS.DASHBOARD}/category`,
      list: `${ROOTS.DASHBOARD}/category/list`,
      new: `${ROOTS.DASHBOARD}/category/new`,
      details: (id: string | number) => `${ROOTS.DASHBOARD}/category/${id}`,
      edit: (id: string | number) => `${ROOTS.DASHBOARD}/category/${id}`,
    },
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      new: `${ROOTS.DASHBOARD}/invoice/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/invoice/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/invoice/${id}`,
    },
    order: {
      root: `${ROOTS.DASHBOARD}/order`,
      details: (id: string) => `${ROOTS.DASHBOARD}/order/${id}`,
    },
  },
};
