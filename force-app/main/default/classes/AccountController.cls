public with sharing class AccountController {

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllAccounts(){

        List<Account> acclist =[SELECT ID, Name 
        FROM Account];

        return acclist;
    }
   
}

   

