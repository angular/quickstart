import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Price list NBP';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should navigate by default to home tab ', function () {
    expect(element(by.css('h2')).getText()).toEqual('Home');
    expect(browser.getCurrentUrl()).toMatch( new RegExp('\\bhome'));
  });

  it('should navigate to gold price tab ', function () {
    element(by.xpath('/html/body/my-app/nav/a[2]')).click();

    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    expect(element(by.css('h2')).getText()).toEqual('Gold Prices');
    expect(browser.getCurrentUrl()).toMatch( new RegExp('\\bgoldprice'));
  });

  it('should navigate to table A prices tab ', function () {
    element(by.xpath('/html/body/my-app/nav/a[3]')).click();

    expect(element(by.css('h2')).getText()).toEqual('Table A prices');
    expect(browser.getCurrentUrl()).toMatch( new RegExp('\\btablea'));
  });
});


