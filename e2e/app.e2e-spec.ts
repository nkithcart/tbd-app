import { TbdAppPage } from './app.po';

describe('tbd-app App', () => {
  let page: TbdAppPage;

  beforeEach(() => {
    page = new TbdAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
