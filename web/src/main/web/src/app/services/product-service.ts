import {Injectable, EventEmitter} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

export class Product {
  constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public description: string,
      public categories: string[]) {
  }
}

export class Review {
  constructor(
      public id: number,
      public productId: number,
      public timestamp: Date,
      public user: string,
      public rating: number,
      public comment: string) {
  }
}

export class ProductSearchParam {
  title: string;
  minPrice: number;
  maxPrice: number;
}

@Injectable()
export class ProductService {
  searchEvent: EventEmitter<any> = new EventEmitter();

  constructor(private _http: Http) {
  }

  getProducts(): any {
    return this._http.get("/api/products");
  }

  getProductById(productId: number): any {
    return this._http.get(`/api/products/${productId}`);
  }

  getAllCategories(): string[] {
    return ["Books", "Electronics", "Hardware"];
  }

  getReviewsForProduct(productId: number): any {
   return this._http.get(`/api/products/review/${productId}`);
  }

  addReview(review: any) {
    // reviews.push(review);
  }

  search(value: ProductSearchParam): any {
    return this._http.get('/api/products', {search: encodeParams(value)});
  }
}

function encodeParams(params: any): URLSearchParams {
  return Object.keys(params)
    .filter(key => params[key])
    .reduce((accum: URLSearchParams, key: string) => {
    accum.append(key, params[key]);
    return accum;
    }, new URLSearchParams());
}
