import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotationsComponent } from './my-notations.component';

describe('MyNotationsComponent', () => {
  let component: MyNotationsComponent;
  let fixture: ComponentFixture<MyNotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
