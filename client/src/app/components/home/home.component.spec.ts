import {TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {ApiService} from "../../shared/api.service";
import {Observable} from 'rxjs/Rx';
import {Item} from "../../model/Item";

class MockBlogService extends ApiService {
  constructor() {
    super(null);
  }

  listItems() : Observable < Item[] > {
    console.log('sending fake items!');

    return Observable.of([ {id: "01",name: 'Item 01'}]);
  }
}

let component: HomeComponent;
let apiService: ApiService;

describe('Home', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ApiService,
          useClass: MockBlogService
        }
      ]
    });

    component = TestBed.createComponent(HomeComponent).componentInstance;
    apiService = TestBed.get(ApiService);

  });

  it('should work', () => {
    
    expect(component instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });

  it('should set the items', () => {

    component.ngOnInit();
    expect(component.items.length).toBe(1);
    
  });
});