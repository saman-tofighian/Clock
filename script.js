setInterval(saman, 1000)
    function saman(){
        let _h = new Date().getHours()
        let _m = new Date().getMinutes()
        let _s = new Date().getSeconds()

        if(_h>=12){
            _h = _h - 12 
        }

        _h = ((_h*3600) + (_m*60) + _s)*.008
        document.getElementById('hours').style.transform = 'rotate('+_h+'deg)'
        document.getElementById('minuts').style.transform = 'rotate('+((_m*60)+_s)*.1+'deg)'
        document.getElementById('seconds').style.transform = 'rotate('+(_s*6)+'deg)'

        function _write(){
            document.getElementsByTagName('h1')[0].innerHTML = new Date().getHours() + ' : ' + _m
        }
        _write()
    }
    saman()