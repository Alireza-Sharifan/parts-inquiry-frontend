import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  AutoPart,
  PartsApiService,
  SubmittedInquiry
} from './parts-api.service';

@Component({
  selector: 'app-topic22-products-page',
  templateUrl: './topic22-products-page.html',
  styleUrl: './topic22-products-page.css'
})
export class Topic22ProductsPage implements OnInit {
  // Section 1: Check Part
  checkLoading = false;
  checkRequiredError = false;
  checkNotFound = false;
  checkServerError = false;
  selectedPart: AutoPart | undefined;

  // Section 2: Submit Inquiry
  submitLoading = false;
  submitValidationError = '';
  submitSuccessMessage = '';
  submitServerError = false;
  submittedInquiry: SubmittedInquiry | undefined;

  // Section 3: Inquiry List
  listLoading = false;
  listServerError = false;
  inquiries: SubmittedInquiry[] = [];

  constructor(
    public partsApi: PartsApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Auto-load mode:
    // this.loadInquiries();

    // Manual mode:
    // keep this empty
  }

 getProductImage(partCode: string | undefined): string | undefined {
  const code = (partCode ?? '').toUpperCase();

  const imageMap: Record<string, string> = {
    P101: '/products/p101.jpg',
    P102: '/products/p102.jpg',
    P103: '/products/p103.jpg',
    P104: '/products/p104.jpg',
  };

  return imageMap[code];
}

  async checkPart(partCode: string): Promise<void> {
    const cleanedCode = partCode.trim().toUpperCase();

    this.checkLoading = false;
    this.checkRequiredError = false;
    this.checkNotFound = false;
    this.checkServerError = false;
    this.selectedPart = undefined;

    if (cleanedCode === '') {
      this.checkRequiredError = true;
      this.cdr.detectChanges();
      return;
    }

    this.checkLoading = true;
    this.cdr.detectChanges();

    try {
      const result = await this.partsApi.checkPartByCode(cleanedCode);

      if (result.found && result.part) {
        this.selectedPart = result.part;
        return;
      }

      this.checkNotFound = true;
    } catch (error) {
      this.checkServerError = true;
    } finally {
      this.checkLoading = false;
      this.cdr.detectChanges();
    }
  }

  async submitInquiry(customerName: string, partCode: string): Promise<void> {
    const cleanedName = customerName.trim();
    const cleanedCode = partCode.trim().toUpperCase();

    this.submitLoading = false;
    this.submitValidationError = '';
    this.submitSuccessMessage = '';
    this.submitServerError = false;
    this.submittedInquiry = undefined;

    this.submitLoading = true;
    this.cdr.detectChanges();

    try {
      const result = await this.partsApi.submitInquiry(cleanedName, cleanedCode);

      if (result.success && result.inquiry) {
        this.submitSuccessMessage = result.message;
        this.submittedInquiry = result.inquiry;
        return;
      }

      this.submitValidationError = result.message;
    } catch (error) {
      this.submitServerError = true;
    } finally {
      this.submitLoading = false;
      this.cdr.detectChanges();
    }
  }

  async loadInquiries(): Promise<void> {
    this.listLoading = false;
    this.listServerError = false;
    this.inquiries = [];

    this.listLoading = true;
    this.cdr.detectChanges();

    try {
      const result = await this.partsApi.getInquiries();
      this.inquiries = result.inquiries;
    } catch (error) {
      this.listServerError = true;
    } finally {
      this.listLoading = false;
      this.cdr.detectChanges();
    }
  }
}