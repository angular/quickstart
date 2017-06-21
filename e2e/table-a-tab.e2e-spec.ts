
import { browser, element, by } from 'protractor';

describe('Table a tab E2E Tests', function () {
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

  it('should display list of currency ', function () {
    expect(element.all(by.repeater('rate of rates')).getSize()).not.toEqual(0);
  });
});


