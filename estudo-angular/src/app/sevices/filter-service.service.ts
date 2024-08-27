import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  constructor() { }

  private selectedCategoriesSubject = new BehaviorSubject<string[]>([]);
  selectedCategories$ = this.selectedCategoriesSubject.asObservable();

  updateSelectedCategories(categories: string[]) {
    this.selectedCategoriesSubject.next(categories);
  }
}
