import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from '../../sevices/filter-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  constructor(private filterService: FilterServiceService) {}
   cards = [
    { title: 'Card 1', description: 'Description 1', category: 'A' },
    { title: 'Card 2', description: 'Description 2', category: 'B' },
    { title: 'Card 3', description: 'Description 3', category: 'A' },
    { title: 'Card 4', description: 'Description 4', category: 'C' },
  ];

  filteredCards = [...this.cards];

  ngOnInit() {
    this.filterService.selectedCategories$.subscribe(selectedCategories => {
      this.filteredCards = this.cards.filter(card => selectedCategories.includes(card.category));
    });
  }
}
