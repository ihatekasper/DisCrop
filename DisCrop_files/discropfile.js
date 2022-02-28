$('#selectedFile').change(function () {
    var a = $('#selectedFile').val().toString().split('\\');
    $('#fakeInput').val(a[a.length -1]);
});