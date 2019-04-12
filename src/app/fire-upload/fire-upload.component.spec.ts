import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireUploadComponent } from './fire-upload.component';

describe('FireUploadComponent', () => {
  let component: FireUploadComponent;
  let fixture: ComponentFixture<FireUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
