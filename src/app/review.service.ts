import { Injectable } from '@angular/core';

import { Review } from './shared/models/review.model'
@Injectable()
export class ReviewService {

  private reviews: Array<Review>;
  constructor() {
    this.reviews = [
      new Review(1, "Vijay Prakash", new Date(), ["Sashi P", "Vijay P", "Vignesh", "Ravi"], "Pending Approval", "Rahul Khanna"),
      new Review(2, "Raj Kumar", new Date(), ["Eric"], "Pending Approval", "Rahul Khanna"),
      new Review(3, "Manohar Ch", new Date(), ["Raj Kumar"], "Pending Approval", "Rahul Khanna"),
    ];
  }

  getReviews(): Array<Review> {
    return this.reviews;
  }
}
