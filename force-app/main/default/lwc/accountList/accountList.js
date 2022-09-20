import { LightningElement, wire, track} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import getRelatedShowrooms from '@salesforce/apex/AccountController.getRelatedShowrooms';
import getAllRelatedVehicles from '@salesforce/apex/AccountController.getAllRelatedVehicles';
const COLUMNS = [{label: 'Name', fieldName: 'Name'}];
export default class AccountList extends LightningElement {
        @track accountId = '';
        @track showroomId;
        //@track showrooms;
        //@track vehicles;
        @track columns = COLUMNS;
        @track selectedVehicles;
        @wire(getAllAccounts)
        accounts;
        @wire(getRelatedShowrooms, {accountId: '$accountId'})
        showrooms;
        @wire(getAllRelatedVehicles, {showroomId: '$showroomOfferId'})
        vehicles;
        onValueSelection(event) {
            console.log(this.showrooms)
            this.accountId = event.target.value;
        }
        onValueSelection2(event) {
            this.showroomId = event.target.value;
        }

        onVehicleSelection(event) {
            console.log(event.target.value)
            // this.selectedVehicles = event.detail.selectedRows;
            this.showroomId = event.target.value;
        }
}



    


