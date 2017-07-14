import { LaborSupportPage } from './app.po';

describe('labor-support App', () => {
  let page: LaborSupportPage;

  beforeEach(() => {
    page = new LaborSupportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
