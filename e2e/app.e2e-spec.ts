import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Cennik NBP';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display: ' + expectedMsg, function () {
    element(by.xpath('/html/body/my-app/nav/a[2]')).click();

    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    expect(browser.getCurrentUrl()).toContain('/goldprice');
  });

});


