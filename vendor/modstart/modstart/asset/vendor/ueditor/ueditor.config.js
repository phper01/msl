!function(){var e,t;function o(e,t){return function(e,t){var o=t;/^(\/|\\\\)/.test(t)?o=/^.+?\w(\/|\\\\)/.exec(e)[0]+t.replace(/^(\/|\\\\)/,""):/^[a-z]+:/i.test(t)||(e=e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/,""),o=e+""+t);return function(e){var t=/^[a-z]+:\/\//.exec(e)[0],o=null,r=[];(e=(e=e.replace(t,"").split("?")[0].split("#")[0]).replace(/\\/g,"/").split(/\//))[e.length-1]="";for(;e.length;)".."===(o=e.shift())?r.pop():"."!==o&&r.push(o);return t+r.join("/")}(o)}(e||self.document.URL||self.location.href,t||(t=document.getElementsByTagName("script"))[t.length-1].src)}e=window.UEDITOR_HOME_URL||(window.__msCDN?window.__msCDN+"asset/vendor/ueditor/":window.__msRoot?window.__msRoot+"asset/vendor/ueditor/":o()),t=window.__msRoot?window.__msRoot+"asset/vendor/ueditor/":o(),window.UEDITOR_CONFIG={UEDITOR_HOME_URL:e,UEDITOR_CORS_URL:t,serverUrl:"/ueditor-plus/_demo_server/handle.php",toolbars:[["fullscreen","source","|","undo","redo","|","bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc","|","rowspacingtop","rowspacingbottom","lineheight","|","customstyle","paragraph","fontfamily","fontsize","|","directionalityltr","directionalityrtl","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","|","touppercase","tolowercase","|","link","unlink","anchor","|","imagenone","imageleft","imageright","imagecenter","|","simpleupload","insertimage","emotion","scrawl","insertvideo","attachment","insertframe","insertcode","pagebreak","template","background","formula","|","horizontal","date","time","spechars","wordimage","|","inserttable","deletetable","insertparagraphbeforetable","insertrow","deleterow","insertcol","deletecol","mergecells","mergeright","mergedown","splittocells","splittorows","splittocols","|","print","preview","searchreplace","help"]],toolbarCallback:function(e,t){},imageConfig:{disableUpload:!1,disableOnline:!1,selectCallback:null},videoConfig:{disableUpload:!1,selectCallback:null},formulaConfig:{imageUrlTemplate:"https://latex.codecogs.com/svg.image?{}"},shortcutMenu:["fontfamily","fontsize","bold","italic","underline","strikethrough","fontborder","forecolor","justifyleft","justifycenter","justifyright","justifyjustify","lineheight","insertorderedlist","insertunorderedlist","superscript","subscript","link","unlink","touppercase","tolowercase"]},window.UE={getUEBasePath:o}}();