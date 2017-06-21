
import { browser, element, by } from 'protractor';

describe('Gold price tab E2E Tests', function () {

  beforeEach(function () {
    browser.get('/goldprice');
  });

  it('should display current gold price ', function () {
    element(by.id('divGoldPriceToday')).getText()
      .then(t => expect(t.length).not.toEqual(0));
  });

  it('should display gold price by date', function () {
    element(by.id('inputDate')).sendKeys('03-03-2015');
    element(by.id('buttonCheckPriceByDate')).click();

    expect(element(by.id('divGoldPriceByDay')).getText()).toEqual('144.43');
  });
});


