import { LightningElement, api} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class AccountTile extends LightningElement {

    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('accountview', {
            detail: this.account.Id
        });
        this.dispatchEvent(selectEvent);
    } 
    
    @api accounts;
    connectedCallback() {
		this.loadAccounts();
	}
	loadBears() {
		getAllAccounts()
			.then(result => {
				this.accounts = result;
			})
			.catch(error => {
				this.error = error;
			});
	}
}