FlowRouter.route('/', {
  name: 'main',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout');
  },
});

FlowRouter.route('/add-subject', {
  name: 'add-subject',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', { main: 'AddSubject' });
  },
});
