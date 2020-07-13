({
    init : function(component, event, helper) {

    },
    handleSuccess: function(component, event, helper) {
        
        let navService = component.find("navService");
        //получаем значения и записываем в переменнтую id
        let payload = event.getParams().response;
        component.set("v.workTypeId", payload.id);
        //Получаем ссылку на страницу и передаем параметы
        let pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepTwo',
            },
            state: {
                "c__workTypeId": component.get("v.workTypeId")
            }
        };
        event.preventDefault();
        //выводим сообщение о создании объекта
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "title": "SUCCESS!",
            type : 'success',
            "message": "The new WorkType was created."
        });
        $A.get("e.force:closeQuickAction").fire();
        resultsToast.fire();
        $A.get("e.force:refreshView").fire();
        //переходим на другой компонент
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