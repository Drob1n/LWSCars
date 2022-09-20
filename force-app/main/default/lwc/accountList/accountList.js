import { LightningElement, wire, track} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import getRelatedShowrooms from '@salesforce/apex/AccountController.getRelatedShowrooms';
const COLUMNS = [{label: 'Name', fieldName: 'Name'}];
export default class AccountList extends LightningElement {
        @track accountId = '';
        @track showroomId;
        @track columns = COLUMNS;

        @wire(getAllAccounts)
        accounts;

        @wire(getRelatedShowrooms, {accountId: '$accountId'})
        showrooms;

        onValueSelection(event) {
            console.log(this.showrooms)
            this.accountId = event.target.value;
        }
        onValueSelection2(event) {
            this.showroomId = event.target.value;
        }
}



    


