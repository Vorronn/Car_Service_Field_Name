({
    init : function(component, event, helper) {

    },
    //Функция при успешном заполнении всех полей
    handleSuccess: function(component, event, helper) {

        let navService = component.find("navService");
        //получение ответа обработки формы
        let payload = event.getParams().response;
        //записываем Id WorkOrder
        component.set("v.workOrderId", payload.id);
        //Получение URL компонента на который ссылаемся с параметрами State
        console.log(component.get("v.workOrderId"));
        let pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepTwoWorkOrder',
            },
            state: {
                "c__workOrderId": component.get("v.workOrderId")
            }
        };
        event.preventDefault();
        //выводим сообщение о создании объекта
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "title": "SUCCESS!",
            type : 'success',
            "message": "The new WorkOrderLineItem was created."
        });
        $A.get("e.force:closeQuickAction").fire();
        resultsToast.fire();
        $A.get("e.force:refreshView").fire();
        //переходим на следующий компонент
        navService.navigate(pageReference);
    },
    handleError: function(component, event, helper){
                //выводим сообщение об ошибке
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "ERROR!",
                    type : 'error',
                    "message": "Check that the fields are filled in correctly."
                });
                $A.get("e.force:closeQuickAction").fire();
                resultsToast.fire();
                $A.get("e.force:refreshView").fire();
    }
})