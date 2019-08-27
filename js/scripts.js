// Business Logic
function ToDo(inputTask, inputDetail) {
    this.inputTask = inputTask;
    this.inputDetail = inputDetail;
}

ToDo.prototype.output = function(outputName, outputDetail){
    $(outputName).text(this.inputTask);
    $(outputDetail).text(this.inputDetail);
}

// clear the input field
const clearInput = () => {
    $("input#task-input").val('');
    $("input#task-detail").val('');
}

const clearOutput = () => {
    $(".task-output").val('');
    $(".task-detail").val('');
}

// User Interface Logic
$(document).ready(function(){
    $("from").submit(function(event){
        event.preventDefault();

        const inputName = $("input#task-input").val();
        const inputDetail = $("input#task-detail").val();
        const newToDo = new ToDo(inputName, inputDetail);

        if(inputName != '') {
            $('ul#tasks').prepend(`<li><span class='task'>${newToDo.inputTask}</span>></li>`);
        }

        $('.task').last().click(function(){
            $('#show-task').show();
            $('#show-task h2').text(newToDo.inputTask);
            newToDo.output(".task-output", ".task-detail");
        });
        clearInput();
    });
    // codes for remove button
    
});