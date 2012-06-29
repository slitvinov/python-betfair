__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined") {
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	
	document.writeln = function(str) { document.write(str + "\n"); };

	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("\n");
document.write("<scr"+"ipt type=\"text/javascript\" language=\"JavaScript\" src=\"http://ads.newtention.net/ads?rt=2&et=1&bi=128533&se=m&cs=1774&ts=961804119\">\n");
document.write("</scr"+"ipt>\n");
function cleanUp() {
	if (typeof __parent.swappedRefs3069341 == "undefined") {
		__parent.swappedRefs3069341 = new Array();
	}
		
	while (__parent.swappedRefs3069341.length > 0) {
		var ref = __parent.swappedRefs3069341.pop();
		if (ref != "swappedRefs3069341") {
			__parent[ref] = null;
		}
	}
}

if (typeof inFIF != "undefined" && inFIF == true) {
	__parent = window.parent;
	window.onunload = cleanUp;
	cleanUp();

	
	for (var ref in window) {
		if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
					&& ref != "frameElement" && ref != "event" && ref != "swappedRefs3069341" && ref != "onunload") {
			try {__parent[ref] = window[ref]; __parent.swappedRefs3069341.push(ref);} catch (e) {}
		}
	}	
}	




if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}}


