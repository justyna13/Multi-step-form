const withBasePath = (path: string) =>
  `${import.meta.env.VITE_APP_BASE_URL || ''}${path}`;

export const Slugs = {
  // Main pages
  DASHBOARD: withBasePath('/dashboard'),
  NOT_FOUND: '*'
};
