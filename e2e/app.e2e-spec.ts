import { TippyPage } from './app.po';

describe('tippy App', () => {
  let page: TippyPage;

  beforeEach(() => {
    page = new TippyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
