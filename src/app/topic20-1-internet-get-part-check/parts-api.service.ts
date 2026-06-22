import { Injectable } from '@angular/core';

export type AutoPart = {
  code: string;
  name: string;
  category: string;
  stock: number;
  price: number;
};

export type PartCheckResponse = {
  found: boolean;
  message?: string;
  part?: AutoPart;
  outOfStock?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class PartsApiService {
  async checkPartByCode(code: string): Promise<PartCheckResponse> {
    const response = await fetch(
      `https://parts-inquiry-server-api.onrender.com/api/parts/${code}`
    );

    if (response.status === 404) {
      return {
        found: false,
        message: 'Part not found'
      };
    }

    if (!response.ok) {
      throw new Error('Server error');
    }

    return response.json();
  }
}