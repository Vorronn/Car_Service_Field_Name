({
    init: function(component, event, helper){
        //Устанавливаем значение по умолчанию не работает должным образом в визуальной части не отображается
        let myPageRef = component.get("v.pageReference");
        let workTypeId = myPageRef.state.c__workTypeId;
        component.set("v.workOrderId", workTypeId);
        component.set("v.ProductRequired.ParentRecordId", workTypeId);
        //console.log(workOrder);
        //component.find("ParentRecordId").get("v.value");
        //$A.get("e.force:refreshView").fire();
    },
    navigateToCmp4:function(component, event, helper){
        //передаем параметры в controller и создаем объект
        if(component.get("v.ProductRequired.ParentRecordId")=='' || component.get("v.ProductRequired.Product2Id")==''){
            //выводим сообщение об ошибке
            let resultsToast1 = $A.get("e.force:showToast");
            resultsToast1.setParams({
                "title": "WARNING!",
                type : 'warning',
                "message": "You didn't fill in the required fields."
            });
            $A.get("e.force:closeQuickAction").fire();
            resultsToast1.fire();
            $A.get("e.force:refreshView").fire();
        } else {
            let action = component.get("c.createProductRequired");
            action.setParams({"ParentRecordId" : component.get("v.ProductRequired.ParentRecordId"), "Product2Id": component.get("v.ProductRequired.Product2Id"), "QuantityRequired": component.get("v.ProductRequired.QuantityRequired"), "QuantityUnitOfMeasure": component.get("v.ProductRequired.QuantityUnitOfMeasure")});
            action.setCallback(this, function(response) {
                let state = response.getState();
                console.log(state);
                if (state === "SUCCESS") {
                    let navService = component.find("navService");
                    //component.set("v.workTypeId", payload.id);
                    let pageReference = {
                        type: 'standard__component',
                        attributes: {
                            componentName: 'c__stepFour',
                        },
                        state: {
                            "c__Product": component.get("v.ProductRequired.Product2Id")

                        }
                    };
                    event.preventDefault();

                    //выводим сообщение о создании объекта
                    let resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "SUCCESS!",
                        type : 'success',
                        "message": "The new ProductRequered was created."
                    });
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                    $A.get("e.force:refreshView").fire();

                    navService.navigate(pageReference);
            
                } else {

                        //выводим сообщение об ошибке
                        let resultsToast1 = $A.get("e.force:showToast");
                        resultsToast1.setParams({
                            "title": "ERROR!",
                            type : 'error',
                            "message": "Check that the fields are filled in correctly."
                        });
                        $A.get("e.force:closeQuickAction").fire();
                        resultsToast1.fire();
                        $A.get("e.force:refreshView").fire();
                    
                }
            });
            $A.enqueueAction(action);
        } 


    },
    
    handleChange: function(component, event, helper) {
        let ParentRecordId = component.find("ParentRecordId").get("v.value");
        ParentRecordId = component.find("ParentRecordId").get("v.body")[0].set("v.values", component.get("v.workOrderId"));
        //$A.get("e.force:refreshView").fire();
        let Product2Id = component.find("Product2Id").get("v.value");
        let QuantityRequired = component.find("QuantityRequired").get("v.value");
        let QuantityUnitOfMeasure = component.find("QuantityUnitOfMeasure").get("v.value");
    }
    
})