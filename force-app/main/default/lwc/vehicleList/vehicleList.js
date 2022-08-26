import { LightningElement, wire, api } from 'lwc';
import getAllRelatedVehicles from '@salesforce/apex/VehicleController.getAllRelatedVehicles';
export default class VehicleList extends LightningElement {
	 @api recordId;
	
	@wire (getAllRelatedVehicles, { showroomId: '$recordId'})
    vehicles;}