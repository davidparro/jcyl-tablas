import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcylTablasComponent } from './jcyl-tablas.component';

describe('JcylTablasComponent', () => {
  let component: JcylTablasComponent;
  let fixture: ComponentFixture<JcylTablasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcylTablasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcylTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
