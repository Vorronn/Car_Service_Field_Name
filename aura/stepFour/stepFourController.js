({
    init: function(component, event, helper){
        //Устанавливаем значение по умолчанию не работает должным образом в визуальной части не отображается
        let myPageRef = component.get("v.pageReference");
        let Product = myPageRef.state.c__Product;
        component.set("v.Product", Product);
        component.set("v.ProductItem.Product2Id", Product);
        console.log(Product);
        //component.find("Product2Id").get("v.value");
        //$A.get("e.force:refreshView").fire();

    },
    navigateToCmp4:function(component, event, helper){
        if(component.get("v.ProductItem.Product2Id")=='' || component.get("v.ProductItem.QuantityOnHand")=='' ||component.get("v.ProductItem.LocationId")==''){
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
            let action = component.get("c.createProductItem");
            action.setParams({"Product2Id" : component.get("v.ProductItem.Product2Id"), "QuantityOnHand": component.get("v.ProductItem.QuantityOnHand"), "SerialNumber": component.get("v.ProductItem.SerialNumber"), "LocationId": component.get("v.ProductItem.LocationId"), "QuantityUnitOfMeasure": component.get("v.ProductItem.QuantityUnitOfMeasure")});
            action.setCallback(this, function(response) {
                let state = response.getState();
                console.log(state);
                if (state === "SUCCESS") {
                    let navService = component.find("navService");
                    //component.set("v.workTypeId", payload.id);
                    let pageReference = {
                        type: 'standard__component',
                        attributes: {
                            componentName: 'c__WorkTypeCarService',
                        },
                        state: {

                        }
                    };
                    event.preventDefault();

                    //выводим сообщение о создании объекта
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "SUCCESS!",
                        type : 'success',
                        "message": "The new ProductItem was created."
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
        let Product2Id = component.find("Product2Id").get("v.value");
        Product2Id = component.find("Product2Id").get("v.body")[0].set("v.values", component.get("v.Product"));
        //$A.get("e.force:refreshView").fire();
        let QuantityOnHand = component.find("QuantityOnHand").get("v.value");
        let SerialNumber = component.find("SerialNumber").get("v.value");
        let LocationId = component.find("LocationId").get("v.value");
        let QuantityUnitOfMeasure = component.find("QuantityUnitOfMeasure").get("v.value");

    }
    
})