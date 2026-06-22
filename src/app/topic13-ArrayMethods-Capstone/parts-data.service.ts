import { Injectable } from '@angular/core';

export type AutoPart = {
  code: string;
  name: string;
  category: string;
  material: string;
  stock: number;
  reorderLevel: number;
  price: number;
};

@Injectable({
  providedIn: 'root'
})
export class PartsDataService {
  parts: AutoPart[] = [
    {
      code: 'P101',
      name: 'Brake Pad',
      category: 'Braking System',
      material: 'Ceramic',
      stock: 24,
      reorderLevel: 10,
      price: 120
    },
    {
      code: 'P102',
      name: 'Wheel Bearing',
      category: 'Wheel System',
      material: 'Chrome Steel',
      stock: 8,
      reorderLevel: 10,
      price: 85
    },
    {
      code: 'P103',
      name: 'Drive Shaft',
      category: 'Transmission',
      material: 'Alloy Steel',
      stock: 0,
      reorderLevel: 5,
      price: 230
    },
    {
      code: 'P104',
      name: 'Control Arm',
      category: 'Suspension',
      material: 'Forged Steel',
      stock: 11,
      reorderLevel: 8,
      price: 150
    },
    {
      code: 'P105',
      name: 'Clutch Plate',
      category: 'Clutch System',
      material: 'Composite',
      stock: 4,
      reorderLevel: 6,
      price: 95
    }
  ];
}