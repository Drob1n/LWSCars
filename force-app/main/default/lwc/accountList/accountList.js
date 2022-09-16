import { LightningElement} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';


export default class AccountList extends LightningElement {
    accounts;
    error;
    connectedCallback() {
		this.loadAccounts();
	}
	loadAccounts() {
		getAllAccounts()
			.then(result => {
				this.accounts = result;
			})
			.catch(error => {
				this.error = error;
			});
    }

	showShowrooms(event){
		this.isLoading = true;
		let id = event.currentTarget.dataset.id;

		getShowrooms({outAccount :id})
		.then(result => {
			{this.isShowroomSelected = false};

			if(result.lenght >0){
				{this.isAccountSelected = true};
				{this.chosenShowrooms = result};
				{this.isLoading = false};
			}
		})
	}



}



    


