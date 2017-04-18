import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product, Review, ProductService} from "../../services/product-service";

@Component({
    selector: 'auction-product-page',
    templateUrl: './product-detail.html'
})
export default class ProductDetailComponent {
    product: Product;
    reviews: Review[];

    newComment: string;
    newRating: number;

    isReviewHidden: boolean = true;

    constructor(route: ActivatedRoute, private productService: ProductService) {
        let prodId: number = parseInt(route.snapshot.params['prodId']);
        productService.getProductById(prodId)
          .subscribe(res => {
            this.product = res.json();
          });
        productService.getReviewsForProduct(prodId)
          .subscribe(res =>{
            this.reviews = res.json()});
      productService.searchEvent.subscribe(p => console.log(p));
    }

    addReview() {
        let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
        this.reviews = [...this.reviews, review];
        this.product.rating = this.averageRating(this.reviews);
        this.productService.addReview(review);
        this.resetForm();
    }

    averageRating(reviews: Review[]): number {
        let sum = reviews.reduce((average, review) => average + review.rating, 0);
        return sum / reviews.length;
    }

    resetForm() {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    }
}
