
import {TestBed, async} from "@angular/core/testing";
import StarsComponent from "./stars";
describe("StarComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('successfully instantiated', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component instanceof StarsComponent).toEqual(true);
  });

  it('readOnly prop is true', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component.readOnly).toEqual(true);

  });

  it('all stars are empty', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let cmp = fixture.componentInstance;
    let element = fixture.nativeElement;
    cmp.rating = 0;

    fixture.detectChanges();

    let selector = '.glyphicon-star-empty';
    expect(element.querySelector(selector).length).toBe(5);
  });

  it('all stars are filled', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let cmp = fixture.componentInstance;
    let element = fixture.nativeElement;
    cmp.rating = 5;
    fixture.detectChanges();
    let selector = '.glyphicon-star:not(.glyphicon-star-empty)';
    expect(element.querySelector(selector).length).toBe(5);
  });

  it('emits rating change event when readOnly is false', ()=> {
    let fixture = TestBed.createComponent(StarsComponent);
    let cmp = fixture.componentInstance;

    cmp.ratingChange.subscribe(r => {
      expect(r).toBe(3);
    });
    cmp.readOnly = false;
    cmp.fillStarsWithColor(2);
  });
});
