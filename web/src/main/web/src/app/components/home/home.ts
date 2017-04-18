import {Component} from "@angular/core";
import {Product, ProductService} from "../../services/product-service";
import 'rxjs/add/operator/debounceTime';
import {FormControl} from "@angular/forms";


@Component({
    selector: 'auction-home-page',
    styleUrls: ['./home.css'],
    templateUrl: './home.html',
})
export default class HomeComponent {
    products: Product[];
    titleFilter: FormControl = new FormControl();
    filterCriteria: string;

    constructor(private productService: ProductService) {
      this.productService.searchEvent
        .subscribe(searchParams => {
            this.productService.search(searchParams).subscribe(resp => this.products = resp.json());
          }, err => console.log("Can't search by params. Error is %s, URL: %s ")
          , () => console.log("Done"));
      this.productService.getProducts()
        .subscribe(resp => {
          this.products = resp.json();
        });
      this.titleFilter.valueChanges
        .debounceTime(100)
        .subscribe(
          value => this.filterCriteria = value,
          error => console.error(error));
    }
}
