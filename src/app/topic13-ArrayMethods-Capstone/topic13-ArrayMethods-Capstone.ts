import { Component } from '@angular/core';
import { AutoPart, PartsDataService } from './parts-data.service';

type DisplayPart = {
  code: string;
  fullTitle: string;
  technicalInfo: string;
  stockText: string;
  priceText: string;
  reorderNeeded: boolean;
};

type PartsSummary = {
  totalProducts: number;
  totalStock: number;
  totalInventoryValue: number;
  lowStockCount: number;
  outOfStockCount: number;
};

@Component({
  selector: 'app-topic13-ArrayMethods-Capstone',
  templateUrl: './topic13-ArrayMethods-Capstone.html',
  styleUrl: './topic13-ArrayMethods-Capstone.css'
})
export class Topic13ArrayMethodsCapstoneo {
  currentRawParts: AutoPart[] = [];
  displayParts: DisplayPart[] = [];
  summary: PartsSummary = {
    totalProducts: 0,
    totalStock: 0,
    totalInventoryValue: 0,
    lowStockCount: 0,
    outOfStockCount: 0
  };

  selectedPart: AutoPart | undefined;
  requiredError = false;
  notFound = false;
  currentViewTitle = 'All Parts';

  constructor(public partsData: PartsDataService) {
    this.applyView(this.partsData.parts, 'All Parts');
  }

  applyView(parts: AutoPart[], title: string): void {
    this.currentViewTitle = title;

    this.requiredError = false;
    this.notFound = false;
    this.selectedPart = undefined;

    this.currentRawParts = parts;

    this.displayParts = parts.map(item => {
      return {
        code: item.code,
        fullTitle: item.code + ' - ' + item.name,
        technicalInfo: item.category + ' | ' + item.material,
        stockText: item.stock > 0 ? item.stock + ' pcs available' : 'Out of stock',
        priceText: '$' + item.price,
        reorderNeeded: item.stock <= item.reorderLevel
      };
    });

    this.summary = parts.reduce(
      (accumulator: PartsSummary, item) => {
        accumulator.totalProducts += 1;
        accumulator.totalStock += item.stock;
        accumulator.totalInventoryValue += item.stock * item.price;

        if (item.stock <= item.reorderLevel) {
          accumulator.lowStockCount += 1;
        }

        if (item.stock === 0) {
          accumulator.outOfStockCount += 1;
        }

        return accumulator;
      },
      {
        totalProducts: 0,
        totalStock: 0,
        totalInventoryValue: 0,
        lowStockCount: 0,
        outOfStockCount: 0
      }
    );
  }

  showAllParts(): void {
    this.applyView(this.partsData.parts, 'All Parts');
  }

  showAvailableParts(): void {
    const result = this.partsData.parts.filter(item => item.stock > 0);
    this.applyView(result, 'Available Parts');
  }

  showBrakingParts(): void {
    const result = this.partsData.parts.filter(item => item.category === 'Braking System');
    this.applyView(result, 'Braking Parts');
  }

  showLowStockParts(): void {
    const result = this.partsData.parts.filter(item => item.stock <= item.reorderLevel);
    this.applyView(result, 'Low Stock Parts');
  }

  findPart(partCode: string): void {
    const cleanedCode = partCode.trim().toUpperCase();

    this.requiredError = false;
    this.notFound = false;
    this.selectedPart = undefined;

    if (cleanedCode === '') {
      this.requiredError = true;
      return;
    }

    const result = this.currentRawParts.find(item => item.code === cleanedCode);

    if (result) {
      this.selectedPart = result;
    } else {
      this.notFound = true;
    }
  }
}