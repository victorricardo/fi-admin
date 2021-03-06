function consult_DeCS(field_id, lang){
    janela = new Object();

    if (lang == 'en'){
        decs_lang = 'i';
    }else{
        decs_lang = lang.substring(0,1);
    }

    var search_exp = "";
    $('#' + field_id + ' option:selected').each(function() {
        search_exp += "&search_exp=" + $(this).text();
    });

   if (search_exp == "") {
      return;
   }
   search_exp = retira_acentos(search_exp);

   var decs_url = "http://decs.bvs.br/cgi-bin/wxis1660.exe/decsserver/?IsisScript=../cgi-bin/decsserver/decsserver.xis&task=exact_term&previous_page=homepage&interface_language=" + decs_lang + "&search_language=" + decs_lang + search_exp + "&show_tree_number=T";

   open_window(decs_url);
}


function retira_acentos(palavra) {
   com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
   sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
   nova='';
   for(i=0;i<palavra.length;i++) {
       if (palavra.substr(i,1) != '.' &&  com_acento.search(palavra.substr(i,1))>=0) {
           nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
       } else {
           nova+=palavra.substr(i,1);
       }
   }
   return nova;
}

function open_window(url){
    var w = 785;    // window width
    var h = 600;    // window height

    // calculate position to center field assist window
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

    new_win = window.open(url, 'fi_admin_win', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    if (window.focus) {
        new_win.focus();
    }

}
