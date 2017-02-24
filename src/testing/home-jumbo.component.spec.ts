/**
 * Created by kyle on 2/23/2017.
 */
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {HomeJumbo} from "../app/modules/jumbotrons/components/home-jumbo.component";

describe('HomeJumboComponent', () => {
  let comp: HomeJumbo;
  let fixture: ComponentFixture<HomeJumbo>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJumbo ], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJumbo);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.appName);
  });

  it('should display a different test title', () => {
    comp.appName = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});
