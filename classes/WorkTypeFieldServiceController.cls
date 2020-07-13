public with sharing class WorkTypeFieldServiceController {


    // @AuraEnabled
    // public static SkillRequirement getSkillRequirement(String idSkillRequirement) {
    //     return [SELECT Id, RelatedRecordId FROM SkillRequirement WHERE Id =: idSkillRequirement];
    // }

    // @AuraEnabled
    // public static WorkType getWorkType(String idWorkType) {
    //     return [SELECT Id FROM WorkType WHERE Id =: idWorkType];
    // }

    @AuraEnabled
    public static ProductRequired createProductRequired(String ParentRecordId, String Product2Id, String QuantityRequired, String QuantityUnitOfMeasure){
        ProductRequired newProduct =new ProductRequired();
        WorkType newWorkType = [SELECT Id FROM WorkType WHERE Id =: ParentRecordId];
        Product2 newProduct2 = [SELECT Id FROM Product2 WHERE Id =: Product2Id];

        if(QuantityRequired==''){
            newProduct.ParentRecordId=newWorkType.Id;
            newProduct.Product2Id=newProduct2.Id;
            newProduct.QuantityUnitOfMeasure=QuantityUnitOfMeasure;
        } else {
            newProduct.ParentRecordId=newWorkType.Id;
            newProduct.Product2Id=newProduct2.Id;
            newProduct.QuantityRequired=Decimal.valueOf(QuantityRequired);
            newProduct.QuantityUnitOfMeasure=QuantityUnitOfMeasure;
        }

        insert newProduct;
        return newProduct;
        
    }

    @AuraEnabled
    public static ProductItem createProductItem(String Product2Id, String QuantityOnHand, String SerialNumber, String LocationId, String QuantityUnitOfMeasure){
        ProductItem newProductItem =new ProductItem();
        Product2 newProduct2 = [SELECT Id FROM Product2 WHERE Id =: Product2Id];

        newProductItem.Product2Id=newProduct2.Id;
        newProductItem.QuantityOnHand=Decimal.valueOf(QuantityOnHand);
        newProductItem.SerialNumber=SerialNumber;
        newProductItem.LocationId=LocationId;
        newProductItem.QuantityUnitOfMeasure=QuantityUnitOfMeasure;
        insert newProductItem;
        return newProductItem;
        
    }


}
