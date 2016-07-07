$(document).ready(function () {

    function search(e) {
        e.preventDefault();
        $('.result a').remove();
        var $request = $('.search').val();
        var apiKey = '2854710-5117c4f86589aa6e407f62b7b';

        $.ajax({
            url: "https://pixabay.com/api/?key="+apiKey+"&q=" + $request + "",
            dataType: 'jsonp',
            success: function(data) {
                if (parseInt(data.totalHits) > 0) {
                    $.each(data.hits, function(i, hit) {
                        $('.result').append('<a href="' + hit.pageURL + '">' + '<img src="' + hit.previewURL + '"></a>'); })
                } else {
                    alert('Ничего не найдено');
                }
            },
            error: function () {
                alert('Ошибка поиска');
            }
        });
    }

    $('.submit').on('click', search);

    $('.search').keypress(function (e) {
        if (e.which == 13) {
            search(e);
        }
    });
});
