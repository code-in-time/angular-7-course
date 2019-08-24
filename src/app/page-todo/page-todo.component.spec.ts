import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodoComponent } from './page-todo.component';

describe('PageTodoComponent', () => {
  let component: PageTodoComponent;
  let fixture: ComponentFixture<PageTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
