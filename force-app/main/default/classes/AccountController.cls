public with sharing class AccountController {

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllAccounts(){

        List<Account> acclist =[SELECT ID, Name,  Industry, ShippingAddress, Type, Site
        FROM Account WHERE Phone = null];
        return acclist;
        }
   
    @AuraEnabled(cacheable=true scope='global' )
    public static List<Showroom__c> getRelatedShowrooms(String accountId){
        List<Showroom__c> showlist =[SELECT ID, Name
        FROM Showroom__c WHERE Showroom_Account__c =:accountId ];
        return showlist;
        }

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Showroom_Offer__c> getAllRelatedVehicles(Id showroomOfferId){

        return[SELECT Vehicle__r.ID, Vehicle__r.Name 
        FROM Showroom_Offer__c
        WHERE Showroom__r.id =:showroomOfferId 
        WITH SECURITY_ENFORCED];
        }
}

   

