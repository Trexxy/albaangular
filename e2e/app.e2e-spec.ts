import { AlbaangularPage } from './app.po';

describe('albaangular App', () => {
  let page: AlbaangularPage;

  beforeEach(() => {
    page = new AlbaangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
