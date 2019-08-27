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
};

const clearOutput = () => {
    $(".task-output").val('');
    $(".task-detail").val('');
};

// User Interface Logic
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        
        const inputName = $("input#task-input").val();
        const inputDetail = $("input#task-detail").val();
        const newToDo = new ToDo(inputName, inputDetail);
        if(inputName != '') {
            $('ul#tasks').prepend(`<li><span class='task'>${newToDo.inputTask}</span></li>`);
        }

        $('.task').click(function(){
            $('#show-task').show();
            $('#show-task h2').text(newToDo.inputTask);
            newToDo.output(".task-output", ".task-detail");
        });
        clearInput();
    });
    // codes for remove button
    $("#remove-task").click(function(event){
        event.preventDefault();
        $(this).remove();
        $('ul#tasks').find('li').each(function(){
            if($(this).is(':empty')) {
                $(this).remove();
            }
        });
        $("#show-task").hide();
        clearOutput();
    })
});