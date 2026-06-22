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

export type SubmittedInquiry = {
  id: number;
  customerName: string;
  partCode: string;
  partName: string;
  outOfStock: boolean;
};

export type InquiryResponse = {
  success: boolean;
  message: string;
  inquiry?: SubmittedInquiry;
};

export type InquiriesListResponse = {
  success: boolean;
  inquiries: SubmittedInquiry[];
};

@Injectable({
  providedIn: 'root'
})
export class PartsApiService {
  private baseUrl = 'https://parts-inquiry-server-api.onrender.com';

  async checkPartByCode(code: string): Promise<PartCheckResponse> {
    const response = await fetch(`${this.baseUrl}/api/parts/${code}`);

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

  async submitInquiry(customerName: string, partCode: string): Promise<InquiryResponse> {
    const response = await fetch(`${this.baseUrl}/api/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName: customerName,
        partCode: partCode
      })
    });

    const data = await response.json();

    if (response.status === 400) {
      return data;
    }

    if (!response.ok) {
      throw new Error('Server error');
    }

    return data;
  }

  async getInquiries(): Promise<InquiriesListResponse> {
    const response = await fetch(`${this.baseUrl}/api/inquiries`);

    if (!response.ok) {
      throw new Error('Server error');
    }

    return response.json();
  }
}