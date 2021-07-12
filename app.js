document.getElementById('send').addEventListener('click', function(){
                
    var notice = document.getElementById('notice')
    var noticeF = document.getElementById('notice-falha')
    var email = document.getElementById('email')

    email.style.pointerEvents='none'
    email.style.backgroundColor='rgb(228, 228, 228)'
    
    setTimeout(
        function(){
            
            document.body.style.cursor='default'
            document.getElementById('loading').style.display='none'

            if (email.value.length <= 5 || email.value.indexOf('@') == -1){
                noticeF.style.display='block'

                setTimeout(function(){
                    noticeF.style.display='none'
                    email.style.pointerEvents='all'
                    email.style.backgroundColor='#fff'
                }, 3000)
            }
            else if (email.value.indexOf('@') != -1){
                notice.style.display='block'
                setTimeout(function(){
                    notice.style.display='none'
                }, 3000)
            } 
        }, 1000
        )
        document.body.style.cursor='wait'
        document.getElementById('loading').style.display='block'                               
})