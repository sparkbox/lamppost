// ====================================================
// Feature: addEventListener, removeEventListener, dispatchEvent
// Usage: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Shim Target: <= ie8
// Reference: http://caniuse.com/#feat=addeventlistener
// Source: https://gist.github.com/jonathantneal/3748027
// ====================================================

!window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
  WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
		var target = this;

		registry.unshift([target, type, listener, function (event) {
			event.currentTarget = target;
			event.preventDefault = function () { event.returnValue = false };
			event.stopPropagation = function () { event.cancelBubble = true };
			event.target = event.srcElement || target;

			listener.call(target, event);
		}]);

		this.attachEvent("on" + type, registry[0][3]);
	};

	WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
		for (var index = 0, register; register = registry[index]; ++index) {
			if (register[0] == this && register[1] == type && register[2] == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
			}
		}
	};

	WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
		return this.fireEvent("on" + eventObject.type, eventObject);
	};
})(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);


// ====================================================
// Feature: classList
// Usage: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// Shim Target: <= ie11, opera mini
// Reference: http://caniuse.com/#feat=classlist
// Source: http://purl.eligrey.com/github/classList.js/blob/master/classList.js
// ====================================================

;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};
