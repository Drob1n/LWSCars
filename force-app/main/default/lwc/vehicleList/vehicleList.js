import { LightningElement, wire, track } from 'lwc';
import getAllRelatedVehicles from '@salesforce/apex/AccountController.getAllRelatedVehicles'
export default class VehicleCardList extends LightningElement {

    @track selectedVehicles;

    @wire(getAllRelatedVehicles, {showroomId: '$showroomOfferId'})
    vehicles;

    onVehicleSelection(event) {
        console.log(event.target.value)
        // this.selectedVehicles = event.detail.selectedRows;
        this.showroomId = event.target.value;
    }
}