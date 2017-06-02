
import { browser, element, by } from 'protractor';

describe('Gold price tab E2E Tests', function () {

  beforeEach(function () {
    browser.get('/tablea');
  });

  it('should display biggest currency ', function () {
    element(by.id('divTheBiggestCurrencyCode')).getText()
      .then(t => expect(t.length).not.toEqual(0));
    element(by.id('divTheBiggestCurrencyCurrency')).getText()
      .then(t => expect(t.length).not.toEqual(0));
    element(by.id('divTheBiggestCurrencyMid')).getText()
      .then(t => expect(t.length).not.toEqual(0));
  });
});


