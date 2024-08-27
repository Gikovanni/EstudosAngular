import { Component } from '@angular/core';
import { FilterServiceService } from '../../sevices/filter-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  categories = ['A', 'B', 'C'];
  selectedCategories: string[] = [];

  constructor(private filterService: FilterServiceService) {}

  onCheckboxChange(event: any) {
    const category = event.target.value;
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
    }
    this.filterService.updateSelectedCategories(this.selectedCategories);
  }
}
