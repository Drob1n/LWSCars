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
    }}

    // handleOpenRecordClick() {
    //     const selectEvent = new CustomEvent('accountview', {
    //         detail: this.account.Id
    //     });
    //     this.dispatchEvent(selectEvent);
    // }

    // handleAccountView(event) {
	// 	// Get account record id from bearview event
	// 	const accountId = event.detail;
	// 	// Navigate to account record page
	// 	this[NavigationMixin.Navigate]({
	// 		type: 'standard__recordPage',
	// 		attributes: {
	// 			recordId: accountId,
	// 			objectApiName: 'Account',
	// 			actionName: 'view',
	// 		},
	// 	});


    


