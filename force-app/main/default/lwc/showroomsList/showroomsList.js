import { LightningElement, wire,  api } from 'lwc';
import getAllRelatedShowrooms from '@salesforce/apex/ShowroomController.getAllRelatedShowrooms';
export default class ShowroomsList extends LightningElement {
	@wire(getAllRelatedShowrooms)
    showrooms;
    @api ShowroomsList = getAllRelatedShowrooms;

    // showrooms = getAllRelatedShowrooms;

    // handleEvent(){
    //     this.showrooms;
    // }
		
	}


	
	
	
	
    


