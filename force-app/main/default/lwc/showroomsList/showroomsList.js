import { LightningElement, wire, api } from 'lwc';
import getAllRelatedShowrooms from '@salesforce/apex/ShowroomController.getAllRelatedShowrooms';
export default class ShowroomsList extends LightningElement {
	 @api recordId;
	
	@wire (getAllRelatedShowrooms, { accountId: '$recordId'})
	showrooms;
// 	// .then((data) => { 
// 		if(data){
// 		for(let key in data) {
// 		 this.mapData.push({value: data[key], key:key, url : 
// 		'https://wise-moose-v2ezd-dev-ed.lightning.force.com/lightning/r/Showroom__c/' 
// 		+ key + '/view' });
// 	}      
// }
}
    // showrooms;


	
	
	
	
    


