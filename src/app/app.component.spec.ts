import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Check Pilsner prod ', () => {
    let td: HTMLElement;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    td = fixture.nativeElement.querySelector('td');
    expect(td.textContent).toContain("Pilsner");
   
  });

  it('Check  prod is there ', () => {
    let td: HTMLElement;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    td = fixture.nativeElement.querySelector('td');
    expect(td.textContent).toEqual('');
  });

  it('Check  header  is there ', () => {
    let th: HTMLElement;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    th = fixture.nativeElement.querySelector('th');
    expect(th.textContent).toBeFalse();
  });



  
});

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
