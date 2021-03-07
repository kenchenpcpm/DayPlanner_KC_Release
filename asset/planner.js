var button = $('.saveBtn')
$(document).ready(function(){
    var date = moment().format('dddd MMMM Do');
    $('currentDay').text(date);

    function currentDate() {
        var current = moment().hour()
        var time = $('.time-block');
        time.each(function(){
            var hour = parseInt($(this).attr('id'))
            if (hour ===current){
                $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
            }else if(current > hour) {
                $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
            }else {
                $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
            }
        })
    }
    currentDate()

    button.on('click', function(event){
        event.preventDefauly();
        var text = $(this).siblings('.col-sm-10').val().replace(/[''] +/g, '');
        var parent = $(this).parent().attr('id');
        localStorage.setItem(parent, JSON.stringify(text));
    })
})