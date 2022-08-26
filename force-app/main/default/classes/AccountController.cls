public with sharing class AccountController {

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllObject1(){

        List <Account> accobj1 = [SELECT  Id, Name FROM Account WHERE Name = 'Used Cars'];

        return accobj1;
    }
    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllObject2 (){
        List <Account> accobj2 = [SELECT  Id, Name FROM Account WHERE Name = 'VIP cars'];

        return accobj2;
    }

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllObject3 (){
        List <Account> accobj3 = [SELECT  Id, Name FROM Account WHERE Name = 'Innovation cars'];

        return accobj3;
    }

    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Account> getAllObject4 (){
        List <Account> accobj4 = [SELECT  Id, Name FROM Account WHERE Name = 'Electric motor'];

        return accobj4;
    }

   
}
