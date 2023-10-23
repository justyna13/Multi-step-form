const withBasePath = (path: string) =>
  `${import.meta.env.VITE_APP_BASE_URL || ''}${path}`;

export const Slugs = {
  // Main pages
  FORM: withBasePath('/multiStepForm'),
  NOT_FOUND: '*'
};

export enum FORM_STEPS {
  INFO = "INFO",
  PLAN = "PLAN",
  ADDITIONAL = "ADDITIONAL ADD-ONS",
  SUMMARY = "SUMMARY"
}

export enum AVAILABLE_PLANS {
  ARCADE = "ARCADE",
  ADVANCED = "ADVANCED",
  PRO = "PRO"
}
