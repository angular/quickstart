import {inject, TestBed} from '@angular/core/testing';
import {DateTransformatorService} from "./date-transformator.service";

describe('Gold price calulator spec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateTransformatorService]
    });
  });

  it('convert date to string', inject([DateTransformatorService], (testObj: DateTransformatorService) => {

    /*given*/
    let date: Date = new Date(Date.UTC(2017, 4, 18));
    /*when*/
    const result: String = testObj.toString(date);

    /*then*/
    expect(result).toEqual('2017-05-18');
  }));
});

