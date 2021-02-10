textReveal.from('.title', 1, {
  y: 200,
  ease: 'power4.out',
  delay: 1,
  skewY: 15,
  stagger: {
    amount: 0.6,
  },
});

TweenMax.to('.right-slide', 1, {
  delay: 2.8,
  ease: Expo.easeInOut,
  width: '100%',
});
