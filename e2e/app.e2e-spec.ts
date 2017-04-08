import { TodaysLunarCalendarPage } from './app.po';

describe('todays-lunar-calendar App', () => {
  let page: TodaysLunarCalendarPage;

  beforeEach(() => {
    page = new TodaysLunarCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
