import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ApiService} from "./shared/api.service";
import {Observable} from 'rxjs/Rx';
import {Item} from "./model/Item";

class MockBlogService extends ApiService {
  constructor() {
    super(null);
  }

  listItems() : Observable < Item[] > {
    console.log('sending fake items!');

    return Observable.of([ {id: "01",name: 'Item 01'}]);
  }
}

let component: AppComponent;
let apiService: ApiService;

describe('App', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: ApiService,
          useClass: MockBlogService
        }
      ]
    });

    component = TestBed.createComponent(AppComponent).componentInstance;
    apiService = TestBed.get(ApiService);

  });

  it('should work', () => {
    
    expect(component instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should set the items', () => {

    component.ngOnInit();
    expect(component.items.length).toBe(1);
    
  });
});