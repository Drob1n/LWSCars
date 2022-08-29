public with sharing class ShowroomController {
    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Showroom__c> getAllRelatedShowrooms(Id accountId){

        return[SELECT ID, Name 
        FROM Showroom__c 
        WHERE Showroom_Account__c =:accountId 
        WITH SECURITY_ENFORCED];
}
}
