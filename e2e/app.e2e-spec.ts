import { DiceitupPage } from './app.po';

describe('diceitup App', function() {
  let page: DiceitupPage;

  beforeEach(() => {
    page = new DiceitupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
