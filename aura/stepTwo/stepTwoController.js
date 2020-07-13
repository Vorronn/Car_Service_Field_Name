({
    init: function(component, event, helper) {
        //Заполнение параметров по умолчанию
        let myPageRef = component.get("v.pageReference");
        let workTypeId = myPageRef.state.c__workTypeId;
        component.set("v.workTypeId", workTypeId);
        
    },
    
    handleSuccess: function(component, event, helper) {
        
        let navService = component.find("navService");
        //let payload = event.getParams().response;
        //Получаем ссылку на страницу и передаем параметы
        let pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepThree',
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
            "message": "The new SkillRequirement was created."
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