import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core'; // <1>

@Component({
  templateUrl: './stars.html',
  styles: [` .starrating { color: #d17581; }`],
  selector: 'auction-stars'
})
export default class StarsComponent {
  private _rating: number;
  private stars: boolean[] = [];

  private maxStars: number = 5;

  @Input() readOnly: boolean = true;

  @Input() get rating(): number {
    return this._rating;
  }

  set rating(val: number) {
    this._rating = val || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this._rating);
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index){
    if(!this.readOnly) {
      this._rating = index + 1;
      this.ratingChange.emit(this._rating);
    }
  }
}
