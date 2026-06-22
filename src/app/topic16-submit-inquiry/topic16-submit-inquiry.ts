import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { PartsApiService, SubmittedInquiry } from "./parts-api.service";
@Component({
    selector:'app-topic16-submit-inquiry',
    templateUrl:'topic16-submit-inquiry.html',
    styleUrl:'topic16-submit-inquiry.css'
})
export class Topic16SubmitInquiry  {
      loading = false;
  validationError = "";
  successMessage = "";
  serverError = false;
  submittedInquiry: SubmittedInquiry|undefined
    constructor(public partApi:PartsApiService,
        private cdr:ChangeDetectorRef
    ) {}
    async submitInquiry(customerName:string,partCode:string):Promise<void>{
        const cleanedName=customerName.trim()
        const cleanedCode=partCode.trim().toUpperCase()
        this.loading=false
        this.validationError=""
this.successMessage=""
this.serverError=false
this.submittedInquiry=undefined

this.loading=true
this.cdr.detectChanges()
try {
    const result=await this.partApi.submitInquiry(cleanedName,cleanedCode)
    if (result.success&&result.inquiry) {
        this.successMessage=result.message
        this.submittedInquiry=result.inquiry
        return
    }

   /* if (result.success) {
        this.successMessage=result.message
        this.submittedInquiry=result.inquiry
    } else {
        this.validationError=result.message
    }*/
    this.validationError=result.message
} catch (error) {
    this.serverError=true
}
finally{
    this.loading=false
    this.cdr.detectChanges()
}
    }
}