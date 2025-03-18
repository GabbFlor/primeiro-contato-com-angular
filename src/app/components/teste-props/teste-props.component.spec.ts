import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePropsComponent } from './teste-props.component';

describe('TestePropsComponent', () => {
  let component: TestePropsComponent;
  let fixture: ComponentFixture<TestePropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestePropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestePropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
