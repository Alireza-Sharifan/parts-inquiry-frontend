import { ChangeDetectorRef, Component } from "@angular/core";
import { AutoPart, PartsDataService } from "./parts-data.service";

@Component({
  selector: 'app-topic14-promise-async',
  templateUrl: 'topic14-promise-async.html',
  styleUrl: 'topic14-promise-async.css'
})
export class Topic14PromiseAsync {
  loading: boolean = false;
  requiredError: boolean = false;
  notFound: boolean = false;
  selectedPart: AutoPart | undefined;

  constructor(
    public partsData: PartsDataService,
    private cdr: ChangeDetectorRef
  ) {}


  async checkPart(partCode: string): Promise<void> {
    const cleanedCode = partCode.trim().toUpperCase();

    this.loading = false;
    this.requiredError = false;
    this.notFound = false;
    this.selectedPart = undefined;

    if (cleanedCode === '') {
      this.requiredError = true;
      this.cdr.detectChanges();
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();

try {
      const result = await this.partsData.getPartByCode(cleanedCode);
      this.selectedPart = result;
    } catch (error) {
      this.notFound = true;
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }

  /*  const result = await this.partsData.getPartByCode(cleanedCode);

    this.loading = false;

    if (result) {
      this.selectedPart = result;
    } else {
      this.notFound = true;
    }
*/
   
  }

 
}