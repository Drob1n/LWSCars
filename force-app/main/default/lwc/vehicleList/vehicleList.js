import { LightningElement, api, track } from 'lwc';
import  interestedChange from '@salesforce/apex/VehicleController.interestedChange';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
// I made message text in salesforce field "Custom Labels"
import vehiclelike from '@salesforce/label/c.vehiclelike';

export default class VehicleList extends NavigationMixin(LightningElement) {
    @api vehicle;

    @track vehicles;
    @track vehicleId
    @track likeState = false;
    label = {      
    };


	handleLikeButtonClick(event) {
        const showSuccess = new ShowToastEvent({
            message: vehiclelike,
            variant: 'Success',
        });
        let vehicleId = this.vehicle.Id;
        interestedChange ({vehicles:vehicleId})
        .then(result=>{
            if(this.likeState === false){
                this.likeState = true;
                this.dispatchEvent(showSuccess);
            }
            else if (this.likeState === true) {
                this.likeState = false;
            }
            this.vehicles.update();
        });
    }

    handleDetailButtonClick(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.vehicle.Id,
                objectApiName: 'Vehicle__c',
                actionName: 'view'
            }
        });
    }
    
    connectedCallback(){
        this.likeState = this.vehicle.Interested__c;
        
    }
	}

	

	