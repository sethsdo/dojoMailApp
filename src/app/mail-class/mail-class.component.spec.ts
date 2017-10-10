import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailClassComponent } from './mail-class.component';

describe('MailClassComponent', () => {
  let component: MailClassComponent;
  let fixture: ComponentFixture<MailClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
