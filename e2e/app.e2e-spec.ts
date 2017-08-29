import { TechstreetHomeworkPage } from './app.po';

describe('techstreet-homework App', () => {
  let page: TechstreetHomeworkPage;

  beforeEach(() => {
    page = new TechstreetHomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
