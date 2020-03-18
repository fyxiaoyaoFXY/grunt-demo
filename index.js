$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $password=$('#password'),
        $btn = $('#calculate')
    //event
    $btn.click(function(){
        if(!validate('#width') || !validate('#height') || !validate('#password')) return;

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
    $width.focusout(function(){
        if(!validate('#width'))
        $width.select();
    });
    $height.focusout(function(){
        if(!validate('#height'))
        $height.select();
    });
    $password.focusout(function(){
        if(!validate('#password'))
        $password.select();
    })
    function validate(field){
        //var DOM error message
        var $data=$(field),
            $msg=$(field + '-validation-msg');


        //validate null
        if(field=='#width'){
            if($data.val()==''){
                console.log('null');
                $msg.html('用户名不能为空！');
                $data.select();
                return false;
            }
            $msg.html('');
            return true;
        }
        else if(field=='#height'){
            if($data.val()==''){
                console.log('null');
                $msg.html('手机号不能为空！');
                $data.select();
                return false;
            }
            // else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test($data.val()))){ 
                $msg.html('手机号格式不正确！');
                $data.select();
                return false;
            }
            $msg.html('');
            return true;
        }
        else if(field=='#password'){
            if($data.val()==''){
                console.log('null');
                $msg.html('密码设置不符合要求！');
                $data.select();
                return false;
            }
            $msg.html('');
            return true;
        }
            //prompt error message
            //return false
        
    }
});