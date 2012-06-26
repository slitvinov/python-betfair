function showCodeMirror(){var e,d,c;
e=false;
d=CodeMirror.fromTextArea(document.getElementById("codemirror"),{mode:"text/html",lineNumbers:true,lineWrapping:true,extraKeys:{"'>'":function(g){g.closeTag(g,">")
},"'/'":function(g){g.closeTag(g,"/")
}},onChange:function f(){if(e){changeValue()
}}});
c=getErrorLines();
for(var b=0;
b<c.length;
b++){var a=c[b]-1;
d.setMarker(a,"%N%","error");
d.setLineClass(a,"error")
}if(c.length==0){autoFormat(d)
}e=true
}function autoFormat(b){CodeMirror.commands.selectAll(b);
var a={from:b.getCursor(true),to:b.getCursor(false)};
b.autoFormatRange(a.from,a.to);
b.scrollTo(0,0);
window.scrollTo(0,0)
};
$("a.dropdownlink").append(" <span class='dropdownicon'></span>");
$("a.dropdownlink").attr("href","javascript:void(0)");
$("ul.dropdownbox li").click(function(){$(this).parent().find("ul.subnav").slideDown("fast").show();
$(this).parent().hover(function(){},function(){$(this).parent().find("ul.subnav").slideUp("slow")
})
});
$("[type='submit']").one("click",function(){$(this).click(function(){return false
})
});
if($.browser.webkit){$("form input:text.ergebnis").each(function(b,a){a.type="tel"
})
};
$(".focusOnLoad:first").focus();
$(".selectOnLoad:first").focus().select();
var bildauswahl=$(".kicktipp-content a.fancybox-bildauswahl");
if(bildauswahl.length>0){bildauswahl.fancybox({padding:0,margin:0,width:800,height:600,autoScale:false,transitionIn:"none",transitionOut:"none",type:"iframe",titleShow:false})
}var bildauswahlReloadOnClose=$(".kicktipp-content a.fancybox-bildauswahl-reloadOnClose");
if(bildauswahlReloadOnClose.length>0){bildauswahlReloadOnClose.fancybox({padding:0,margin:0,width:800,height:600,autoScale:false,transitionIn:"none",transitionOut:"none",type:"iframe",titleShow:false,onClosed:function(){parent.location=parent.location.href
}})
}var galleries=$(".kicktipp-content a.fancybox.gallery");
if(galleries.length>0){galleries.fancybox({titlePosition:"over",margin:0,padding:3,cyclic:true})
}function scaleImg(c){var b,f=780,e=490;
var d=c.attr("width");
var a=c.attr("height");
b=Math.max(d/f,a/e);
b=Math.max(b,1);
c.height(Math.round(a/b)).width(Math.round(d/b))
}function fancyboxSelect(url){filename=url.substr(url.lastIndexOf("/")+1);
selected=$(".kicktipp-content a.fancybox.selection[href $= '"+filename+"']");
if(eval("typeof onFancyboxSelect == 'function'")){onFancyboxSelect(selected.attr("id"))
}$.fancybox.close();
return false
}function fancyboxDeselectAll(){$(".kicktipp-content a.fancybox").removeClass("selected")
}function fancyboxSelection(d,c,a,b){url=c[a];
var d='<div id="fancybox-title-over" class="kicktipp-content">';
d+='<span class="button" id="fancyboxselect"><a href="javascript:;" onclick="fancyboxSelect(\''+url+"');\">Auswählen</a></span>";
d+="</div>";
return d
}var auswahl=$(".kicktipp-content a.fancybox.selection");
if(auswahl.length>0){auswahl.fancybox({overlayOpacity:0.2,titlePosition:"over",autoDimensions:true,margin:40,padding:3,cyclic:true,titleFormat:fancyboxSelection})
};
if($.browser.msie&&$.browser.version=="6.0"){var src,ix,newsrc;
src=$("#kicktipp-logo").attr("src");
ix=src.indexOf(".png");
if(ix>0){newsrc=src.substring(0,ix)+".gif";
$("#kicktipp-logo").attr("src",newsrc)
}};
