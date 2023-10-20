const withBasePath = (path: string) =>
  `${import.meta.env.VITE_APP_BASE_URL || ''}${path}`;

export const Slugs = {
  // Main pages
  FORM: withBasePath('/multiStepForm'),
  NOT_FOUND: '*'
};
