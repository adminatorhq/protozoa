import * as nprogress from 'nprogress';

nprogress.configure({
  easing: 'ease',
  speed: 1000,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: false,
  minimum: 0.7,
});

export const ProgressService = {
  start: () => {
    nprogress.start();
  },

  end: () => {
    nprogress.done();
  },
};
