
$("#thisform").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var input = $("#inputQuery").val()
    console.log(input)
    postData(input)
});

function postData(input) {
    $.ajax({
        type: "POST",
        url: "return.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}
