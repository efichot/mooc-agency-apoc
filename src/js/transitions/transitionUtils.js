const duration = 1000;

const scrollIntoView = module => {
  module !== undefined &&
    module !== null &&
    window.setTimeout(
      () => window.scrollTo({ behavior: 'smooth', top: window.scrollY + module.getBoundingClientRect().top - 5 }),
      duration,
    );
};

export { duration, scrollIntoView };
