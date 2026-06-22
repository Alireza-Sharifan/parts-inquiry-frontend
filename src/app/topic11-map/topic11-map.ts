import { Component } from '@angular/core';
import { PartsDataService } from './parts-data.service';

type DisplayPart = {
  code: string;
  fullTitle: string;
  technicalInfo: string;
  stockText: string;
  priceText: string;
  discountPrice:number|null
  reorderNeeded: boolean;
};

@Component({
  selector: 'app-topic11-map',
  templateUrl: './topic11-map.html',
  styleUrl: './topic11-map.css'
})
export class Topic11Map {
  displayParts: DisplayPart[] = [];

  constructor(public partsData: PartsDataService) {
    this.displayParts = this.partsData.parts.map(item => {
        const needsReorder=item.stock<=item.reorderLevel
      return {
        code: item.code,
        fullTitle: item.code + ' - ' + item.name,
        technicalInfo: item.category + ' | ' + item.material,
        stockText: item.stock > 0 ? item.stock + ' pcs available' : 'Out of stock',
        priceText: '$' + item.price,
        /*
        discountPrice: item.stock <= item.reorderLevel? (item.price-item.price*.1):null,
        reorderNeeded: item.stock <= item.reorderLevel*/
      
        reorderNeeded:needsReorder,
        discountPrice: needsReorder?(item.price-item.price*.1):null



      };
    });
  }
}