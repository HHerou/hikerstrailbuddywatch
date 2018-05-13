public class GenericObjectController {
    @AuraEnabled
    public static sObject getRecord(String sObjectName, String recordId) {
        if (sObjectName != null){
            System.debug('sObjectName: ' + sObjectName);
            String qStr = 'SELECT Id, Name FROM ' + sObjectName + ' WHERE Id = :recordId';
            System.debug(qStr);
            List<sObject> sObjList = Database.query(qStr);
            if (sObjList.size()>0){
                return sObjList[0]; 
            }
        }
        return null;
    }
}