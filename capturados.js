var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var _page = 0;
var json = [];

// Set the headers
var headers = {
    'User-Agent':       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
    'Content-Type':     'application/x-www-form-urlencoded; charset=UTF-8'
}


function getProfugos(){

    if(_page > 95){

        fs.writeFile('capturados.json', JSON.stringify(json), function(err){
            if(err){
                return console.log(err);
            }
        });

        console.log("The file was saved.");
        return false;
    } else {
        console.log("Aun puede sacar info: ", _page);
    }

    // Configure the request
    var options = {
        url: 'http://www.recompensas.pe/views/ajax',
        method: 'POST',
        headers: headers,
        //form: {"view_name":"profugos", "view_display_id":"page", "view_args":"", "view_path":"profugos", "view_base_path":"profugos", "view_dom_id":"e275bb112398013540525ae357f31dd5", "pager_element":"0", "page":_page, "ajax_html_ids[]":"skip-link", "ajax_html_ids[]":"block-views-social-block", "ajax_html_ids[]":"block-menu-menu-campanas", "ajax_html_ids[]":"btn-menu", "ajax_html_ids[]":"block-system-main-menu", "ajax_html_ids[]":"block-bean-banner-0", "ajax_html_ids[]":"block-views-exp-profugos-page", "ajax_html_ids[]":"views-exposed-form-profugos-page", "ajax_html_ids[]":"edit-title-wrapper", "ajax_html_ids[]":"edit-title", "ajax_html_ids[]":"edit-field-alias-value-wrapper", "ajax_html_ids[]":"edit-field-alias-value", "ajax_html_ids[]":"edit-field-departamento-rq-tid-wrapper", "ajax_html_ids[]":"edit-field-departamento-rq-tid", "ajax_html_ids[]":"edit-field-provincia-rq-tid-wrapper", "ajax_html_ids[]":"edit-field-provincia-rq-tid", "ajax_html_ids[]":"edit-field-grupo-tid-wrapper", "ajax_html_ids[]":"edit-field-grupo-tid", "ajax_html_ids[]":"edit-field-genero-tid-wrapper", "ajax_html_ids[]":"edit-field-genero-tid", "ajax_html_ids[]":"edit-submit-profugos", "ajax_html_ids[]":"edit-sort-by", "ajax_html_ids[]":"block-system-main", "ajax_html_ids[]":"block-block-1", "ajax_html_ids[]":"block-block-2", "ajax_html_ids[]":"block-block-7", "ajax_page_state[theme]":"recompensas", "ajax_page_state[theme_token]":"c0BOBr18lhzhRyk6G-HflWH-EVZTc6cmkJqiLzKIIg0", "ajax_page_state[css][modules/system/system.base.css]":"1", "ajax_page_state[css][modules/system/system.menus.css]":"1", "ajax_page_state[css][modules/system/system.messages.css]":"1", "ajax_page_state[css][modules/system/system.theme.css]":"1", "ajax_page_state[css][modules/comment/comment.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/date/date_api/date.css]":"1", "ajax_page_state[css][modules/field/theme/field.css]":"1", "ajax_page_state[css][modules/node/node.css]":"1", "ajax_page_state[css][modules/search/search.css]":"1", "ajax_page_state[css][modules/user/user.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/youtube/css/youtube.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/views/css/views.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/ctools/css/ctools.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/normalize.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/font-awesome.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/main.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/media.css]":"1", "ajax_page_state[js][0]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js]":"1", "ajax_page_state[js][misc/jquery.once.js]":"1", "ajax_page_state[js][misc/drupal.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/ui/external/jquery.cookie.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/misc/jquery.form.min.js]":"1", "ajax_page_state[js][misc/ajax.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/js/jquery_update.js]":"1", "ajax_page_state[js][public://languages/es_KZnh0nBpzhrV5DjVZvV1Ip1LBH_m8W7vnSayc6iXdY0.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/views/js/base.js]":"1", "ajax_page_state[js][misc/progress.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/views/js/ajax_view.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/google_analytics/googleanalytics.js]":"1", "ajax_page_state[js][sites/all/themes/custom/recompensas/js/main.js]":"1", "ajax_page_state[jquery_version]":"1.10"}
        form: {"view_name":"profugos", "view_display_id":"page_1", "view_args":"", "view_path":"capturados", "view_base_path":"capturados", "view_dom_id":"46118111ce0921e5fd05f3cf049f4a9c", "pager_element":"0", "ajax_html_ids[]":"skip-link", "ajax_html_ids[]":"block-views-social-block", "ajax_html_ids[]":"block-menu-menu-campanas", "ajax_html_ids[]":"btn-menu", "ajax_html_ids[]":"block-system-main-menu", "ajax_html_ids[]":"block-bean-banner-0", "ajax_html_ids[]":"block-views-exp-profugos-page-1", "ajax_html_ids[]":"views-exposed-form-profugos-page-1", "ajax_html_ids[]":"edit-title-wrapper", "ajax_html_ids[]":"edit-title", "ajax_html_ids[]":"edit-field-alias-value-wrapper", "ajax_html_ids[]":"edit-field-alias-value", "ajax_html_ids[]":"edit-field-departamento-captura-tid-wrapper", "ajax_html_ids[]":"edit-field-departamento-captura-tid", "ajax_html_ids[]":"edit-field-provincia-captura-tid-wrapper", "ajax_html_ids[]":"edit-field-provincia-captura-tid", "ajax_html_ids[]":"edit-field-distrito-captura-tid-wrapper", "ajax_html_ids[]":"edit-field-distrito-captura-tid", "ajax_html_ids[]":"edit-field-grupo-tid-wrapper", "ajax_html_ids[]":"edit-field-grupo-tid", "ajax_html_ids[]":"edit-field-genero-tid-wrapper", "ajax_html_ids[]":"edit-field-genero-tid", "ajax_html_ids[]":"edit-submit-profugos", "ajax_html_ids[]":"edit-sort-by", "ajax_html_ids[]":"block-system-main", "ajax_html_ids[]":"block-block-1", "ajax_html_ids[]":"block-block-2", "ajax_html_ids[]":"block-block-7", "ajax_page_state[theme]":"recompensas", "ajax_page_state[theme_token]":"DWy7sBiHnXPM583mYRDYLXA0_4JFJMAxsSBQ5EuozKo", "ajax_page_state[css][modules/system/system.base.css]":"1", "ajax_page_state[css][modules/system/system.menus.css]":"1", "ajax_page_state[css][modules/system/system.messages.css]":"1", "ajax_page_state[css][modules/system/system.theme.css]":"1", "ajax_page_state[css][modules/comment/comment.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/date/date_api/date.css]":"1", "ajax_page_state[css][modules/field/theme/field.css]":"1", "ajax_page_state[css][modules/node/node.css]":"1", "ajax_page_state[css][modules/search/search.css]":"1", "ajax_page_state[css][modules/user/user.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/youtube/css/youtube.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/views/css/views.css]":"1", "ajax_page_state[css][sites/all/modules/contrib/ctools/css/ctools.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/normalize.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/font-awesome.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/main.css]":"1", "ajax_page_state[css][sites/all/themes/custom/recompensas/css/media.css]":"1", "ajax_page_state[js][0]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js]":"1", "ajax_page_state[js][misc/jquery.once.js]":"1", "ajax_page_state[js][misc/drupal.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/ui/external/jquery.cookie.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/replace/misc/jquery.form.min.js]":"1", "ajax_page_state[js][misc/ajax.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/jquery_update/js/jquery_update.js]":"1", "ajax_page_state[js][public://languages/es_KZnh0nBpzhrV5DjVZvV1Ip1LBH_m8W7vnSayc6iXdY0.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/views/js/base.js]":"1", "ajax_page_state[js][misc/progress.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/views/js/ajax_view.js]":"1", "ajax_page_state[js][sites/all/modules/contrib/google_analytics/googleanalytics.js]":"1", "ajax_page_state[js][sites/all/themes/custom/recompensas/js/main.js]":"1", "ajax_page_state[jquery_version]":"1.10"}
    }


    if(_page>0){
    	options.form.page = _page;
    }

    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            HTMLparse( JSON.parse(body)[2].data );
        }
    });
}



function HTMLparse(html){
    var $ = cheerio.load(html);
    var rows = $('.view-content').find('.views-row');

    for(var i=0;i<rows.length;i++){

        var $row = $(rows[i]);

        json.push({
            "url": $row.find('.views-field-field-foto').find("a").attr("href"),
            "dni": $row.find('.views-field-field-foto').find("img").attr("src").substr(76,8),
            "foto": $row.find('.views-field-field-foto').find("img").attr("src"),
            "nombre": $row.find('.views-field-title').text().trim(),
            "delitos": $row.find('.views-field-field-delitos').text().trim(),
            "recompensa": $row.find('.views-field-field-recompensa').text().trim()
        });
    }

    setTimeout(function(){
        _page++;
        getProfugos();
    }, 15000);


    //console.log(rows);
    /*
    $('.view-content').filter(function(){

        var content = $(this);

        content.find('.views-row').each(function(idx, item){
            //console.log(item);

            json.push({
                "dni": $(this).find('.views-field-field-foto').find("img").attr("src").substr(76,8),
                "foto": $(this).find('.views-field-field-foto').find("img").attr("src"),
                "nombre": $(this).find('.views-field-title').text().trim(),
                "delitos": $(this).find('.views-field-field-delitos').text().trim(),
                "recompensa": $(this).find('.views-field-field-recompensa').text().trim()
            });

            setTimeout(function(){
                _page++;
                getProfugos();
            }, 5000);
        });
    });*/
}

getProfugos();