const withBasePath = (path: string) =>
  `${import.meta.env.VITE_APP_BASE_URL || ''}${path}`;

export const Slugs = {
  // Main pages
  FORM: withBasePath('/multiStepForm'),
  NOT_FOUND: '*'
};

export enum FORM_STEPS {
  INFO = 'INFO',
  PLAN = 'PLAN',
  ADDITIONAL = 'ADDITIONAL ADD-ONS',
  SUMMARY = 'SUMMARY'
}

export enum AVAILABLE_PLANS {
  ARCADE = 'Arcade',
  ADVANCED = 'Advanced',
  PRO = 'Pro'
}

export enum PAYMENT_PERIODS {
  PER_MONTH = 'PER_MONTH',
  PER_YEAR = 'PER_YEAR'
}

export enum AVAILABLE_ADDONS {
  ONLINE_SERVICE = 'onlineService',
  LARGE_STORAGE = 'largeStorage',
  CUSTOMIZABLE_PROFILE = 'customizableProfile'
}
