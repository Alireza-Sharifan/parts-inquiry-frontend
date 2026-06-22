import { Injectable } from '@angular/core';

export type AutoPart = {
  code: string;
  name: string;
  category: string;
  stock: number;
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
      stock: 24,
      price: 120
    },
    {
      code: 'P102',
      name: 'Wheel Bearing',
      category: 'Wheel System',
      stock: 8,
      price: 85
    },
    {
      code: 'P103',
      name: 'Drive Shaft',
      category: 'Transmission',
      stock: 0,
      price: 230
    },
    {
      code: 'P104',
      name: 'Control Arm',
      category: 'Suspension',
      stock: 11,
      price: 150
    }
  ];

  //getPartByCode(code: string): Promise<AutoPart | undefined> {
  getPartByCode(code: string): Promise<AutoPart> {
   // return new Promise((resolve) => {
        return new Promise((resolve,reject) => {
      setTimeout(() => {
        const result = this.parts.find(item => item.code === code);
       
//resolve(result);
        
       // resolve(result);
    
    if (result) {
          resolve(result);
        } else {
          reject("Part not found");
        }
          
      }, 1500);
    });
  }
}