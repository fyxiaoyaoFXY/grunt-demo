const expect=require('chai').expect,
    http=require('http');

    describe('矩形计算器 HTTP API 接口测试',function(){
        it('正确请求格式测试',function(done){
            http.get('http://localhost:3000/rectangle?width=5&height=7',function(){
                var result='';

                res.on('data',(chunk)=>{
                    reault+=chunk;
                });
                res.on('end',()=>{
                    var rect=JSON.parse(result);
                    expect(rect.area).to.be.equal(35);
                    expect(rect.perimeter).to.be.equal(24);
                    done();
                })
            })
        })
    })