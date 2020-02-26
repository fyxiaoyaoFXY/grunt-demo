$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btn = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    //event
    $btn.click(function(){
        //get value
        var w = parseFloat($width.val()),
            h = parseFloat($height.val());
        
        //calculate
        var p = 2*(w + h),
            a = w * h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });
});