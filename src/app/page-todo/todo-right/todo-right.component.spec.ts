import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRightComponent } from './todo-right.component';

describe('TodoRightComponent', () => {
  let component: TodoRightComponent;
  let fixture: ComponentFixture<TodoRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
