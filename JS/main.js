/* Lesson 1 */
$('#dlt_l1').click(function(){
    switch ($('#hide_l1').val()) {
        case '1':
            $('#fst_l1').hide(500);
            break;
        case '2':
            $('#scnd_l1').hide(500);
            break;
        case '3':
            $('#thrd_l1').hide(500);
            break;
        case '4':
            $('#fst_l1').show(200);
            break;
        case '5':
            $('#scnd_l1').show(200);
            break;
        case '6':
            $('#thrd_l1').show(200);
            break;
    }
});