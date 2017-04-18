
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ProductService} from "./product-service";
import {BaseRequestOptions, Http, ResponseOptions, Response, HttpModule, XHRBackend} from "@angular/http";
import {inject, TestBed, getTestBed} from "@angular/core/testing";
import {Injector} from "@angular/core";
describe('ProductService', () => {
  let mockBackend: MockBackend;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        ProductService
      ]
    });
  });

  beforeEach(inject([XHRBackend, ProductService], (_mockBackend, _service) => {
    mockBackend = _mockBackend;
    service = _service;
  }));

  it('getProductById() should return Product with ID=1', () => {
    let mockProduct = {
      'id': 1
    };
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let resp = new ResponseOptions({body: JSON.stringify(mockProduct)});
      connection.mockRespond(new Response(resp));
    });

    service.getProductById(1).subscribe(p => {
      expect(p.id).toBe(1);
    })
  });
});
