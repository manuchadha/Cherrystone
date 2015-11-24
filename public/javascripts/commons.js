/**
 * Created by manu.chadha on 03/11/15.
 */

$(".dropdown-menu li a").click(function(){
    alert("hu");
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});