import { LightningElement, wire} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import getAllRelatedShowrooms from '@salesforce/apex/ShowroomController.getAllRelatedShowrooms';

export default class AccountList extends LightningElement {
    @wire(getAllAccounts)
    accounts;

getAllRelatedShowrooms;
handleGetShowrooms(){
this.template.getAllRelatedShowrooms ('c-c/showroomsList').getAllRelatedShowrooms();
}
}





// accounts.addEventListener('account.Name', myFunction);
// function myFunction(){
//     getAllRelatedShowrooms;
// }
