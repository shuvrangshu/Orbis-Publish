import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDesignComponent } from './mix-design.component';

describe('WiMaserComponent', () => {
  let component: MixDesignComponent;
  let fixture: ComponentFixture<MixDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
