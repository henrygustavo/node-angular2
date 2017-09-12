import {TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {AppAdminComponent} from './app-admin.component';

let component: AppAdminComponent;

describe('AppAdmin', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppAdminComponent]
    });

    component = TestBed.createComponent(AppAdminComponent).componentInstance;

  });

  it('should work', () => {
    
    expect(component instanceof AppAdminComponent).toBe(true, 'should create AppAdminComponent');
  });

});