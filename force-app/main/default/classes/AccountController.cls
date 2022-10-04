public with sharing class AccountController {

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllAccounts(){

        List<Account> acclist =[SELECT ID, Name
        FROM Account WHERE Phone = null];
        return acclist;
        }
        
   
    @AuraEnabled(cacheable=true scope='global' )
    public static List<Showroom__c> getRelatedShowrooms(String accountId){
        List<Showroom__c> showlist =[SELECT ID, Name
        FROM Showroom__c WHERE Showroom_Account__c =:accountId ];
        return showlist;
        }
}

   

