window.promptType = function(dialogId) {
    document.getElementById(dialogId).showModal();
};
window.chooseType = function(dialogId,formId) {
    document.getElementById(formId).style.display = "block";
    document.getElementById(dialogId).close();
};