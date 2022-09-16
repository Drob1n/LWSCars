import { LightningElement  } from 'lwc';
import getAllShowrooms from '@salesforce/apex/ShowroomController.getAllShowrooms';
export default class ShowroomsList extends LightningElement {
    showrooms;
    error;
    connectedCallback() {
		this.loadShowrooms();
	}
	loadShowrooms() {
		getAllShowrooms()
			.then(result => {
				this.showrooms = result;
			})
			.catch(error => {
				this.error = error;
			});
    }


    showVehicle(event){
		this.isLoading = true;
		let id = event.currentTarget.dataset.id;

		getAllRelatedVehicles({outShowroom :id})
		.then(result => {
			{this.isVehicleSelected = false};

			if(result.lenght >0){
				{this.isShowroomSelected = true};
				{this.chosenVehicles = result};
				{this.isLoading = false};
			}
		})	
	}}


