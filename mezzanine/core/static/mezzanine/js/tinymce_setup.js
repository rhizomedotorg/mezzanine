
// Map Django language codes to valid TinyMCE language codes.
// There's an entry for every TinyMCE language that exists,
// so if a Django language code isn't here, we can default to en.

var language_codes = {
    'ar': 'ar',
    'ca': 'ca',
    'cs': 'cs',
    'da': 'da',
    'de': 'de',
    'es': 'es',
    'et': 'et',
    'fa': 'fa',
    'fa-ir': 'fa_IR',
    'fi': 'fi',
    'fr': 'fr_FR',
    'hr-hr': 'hr',
    'hu': 'hu_HU',
    'id-id': 'id',
    'is-is': 'is_IS',
    'it': 'it',
    'ja': 'ja',
    'ko': 'ko_KR',
    'lv': 'lv',
    'nb': 'nb_NO',
    'nl': 'nl',
    'pl': 'pl',
    'pt-br': 'pt_BR',
    'pt-pt': 'pt_PT',
    'ru': 'ru',
    'sk': 'sk',
    'sr': 'sr',
    'sv': 'sv_SE',
    'tr': 'tr',
    'uk': 'uk_UA',
    'vi': 'vi',
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW',
    'zh-hant': 'zh_TW',
    'zh-hans': 'zh_CN'
};


function custom_file_browser(field_name, url, type, win) {

    var cmsURL = window.__admin_url + 'filebrowser/browse/' + '?pop=2';
    cmsURL = cmsURL + '&type=' + type;

    tinyMCE.activeEditor.windowManager.open({
        title: 'Select ' + type + ' to insert',
        file: cmsURL,
        width: 1000,
        height: 500,
        resizable: 'yes',
        scrollbars: 'yes',
        inline: 'yes',
        close_previous: 'no'
    }, {
        window: win,
        input: field_name,
        oninsert: function(url) {

          win.document.getElementById(field_name).value = url;
        }
    });
    return false;
}


if (typeof tinyMCE != 'undefined') {

    tinyMCE.init({
        selector: "textarea.mceEditor",
        height: '500px',
        width: 768,
        language: language_codes[window.__language_code] || 'en',
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste"
        ],
        link_list: '/displayable_links.js',
        relative_urls: false,
        convert_urls: false,
        menubar: false,
        statusbar: false,
        toolbar: ("insertfile undo redo | styleselect | bold italic | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link image table | " +
                  "code fullscreen"),
        file_browser_callback: custom_file_browser,
        content_css: window.__tinymce_css
    });

}
