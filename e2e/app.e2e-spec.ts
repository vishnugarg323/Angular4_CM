import { GateUIPage } from './app.po';

describe('gate-ui App', () => {
  let page: GateUIPage;

  beforeEach(() => {
    page = new GateUIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
