(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ea,lt,Ih,zn,$l,Uh,Nh,fa,As,Pr,Fh,sl,Ja,Qa,Vs={},Gs=[],du=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ta=Array.isArray;function wn(n,e){for(var t in e)n[t]=e[t];return n}function al(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function uu(n,e,t){var i,r,s,o={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?ea.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)o[s]===void 0&&(o[s]=n.defaultProps[s]);return Rs(n,o,i,r,null)}function Rs(n,e,t,i,r){var s={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ih,__i:-1,__u:0};return r==null&&lt.vnode!=null&&lt.vnode(s),s}function Br(n){return n.children}function Cs(n,e){this.props=n,this.context=e}function pi(n,e){if(e==null)return n.__?pi(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?pi(n):null}function fu(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],r=[],s=wn({},e);s.__v=e.__v+1,lt.vnode&&lt.vnode(s),ol(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??pi(e),!!(32&e.__u),r),s.__v=e.__v,s.__.__k[s.__i]=s,Hh(i,s,r),e.__e=e.__=null,s.__e!=t&&kh(s)}}function kh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),kh(n)}function ql(n){(!n.__d&&(n.__d=!0)&&zn.push(n)&&!Ws.__r++||$l!=lt.debounceRendering)&&(($l=lt.debounceRendering)||Uh)(Ws)}function Ws(){try{for(var n,e=1;zn.length;)zn.length>e&&zn.sort(Nh),n=zn.shift(),e=zn.length,fu(n)}finally{zn.length=Ws.__r=0}}function Oh(n,e,t,i,r,s,o,a,c,l,h){var p,d,m,g,_,f,u=i&&i.__k||Gs,M=e.length;for(c=pu(t,e,u,c,M),p=0;p<M;p++)(m=t.__k[p])!=null&&(d=m.__i!=-1&&u[m.__i]||Vs,m.__i=p,f=ol(n,m,d,r,s,o,a,c,l,h),g=m.__e,m.ref&&d.ref!=m.ref&&(d.ref&&ll(d.ref,null,m),h.push(m.ref,m.__c||g,m)),_==null&&g!=null&&(_=g),4&m.__u?(c=Bh(m,c,n),d.__e&&(d.__e=null)):typeof m.type=="function"&&f!==void 0?c=f:g&&(c=g.nextSibling),m.__u&=-7);return t.__e=_,c}function pu(n,e,t,i,r){var s,o,a,c,l,h=t.length,p=h,d=0;for(n.__k=new Array(r),s=0;s<r;s++)(o=e[s])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[s]=Rs(null,o,null,null,null):ta(o)?o=n.__k[s]=Rs(Br,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[s]=Rs(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[s]=o,c=s+d,o.__=n,o.__b=n.__b+1,a=null,(l=o.__i=mu(o,t,c,p))!=-1&&(p--,(a=t[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(r>h?d--:r<h&&d++),typeof o.type!="function"&&(o.__u|=4)):l!=c&&(l==c-1?d--:l==c+1?d++:(l>c?d--:d++,o.__u|=4))):n.__k[s]=null;if(p)for(s=0;s<h;s++)(a=t[s])!=null&&!(2&a.__u)&&(a.__e==i&&(i=pi(a)),Gh(a,a));return i}function Bh(n,e,t){var i,r;if(typeof n.type=="function"){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,e=Bh(i[r],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=pi(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function mu(n,e,t,i){var r,s,o,a=n.key,c=n.type,l=e[t],h=l!=null&&(2&l.__u)==0;if(l===null&&a==null||h&&a==l.key&&c==l.type)return t;if(i>(h?1:0)){for(r=t-1,s=t+1;r>=0||s<e.length;)if((l=e[o=r>=0?r--:s++])!=null&&!(2&l.__u)&&a==l.key&&c==l.type)return o}return-1}function Yl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||du.test(e)?t:t+"px"}function Yr(n,e,t,i,r){var s,o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Yl(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Yl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Fh,"$1")),o=e.toLowerCase(),e=o in n||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?i?t[Pr]=i[Pr]:(t[Pr]=sl,n.addEventListener(e,s?Qa:Ja,s)):n.removeEventListener(e,s?Qa:Ja,s);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Kl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[As]==null)e[As]=sl++;else if(e[As]<t[Pr])return;return t(lt.event?lt.event(e):e)}}}function ol(n,e,t,i,r,s,o,a,c,l){var h,p,d,m,g,_,f,u,M,y,b,T,A,P,I,E,x=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),s=[a=e.__e=t.__e]),(h=lt.__b)&&h(e);e:if(typeof x=="function"){p=o.length;try{if(M=e.props,y=x.prototype&&x.prototype.render,b=(h=x.contextType)&&i[h.__c],T=h?b?b.props.value:h.__:i,t.__c?u=(d=e.__c=t.__c).__=d.__E:(y?e.__c=d=new x(M,T):(e.__c=d=new Cs(M,T),d.constructor=x,d.render=_u),b&&b.sub(d),d.state||(d.state={}),d.__n=i,m=d.__d=!0,d.__h=[],d._sb=[]),y&&d.__s==null&&(d.__s=d.state),y&&x.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=wn({},d.__s)),wn(d.__s,x.getDerivedStateFromProps(M,d.__s))),g=d.props,_=d.state,d.__v=e,m)y&&x.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),y&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(y&&x.getDerivedStateFromProps==null&&M!==g&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(M,T),e.__v==t.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(M,d.__s,T)===!1){e.__v!=t.__v&&(d.props=M,d.state=d.__s,d.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(D){D&&(D.__=e)}),Gs.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d),a=pi(t);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(M,d.__s,T),y&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(g,_,f)})}if(d.context=T,d.props=M,d.__P=n,d.__e=!1,A=lt.__r,P=0,y)d.state=d.__s,d.__d=!1,A&&A(e),h=d.render(d.props,d.state,d.context),Gs.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,A&&A(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++P<25);d.state=d.__s,d.getChildContext!=null&&(i=wn(wn({},i),d.getChildContext())),y&&!m&&d.getSnapshotBeforeUpdate!=null&&(f=d.getSnapshotBeforeUpdate(g,_)),I=h!=null&&h.type===Br&&h.key==null?Vh(h.props.children):h,a=Oh(n,ta(I)?I:[I],e,t,i,r,s,o,a,c,l),d.base=e.__e,e.__u&=-161,d.__h.length&&o.push(d),u&&(d.__E=d.__=null)}catch(D){if(o.length=p,e.__v=null,c||s!=null){if(D.then){for(e.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;s!=null&&(s[s.indexOf(a)]=null),e.__e=a}else if(s!=null)for(E=s.length;E--;)al(s[E])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),D.then||zh(e),lt.__e(D,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=gu(t.__e,e,t,i,r,s,o,c,l);return(h=lt.diffed)&&h(e),128&e.__u?void 0:a}function zh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(zh))}function Hh(n,e,t){for(var i=0;i<t.length;i++)ll(t[i],t[++i],t[++i]);lt.__c&&lt.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(s){s.call(r)})}catch(s){lt.__e(s,r.__v)}})}function Vh(n){return typeof n!="object"||n==null||n.__b>0?n:ta(n)?n.map(Vh):n.constructor!==void 0?null:wn({},n)}function gu(n,e,t,i,r,s,o,a,c){var l,h,p,d,m,g,_,f=t.props||Vs,u=e.props,M=e.type;if(M=="svg"?r="http://www.w3.org/2000/svg":M=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(l=0;l<s.length;l++)if((m=s[l])&&"setAttribute"in m==!!M&&(M?m.localName==M:m.nodeType==3)){n=m,s[l]=null;break}}if(n==null){if(M==null)return document.createTextNode(u);n=document.createElementNS(r,M,u.is&&u),a&&(lt.__m&&lt.__m(e,s),a=!1),s=null}if(M==null)f===u||a&&n.data==u||(n.data=u);else{if(s=M=="textarea"&&u.defaultValue!=null?null:s&&ea.call(n.childNodes),!a&&s!=null)for(f={},l=0;l<n.attributes.length;l++)f[(m=n.attributes[l]).name]=m.value;for(l in f)m=f[l],l=="dangerouslySetInnerHTML"?p=m:l=="children"||l in u||l=="value"&&"defaultValue"in u||l=="checked"&&"defaultChecked"in u||Yr(n,l,null,m,r);for(l in u)m=u[l],l=="children"?d=m:l=="dangerouslySetInnerHTML"?h=m:l=="value"?g=m:l=="checked"?_=m:a&&typeof m!="function"||f[l]===m||Yr(n,l,m,f[l],r);if(h)a||p&&(h.__html==p.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(p&&(n.innerHTML=""),Oh(e.type=="template"?n.content:n,ta(d)?d:[d],e,t,i,M=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,o,s?s[0]:t.__k&&pi(t,0),a,c),s!=null)for(l=s.length;l--;)al(s[l]);a&&M!="textarea"||(l="value",M=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[l]||M=="progress"&&!g||M=="option"&&g!=f[l])&&Yr(n,l,g,f[l],r),l="checked",_!=null&&_!=n[l]&&Yr(n,l,_,f[l],r))}return n}function ll(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(r){lt.__e(r,t)}}function Gh(n,e,t){var i,r;if(lt.unmount&&lt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ll(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){lt.__e(s,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&Gh(i[r],e,t||typeof n.type!="function");t||al(n.__e),n.__c=n.__=n.__e=void 0}function _u(n,e,t){return this.constructor(n,t)}function vu(n,e,t){var i,r,s,o;e==document&&(e=document.documentElement),lt.__&&lt.__(n,e),r=(i=!1)?null:e.__k,s=[],o=[],ol(e,n=e.__k=uu(Br,null,[n]),r||Vs,Vs,e.namespaceURI,r?null:e.firstChild?ea.call(e.childNodes):null,s,r?r.__e:e.firstChild,i,o),Hh(s,n,o),n.props.children=null}ea=Gs.slice,lt={__e:function(n,e,t,i){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(n)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),o=r.__d),o)return r.__E=r}catch(a){n=a}throw n}},Ih=0,Cs.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=wn({},this.state),typeof n=="function"&&(n=n(wn({},t),this.props)),n&&wn(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ql(this))},Cs.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ql(this))},Cs.prototype.render=Br,zn=[],Uh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Nh=function(n,e){return n.__v.__b-e.__v.__b},Ws.__r=0,fa=Math.random().toString(8),As="__d"+fa,Pr="__a"+fa,Fh=/(PointerCapture)$|Capture$/i,sl=0,Ja=Kl(!1),Qa=Kl(!0);var xu=0;function v(n,e,t,i,r,s){e||(e={});var o,a,c=e;if("ref"in c)for(a in c={},e)a=="ref"?o=e[a]:c[a]=e[a];var l={type:n,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--xu,__i:-1,__u:0,__source:r,__self:s};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return lt.vnode&&lt.vnode(l),l}var kr,mt,pa,jl,Xs=0,Wh=[],_t=lt,Zl=_t.__b,Jl=_t.__r,Ql=_t.diffed,ec=_t.__c,tc=_t.unmount,nc=_t.__;function cl(n,e){_t.__h&&_t.__h(mt,n,Xs||e),Xs=0;var t=mt.__H||(mt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function rt(n){return Xs=1,bu($h,n)}function bu(n,e,t){var i=cl(kr++,2);if(i.t=n,!i.__c&&(i.__=[$h(void 0,e),function(a){var c=i.__N?i.__N[0]:i.__[0],l=i.t(c,a);c!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=mt,!mt.__f)){var r=function(a,c,l){if(!i.__c.__H)return!0;var h=!1,p=i.__c.props!==a;if(i.__c.__H.__.some(function(m){if(m.__N){h=!0;var g=m.__[0];m.__=m.__N,m.__N=void 0,g!==m.__[0]&&(p=!0)}}),s){var d=s.call(this,a,c,l);return h?d||p:d}return!h||p};mt.__f=!0;var s=mt.shouldComponentUpdate,o=mt.componentWillUpdate;mt.componentWillUpdate=function(a,c,l){if(this.__e){var h=s;s=void 0,r(a,c,l),s=h}o&&o.call(this,a,c,l)},mt.shouldComponentUpdate=r}return i.__N||i.__}function an(n,e){var t=cl(kr++,3);!_t.__s&&Xh(t.__H,e)&&(t.__=n,t.u=e,mt.__H.__h.push(t))}function Kn(n){return Xs=5,zr(function(){return{current:n}},[])}function zr(n,e){var t=cl(kr++,7);return Xh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Mu(){for(var n;n=Wh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Ps),e.__h.some(eo),e.__h=[]}catch(t){e.__h=[],_t.__e(t,n.__v)}}}_t.__b=function(n){mt=null,Zl&&Zl(n)},_t.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),nc&&nc(n,e)},_t.__r=function(n){Jl&&Jl(n),kr=0;var e=(mt=n.__c).__H;e&&(pa===mt?(e.__h=[],mt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Ps),e.__h.some(eo),e.__h=[],kr=0)),pa=mt},_t.diffed=function(n){Ql&&Ql(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Wh.push(e)!==1&&jl===_t.requestAnimationFrame||((jl=_t.requestAnimationFrame)||Su)(Mu)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),pa=mt=null},_t.__c=function(n,e){e.some(function(t){try{t.__h.some(Ps),t.__h=t.__h.filter(function(i){return!i.__||eo(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],_t.__e(i,t.__v)}}),ec&&ec(n,e)},_t.unmount=function(n){tc&&tc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{Ps(i)}catch(r){e=r}}),t.__H=void 0,e&&_t.__e(e,t.__v))};var ic=typeof requestAnimationFrame=="function";function Su(n){var e,t=function(){clearTimeout(i),ic&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);ic&&(e=requestAnimationFrame(t))}function Ps(n){var e=mt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),mt=e}function eo(n){var e=mt;n.__c=n.__(),mt=e}function Xh(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function $h(n,e){return typeof e=="function"?e(n):e}const yu={"Конструктор мебели — демо":["Furniture configurator — demo","Möbelkonfigurator — Demo"],"Конструктор мебели":["Furniture configurator","Möbelkonfigurator"],"О продукте":["About","Über das Produkt"],Каталог:["Catalogue","Katalog"],"Каталог:":["Catalogue:","Katalog:"],Конструктор:["Configurator","Konfigurator"],Проект:["Project","Projekt"],"План помещения":["Room plan","Raumplan"],"Подбор по плану":["Furnish from plan","Einrichten nach Plan"],Шаги:["Steps","Schritte"],"Режим менеджера":["Manager mode","Verkäufermodus"],Язык:["Language","Sprache"],Все:["All","Alle"],"Ш {0}–{1} · В {2}–{3} мм":["W {0}–{1} · H {2}–{3} mm","B {0}–{1} · H {2}–{3} mm"],"{0} дней":["{0} days","{0} Tage"],"от {0}":["from {0}","ab {0}"],Настроить:["Configure","Konfigurieren"],"В проекте пока нет изделий":["The project is empty","Das Projekt ist noch leer"],"Выберите модель в каталоге и настройте её под себя.":["Pick a model in the catalogue and configure it to suit you.","Wählen Sie ein Modell im Katalog und passen Sie es an."],"Открыть каталог":["Open catalogue","Katalog öffnen"],"Спецификация проекта":["Project specification","Projektstückliste"],Изделие:["Item","Möbelstück"],Параметры:["Parameters","Parameter"],Цена:["Price","Preis"],"Кол-во":["Qty","Anz."],Сумма:["Amount","Betrag"],"версия {0}":["version {0}","Version {0}"],мм:["mm","mm"],"Есть ошибки — откройте изделие":["Has errors — open the item","Fehler vorhanden — Möbelstück öffnen"],Количество:["Quantity","Menge"],Изменить:["Edit","Bearbeiten"],Удалить:["Delete","Löschen"],"Доставка — {0}":["Delivery — {0}","Lieferung — {0}"],"Итого по проекту":["Project total","Projektsumme"],"Расставить на плане":["Arrange on plan","Im Raumplan anordnen"],"Оформить заявку":["Place request","Anfrage senden"],"На плане помещения есть ошибки расстановки — исправьте их перед заявкой.":["The room plan has placement errors — fix them before sending the request.","Im Raumplan gibt es Aufstellungsfehler — beheben Sie diese vor der Anfrage."],"Заявка сформирована и скачана файлом order.json: параметры, деталировка и цены по каждому изделию. В рабочей системе этот же пакет уходит в CRM и 1С фабрики.":["The request has been generated and downloaded as order.json: parameters, cutting list and prices for every item. In production the same package goes to the factory’s CRM and ERP.","Die Anfrage wurde erstellt und als order.json heruntergeladen: Parameter, Zuschnittliste und Preise je Möbelstück. Im Echtbetrieb geht dasselbe Paket an CRM und ERP des Herstellers."],"Ссылка на конфигурацию скопирована":["Configuration link copied","Link zur Konfiguration kopiert"],"Ссылка на конфигурацию":["Configuration link","Link zur Konfiguration"],"Настройка секции {0}":["Section {0} settings","Sektion {0}"],"{0} · коллекция «{1}» · версия модели {2} · срок {3} дн.":["{0} · “{1}” collection · model version {2} · lead time {3} days","{0} · Kollektion „{1}“ · Modellversion {2} · Lieferzeit {3} Tage"],Отменить:["Undo","Rückgängig"],Вернуть:["Redo","Wiederholen"],"Вернуть значения фабрики":["Restore factory defaults","Werkseinstellungen wiederherstellen"],"Сбросить к базовой":["Reset to default","Zurücksetzen"],Поделиться:["Share","Teilen"],Схема:["Drawing","Zeichnung"],Закрыт:["Closed","Geschlossen"],Открыт:["Open","Geöffnet"],"Без фасадов":["No fronts","Ohne Fronten"],Размеры:["Dimensions","Maße"],Спецификация:["Specification","Stückliste"],"Правила фабрики":["Factory rules","Herstellerregeln"],"Найти параметр":["Find a parameter","Parameter suchen"],Габариты:["Dimensions","Abmessungen"],"счёт слева направо":["numbered left to right","von links nach rechts gezählt"],"Ничего не найдено.":["Nothing found.","Nichts gefunden."],"В этой вкладке для модели нет настроек.":["This model has no settings on this tab.","Für dieses Modell gibt es hier keine Einstellungen."],"Стоимость изделия":["Item price","Preis des Möbelstücks"],"Исправьте ошибки конфигурации":["Fix the configuration errors","Beheben Sie die Konfigurationsfehler"],"Сохранить изменения":["Save changes","Änderungen speichern"],"Добавить в проект":["Add to project","Zum Projekt hinzufügen"],"КП в PDF":["Quote as PDF","Angebot als PDF"],Изображение:["Image","Bild"],"Спецификация CSV":["Specification CSV","Stückliste CSV"],"Браузер не поддерживает WebGL — откройте вкладку «Схема».":["Your browser does not support WebGL — open the “Drawing” tab.","Ihr Browser unterstützt kein WebGL — öffnen Sie den Reiter „Zeichnung“."],"Схема изделия, вид спереди":["Item drawing, front view","Zeichnung, Vorderansicht"],"вид спереди · глубина {0} мм":["front view · depth {0} mm","Vorderansicht · Tiefe {0} mm"],"Конфигурация проверена: изделие можно изготовить.":["Configuration checked: the item can be manufactured.","Konfiguration geprüft: das Möbelstück kann gefertigt werden."],"ХДФ белый":["HDF white","HDF weiß"],Меньше:["Less","Weniger"],Больше:["More","Mehr"],"{0}, ползунок":["{0}, slider","{0}, Schieberegler"],Да:["Yes","Ja"],Нет:["No","Nein"],Материалы:["Materials","Materialien"],Фурнитура:["Hardware","Beschläge"],Работы:["Labour","Arbeit"],Доплаты:["Surcharges","Aufpreise"],Услуги:["Services","Leistungen"],Скидка:["Discount","Rabatt"],"Итого за изделие":["Item total","Summe Möbelstück"],"Деталей: {0} · плита {1} м² · кромка {2} м · масса ≈ {3} кг":["Parts: {0} · board {1} m² · edging {2} m · weight ≈ {3} kg","Teile: {0} · Platte {1} m² · Kante {2} m · Gewicht ≈ {3} kg"],Деталь:["Part","Teil"],Материал:["Material","Material"],Декор:["Decor","Dekor"],"Размер, мм":["Size, mm","Maß, mm"],"ограничить варианты":["restrict options","Auswahl einschränken"],"подобрать автоматически":["set automatically","automatisch festlegen"],"сузить диапазон":["narrow the range","Bereich einschränken"],скрыть:["hide","ausblenden"],"запретить заказ":["block the order","Bestellung sperren"],предупредить:["warn","warnen"],"Модель и её правила задаёт технолог фабрики. Клиент меняет только значения параметров — изделие, которое фабрика не умеет производить, собрать нельзя.":["The model and its rules are set by the factory’s technologist. The customer only changes parameter values — an item the factory cannot make simply cannot be configured.","Modell und Regeln legt der Techniker des Herstellers fest. Der Kunde ändert nur Parameterwerte — ein Möbelstück, das der Hersteller nicht fertigen kann, lässt sich nicht konfigurieren."],Если:["If","Wenn"],То:["Then","Dann"],"Пояснение клиенту":["Explanation for the customer","Hinweis für den Kunden"],всегда:["always","immer"],"Формула работ:":["Labour formula:","Arbeitsformel:"],Длина:["Length","Länge"],Ширина:["Width","Breite"],Толщина:["Thickness","Stärke"],"Кромка, м":["Edging, m","Kante, m"],"Ед.":["Unit","Einh."],"КП — {0}":["Quote — {0}","Angebot — {0}"],"Коммерческое предложение: {0}":["Quotation: {0}","Angebot: {0}"],"срок изготовления {0} дн. · цены демонстрационные":["lead time {0} days · demo prices","Lieferzeit {0} Tage · Demopreise"],Параметр:["Parameter","Parameter"],Значение:["Value","Wert"],Статья:["Item","Position"],Итого:["Total","Summe"],Помещение:["Room","Raum"],"Ширина, мм":["Width, mm","Breite, mm"],"Длина, мм":["Length, mm","Länge, mm"],"Двери и окна":["Doors and windows","Türen und Fenster"],Дверь:["Door","Tür"],Окно:["Window","Fenster"],Стена:["Wall","Wand"],"верхняя стена":["top wall","obere Wand"],правая:["right","rechte"],нижняя:["bottom","untere"],левая:["left","linke"],"Положение на стене":["Position on the wall","Position an der Wand"],убрать:["remove","entfernen"],"Обмерный план":["Measured plan","Aufmaßplan"],"Загрузите план (PNG, JPG, SVG) и укажите его реальную ширину — изображение ляжет подложкой в масштабе.":["Upload a plan (PNG, JPG, SVG) and enter its real width — the image becomes a to-scale underlay.","Laden Sie einen Plan hoch (PNG, JPG, SVG) und geben Sie seine reale Breite an — das Bild wird maßstabsgerecht hinterlegt."],"Ширина плана, мм":["Plan width, mm","Planbreite, mm"],"убрать план":["remove plan","Plan entfernen"],"Изделия проекта":["Project items","Möbel im Projekt"],"Сначала добавьте изделия из конструктора.":["Add items from the configurator first.","Fügen Sie zuerst Möbel aus dem Konfigurator hinzu."],"Поставить: {0}":["Place: {0}","Aufstellen: {0}"],"Повернуть на 90°":["Rotate 90°","Um 90° drehen"],"Убрать с плана":["Remove from plan","Aus dem Plan entfernen"],"Расстановка проверена: пересечений нет, двери и ящики открываются, проходы свободны.":["Layout checked: no overlaps, doors and drawers open, walkways are clear.","Aufstellung geprüft: keine Überschneidungen, Türen und Schubkästen lassen sich öffnen, Durchgänge sind frei."],"Перетаскивайте изделия по плану: они прилипают к стенам. Синяя полоса — фасад, бледная зона — место для открывания и прохода.":["Drag items across the plan: they snap to walls. The blue strip is the front, the pale area is space for opening and walking.","Ziehen Sie die Möbel über den Plan: sie rasten an den Wänden ein. Der blaue Streifen ist die Front, die helle Fläche der Platz zum Öffnen und Durchgehen."],"«{0}» выходит за стены помещения.":["“{0}” extends beyond the room walls.","„{0}“ ragt über die Raumwände hinaus."],"«{0}» и «{1}» пересекаются.":["“{0}” and “{1}” overlap.","„{0}“ und „{1}“ überschneiden sich."],"«{0}» перекрывает дверной проём.":["“{0}” blocks a doorway.","„{0}“ versperrt eine Türöffnung."],"«{0}» выше подоконника и закрывает окно.":["“{0}” is higher than the windowsill and covers the window.","„{0}“ ist höher als die Fensterbank und verdeckt das Fenster."],"«{0}»: не хватает {1} мм перед фасадом — двери или ящики не откроются.":["“{0}”: {1} mm of clearance is missing in front — doors or drawers will not open.","„{0}“: vor der Front fehlen {1} mm — Türen oder Schubkästen lassen sich nicht öffnen."],"«{0}»: проход перед изделием уже {1} мм.":["“{0}”: the walkway in front is narrower than {1} mm.","„{0}“: der Durchgang davor ist schmaler als {1} mm."],Комната:["Room","Zimmer"],"Комплект мебели по плану квартиры":["Furniture set from a flat plan","Möbelset nach Wohnungsgrundriss"],"Отметьте мебель на плане, укажите размеры мест — и получите несколько комплектов из каталога производителя на всю квартиру.":["Mark the furniture on the plan, enter the size of each space — and get several sets from the manufacturer’s catalogue for the whole flat.","Markieren Sie die Möbel im Grundriss, geben Sie die Stellmaße an — und erhalten Sie mehrere Sets aus dem Herstellerkatalog für die ganze Wohnung."],"Открыть план-образец":["Open sample plan","Beispielgrundriss öffnen"],"Загрузить свой план":["Upload your plan","Eigenen Grundriss hochladen"],"На плане-образце мебель уже отмечена. На своём плане отметьте её щелчком по изображению: автоматическое распознавание подключается на следующем этапе.":["On the sample plan the furniture is already marked. On your own plan, click the image to mark it: automatic recognition comes in the next phase.","Im Beispielgrundriss sind die Möbel bereits markiert. Im eigenen Grundriss markieren Sie sie per Klick ins Bild: die automatische Erkennung folgt in der nächsten Ausbaustufe."],"Мебель на плане":["Furniture on plan","Möbel im Grundriss"],"Размеры мест":["Space sizes","Stellmaße"],Комплекты:["Sets","Sets"],"Другой план":["Another plan","Anderer Grundriss"],"План квартиры":["Flat plan","Wohnungsgrundriss"],"План-образец: мебель отмечена заранее.":["Sample plan: furniture is pre-marked.","Beispielgrundriss: Möbel sind bereits markiert."],"Щёлкните по плану, чтобы добавить мебель в этой точке.":["Click the plan to add furniture at that spot.","Klicken Sie in den Grundriss, um dort ein Möbel hinzuzufügen."],"Пока ничего не отмечено.":["Nothing marked yet.","Noch nichts markiert."],"Вид мебели {0}":["Furniture type {0}","Möbelart {0}"],"Помещение {0}":["Room {0}","Raum {0}"],"Количество {0}":["Quantity {0}","Menge {0}"],"Убрать {0}":["Remove {0}","Entfernen {0}"],"Добавить мебель":["Add furniture","Möbel hinzufügen"],"Далее: размеры":["Next: sizes","Weiter: Maße"],"Укажите свободное место под каждое изделие — ширину вдоль стены и глубину от стены. Подберутся изделия, которые встают в это место и занимают его не меньше чем на три четверти по ширине.":["Enter the free space for each item — width along the wall and depth from the wall. We pick items that fit the space and fill at least three quarters of its width.","Geben Sie den freien Platz je Möbel an — Breite entlang der Wand und Tiefe ab Wand. Ausgewählt werden Möbel, die hineinpassen und mindestens drei Viertel der Breite ausfüllen."],Мебель:["Furniture","Möbel"],"Ширина места, мм":["Space width, mm","Stellbreite, mm"],"Глубина, мм":["Depth, mm","Tiefe, mm"],"Высота не более, мм":["Max height, mm","Max. Höhe, mm"],"В каталоге":["In catalogue","Im Katalog"],"Ширина места {0}":["Space width {0}","Stellbreite {0}"],"Глубина места {0}":["Space depth {0}","Stelltiefe {0}"],"без ограничения":["no limit","unbegrenzt"],"Высота {0}":["Height {0}","Höhe {0}"],"ширина {0}–{1}":["width {0}–{1}","Breite {0}–{1}"],"нет такого вида":["type not available","Art nicht vorhanden"],"Ширина и глубина каждого места — не меньше {0} мм.":["Width and depth of each space must be at least {0} mm.","Breite und Tiefe jedes Stellplatzes: mindestens {0} mm."],"Подобрать комплекты":["Find sets","Sets zusammenstellen"],"Фото из каталога производителя":["Photo from the manufacturer’s catalogue","Foto aus dem Herstellerkatalog"],"фото из каталога производителя":["photo from the manufacturer’s catalogue","Foto aus dem Herstellerkatalog"],"3D-модель изделия под размер":["3D model of the made-to-measure item","3D-Modell der Maßanfertigung"],"Фото в каталоге нет — 3D-изображение в габаритах товара":["No photo in the catalogue — 3D image at the product’s dimensions","Kein Foto im Katalog — 3D-Darstellung in den Produktmaßen"],"фото в каталоге нет, показана 3D-форма в габаритах товара":["no photo in the catalogue, showing a 3D shape at the product’s dimensions","kein Foto im Katalog, 3D-Form in den Produktmaßen"],"{0}: увеличить":["{0}: enlarge","{0}: vergrößern"],"{0} мм":["{0} mm","{0} mm"],Закрыть:["Close","Schließen"],"Файл не удалось прочитать: нужен YML-фид (XML) или JSON-массив товаров.":["Could not read the file: a YML feed (XML) or a JSON array of products is required.","Datei nicht lesbar: benötigt wird ein YML-Feed (XML) oder ein JSON-Array mit Produkten."],"Место, мм":["Space, mm","Stellplatz, mm"],Коллекция:["Collection","Kollektion"],"Габариты, мм":["Dimensions, mm","Abmessungen, mm"],Ссылка:["Link","Link"],Фото:["Photo","Foto"],"нет подходящего":["no match","nichts Passendes"],"под размер":["made to measure","Maßanfertigung"],"{0} · {1} товаров":["{0} · {1} products","{0} · {1} Produkte"],"демонстрационный · {0} товаров, цены условные":["demo · {0} products, indicative prices","Demo · {0} Produkte, Richtpreise"],"Загрузить фид производителя (YML или JSON)":["Upload manufacturer feed (YML or JSON)","Herstellerfeed hochladen (YML oder JSON)"],"Вернуть демо-каталог":["Back to demo catalogue","Zurück zum Demokatalog"],"В фиде {0} предложений, в подбор взято {1}. Пропущено: без размеров изделия — {2}, вид мебели не определён — {3}, без цены — {4}. Размеры читаются из параметров «Ширина», «Глубина», «Высота», «Длина», «Диаметр»; габариты упаковки не используются.":["The feed has {0} offers, {1} taken into matching. Skipped: no product dimensions — {2}, furniture type not recognised — {3}, no price — {4}. Dimensions are read from the “Ширина”, “Глубина”, “Высота”, “Длина”, “Диаметр” parameters; package dimensions are not used.","Der Feed enthält {0} Angebote, {1} wurden übernommen. Übersprungen: ohne Produktmaße — {2}, Möbelart nicht erkannt — {3}, ohne Preis — {4}. Maße werden aus den Parametern „Ширина“, „Глубина“, „Высота“, „Длина“, „Диаметр“ gelesen; Verpackungsmaße werden nicht verwendet."],"{0} из {1} мест":["{0} of {1} spaces","{0} von {1} Plätzen"],Место:["Space","Stellplatz"],"Занимает ширины":["Width filled","Breite genutzt"],"Изделие для места {0}":["Item for space {0}","Möbel für Platz {0}"],"— не включать —":["— leave out —","— weglassen —"],"В каталоге нет изделия под это место — измените размеры или обратитесь к менеджеру.":["No product in the catalogue fits this space — change the sizes or contact a manager.","Kein Produkt im Katalog passt an diesen Platz — ändern Sie die Maße oder wenden Sie sich an den Verkauf."],"Изготовление под размер по правилам фабрики":["Made to measure under the factory’s rules","Maßanfertigung nach Herstellerregeln"],"Коллекция «{0}»":["“{0}” collection","Kollektion „{0}“"],"На сайте":["On website","Zur Website"],"Закрыто мест: {0} из {1}":["Spaces covered: {0} of {1}","Plätze belegt: {0} von {1}"],"Комплект «{0}»":["Set “{0}”","Set „{0}“"],"Скачать комплект (CSV)":["Download set (CSV)","Set herunterladen (CSV)"],"Изделия под размер — в проект":["Add made-to-measure items to project","Maßanfertigungen ins Projekt"],"В проект добавлено изделий под размер: {0}. Их можно доработать в конструкторе и расставить на плане помещения.":["Made-to-measure items added to the project: {0}. You can refine them in the configurator and arrange them on the room plan.","Maßanfertigungen zum Projekt hinzugefügt: {0}. Sie können sie im Konfigurator anpassen und im Raumplan anordnen."],"Точно по месту":["Best fit","Passgenau"],Эконом:["Budget","Preiswert"],"Изделия, которые заполняют место плотнее всего; где фабрика делает под размер — под размер.":["Items that fill each space most closely; made to measure wherever the factory offers it.","Möbel, die den Platz am besten ausfüllen; wo der Hersteller maßfertigt — als Maßanfertigung."],"Самое доступное изделие под каждое место.":["The most affordable item for each space.","Das günstigste Möbel für jeden Platz."],"{0} из {1} позиций — из одной коллекции, остальное подобрано по месту.":["{0} of {1} items from a single collection, the rest matched to fit.","{0} von {1} Positionen aus einer Kollektion, der Rest passend ergänzt."],"{0} — под размер":["{0} — made to measure","{0} — Maßanfertigung"],"{0} «{1}»":["{0} “{1}”","{0} „{1}“"],Лофт:["Loft","Loft"],Нордик:["Nordic","Nordic"],Сити:["City","City"],Грид:["Grid","Grid"],Гостиная:["Living room","Wohnzimmer"],Прихожая:["Hallway","Flur"],Спальня:["Bedroom","Schlafzimmer"],Кухня:["Kitchen","Küche"],Ванная:["Bathroom","Bad"],Балкон:["Balcony","Balkon"],Диван:["Sofa","Sofa"],Кресло:["Armchair","Sessel"],Кровать:["Bed","Bett"],"Тумба прикроватная":["Bedside table","Nachttisch"],Шкаф:["Wardrobe","Kleiderschrank"],"Шкаф-купе":["Sliding-door wardrobe","Schwebetürenschrank"],Комод:["Chest of drawers","Kommode"],Стеллаж:["Shelving unit","Regal"],"Тумба под ТВ":["TV stand","TV-Lowboard"],"Письменный стол":["Desk","Schreibtisch"],Стул:["Chair","Stuhl"],"Обеденный стол":["Dining table","Esstisch"],"Обеденный стол круглый":["Round dining table","Esstisch rund"],"Обеденный стол прямоугольный":["Rectangular dining table","Esstisch rechteckig"],"Журнальный стол":["Coffee table","Couchtisch"],"Журнальный стол круглый":["Round coffee table","Couchtisch rund"],"Журнальный стол прямоугольный":["Rectangular coffee table","Couchtisch rechteckig"],Обувница:["Shoe cabinet","Schuhschrank"],"Кухонный гарнитур":["Kitchen unit","Küchenzeile"],"Тумба с раковиной":["Vanity unit","Waschtischunterschrank"],Шкафы:["Wardrobes","Kleiderschränke"],"Комоды и тумбы":["Chests & bedside tables","Kommoden & Nachttische"],Стеллажи:["Shelving","Regale"],"Шкаф для одежды: распашной, купе или открытый. Каждая секция настраивается отдельно: штанги, полки, ящики, двери.":["Clothes wardrobe: hinged doors, sliding doors or open. Each section is configured separately: hanging rails, shelves, drawers, doors.","Kleiderschrank mit Drehtüren, Schwebetüren oder offen. Jede Sektion wird einzeln eingerichtet: Kleiderstangen, Fachböden, Schubkästen, Türen."],"Шкаф-купе с алюминиевым профилем. Двери — ЛДСП, зеркало или матовое стекло. Наполнение — по секциям.":["Sliding-door wardrobe with aluminium profiles. Doors in chipboard, mirror or frosted glass. Interior configured per section.","Schwebetürenschrank mit Aluprofil. Türen aus Spanplatte, Spiegel oder Milchglas. Innenausstattung je Sektion."],"Комод с выдвижными ящиками в одну–три колонки. На ножках или цоколе.":["Chest with drawers in one to three columns. On legs or a plinth.","Kommode mit Schubkästen in ein bis drei Reihen. Auf Füßen oder Sockel."],"Прикроватная тумба с одним–тремя ящиками.":["Bedside table with one to three drawers.","Nachttisch mit ein bis drei Schubkästen."],"Открытый стеллаж. Полки в каждой секции — равномерно или по своим высотам.":["Open shelving unit. Shelves in each section evenly spaced or at custom heights.","Offenes Regal. Fachböden je Sektion gleichmäßig oder in eigenen Höhen."],Отдельностоящий:["Freestanding","Freistehend"],Встроенный:["Built-in","Einbau"],Модульный:["Modular","Modular"],"Работы: раскрой, кромление, присадка, упаковка":["Labour: cutting, edge banding, drilling, packing","Arbeit: Zuschnitt, Bekanten, Bohren, Verpacken"],"Работы: раскрой, кромление, присадка, сборка дверей":["Labour: cutting, edge banding, drilling, door assembly","Arbeit: Zuschnitt, Bekanten, Bohren, Türmontage"],"Работы: раскрой, кромление, присадка, сборка ящиков":["Labour: cutting, edge banding, drilling, drawer assembly","Arbeit: Zuschnitt, Bekanten, Bohren, Schubkastenmontage"],"Антресоль: дополнительная присадка":["Top cabinet: extra drilling","Aufsatz: zusätzliche Bohrungen"],"Сборка у клиента":["Assembly on site","Montage beim Kunden"],"Скидка менеджера {0}%":["Manager discount {0}%","Verkäuferrabatt {0} %"],Конфигурация:["Configuration","Konfiguration"],Корпус:["Carcass","Korpus"],Фасад:["Front","Front"],"Задняя стенка":["Back panel","Rückwand"],"Выдвижные ящики":["Drawers","Schubkästen"],Цоколь:["Plinth","Sockel"],"Настройка секции":["Section settings","Sektion"],Дополнительно:["Extras","Extras"],Менеджеру:["Manager only","Nur für Verkauf"],Полки:["Shelves","Fachböden"],"Петли и амортизаторы":["Hinges and dampers","Scharniere und Dämpfer"],Направляющие:["Drawer runners","Schubkastenführungen"],Штанга:["Hanging rail","Kleiderstange"],Ножки:["Legs","Füße"],Ручки:["Handles","Griffe"],Подсветка:["Lighting","Beleuchtung"],Высота:["Height","Höhe"],Глубина:["Depth","Tiefe"],"Общее наполнение конструкции":["Same interior for all sections","Gleiche Einteilung für alle Sektionen"],"Все секции повторяют настройку секции 1":["All sections repeat section 1","Alle Sektionen übernehmen Sektion 1"],"Количество секций":["Number of sections","Anzahl Sektionen"],"Ширина секций":["Section widths","Sektionsbreiten"],Равномерно:["Even","Gleichmäßig"],Вручную:["Manual","Manuell"],"Ширина секции {0}":["Section {0} width","Breite Sektion {0}"],"Ширина последней секции":["Last section width","Breite letzte Sektion"],"Тип установки стойки слева":["Left side panel mounting","Montage linke Seitenwand"],"Тип установки стойки справа":["Right side panel mounting","Montage rechte Seitenwand"],"На пол":["On the floor","Auf dem Boden"],"На дно":["On the bottom panel","Auf dem Unterboden"],Дно:["Bottom panel","Unterboden"],Крышка:["Top panel","Oberboden"],Включено:["On","Ein"],Выключено:["Off","Aus"],"Соединительная фурнитура корпуса":["Carcass connectors","Korpusverbinder"],"Соединительная фурнитура крышки":["Top panel connectors","Verbinder Oberboden"],Конфирмат:["Confirmat screw","Konfirmat-Schraube"],"Эксцентриковая стяжка, снаружи не видна":["Cam lock connector, invisible from outside","Exzenterverbinder, von außen unsichtbar"],Шкант:["Dowel","Holzdübel"],"Сторона установки стяжек: левая боковина":["Connector side: left side panel","Verbinderseite: linke Seitenwand"],"Сторона установки стяжек: правая боковина":["Connector side: right side panel","Verbinderseite: rechte Seitenwand"],"Сторона установки стяжек: дно":["Connector side: bottom panel","Verbinderseite: Unterboden"],Внутренняя:["Inside","Innen"],Наружная:["Outside","Außen"],"Тип установки крышки":["Top panel mounting","Montage Oberboden"],Вкладная:["Inset","Eingelegt"],"Между боковинами":["Between the side panels","Zwischen den Seitenwänden"],Накладная:["Overlay","Aufliegend"],"Поверх боковин, на всю ширину":["On top of the side panels, full width","Über den Seitenwänden, volle Breite"],"Материал полки над ящиками":["Material of the shelf above drawers","Material Boden über Schubkästen"],"Материал полок":["Shelf material","Material der Fachböden"],"Материал корпуса":["Carcass material","Korpusmaterial"],"Полезная глубина шкафа":["Usable wardrobe depth","Nutztiefe des Schranks"],"Расположение гардеробных штанг":["Hanging rail position","Position der Kleiderstangen"],"С привязкой к верху":["Aligned to the top","Oben ausgerichtet"],"С привязкой к полке":["Under a shelf","Unter einem Fachboden"],"Полка над штангой, если секция выше 1300 мм":["Shelf above the rail if the section is taller than 1300 mm","Fachboden über der Stange, wenn die Sektion höher als 1300 mm ist"],"По центру":["Centred","Mittig"],"Материал фасада":["Front material","Frontmaterial"],"Покрытие фасада":["Front finish","Frontoberfläche"],Ламинированный:["Laminated","Melaminbeschichtet"],Эмаль:["Lacquer","Lack"],"Плёнка ПВХ":["PVC foil","PVC-Folie"],Шпон:["Veneer","Furnier"],"Толщина материала фасада":["Front thickness","Frontstärke"],"Отступ от полки до фасада":["Setback from shelf to front","Abstand Fachboden–Front"],"Зазор фасада":["Front gap","Frontfuge"],"Материал задней стенки":["Back panel material","Material Rückwand"],ХДФ:["HDF","HDF"],ЛДСП:["Chipboard","Spanplatte"],"Без стенки":["No back panel","Ohne Rückwand"],"Толщина материала задней стенки":["Back panel thickness","Stärke Rückwand"],"Тип установки задней стенки":["Back panel mounting","Montage Rückwand"],"Прибивается сзади к корпусу":["Nailed to the back of the carcass","Hinten auf den Korpus genagelt"],"В паз":["In a groove","In Nut"],"Заходит в паз боковин":["Slides into a groove in the side panels","Läuft in einer Nut der Seitenwände"],"Между боковинами, на стяжках":["Between the side panels, with connectors","Zwischen den Seitenwänden, mit Verbindern"],"Максимальная длина выдвижного ящика":["Maximum drawer length","Maximale Schubkastenlänge"],"Фактическая длина — по глубине корпуса":["Actual length depends on the carcass depth","Tatsächliche Länge richtet sich nach der Korpustiefe"],"Зазор фасада внутреннего ящика":["Internal drawer front gap","Frontfuge Innenschubkasten"],"Направляющие ящиков":["Drawer runners","Schubkastenführungen"],Роликовые:["Roller","Rollenauszug"],Шариковые:["Ball-bearing","Kugelauszug"],"Полное выдвижение":["Full extension","Vollauszug"],"Металлические борта, доводчик":["Metal sides, soft close","Metallzargen, Softclose"],Опора:["Base","Unterbau"],"Материал цоколя":["Plinth material","Sockelmaterial"],МДФ:["MDF","MDF"],"Толщина материала цоколя":["Plinth thickness","Sockelstärke"],"Высота цокольной части":["Plinth height","Sockelhöhe"],"Смещение цоколя переднее":["Front plinth setback","Sockelrücksprung vorne"],"Смещение цоколя заднее":["Rear plinth setback","Sockelrücksprung hinten"],"0 — без заднего цоколя":["0 — no rear plinth","0 — ohne hinteren Sockel"],"Тип установки ножек":["Leg mounting","Montage der Füße"],"На боковину и дно":["Under side panel and bottom","Unter Seitenwand und Boden"],"МДФ в эмали":["Lacquered MDF","MDF lackiert"],"Толщина плиты":["Board thickness","Plattenstärke"],"Декор корпуса":["Carcass decor","Korpusdekor"],Кромка:["Edging","Kante"],"Скруглённая, устойчива к сколам":["Rounded, chip-resistant","Gerundet, stoßfest"],"Декор задней стенки":["Back panel decor","Dekor Rückwand"],"Декор цоколя":["Plinth decor","Sockeldekor"],"Декор полок":["Shelf decor","Dekor Fachböden"],"Декор фасада":["Front decor","Frontdekor"],Петли:["Hinges","Scharniere"],"Полное открывание":["Full opening","Volle Öffnung"],"Амортизатор силиконовый":["Silicone damper","Silikondämpfer"],"На петли без доводчика":["For hinges without soft close","Für Scharniere ohne Dämpfung"],"Вариант ножек":["Leg type","Fußvariante"],Скоба:["Bar","Bügelgriff"],Кнопка:["Knob","Knopf"],Профиль:["Profile","Griffleiste"],"Без ручек":["No handles","Grifflos"],"Открывание нажатием":["Push to open","Tip-On (Öffnen durch Drücken)"],"Цвет фурнитуры":["Hardware colour","Beschlagfarbe"],"Цвет профиля":["Profile colour","Profilfarbe"],Лента:["LED strip","LED-Band"],Точечная:["Spotlights","Spots"],"Тип фасада":["Front type","Frontart"],Распашные:["Hinged doors","Drehtüren"],Купе:["Sliding doors","Schwebetüren"],"Количество дверей купе":["Number of sliding doors","Anzahl Schwebetüren"],"Количество дверей":["Number of doors","Anzahl Türen"],Зеркало:["Mirror","Spiegel"],"Стекло матовое":["Frosted glass","Milchglas"],"Антресоль с отдельными дверями":["Top cabinet with separate doors","Aufsatz mit eigenen Türen"],"Наполнение дверей":["Door infill","Türfüllung"],"Толщина наполнения":["Infill thickness","Füllungsstärke"],"Колонок ящиков":["Drawer columns","Schubkastenreihen"],"Ящиков в колонке":["Drawers per column","Schubkästen je Reihe"],шт:["pcs","Stk."],компл:["set","Satz"],м:["m","m"],да:["yes","ja"],нет:["no","nein"],"{0} шт":["{0} pcs","{0} Stk."],"Секция {0}: {1}":["Section {0}: {1}","Sektion {0}: {1}"],"Средняя стойка":["Centre partition","Mittelwand"],"Делит секцию на две половины":["Splits the section into two halves","Teilt die Sektion in zwei Hälften"],"Наполнение секции":["Section interior","Einteilung der Sektion"],"Штанга и полки":["Hanging rail and shelves","Kleiderstange und Fachböden"],"Ящики и полки":["Drawers and shelves","Schubkästen und Fachböden"],"Штанга и ящики":["Hanging rail and drawers","Kleiderstange und Schubkästen"],Пусто:["Empty","Leer"],"Верхняя секция":["Top compartment","Oberes Fach"],"Отдельное отделение вверху секции":["Separate compartment at the top of the section","Eigenes Fach oben in der Sektion"],"Высота верхней секции":["Top compartment height","Höhe oberes Fach"],"Произвольный вырез в задней стенке":["Custom cut-out in the back panel","Ausschnitt in der Rückwand"],"Под плинтус или трубы":["For a skirting board or pipes","Für Sockelleiste oder Rohre"],"Высота выреза":["Cut-out height","Höhe Ausschnitt"],"Глубина выреза":["Cut-out depth","Tiefe Ausschnitt"],"Открытие фасада":["Door opening","Türanschlag"],Открытая:["Open","Offen"],"Без двери":["No door","Ohne Tür"],"Петли слева":["Hinged left","Anschlag links"],"Петли справа":["Hinged right","Anschlag rechts"],"Две створки":["Double door","Zweiflüglig"],"Расположение полок по высоте":["Shelf spacing","Fachbodenabstände"],"Количество полок":["Number of shelves","Anzahl Fachböden"],"Количество ящиков":["Number of drawers","Anzahl Schubkästen"],"Высота до 1-й полки":["Height to the 1st shelf","Höhe bis 1. Fachboden"],"Высота от {0}-й до {1}-й полки":["Height from shelf {0} to shelf {1}","Höhe von Fachboden {0} bis {1}"],"Высота над верхней полкой":["Height above the top shelf","Höhe über dem obersten Fachboden"],"Секции одинаковой ширины.":["Sections have equal width.","Sektionen sind gleich breit."],"Последняя секция берёт остаток ширины.":["The last section takes the remaining width.","Die letzte Sektion erhält die Restbreite."],"Каждой секции нужно не меньше {0} мм.":["Each section needs at least {0} mm.","Jede Sektion braucht mindestens {0} mm."],"Последней секции остаётся меньше {0} мм — уменьшите ширину остальных.":["Less than {0} mm is left for the last section — reduce the width of the others.","Für die letzte Sektion bleiben weniger als {0} mm — verringern Sie die übrigen Breiten."],"Цоколь крепится к дну.":["The plinth is fixed to the bottom panel.","Der Sockel wird am Unterboden befestigt."],"Без дна стойки стоят на полу.":["Without a bottom panel the sides stand on the floor.","Ohne Unterboden stehen die Seitenwände auf dem Boden."],"ЛДСП выпускается только ламинированной, толщиной {0}, {1} и {2} мм.":["Chipboard comes laminated only, {0}, {1} or {2} mm thick.","Spanplatte gibt es nur melaminbeschichtet in {0}, {1} und {2} mm."],"МДФ покрывается эмалью, плёнкой ПВХ или шпоном.":["MDF is finished with lacquer, PVC foil or veneer.","MDF wird lackiert, foliert oder furniert."],"У зеркала и стекла нет покрытия и декора.":["Mirror and glass have no finish or decor.","Spiegel und Glas haben keine Oberfläche und kein Dekor."],"ХДФ {0}–{1} мм ставится накладной или в паз; цвет — белый.":["{0}–{1} mm HDF is fitted as overlay or in a groove; colour is white.","HDF {0}–{1} mm wird aufliegend oder in Nut montiert; Farbe weiß."],"ЛДСП {0}–{1} мм ставится вкладной или в паз.":["{0}–{1} mm chipboard is fitted inset or in a groove.","Spanplatte {0}–{1} mm wird eingelegt oder in Nut montiert."],"Задней стенки нет.":["There is no back panel.","Keine Rückwand."],"Изделие на ножках — цоколя нет.":["The item stands on legs — no plinth.","Das Möbel steht auf Füßen — kein Sockel."],"Изделие на цоколе — ножек нет.":["The item stands on a plinth — no legs.","Das Möbel steht auf einem Sockel — keine Füße."],"МДФ в эмали не кромится.":["Lacquered MDF has no edge banding.","Lackiertes MDF wird nicht bekantet."],"Петли — только для распашных фасадов.":["Hinges apply to hinged fronts only.","Scharniere gibt es nur bei Drehtüren."],"У петли с доводчиком амортизатор не нужен.":["A soft-close hinge needs no damper.","Ein Scharnier mit Dämpfung braucht keinen Dämpfer."],"Открывание нажатием несовместимо с доводчиками и амортизаторами.":["Push-to-open is incompatible with soft-close hinges and dampers.","Tip-On ist nicht mit Dämpfung oder Dämpfern kombinierbar."],"Секции {0} нет при выбранном числе секций.":["Section {0} does not exist with the selected number of sections.","Sektion {0} gibt es bei der gewählten Anzahl nicht."],"Наполнение общее — задаётся в секции {0}.":["Interior is shared — set it in section {0}.","Einteilung ist gemeinsam — sie wird in Sektion {0} festgelegt."],"Штанга для плечиков — при глубине от {0} мм.":["A hanging rail needs a depth of at least {0} mm.","Eine Kleiderstange braucht mindestens {0} mm Tiefe."],"В этой секции полок нет.":["This section has no shelves.","Diese Sektion hat keine Fachböden."],"В этой секции ящиков нет.":["This section has no drawers.","Diese Sektion hat keine Schubkästen."],"Расстояние между полками — не меньше {0} мм; под штангой остаётся {1} мм для одежды.":["Shelves must be at least {0} mm apart; {1} mm is kept under the rail for clothes.","Fachbodenabstand mindestens {0} mm; unter der Stange bleiben {1} mm für Kleidung."],"Над ящиками должно остаться не меньше {0} мм.":["At least {0} mm must remain above the drawers.","Über den Schubkästen müssen mindestens {0} mm bleiben."],"Секция {0}: наполнение не помещается по высоте — уберите верхнюю секцию, ящики или штангу.":["Section {0}: the interior does not fit the height — remove the top compartment, drawers or the rail.","Sektion {0}: die Einteilung passt nicht in die Höhe — entfernen Sie das obere Fach, Schubkästen oder die Stange."],"Верхней секции нет.":["There is no top compartment.","Kein oberes Fach."],"Выреза нет.":["There is no cut-out.","Kein Ausschnitt."],"Полки расставлены равномерно.":["Shelves are evenly spaced.","Fachböden sind gleichmäßig verteilt."],"Полок меньше.":["There are fewer shelves.","Weniger Fachböden."],"Секция {0}: полки не помещаются по высоте — над верхней полкой должно остаться не меньше {1} мм.":["Section {0}: the shelves do not fit the height — at least {1} mm must remain above the top shelf.","Sektion {0}: die Fachböden passen nicht in die Höhe — über dem obersten müssen mindestens {1} mm bleiben."],"Средняя стойка — в секциях от {0} мм: каждой половине нужно {1} мм.":["A centre partition needs a section of at least {0} mm: each half needs {1} mm.","Eine Mittelwand erst ab {0} mm Sektionsbreite: jede Hälfte braucht {1} mm."],"Отдельные двери — только у распашного фасада.":["Separate doors apply to hinged fronts only.","Einzelne Türen gibt es nur bei Drehtüren."],"Распашная дверь шире {0} мм не производится — две створки.":["Hinged doors wider than {0} mm are not made — use a double door.","Drehtüren breiter als {0} mm werden nicht gefertigt — zweiflüglig."],"Створка уже {0} мм не производится — одна дверь.":["Door leaves narrower than {0} mm are not made — use a single door.","Türflügel schmaler als {0} mm werden nicht gefertigt — eine Tür."],"Двери секций не выбираются.":["Section doors are not selectable.","Sektionstüren sind nicht wählbar."],"Ширина секции — от {0} до {1} мм: полка длиннее провисает.":["Section width is {0}–{1} mm: longer shelves sag.","Sektionsbreite {0}–{1} mm: längere Fachböden hängen durch."],"У зеркала и стекла нет декора.":["Mirror and glass have no decor.","Spiegel und Glas haben kein Dekor."],"При глубине меньше {0} мм доступны только роликовые направляющие.":["Below {0} mm depth only roller runners are available.","Unter {0} mm Tiefe gibt es nur Rollenauszüge."],"Ящиков нет.":["There are no drawers.","Keine Schubkästen."],"Число дверей задаётся для купе; распашные двери — в настройке секций.":["The door count applies to sliding doors; hinged doors are set per section.","Die Türanzahl gilt für Schwebetüren; Drehtüren werden je Sektion festgelegt."],"Двери-купе — для шкафов от {0} мм.":["Sliding doors are for wardrobes from {0} mm wide.","Schwebetüren gibt es ab {0} mm Schrankbreite."],"Система купе занимает {0} мм глубины — нужна глубина от {1} мм.":["The sliding system takes {0} mm of depth — a depth of at least {1} mm is needed.","Das Schwebetürsystem braucht {0} mm Tiefe — nötig sind mindestens {1} mm."],"Ширина двери-купе — от {0} до {1} мм.":["A sliding door is {0}–{1} mm wide.","Eine Schwebetür ist {0}–{1} mm breit."],"Стеклянный фасад недоступен при ширине двери меньше {0} мм.":["Glass fronts are unavailable for doors narrower than {0} mm.","Glasfronten gibt es nicht für Türen schmaler als {0} mm."],"Двери-купе: наполнение ЛДСП, зеркало или стекло; антресоль недоступна.":["Sliding doors: chipboard, mirror or glass infill; no top cabinet.","Schwebetüren: Füllung aus Spanplatte, Spiegel oder Glas; kein Aufsatz."],"Открытый шкаф — без фасадов и антресоли.":["An open wardrobe has no fronts and no top cabinet.","Offener Schrank — ohne Fronten und Aufsatz."],"Ящик шире {0} мм быстро разбалтывается — добавьте секцию.":["Drawers wider than {0} mm soon work loose — add a section.","Schubkästen breiter als {0} mm leiern schnell aus — fügen Sie eine Sektion hinzu."],"Распашная дверь выше {0} мм не производится: добавьте антресоль или уменьшите высоту.":["Hinged doors taller than {0} mm are not made: add a top cabinet or reduce the height.","Drehtüren höher als {0} mm werden nicht gefertigt: fügen Sie einen Aufsatz hinzu oder verringern Sie die Höhe."],"Зеркало выше {0} мм делается с горизонтальным разделителем.":["Mirrors taller than {0} mm get a horizontal divider.","Spiegel höher als {0} mm erhalten eine waagerechte Teilung."],"Зеркало и стекло — {0} мм в профиле.":["Mirror and glass are {0} mm in the profile.","Spiegel und Glas: {0} mm im Profil."],"Секция с ящиками шире двери: ящик будет упираться в соседнюю дверь. Увеличьте число секций.":["The drawer section is wider than a door: drawers will hit the neighbouring door. Add sections.","Die Schubkastensektion ist breiter als eine Tür: Schubkästen stoßen an die Nachbartür. Erhöhen Sie die Sektionsanzahl."],"Tandembox — при глубине от {0} мм.":["Tandembox needs a depth of at least {0} mm.","Tandembox ab {0} mm Tiefe."],"Высота фасада ящика — от {0} до {1} мм.":["Drawer front height is {0}–{1} mm.","Schubkastenfronthöhe {0}–{1} mm."],"Ширина ящика — от {0} до {1} мм.":["Drawer width is {0}–{1} mm.","Schubkastenbreite {0}–{1} mm."],"Стеллаж выше {0} мм без задней стенки теряет жёсткость.":["Shelving taller than {0} mm loses rigidity without a back panel.","Regale höher als {0} mm verlieren ohne Rückwand an Stabilität."],"Высокий неглубокий стеллаж нужно крепить к стене — крепёж в комплекте.":["A tall shallow shelving unit must be fixed to the wall — fixings included.","Ein hohes, flaches Regal muss an der Wand befestigt werden — Befestigung liegt bei."],"Декор не выпускается для выбранного материала":["This decor is not made for the selected material","Dieses Dekor gibt es für das gewählte Material nicht"],"Правила модели противоречат друг другу — обратитесь к менеджеру.":["The model rules contradict each other — please contact a manager.","Die Modellregeln widersprechen sich — bitte wenden Sie sich an den Verkauf."],"«{0}» изменено на «{1}». {2}":["“{0}” changed to “{1}”. {2}","„{0}“ geändert auf „{1}“. {2}"],"«{0}» изменено на «{1}».":["“{0}” changed to “{1}”.","„{0}“ geändert auf „{1}“."],"«{0}»: нет допустимых значений. {1}":["“{0}”: no allowed values. {1}","„{0}“: keine zulässigen Werte. {1}"],"Боковина левая":["Left side panel","Seitenwand links"],"Боковина правая":["Right side panel","Seitenwand rechts"],"Цоколь задний":["Rear plinth","Sockel hinten"],"Полка антресоли":["Top cabinet shelf","Boden Aufsatz"],"Перегородка антресоли":["Top cabinet divider","Trennwand Aufsatz"],Перегородка:["Divider","Trennwand"],Полка:["Shelf","Fachboden"],"Боковина ящика":["Drawer side","Schubkastenzarge"],"Задняя стенка ящика":["Drawer back","Schubkastenrückwand"],"Дно ящика":["Drawer bottom","Schubkastenboden"],"Полка верхней секции":["Top compartment shelf","Boden oberes Fach"],"Фасад внутреннего ящика":["Internal drawer front","Front Innenschubkasten"],"Полка над ящиками":["Shelf above drawers","Boden über Schubkästen"],"Ручка-скоба":["Bar handle","Bügelgriff"],"Ножка ручки":["Handle post","Griffstütze"],"Ручка-кнопка":["Knob","Knopf"],"Дверь антресоли":["Top cabinet door","Aufsatztür"],"Ручка-профиль":["Handle profile","Griffleiste"],"Наполнение двери-купе":["Sliding door infill","Schwebetürfüllung"],"Профиль вертикальный":["Vertical profile","Senkrechtes Profil"],"Профиль горизонтальный":["Horizontal profile","Waagerechtes Profil"],"Направляющая купе":["Sliding door track","Schwebetürschiene"],"Фасад ящика":["Drawer front","Schubkastenfront"],"Светодиодная лента":["LED strip","LED-Band"],Светильник:["Light","Leuchte"],"ЛДСП {0} мм":["Chipboard {0} mm","Spanplatte {0} mm"],"МДФ {0} мм":["MDF {0} mm","MDF {0} mm"],"ХДФ {0} мм":["HDF {0} mm","HDF {0} mm"],"Зеркало {0} мм":["Mirror {0} mm","Spiegel {0} mm"],"Стекло матовое {0} мм":["Frosted glass {0} mm","Milchglas {0} mm"],"ПВХ {0} мм":["PVC {0} mm","PVC {0} mm"],"{0}, эмаль":["{0}, lacquered","{0}, lackiert"],"{0}, плёнка ПВХ":["{0}, PVC foil","{0}, PVC-Folie"],"{0}, шпон":["{0}, veneered","{0}, furniert"],ламинированный:["laminated","melaminbeschichtet"],эмаль:["lacquer","Lack"],"плёнка ПВХ":["PVC foil","PVC-Folie"],шпон:["veneer","Furnier"],"Кромка {0}, {1} м":["Edging {0}, {1} m","Kante {0}, {1} m"],Белый:["White","Weiß"],Кашемир:["Cashmere","Kaschmir"],"Бетон светлый":["Light concrete","Beton hell"],Графит:["Graphite","Graphit"],"Дуб сонома":["Sonoma oak","Eiche Sonoma"],"Дуб вотан":["Wotan oak","Eiche Wotan"],Орех:["Walnut","Nussbaum"],Венге:["Wenge","Wenge"],"Белый матовый":["Matt white","Weiß matt"],"Чёрный матовый":["Matt black","Schwarz matt"],Оливковый:["Olive","Oliv"],"Пыльно-синий":["Dusty blue","Taubenblau"],Терракота:["Terracotta","Terrakotta"],Хром:["Chrome","Chrom"],"Золото брашированное":["Brushed gold","Gold gebürstet"],"Clip-On {0}° с доводчиком":["Clip-On {0}° soft close","Clip-On {0}° mit Dämpfung"],"Петля Clip-On {0}°, накладная":["Clip-On {0}° hinge, full overlay","Clip-On-Scharnier {0}°, aufliegend"],"Петля Clip-On {0}° с доводчиком":["Clip-On {0}° soft-close hinge","Clip-On-Scharnier {0}° mit Dämpfung"],"Амортизатор силиконовый врезной":["Silicone door damper, recessed","Silikon-Türdämpfer, eingebohrt"],"Стяжка эксцентриковая Minifix":["Minifix cam lock connector","Minifix-Exzenterverbinder"],"Шкант {0}×{1} буковый":["Beech dowel {0}×{1}","Buchendübel {0}×{1}"],"Ручка-скоба {0} мм":["Bar handle {0} mm","Bügelgriff {0} mm"],"Ручка-профиль торцевая":["Edge profile handle","Griffleiste stirnseitig"],"Толкатель push-to-open":["Push-to-open latch","Tip-On-Öffner"],"Направляющие роликовые":["Roller runners","Rollenauszüge"],"Направляющие шариковые полного выдвижения":["Full-extension ball-bearing runners","Kugel-Vollauszüge"],"Ящик Tandembox с доводчиком":["Tandembox drawer with soft close","Tandembox-Schubkasten mit Dämpfung"],"Штанга овальная {0}×{1}":["Oval hanging rail {0}×{1}","Kleiderstange oval {0}×{1}"],"Штанга круглая Ø{0}":["Round hanging rail Ø{0}","Kleiderstange rund Ø{0}"],"Овальная {0}×{1}":["Oval {0}×{1}","Oval {0}×{1}"],"Круглая Ø{0}":["Round Ø{0}","Rund Ø{0}"],Штангодержатель:["Rail holder","Stangenhalter"],"Ножка для шкафа регулируемая {0} мм":["Adjustable cabinet leg {0} mm","Möbelfuß verstellbar {0} mm"],"Ножка кухонная регулируемая {0} мм":["Adjustable kitchen leg {0} mm","Küchenfuß verstellbar {0} mm"],"Для шкафа, {0} мм":["Cabinet leg, {0} mm","Möbelfuß, {0} mm"],"Кухонные регулируемые, {0} мм":["Adjustable kitchen legs, {0} mm","Küchenfüße verstellbar, {0} mm"],"Клипса цоколя":["Plinth clip","Sockelclip"],Полкодержатель:["Shelf support","Bodenträger"],"Евровинт {0}×{1}":["Confirmat screw {0}×{1}","Konfirmat-Schraube {0}×{1}"],"Система купе: профиль и ролики на дверь":["Sliding system: profiles and rollers per door","Schwebetürsystem: Profile und Rollen je Tür"],"Направляющие купе верх + низ":["Sliding door tracks, top + bottom","Schwebetürschienen oben + unten"],"Рамка алюминиевая для стеклянного фасада":["Aluminium frame for glass front","Alurahmen für Glasfront"],"Светодиодная лента в профиле":["LED strip in profile","LED-Band im Profil"],"Светильник точечный":["Spotlight","Einbauspot"],"Блок питания с выключателем":["Power supply with switch","Netzteil mit Schalter"],"Конструктор мебели для вашей фабрики":["Furniture configurator for your factory","Möbelkonfigurator für Ihre Fabrik"],"для вашей фабрики":["for your factory","für Ihre Fabrik"],"Клиент сам настраивает шкаф, комод или стеллаж из ассортимента фабрики: 3D, правила производства, цена и деталировка пересчитываются мгновенно. Живое демо.":["Customers configure a wardrobe, chest of drawers or shelving unit from your range themselves: 3D, production rules, price and cutting list update instantly. Live demo.","Kunden konfigurieren Kleiderschrank, Kommode oder Regal aus Ihrem Sortiment selbst: 3D, Fertigungsregeln, Preis und Zuschnittliste werden sofort neu berechnet. Live-Demo."],Разделы:["Sections","Bereiche"],Демо:["Demo","Demo"],Фабрике:["For factories","Für Hersteller"],Правила:["Rules","Regeln"],Внедрение:["Rollout","Einführung"],"Написать нам":["Contact us","Kontakt"],"Для мебельных фабрик и салонов корпусной мебели":["For furniture factories and cabinet furniture showrooms","Für Möbelhersteller und Möbelstudios"],"Клиент выбирает модель из вашего ассортимента и меняет её под себя: размеры, наполнение, фасады, фурнитуру. Конструктор перестраивает 3D, проверяет правила производства, считает цену и деталировку. Собрать то, что фабрика не умеет делать, нельзя.":["The customer picks a model from your range and adapts it: dimensions, interior, fronts, hardware. The configurator rebuilds the 3D view, checks production rules and calculates price and cutting list. Anything the factory cannot make simply cannot be configured.","Der Kunde wählt ein Modell aus Ihrem Sortiment und passt es an: Maße, Innenausstattung, Fronten, Beschläge. Der Konfigurator baut das 3D-Modell neu auf, prüft die Fertigungsregeln und berechnet Preis und Zuschnittliste. Was der Hersteller nicht fertigen kann, lässt sich nicht konfigurieren."],"Попробовать демо":["Try the demo","Demo ausprobieren"],"Обсудить внедрение":["Discuss a rollout","Einführung besprechen"],"Живое демо":["Live demo","Live-Demo"],"Откройте шкаф «Лофт» и уменьшите глубину до 540 мм — шариковые направляющие станут недоступны, и конструктор объяснит почему. Поставьте три секции — у каждой будут своя дверь и своё наполнение. Добавьте изделие в проект и расставьте его на плане комнаты.":["Open the “Loft” wardrobe and reduce the depth to 540 mm — ball-bearing runners become unavailable and the configurator explains why. Set three sections — each gets its own door and interior. Add the item to a project and place it on a room plan.","Öffnen Sie den Kleiderschrank „Loft“ und verringern Sie die Tiefe auf 540 mm — Kugelauszüge werden gesperrt, und der Konfigurator erklärt, warum. Stellen Sie drei Sektionen ein — jede erhält eigene Tür und Einteilung. Fügen Sie das Möbel einem Projekt hinzu und stellen Sie es im Raumplan auf."],"Загружаем конструктор…":["Loading the configurator…","Konfigurator wird geladen…"],"Что это даёт фабрике":["What the factory gains","Was der Hersteller davon hat"],"Заказ без участия менеджера":["Orders without a sales manager","Bestellung ohne Verkäufer"],"Клиент сам подбирает размеры и комплектацию и сразу видит цену. Менеджер подключается к готовой конфигурации, а не к разговору «а сколько будет, если на 10 см шире».":["The customer chooses sizes and options and sees the price at once. The manager steps in with a finished configuration, not a conversation about “how much if it’s 10 cm wider”.","Der Kunde wählt Maße und Ausstattung selbst und sieht sofort den Preis. Der Verkauf steigt bei einer fertigen Konfiguration ein, nicht bei „was kostet es 10 cm breiter?“."],"В производство уходит только выполнимое":["Only feasible items reach production","In die Fertigung geht nur Machbares"],"Размеры вне диапазона, несовместимая фурнитура, слишком длинная полка — такие изделия собрать нельзя. Правила задаёт ваш технолог.":["Out-of-range sizes, incompatible hardware, an over-long shelf — such items cannot be configured. Your technologist sets the rules.","Maße außerhalb des Bereichs, unverträgliche Beschläge, zu lange Fachböden — solche Möbel lassen sich nicht konfigurieren. Die Regeln legt Ihr Techniker fest."],"Спецификация без ручного пересчёта":["Specifications without manual recalculation","Stückliste ohne Nachrechnen"],"Деталировка с размерами, кромка, фурнитура с количеством и цена по статьям считаются автоматически и выгружаются файлом.":["The cutting list with dimensions, edging, hardware quantities and an itemised price are calculated automatically and exported as a file.","Zuschnittliste mit Maßen, Kanten, Beschläge mit Stückzahlen und Preis nach Positionen werden automatisch berechnet und als Datei exportiert."],"КП за минуту":["A quote in a minute","Angebot in einer Minute"],"Коммерческое предложение с изображением изделия, параметрами и ценой сохраняется в PDF. Конфигурацией можно поделиться ссылкой.":["A quotation with an image of the item, its parameters and price is saved as a PDF. A configuration can be shared as a link.","Ein Angebot mit Bild, Parametern und Preis wird als PDF gespeichert. Eine Konfiguration lässt sich per Link teilen."],"Продажа комнаты целиком":["Selling the whole room","Den ganzen Raum verkaufen"],"Клиент расставляет настроенные изделия на плане своего помещения и покупает комплект, а не один шкаф.":["The customer arranges configured items on a plan of their room and buys a set, not a single wardrobe.","Der Kunde stellt die konfigurierten Möbel im Plan seines Raums auf und kauft ein Set statt eines einzelnen Schranks."],"Что проверяет конструктор":["What the configurator checks","Was der Konfigurator prüft"],"Каждая модель — это шаблон с параметрами и правилами «если → то». Недопустимый выбор блокируется сразу, с пояснением для клиента. Правила каждой модели видны в демо на вкладке «Правила фабрики».":["Each model is a template with parameters and “if → then” rules. An invalid choice is blocked immediately, with an explanation for the customer. Each model’s rules are visible in the demo on the “Factory rules” tab.","Jedes Modell ist eine Vorlage mit Parametern und „Wenn → Dann“-Regeln. Eine unzulässige Auswahl wird sofort gesperrt, mit einer Erklärung für den Kunden. Die Regeln jedes Modells sehen Sie in der Demo im Reiter „Herstellerregeln“."],"Диапазоны.":["Ranges.","Bereiche."],"Ширина, высота и глубина — только в пределах и с шагом, которые задала фабрика.":["Width, height and depth only within the limits and steps set by the factory.","Breite, Höhe und Tiefe nur innerhalb der Grenzen und Raster, die der Hersteller festlegt."],"Зависимости.":["Dependencies.","Abhängigkeiten."],"При глубине меньше 550 мм доступны только роликовые направляющие.":["Below 550 mm depth only roller runners are available.","Unter 550 mm Tiefe gibt es nur Rollenauszüge."],"Несовместимости.":["Incompatibilities.","Unverträglichkeiten."],"Стеклянный фасад недоступен, если дверь уже 400 мм.":["A glass front is unavailable if the door is narrower than 400 mm.","Eine Glasfront ist nicht möglich, wenn die Tür schmaler als 400 mm ist."],"Автоподбор.":["Auto-adjustment.","Automatische Anpassung."],"Число дверей купе подстраивается под ширину шкафа, у петель с доводчиком отключается лишний амортизатор.":["The number of sliding doors adapts to the wardrobe width; soft-close hinges drop the redundant damper.","Die Anzahl der Schwebetüren passt sich der Schrankbreite an; bei Scharnieren mit Dämpfung entfällt der überflüssige Dämpfer."],"Прочность.":["Strength.","Stabilität."],"Секция не шире 1000 мм, чтобы полка не провисала; высокий стеллаж — только с задней стенкой.":["Sections are at most 1000 mm wide so shelves do not sag; tall shelving only with a back panel.","Sektionen höchstens 1000 mm breit, damit Fachböden nicht durchhängen; hohe Regale nur mit Rückwand."],"Технология.":["Technology.","Fertigung."],"Распашная дверь выше 2450 мм не производится — заказ блокируется, пока клиент не добавит антресоль.":["Hinged doors taller than 2450 mm are not made — the order stays blocked until the customer adds a top cabinet.","Drehtüren über 2450 mm werden nicht gefertigt — die Bestellung bleibt gesperrt, bis der Kunde einen Aufsatz hinzufügt."],"Материалы.":["Materials.","Materialien."],"Декор предлагается только тот, что выпускается для выбранной плиты.":["Only decors produced for the selected board are offered.","Angeboten werden nur Dekore, die es für die gewählte Platte gibt."],"Цена.":["Price.","Preis."],"Материалы по площади, кромка по метражу, фурнитура по количеству, работы по формуле модели.":["Materials by area, edging by length, hardware by quantity, labour by the model’s formula.","Material nach Fläche, Kanten nach Länge, Beschläge nach Stückzahl, Arbeit nach der Formel des Modells."],"Комплект мебели на всю квартиру по плану":["Furniture for the whole flat from a plan","Möbel für die ganze Wohnung nach Grundriss"],"Клиент приносит план расстановки от дизайнера — и получает готовые комплекты из каталога фабрики, а не список из одного шкафа.":["The customer brings a layout plan from their designer — and gets complete sets from the factory catalogue, not a list with a single wardrobe.","Der Kunde bringt den Einrichtungsplan seines Designers mit — und erhält komplette Sets aus dem Herstellerkatalog statt einer Liste mit einem Schrank."],"Диваны, кровати, шкафы, столы отмечаются прямо на изображении плана, по помещениям. В демо открыт план-образец двухкомнатной квартиры.":["Sofas, beds, wardrobes and tables are marked right on the plan image, room by room. The demo opens a sample plan of a two-room flat.","Sofas, Betten, Schränke und Tische werden direkt im Grundriss markiert, Raum für Raum. Die Demo öffnet einen Beispielgrundriss einer Zweizimmerwohnung."],"Под каждое изделие указывается свободное место. Каталог подсказывает, какие размеры он закрывает.":["The free space is entered for each item. The catalogue shows which sizes it covers.","Für jedes Möbel wird der freie Platz angegeben. Der Katalog zeigt, welche Maße er abdeckt."],"Несколько комплектов":["Several sets","Mehrere Sets"],"«Точно по месту», «Эконом» и комплекты в одной коллекции — с ценой на всю квартиру. Любую позицию можно заменить.":["“Best fit”, “Budget” and single-collection sets — priced for the whole flat. Any item can be swapped.","„Passgenau“, „Preiswert“ und Sets aus einer Kollektion — mit Preis für die ganze Wohnung. Jede Position lässt sich tauschen."],"Каталог из фида сайта":["Catalogue from the website feed","Katalog aus dem Website-Feed"],"Товары загружаются из YML-фида, который интернет-магазин фабрики уже выгружает для маркетплейсов. Нет готового под размер — изделие уходит в конструктор.":["Products are loaded from the YML feed the factory’s online shop already exports for marketplaces. If nothing ready-made fits, the item goes to the configurator.","Produkte kommen aus dem YML-Feed, den der Onlineshop des Herstellers ohnehin für Marktplätze exportiert. Passt nichts Fertiges, geht das Möbel in den Konfigurator."],"Комплектация помещения по плану":["Furnishing a room from a plan","Raumeinrichtung nach Plan"],"Настроенные изделия переносятся на план комнаты. Система следит за тем, чтобы мебелью можно было пользоваться.":["Configured items are moved onto the room plan. The system makes sure the furniture can actually be used.","Konfigurierte Möbel werden in den Raumplan übernommen. Das System achtet darauf, dass sie sich auch benutzen lassen."],"Свой план":["Your own plan","Eigener Plan"],"Размеры комнаты, двери и окна. Обмерный план загружается картинкой и ложится подложкой в масштабе.":["Room size, doors and windows. A measured plan is uploaded as an image and placed underneath to scale.","Raummaße, Türen und Fenster. Ein Aufmaßplan wird als Bild hochgeladen und maßstabsgerecht hinterlegt."],"Привязка к стенам":["Wall snapping","Einrasten an Wänden"],"Изделия прилипают к стенам, поворачиваются и двигаются мышью или пальцем.":["Items snap to walls and are rotated and moved with a mouse or a finger.","Möbel rasten an Wänden ein und lassen sich mit Maus oder Finger drehen und verschieben."],"Проверка расстановки":["Layout check","Aufstellungsprüfung"],"Пересечения, выход за стены, перекрытый дверной проём, закрытое окно — подсвечиваются сразу.":["Overlaps, items beyond the walls, a blocked doorway, a covered window — all highlighted at once.","Überschneidungen, Möbel außerhalb der Wände, versperrte Türöffnungen, verdeckte Fenster — alles wird sofort markiert."],"Зоны открывания":["Opening zones","Öffnungszonen"],"Если перед шкафом не хватает места для двери или ящика, оформить заявку нельзя.":["If there is not enough room in front of a wardrobe for a door or drawer, the request cannot be sent.","Fehlt vor dem Schrank Platz für Tür oder Schubkasten, lässt sich die Anfrage nicht senden."],"Как внедряется":["How it is rolled out","So läuft die Einführung"],"Ваш ассортимент.":["Your range.","Ihr Sortiment."],"Переносим модели фабрики: параметры, диапазоны, правила, материалы, фурнитуру и цены.":["We transfer the factory’s models: parameters, ranges, rules, materials, hardware and prices.","Wir übernehmen die Modelle des Herstellers: Parameter, Bereiche, Regeln, Materialien, Beschläge und Preise."],"Кабинет технолога.":["Technologist’s workspace.","Arbeitsbereich für Techniker."],"Модели и правила редактируются без программиста, с версиями: начатые проекты остаются на своей версии модели.":["Models and rules are edited without a programmer, with versioning: projects already started stay on their model version.","Modelle und Regeln werden ohne Programmierer bearbeitet, mit Versionen: begonnene Projekte bleiben auf ihrer Modellversion."],"Ваш сайт и ваш стиль.":["Your website and your style.","Ihre Website, Ihr Stil."],"Конструктор встраивается на сайт фабрики или салона, цвета и шрифты — под бренд.":["The configurator is embedded on the factory’s or showroom’s website, with colours and fonts matching the brand.","Der Konfigurator wird in die Website des Herstellers oder Studios eingebettet, Farben und Schriften passend zur Marke."],"Ваш учёт.":["Your back office.","Ihre Warenwirtschaft."],"Заявка с деталировкой уходит в CRM и 1С, раскрой — в производство.":["The request with its cutting list goes to the CRM and ERP (1C), the cutting plan to production.","Die Anfrage mit Zuschnittliste geht in CRM und ERP (1C), der Zuschnitt in die Fertigung."],"Хотите такой конструктор для своей фабрики?":["Want a configurator like this for your factory?","Sie möchten so einen Konfigurator für Ihre Fabrik?"],"Покажем на ваших моделях и рассчитаем внедрение. Менеджер Константин, Telegram":["We will demo it on your models and estimate the rollout. Contact Konstantin on Telegram","Wir zeigen es an Ihren Modellen und kalkulieren die Einführung. Ansprechpartner Konstantin, Telegram"],"Написать в Telegram":["Message us on Telegram","Auf Telegram schreiben"],"Демонстрационный каталог: 5 параметрических моделей. Цены условные. Проект хранится в вашем браузере.":["Demo catalogue: 5 parametric models. Prices are indicative. Your project is stored in your browser.","Demokatalog: 5 parametrische Modelle. Richtpreise. Das Projekt wird in Ihrem Browser gespeichert."],"Конструктор мебели для фабрик":["Furniture configurator for factories","Möbelkonfigurator für Hersteller"]},qh=[{id:"ru",short:"RU",locale:"ru-RU"},{id:"en",short:"EN",locale:"en-GB"},{id:"de",short:"DE",locale:"de-DE"}],to="fb.lang",Ds=n=>qh.some(e=>e.id===n),Eu=n=>n.replace(/[.*+?^$()|[\]\\]/g,"\\$&");function rc(n){const e=new Map,t=[];for(const[i,r]of Object.entries(n)){if(!/\{\d\}/.test(i)){e.set(i,r);continue}const s=[],o=i.split(/(\{\d\})/).map(a=>{const c=/^\{(\d)\}$/.exec(a);return c?(s.push(Number(c[1])),"(.+?)"):Eu(a)}).join("");t.push({re:new RegExp(`^${o}$`,"s"),slots:s,out:r,weight:i.replace(/\{\d\}/g,"").length}),e.set(i,r)}return t.sort((i,r)=>r.weight-i.weight),{exact:e,patterns:t,cache:new Map}}const sc=n=>Object.fromEntries(Object.entries(yu).map(([e,t])=>[e,t[n]])),Yh={en:rc(sc(0)),de:rc(sc(1))},$s=n=>n.charAt(0).toUpperCase()+n.slice(1),no=n=>n.charAt(0).toLowerCase()+n.slice(1),Kh=(n,e)=>n.replace(/\{(\d)\}/g,(t,i)=>String(e[Number(i)]??""));function wu(n,e,t){const i=n.exact.get(t);if(i!==void 0)return i;const r=n.exact.get($s(t));if(r!==void 0)return e==="en"?no(r):r;const s=n.exact.get(no(t));if(s!==void 0)return $s(s)}function io(n,e){if(e==="ru"||!n||!/[А-Яа-яЁё]/.test(n))return n;const t=Yh[e],i=t.cache.get(n);if(i!==void 0)return i;let r=wu(t,e,n);if(r===void 0)for(const s of t.patterns){const o=s.re.exec(n);if(!o)continue;const a=[];s.slots.forEach((c,l)=>{a[c]=io(o[l+1],e)}),r=Kh(s.out,a);break}if(r===void 0&&/^[а-яё]/.test(n)){const s=io($s(n),e);s!==$s(n)&&(r=e==="en"?no(s):s)}return r??(r=n),t.cache.set(n,r),r}function Tu(){try{const e=new URLSearchParams(location.search).get("lang");if(Ds(e))return localStorage.setItem(to,e),e;const t=localStorage.getItem(to);if(Ds(t))return t}catch{}const n=typeof navigator>"u"?[]:navigator.languages??[navigator.language];for(const e of n){const t=e.slice(0,2).toLowerCase();if(Ds(t))return t}return"ru"}let Rn=typeof window>"u"?"ru":Tu();const Au=()=>Rn,qs=()=>qh.find(n=>n.id===Rn).locale,ro=new Set;function Ru(n){return ro.add(n),()=>{ro.delete(n)}}function Cu(n){Rn=n;try{localStorage.setItem(to,n)}catch{}jh();for(const e of ro)e(n)}function jh(){var n;if(!(typeof document>"u")){document.documentElement.lang=Rn;for(const e of document.querySelectorAll("[data-t]"))(n=e.dataset).t||(n.t=(e.textContent??"").trim()),e.textContent=C(e.dataset.t);for(const e of document.querySelectorAll("[data-t-attr]"))for(const t of e.dataset.tAttr.split(/\s+/)){const i=`data-t-src-${t}`;e.hasAttribute(i)||e.setAttribute(i,e.getAttribute(t)??""),e.setAttribute(t,C(e.getAttribute(i)))}for(const e of document.querySelectorAll("[data-lang]")){const t=e.dataset.lang===Rn;e.classList.toggle("on",t),e.setAttribute("aria-pressed",String(t))}}}function Pu(){if(!(typeof document>"u")){for(const n of document.querySelectorAll("[data-lang]"))n.addEventListener("click",()=>{Ds(n.dataset.lang)&&Cu(n.dataset.lang)});jh()}}function C(n,...e){if(!e.length)return io(n,Rn);const t=Rn==="ru"?n:Yh[Rn].exact.get(n)??n;return Kh(t,e)}const Du={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya"};function Lu(n){return n.replace(/[А-Яа-яЁё]/g,e=>{const t=e.toLowerCase(),i=Du[t]??"";return e===t?i:i.toUpperCase()})}const Xi=n=>Rn==="ru"?n:Lu(n),Ls=(n,e=0)=>n.toLocaleString(qs(),{minimumFractionDigits:e,maximumFractionDigits:e}),so={ldsp16:{id:"ldsp16",name:"ЛДСП 16 мм",price:1100,weight:10.4},ldsp18:{id:"ldsp18",name:"ЛДСП 18 мм",price:1350,weight:11.7},ldsp22:{id:"ldsp22",name:"ЛДСП 22 мм",price:1700,weight:14.3},mdf16:{id:"mdf16",name:"МДФ 16 мм",price:4200,weight:12},mdf18:{id:"mdf18",name:"МДФ 18 мм",price:4600,weight:13.5},mdf19:{id:"mdf19",name:"МДФ 19 мм",price:4800,weight:14.2},mdf22:{id:"mdf22",name:"МДФ 22 мм",price:5300,weight:16.5},hdf3:{id:"hdf3",name:"ХДФ 3 мм",price:350,weight:2.6},hdf4:{id:"hdf4",name:"ХДФ 4 мм",price:420,weight:3.4},mirror4:{id:"mirror4",name:"Зеркало 4 мм",price:3200,weight:10},glass4:{id:"glass4",name:"Стекло матовое 4 мм",price:3800,weight:10}},ur=(n,e)=>{const t=n==="mdf"?"mdf":"ldsp";return`${t}${(t==="mdf"?[16,18,19,22]:[16,18,22]).includes(e)?e:16}`},ac={laminate:{name:"ламинированный",k:1,materials:["ldsp"]},enamel:{name:"эмаль",k:1,materials:["mdf"]},pvc:{name:"плёнка ПВХ",k:.75,materials:["mdf"]},veneer:{name:"шпон",k:1.45,materials:["mdf"]}},mi=[{id:"white",name:"Белый",color:"#f3f2ee",materials:["ldsp"]},{id:"cashmere",name:"Кашемир",color:"#d8cfc2",materials:["ldsp","mdf"]},{id:"concrete",name:"Бетон светлый",color:"#b8b8b2",materials:["ldsp"]},{id:"graphite",name:"Графит",color:"#4a4e54",materials:["ldsp"]},{id:"sonoma",name:"Дуб сонома",color:"#c9a77c",wood:!0,materials:["ldsp"]},{id:"wotan",name:"Дуб вотан",color:"#a9784a",wood:!0,materials:["ldsp"],k:1.08},{id:"walnut",name:"Орех",color:"#6b4630",wood:!0,materials:["ldsp"],k:1.08},{id:"wenge",name:"Венге",color:"#3b2a22",wood:!0,materials:["ldsp"]},{id:"e-white",name:"Белый матовый",color:"#fafaf8",materials:["mdf"]},{id:"e-black",name:"Чёрный матовый",color:"#232325",materials:["mdf"]},{id:"e-olive",name:"Оливковый",color:"#7b8461",materials:["mdf"],k:1.1},{id:"e-blue",name:"Пыльно-синий",color:"#5d7590",materials:["mdf"],k:1.1},{id:"e-terra",name:"Терракота",color:"#b5654a",materials:["mdf"],k:1.1},{id:"chrome",name:"Хром",color:"#c9ccd1",materials:["metal"]},{id:"black",name:"Чёрный матовый",color:"#1d1d1f",materials:["metal"]},{id:"gold",name:"Золото брашированное",color:"#b9975b",materials:["metal"]}],Vn=n=>mi.find(e=>e.id===n)??mi[0],oc={pvc04:{id:"pvc04",name:"ПВХ 0,4 мм",price:35},pvc2:{id:"pvc2",name:"ПВХ 2 мм",price:75}},ot=(n,e,t,i)=>({code:n,name:e,unit:t,price:i}),ao=Object.fromEntries([ot("hinge","Петля Clip-On 105°, накладная","шт",120),ot("hinge_soft","Петля Clip-On 105° с доводчиком","шт",290),ot("hinge165","Петля Clip-On 165°, накладная","шт",260),ot("damper","Амортизатор силиконовый врезной","шт",35),ot("minifix","Стяжка эксцентриковая Minifix","компл",9),ot("dowel","Шкант 8×30 буковый","шт",1),ot("handle_bar","Ручка-скоба 128 мм","шт",350),ot("handle_knob","Ручка-кнопка","шт",180),ot("handle_profile","Ручка-профиль торцевая","м",650),ot("push_latch","Толкатель push-to-open","шт",260),ot("slide_roller","Направляющие роликовые","компл",280),ot("slide_ball","Направляющие шариковые полного выдвижения","компл",650),ot("slide_tandem","Ящик Tandembox с доводчиком","компл",3900),ot("rod","Штанга овальная 30×15","м",450),ot("rod_round","Штанга круглая Ø25","м",380),ot("rod_holder","Штангодержатель","шт",60),ot("leg","Ножка для шкафа регулируемая 100 мм","шт",150),ot("leg_kitchen","Ножка кухонная регулируемая 150 мм","шт",190),ot("plinth_clip","Клипса цоколя","шт",25),ot("shelf_support","Полкодержатель","шт",8),ot("confirmat","Евровинт 7×50","шт",3),ot("sliding_kit","Система купе: профиль и ролики на дверь","компл",4200),ot("sliding_rail","Направляющие купе верх + низ","м",900),ot("alu_frame","Рамка алюминиевая для стеклянного фасада","м",1200),ot("led_strip","Светодиодная лента в профиле","м",950),ot("led_spot","Светильник точечный","шт",650),ot("led_driver","Блок питания с выключателем","шт",1400)].map(n=>[n.code,n])),Zh={min:(...n)=>Math.min(...n.map(Number)),max:(...n)=>Math.max(...n.map(Number)),ceil:n=>Math.ceil(Number(n)),floor:n=>Math.floor(Number(n)),round:n=>Math.round(Number(n)),abs:n=>Math.abs(Number(n)),oneOf:(n,...e)=>e.includes(n),if:(n,e,t)=>n?e:t},Kr=/\s*(?:(\d+(?:\.\d+)?)|'([^']*)'|([A-Za-z_][A-Za-z0-9_]*)|(\|\||&&|==|!=|<=|>=|[-+*/%<>!(),]))/y;function Iu(n){const e=[];Kr.lastIndex=0;let t=0;for(;t<n.length&&!/^\s*$/.test(n.slice(t));){Kr.lastIndex=t;const i=Kr.exec(n);if(!i)throw new Error(`Выражение «${n}»: неожиданный символ на позиции ${t}`);i[1]!==void 0?e.push({t:"num",v:i[1]}):i[2]!==void 0?e.push({t:"str",v:i[2]}):i[3]!==void 0?e.push({t:"id",v:i[3]}):e.push({t:"op",v:i[4]}),t=Kr.lastIndex}return e}function Uu(n){const e=Iu(n);let t=0;const i=g=>e[t]&&e[t].t==="op"&&(g===void 0||e[t].v===g)?e[t].v:null,r=g=>{if(i(g)===null)throw new Error(`Выражение «${n}»: ожидалось «${g}»`);t++},s=(g,_)=>()=>{let f=_();for(;e[t]&&e[t].t==="op"&&g.includes(e[t].v);)f={k:"bin",op:e[t++].v,a:f,b:_()};return f},o=()=>{const g=e[t];if(!g)throw new Error(`Выражение «${n}» оборвано`);if(g.t==="num")return t++,{k:"lit",v:Number(g.v)};if(g.t==="str")return t++,{k:"lit",v:g.v};if(g.t==="id"){if(t++,g.v==="true"||g.v==="false")return{k:"lit",v:g.v==="true"};if(i("(")){if(!Object.hasOwn(Zh,g.v))throw new Error(`Выражение «${n}»: неизвестная функция ${g.v}`);r("(");const _=[];if(!i(")"))do _.push(d());while(i(",")&&++t);return r(")"),{k:"call",name:g.v,args:_}}return{k:"var",name:g.v}}if(g.v==="("){r("(");const _=d();return r(")"),_}throw new Error(`Выражение «${n}»: неожиданное «${g.v}»`)},a=()=>{const g=i("!")??i("-");return g?(t++,{k:"un",op:g,a:a()}):o()},c=s(["*","/","%"],a),l=s(["+","-"],c),h=s(["<","<=",">",">=","==","!="],l),p=s(["&&"],h),d=s(["||"],p),m=d();if(t<e.length)throw new Error(`Выражение «${n}»: лишнее «${e[t].v}»`);return m}function dn(n,e){switch(n.k){case"lit":return n.v;case"var":if(!Object.hasOwn(e,n.name))throw new Error(`Неизвестная переменная «${n.name}»`);return e[n.name];case"un":return n.op==="!"?!dn(n.a,e):-Number(dn(n.a,e));case"call":return Zh[n.name](...n.args.map(t=>dn(t,e)));case"bin":{if(n.op==="&&")return!!dn(n.a,e)&&!!dn(n.b,e);if(n.op==="||")return!!dn(n.a,e)||!!dn(n.b,e);const t=dn(n.a,e),i=dn(n.b,e);switch(n.op){case"==":return t===i;case"!=":return t!==i;case"<":return t<i;case"<=":return t<=i;case">":return t>i;case">=":return t>=i;case"+":return Number(t)+Number(i);case"-":return Number(t)-Number(i);case"*":return Number(t)*Number(i);case"/":return Number(t)/Number(i);default:return Number(t)%Number(i)}}}}const lc=new Map;function ci(n,e){let t=lc.get(n);return t||lc.set(n,t=Uu(n)),dn(t,e)}const cc=8,Nu=400,wr=25,Fu=100,vt=(n,e=0)=>n===void 0?e:Number(n),oo=n=>n.legs_kind==="kitchen"?150:Fu,Jh=n=>n.support==="legs"?oo(n):vt(n.plinth_h,0),Tr=6,hc=1e3,ai=200,ku=250;function Qh(n){const e=vt(n.thickness,16),t=Math.max(1,vt(n.sections,1)),i=vt(n.width)-2*e-(t-1)*e;if(n.section_mode!=="manual"||t===1)return Array.from({length:t},()=>i/t);const r=[];let s=i;for(let o=0;o<t-1;o++){const a=vt(n[`s${o+1}_w`],i/t);r.push(a),s-=a}return r.push(Math.max(50,s)),r}const dc={shelves:{rod:!1,shelves:!0,drawers:!1},rod:{rod:!0,shelves:!1,drawers:!1},rod_shelves:{rod:!0,shelves:!0,drawers:!1},drawers_shelves:{rod:!1,shelves:!0,drawers:!0},rod_drawers:{rod:!0,shelves:!1,drawers:!0},empty:{rod:!1,shelves:!1,drawers:!1}};function Is(n,e,t){const i=vt(n.thickness,16),r=n.fill_common?1:e+1,s=T=>n[`s${r}_${T}`],o=String(s("fill")??"shelves"),a=dc[o]??dc.shelves,c=a.rod&&vt(n.depth)>=480,l=a.shelves?Math.max(0,vt(s("shelves"))):0,h=a.drawers?Math.max(0,vt(s("drawers"))):0,p=s("top")==="on",d=vt(s("top_h"),400);let m=0,g=t,_;p&&(_=g-d-i,g=_),h>0&&(m+=h*ai+i);let f,u;if(c){const T=String(n.rod_pos??"top");T==="shelf"&&g-m>1300?(u=g-300-i,f=u-60):T==="center"?f=Math.min(g-80,(m+g)/2+hc/2):f=g-80,g=f-hc}const M=l>0&&s("shelf_mode")==="manual",y=[];let b=g-m;if(M){let T=m;for(let A=1;A<=l;A++)T+=vt(s(`h${A}`),300),y.push(T),T+=i;b=g-T}else if(c)for(let T=1;T<=l;T++)y.push(m+(g-m)*T/l-i);else for(let T=1;T<=l;T++)y.push(m+(g-m)*T/(l+1)-i/2);return{fill:o,rod:c,shelves:l,drawers:h,middle:s("middle")==="on",top:p,topH:d,door:String(n[`s${e+1}_door`]??"none"),manual:M,a:m,b:g,rodY:f,rodShelfY:u,topShelfY:_,shelfYs:y,overTop:b,free:g-m}}function hl(n){const e=vt(n.thickness,16),i=vt(n.width)-2*e,r=Math.max(1,vt(n.sections,1)),s=Math.max(1,vt(n.doors,1)),o=vt(n.height)-Jh(n),a=o-2*e-(n.mezzanine?Nu+e:0),c=Qh(n),l={t:e,inner_width:i,section_width:(i-(r-1)*e)/r,front_zone:o,inner_height:a,useful_depth:vt(n.depth)-(n.facade_type==="hinged"||n.facade_type==="drawers"?vt(n.facade_thickness,e)+2:n.facade_type==="sliding"?100:0)-(n.back==="none"?0:n.back_mount==="groove"?10+vt(n.back_thickness,3):vt(n.back_thickness,3))};let h=0,p=1/0,d=0,m=0;for(let g=0;g<Tr;g++){const _=g<r,f=_?c[g]:0;if(l[`s${g+1}_width`]=f,!_){Object.assign(l,{[`s${g+1}_free`]:0,[`s${g+1}_shelves_max`]:0,[`s${g+1}_drawers_max`]:1,[`s${g+1}_over_top`]:0});continue}const u=Is(n,g,a);h+=u.drawers;const M=Is({...n,[`s${n.fill_common?1:g+1}_shelves`]:0},g,a);l[`s${g+1}_free`]=M.free,l[`s${g+1}_shelves_max`]=Math.max(0,Math.floor(M.free/ku)-(M.rod?0:1));const y=Is({...n,[`s${n.fill_common?1:g+1}_drawers`]:0,[`s${n.fill_common?1:g+1}_shelves`]:0},g,a);if(l[`s${g+1}_drawers_max`]=Math.max(1,Math.floor((y.free-900-e)/ai)),l[`s${g+1}_over_top`]=Math.round(u.overTop),n.facade_type==="hinged"&&u.door!=="none"){const b=u.door==="double"?(f+e)/2:f+e;m+=u.door==="double"?2:1,p=Math.min(p,b),d=Math.max(d,b)}}return l.drawers_total=h,l.hinged_doors=m,l.leaf_width=n.facade_type==="sliding"?(i+(s-1)*wr)/s:m?p:9999,l.leaf_max=n.facade_type==="sliding"?l.leaf_width:d,l.last_width=c[c.length-1],l}const lo=n=>({...n,...hl(n)});function Ou(n,e){if(e===void 0||n.type==="info")return n.default;if(n.type==="number"){const t=Number(e);if(!Number.isFinite(t))return n.default;const i=n.min??-1/0,r=n.max??1/0,s=n.step??1,o=Number.isFinite(i)?i:0;return Math.min(r,Math.max(i,o+Math.round((t-o)/s)*s))}return n.type==="boolean"?!!e:n.type==="select"?n.options.some(t=>t.value===e)?e:n.default:mi.some(t=>t.id===e)?e:n.default}function Bu(n,e){const t={};for(const i of n.params)t[i.code]=Ou(i,e[i.code]);return{...t,...n.fixed}}const zu=n=>n.type==="decor"?mi.map(e=>e.id):(n.options??[]).map(e=>e.value);function Hu(n,e){const t=new Map(n.params.map(m=>[m.code,m])),i=Bu(n,e),r={...i},s={};let o={},a=[],c=lo(r),l=!1;const h=()=>(l&&(c=lo(r),l=!1),c),p=(m,g)=>{r[m]=g,l=!0};for(let m=0;m<cc;m++){let g=!1;a=[],o=Object.fromEntries(n.params.map(f=>[f.code,{hidden:!1,locked:!1,reasons:[],optionReasons:{}}]));const _=(f,u,M,y)=>{var P;const b=t.get(f);if(!b)return;const T=o[f],A=T.allow??zu(b);for(const I of A)u.includes(I)||((P=T.optionReasons)[I]??(P[I]=M));if(T.allow=A.filter(I=>u.includes(I)),!T.allow.includes(String(r[f]))){if(T.allow.length===0){a.push({level:"error",message:`«${b.name}»: нет допустимых значений. ${M}`,param:f,ruleId:y});return}p(f,T.allow.includes(String(b.default))?b.default:T.allow[0]),s[f]=M,g=!0}};for(const f of n.params){if(f.type!=="decor")continue;const u=f.decorSet==="metal"?"metal":String(r[f.materialParam??""]??"ldsp");u!=="metal"&&u!=="ldsp"&&u!=="mdf"||_(f.code,mi.filter(M=>M.materials.includes(u)).map(M=>M.id),"Декор не выпускается для выбранного материала")}for(const f of n.rules)if(ci(f.when,h()))for(const u of f.then){if(u.do==="error"||u.do==="warn"){a.push({level:u.do,message:f.message,ruleId:f.id});continue}const M=t.get(u.param);if(!M)continue;const y=o[u.param];if(u.do==="hide")y.hidden=!0;else if(u.do==="restrict")_(u.param,u.allow,f.message,f.id);else if(u.do==="set")y.locked=!0,y.reasons.push(f.message),r[u.param]!==u.value&&(p(u.param,u.value),s[u.param]=f.message,g=!0);else{const b=M.step??1;u.min!==void 0&&(y.min=Math.max(y.min??M.min??-1/0,Math.ceil(Number(ci(u.min,h()))/b)*b)),u.max!==void 0&&(y.max=Math.min(y.max??M.max??1/0,Math.floor(Number(ci(u.max,h()))/b)*b)),y.reasons.push(f.message);const T=y.min??M.min??-1/0,A=y.max??M.max??1/0;if(T>A){a.push({level:"error",message:`«${M.name}»: нет допустимых значений. ${f.message}`,param:u.param,ruleId:f.id});continue}const P=Math.min(A,Math.max(T,Number(r[u.param])));P!==r[u.param]&&(p(u.param,P),s[u.param]=f.message,g=!0)}}if(!g)break;m===cc-1&&a.push({level:"error",message:"Правила модели противоречат друг другу — обратитесь к менеджеру."})}const d=h();for(const m of n.params)m.type==="info"&&m.expr&&(r[m.code]=Number(ci(m.expr,d)));for(const m of n.params)m.type==="info"||o[m.code].hidden||i[m.code]===r[m.code]||!(m.code in e)||a.push({level:"info",param:m.code,message:`«${m.name}» изменено на «${er(m,r[m.code])}». ${s[m.code]??""}`.trim()});return{values:r,state:o,notices:a}}function er(n,e){var t,i,r;return n.type==="boolean"?e?"да":"нет":n.type==="number"||n.type==="info"?`${e}${n.unit?" "+n.unit:""}`:n.type==="decor"?((t=mi.find(s=>s.id===e))==null?void 0:t.name)??String(e):((r=(i=n.options)==null?void 0:i.find(s=>s.value===e))==null?void 0:r.label)??String(e)}const Vu=n=>n.startsWith("ldsp")||n.startsWith("mdf");function Gu(n,e,t){if(n==="facade")return String(t.facade_decor??t.body_decor);if(n==="shelf")return String(t.shelves_decor??t.body_decor);if(n==="plinth")return String(t.plinth_decor??t.body_decor);if(n==="drawerbox")return"white";if(n==="body")return String(e==="Задняя стенка"?t.back_decor??t.body_decor:t.body_decor)}function Wu(n,e){const t=new Map,i=ac[String(e.facade_cover)],r=(a,c,l)=>{const h=Gu(l,a,e),p=Vu(c.material),d=p&&h?Vn(h).name:"—",m=l==="facade"&&c.material.startsWith("mdf")&&i?i:c.material.startsWith("mdf")?ac.enamel:void 0,g=so[c.material].name+(m?`, ${m.name}`:""),_=(p&&h?Vn(h).k??1:1)*((m==null?void 0:m.k)??1),f=[a,c.material,g,d,c.l,c.w,c.t].join("|"),u=t.get(f),M=c.l*c.w/1e6;u?(u.qty+=1,u.area+=M,u.edge+=c.edge/1e3):t.set(f,{name:a,material:c.material,materialName:g,decor:d,l:c.l,w:c.w,t:c.t,qty:1,area:M,edge:c.edge/1e3,k:_})};for(const a of n.parts)a.bom&&r(a.name,a.bom,a.finish),a.bomExtra&&r(a.name,a.bomExtra,"extra");const s=[...t.values()],o=n.hardware.filter(a=>ao[a.code]).map(a=>{const c=ao[a.code];return{code:a.code,name:c.name,unit:c.unit,qty:a.qty,price:c.price,sum:Math.round(c.price*a.qty)}});return{panels:s,hardware:o,totals:{area:s.reduce((a,c)=>a+c.area,0),edge:s.reduce((a,c)=>a+c.edge,0),weight:s.reduce((a,c)=>a+c.area*so[c.material].weight,0),panelCount:s.reduce((a,c)=>a+c.qty,0)}}}function Xu(n,e,t){const i=[],r=new Map;for(const d of t.panels)r.set(d.materialName,(r.get(d.materialName)??0)+d.area*so[d.material].price*d.k);for(const[d,m]of r)i.push({group:"materials",label:d,amount:Math.round(m)});const s=oc[String(e.edge)]??oc.pvc2;t.totals.edge>0&&i.push({group:"materials",label:`Кромка ${s.name}, ${t.totals.edge.toFixed(1)} м`,amount:Math.round(t.totals.edge*s.price)});const o=i.reduce((d,m)=>d+m.amount,0),a=t.hardware.reduce((d,m)=>d+m.sum,0);a>0&&i.push({group:"hardware",label:"Фурнитура",amount:a});const c={...lo(e),materials:o,hardware_sum:a,subtotal:o+a},l=Math.round(Number(ci(n.price.base,c)));i.push({group:"work",label:n.price.baseLabel,amount:l}),c.subtotal+=l;for(const d of n.price.modifiers){if(d.when&&!ci(d.when,c))continue;const m=Math.round(Number(ci(d.amount,c)));i.push({group:d.group??"modifiers",label:d.label,amount:m}),(d.group??"modifiers")==="modifiers"&&(c.subtotal+=m)}let h=i.reduce((d,m)=>d+m.amount,0);const p=Number(e.discount??0);if(p>0){const d=-Math.round(h*p/100);i.push({group:"discount",label:`Скидка менеджера ${p}%`,amount:d}),h+=d}return{lines:i,total:Math.round(h/10)*10}}const fr=400,$u=100,uc=10,qu=n=>n<=900?2:n<=1600?3:n<=2e3?4:n<=2400?5:6,Tt=(n,e=0)=>n==null||n===""?e:Number(n);function Yu(n){const e=[],t=new Map,i=(ee,J)=>t.set(ee,(t.get(ee)??0)+J);let r=0;const s=Tt(n.width),o=Tt(n.height),a=Tt(n.depth),c=hl(n),l=Number(c.t),h=String(n.facade_type??"none"),p=h==="drawers",d=Jh(n),m=n.support==="legs",g=String(n.body_material??"ldsp"),_=ur(g,l),f=g==="ldsp",u=String(n.facade_material??"ldsp"),M=h==="sliding"?l:Tt(n.facade_thickness,l),y=ur(u==="mdf"?"mdf":"ldsp",M),b=u==="ldsp",T=Tt(n.facade_gap,3),A=h==="none"?0:Tt(n.facade_recess,10),P=Math.max(1,Tt(n.sections,1)),I=Qh(n),E=String(n.drawer_type??"roller"),x=Tt(n.drawer_gap,6),D=String(n.handle??"none"),z=h==="hinged"||p,O=n.has_bottom!=="off",X=n.has_top!=="off",j=p||n.top_mount==="overlay",Y=String(n.back??"hdf"),Z=Y==="none"?0:Tt(n.back_thickness,Y==="hdf"?3:l),$=Y==="none"?"none":String(n.back_mount??(Y==="hdf"?"overlay":"inset")),de=Y==="hdf"?`hdf${Z===4?4:3}`:ur("ldsp",Z),ce=$==="overlay"?Z:0,be=$==="inset"?Z:$==="groove"?uc+Z:ce,K=z?a-M-2:a,Fe=m?oo(n):0,H=s-2*l,ie=O?d+l:d,ye=X?o-l:o,ue=K-(h==="sliding"?$u:0),Re=String(n.body_joint??"confirmat"),ke=String(n.top_joint??Re),ge=(ee,J,fe,L,ae={})=>{const B={id:`p${r++}`,name:ee,shape:"box",size:J,pos:fe,finish:L,...ae};return e.push(B),B},Ne=(ee,J,fe,L,ae,B=l)=>({material:ee,l:Math.round(J),w:Math.round(fe),t:B,edge:ae?Math.round(L):0}),Be=(ee,J)=>i(ee==="dowel"?"dowel":ee==="minifix"?"minifix":"confirmat",J*(ee==="dowel"?2:1)),ft=X&&j?o-l:o,N=ee=>String((ee<0?n.side_left:n.side_right)??"floor");for(const ee of[-1,1]){const fe=O&&N(ee)==="bottom"?ie:Fe,L=ft-fe;ge(ee<0?"Боковина левая":"Боковина правая",[l,L,K-ce],[ee*(s/2-l/2),fe+L/2,ce+(K-ce)/2],"body",{bom:Ne(_,L,K-ce,L+(m?K:0),f)})}const Pt=-s/2+(O&&N(-1)==="bottom"?0:l),Xe=s/2-(O&&N(1)==="bottom"?0:l);if(O){const ee=Xe-Pt;ge("Дно",[ee,l,K-ce],[(Pt+Xe)/2,d+l/2,ce+(K-ce)/2],"body",{bom:Ne(_,ee,K-ce,ee,f)}),Be(Re,4)}X&&(j?ge("Крышка",[s,l,p?a:K-ce],[0,o-l/2,p?a/2:ce+(K-ce)/2],"body",{bom:Ne(_,s,p?a:K-ce,2*s+(p?2*a:K),f)}):ge("Крышка",[H,l,K-ce],[0,o-l/2,ce+(K-ce)/2],"body",{bom:Ne(_,H,K-ce,H,f)}),Be(ke,4));const He=ye-ie;if($==="overlay"){const ee=ft-Fe-4;ge("Задняя стенка",[s-4,ee,Z],[0,Fe+2+ee/2,Z/2],Y==="hdf"?"hdf":"body",{bom:Ne(de,ee,s-4,0,!1,Z)})}else $==="groove"?ge("Задняя стенка",[H+16,He+16,Z],[0,ie+He/2,uc+Z/2],Y==="hdf"?"hdf":"body",{bom:Ne(de,He+16,H+16,0,!1,Z)}):$==="inset"&&(ge("Задняя стенка",[H,He,Z],[0,ie+He/2,Z/2],"body",{bom:Ne(de,He,H,0,!1,Z)}),Be(Re,6));if(!m&&d>0){const ee=Tt(n.plinth_thickness,l),J=ur(String(n.plinth_material??"ldsp"),ee),fe=Tt(n.plinth_front,20),L=Tt(n.plinth_back,0);ge("Цоколь",[H,d,ee],[0,d/2,K-fe-ee/2],"plinth",{bom:Ne(J,H,d,0,!1,ee)}),L>0&&ge("Цоколь задний",[H,d,ee],[0,d/2,ce+L+ee/2],"plinth",{bom:Ne(J,H,d,0,!1,ee)}),i("plinth_clip",L>0?4:2)}if(m){const ee=oo(n),J=s>1200?6:4,fe=J===6?[-1,0,1]:[-1,1],L=n.legs_mount==="bottom"?100:60;for(const ae of fe)for(const B of[L,K-L])ge("Опора",[ee,40,40],[ae*(s/2-L),ee/2,B],"metal",{shape:"cyl",axis:"y"});i(n.legs_kind==="kitchen"?"leg_kitchen":"leg",J)}const Pe=!!n.mezzanine&&h==="hinged",Ze=o-l-fr-l,De=Pe?Ze:ye,R=ue-be;Pe&&(ge("Полка антресоли",[H,l,R],[0,Ze+l/2,be+R/2],"body",{bom:Ne(_,H,R,H,f)}),Be(Re,4),H>1e3&&(ge("Перегородка антресоли",[l,fr,R-A],[0,Ze+l+fr/2,be+(R-A)/2],"body",{bom:Ne(_,fr,R-A,fr,f)}),Be(Re,4)));const S=[];let V=-s/2+l;for(let ee=0;ee<P;ee++)S.push(V),V+=I[ee]+l;const te=De-ie;for(let ee=0;ee<P-1;ee++)ge("Перегородка",[l,te,R],[S[ee]+I[ee]+l/2,ie+te/2,be+R/2],"body",{bom:Ne(_,te,R,te,f)}),Be(Re,4);const re=R-A,Q=(ee,J,fe,L="Полка",ae="shelf")=>{ge(L,[J,l,re],[ee,fe,be+re/2],ae,{bom:Ne(_,J,re,J,f)}),i("shelf_support",4)},ve=Math.max(250,Math.min(Tt(n.drawer_len_max,600),Math.floor((R-40)/50)*50)),me=(ee,J,fe,L,ae,B)=>{J=Math.max(3*l,J);const q=ae-ve/2,se=E==="tandem";for(const oe of[0,1])ge("Боковина ящика",[l,L,ve],[ee+(oe?J-l/2:l/2),fe+L/2,q],se?"metal":"drawerbox",{motion:B,bom:se?void 0:Ne("ldsp16",ve,L,ve,!0,16)});ge("Задняя стенка ящика",[J-2*l,L,l],[ee+J/2,fe+L/2,ae-ve+l/2],"drawerbox",{motion:B,bom:Ne("ldsp16",J-2*l,L,J-2*l,!0,16)}),ge("Дно ящика",[J,3,ve],[ee+J/2,fe-1.5,q],"hdf",{motion:B,bom:Ne("hdf3",J,ve,0,!1,3)}),i(`slide_${E}`,1),i("confirmat",8)},xe=n.rod_kind==="round"?"rod_round":"rod",qe=Number(c.inner_height);if(!p)for(let ee=0;ee<P;ee++){const J=Is(n,ee,qe),fe=I[ee],L=S[ee],ae=J.middle&&fe>2*l+100?[[L,(fe-l)/2],[L+(fe-l)/2+l,(fe-l)/2]]:[[L,fe]];if(J.top&&J.topShelfY!==void 0&&(Q(L+fe/2,fe,ie+J.topShelfY+l/2,"Полка верхней секции","body"),Be(Re,4)),J.middle){const B=J.topShelfY??te;ge("Средняя стойка",[l,B,re],[L+fe/2,ie+B/2,be+re/2],"body",{bom:Ne(_,B,re,B,f)}),Be(Re,4)}for(const[B,q]of ae){const se=B+q/2;if(J.drawers>0){const oe=ue-A;for(let Ae=0;Ae<J.drawers;Ae++){const tt=ie+Ae*ai,Je={type:"slide",dist:ve*.75};ge("Фасад внутреннего ящика",[Math.max(40,q-x),ai-20,l],[se,tt+ai/2,oe-l/2],"body",{motion:Je,bom:Ne(_,q-x,ai-20,2*(q-x+ai-20),f)}),me(B+13,Math.max(3*l,q-26),tt+30,120,oe-l,Je)}Q(se,q,ie+J.a-l/2,"Полка над ящиками",n.shelf_over_drawers==="body"?"body":"shelf")}if(J.rod&&J.rodY!==void 0){const oe=ie+J.rodY;J.rodShelfY!==void 0&&Q(se,q,ie+J.rodShelfY+l/2),ge("Штанга",[q,25,25],[se,oe,be+R/2],"metal",{shape:"cyl",axis:"x"}),i(xe,q/1e3),i("rod_holder",2)}for(const oe of J.shelfYs)Q(se,q,ie+oe+l/2)}}const le=(ee,J,fe,L,ae,B)=>{if(D==="bar"){ge("Ручка-скоба",L?[10,160,10]:[160,10,10],[ee,J,fe+28],"metal",{motion:B,facade:!0});for(const se of[-1,1])ge("Ножка ручки",[10,10,24],[ee+(L?0:se*64),J+(L?se*64:0),fe+12],"metal",{motion:B,facade:!0});i("handle_bar",1)}else D==="knob"?(ge("Ручка-кнопка",[24,28,28],[ee,J,fe+12],"metal",{shape:"cyl",axis:"z",motion:B,facade:!0}),i("handle_knob",1)):D==="profile"?i("handle_profile",ae/1e3):i("push_latch",1)},Me=u==="glass"?"glass":"facade",Le=(ee,J,fe,L,ae,B,q)=>{const se=u==="mirror",oe=ge(ee,[J,fe,M],[L,ae,B],se?"body":Me,{motion:q,facade:!0,bom:u==="glass"?Ne("glass4",fe,J,0,!1,4):Ne(se?_:y,fe,J,2*(J+fe),se?f:b,se?l:M)});return se&&ge("Зеркало",[J-6,fe-6,4],[L,ae,B+M/2+2],"mirror",{motion:q,facade:!0,bom:Ne("mirror4",fe-6,J-6,0,!1,4)}),u==="glass"&&i("alu_frame",2*(J+fe)/1e3),oe};if(h==="hinged"){const ee=n.hinge_kind==="clip_soft"?"hinge_soft":n.hinge_kind==="clip165"?"hinge165":"hinge",J=K+2+M/2,fe=[[d+2,Pe?Ze+l/2-1:o-2,"Дверь"]];Pe&&fe.push([Ze+l/2+2,o-2,"Дверь антресоли"]);for(let L=0;L<P;L++){const ae=String(n[`s${L+1}_door`]??"none");if(ae==="none")continue;const B=L===0?-s/2+2:S[L]-l/2+T/2,q=L===P-1?s/2-2:S[L]+I[L]+l/2-T/2,se=ae==="double"?[[B,(B+q)/2-T/2,!0],[(B+q)/2+T/2,q,!1]]:[[B,q,ae==="left"]];for(const[oe,Ae,tt]of fe){const Je=Ae-oe;for(const[$e,Dt,Ot]of se){const yi=Math.max(40,Dt-$e),Ei=($e+Dt)/2,en={type:"hinge",pivot:[Ot?$e:Dt,K+2],dir:Ot?-1:1};Le(tt,yi,Je,Ei,oe+Je/2,J,en);const cr=Ei+(Ot?1:-1)*(yi/2-40),Xr=tt==="Дверь"?oe<1050&&Ae>1250?1050:oe+Je/2:oe+90;D==="profile"&&ge("Ручка-профиль",[18,Je,8],[Ei+(Ot?1:-1)*(yi/2-9),oe+Je/2,J+M/2+4],"metal",{motion:en,facade:!0}),le(cr,Xr,J+M/2,!0,Je,en),i(ee,qu(Je)),n.damper&&i("damper",1)}}}}if(h==="sliding"){const ee=Tt(n.doors,2),J=(H+(ee-1)*wr)/ee,fe=ie+12,L=ye-12-fe,ae=Tt(n.facade_thickness,16),B=u==="mirror"?"mirror4":u==="glass"?"glass4":ur("ldsp",ae),q=u==="mirror"?"mirror":u==="glass"?"glass":"facade";for(let se=0;se<ee;se++){const oe=-s/2+l+J/2+se*(J-wr),Ae=a-(se%2===0?70:30),Je={type:"shift",dx:se===0?J-wr:se===ee-1&&ee===4?-(J-wr):0};ge("Наполнение двери-купе",[J-50,L-60,10],[oe,fe+L/2,Ae],q,{motion:Je,facade:!0,bom:Ne(B,L-60,J-50,0,!1,u==="ldsp"?ae:4)});for(const $e of[-1,1])ge("Профиль вертикальный",[25,L,28],[oe+$e*(J/2-12.5),fe+L/2,Ae],"metal",{motion:Je,facade:!0});for(const $e of[-1,1])ge("Профиль горизонтальный",[J-50,30,14],[oe,fe+L/2+$e*(L/2-15),Ae],"metal",{motion:Je,facade:!0});i("sliding_kit",1)}for(const se of[ie+4,ye-4])ge("Направляющая купе",[H,8,84],[0,se,a-50],"metal");i("sliding_rail",H/1e3)}if(p){const ee=Math.max(1,Tt(n.drawers)),J=(s-4-(P-1)*T)/P,fe=d+2,L=(o-l-2-fe-(ee-1)*T)/ee,ae=K+2+M/2;for(let B=0;B<P;B++)for(let q=0;q<ee;q++){const se=-s/2+2+J/2+B*(J+T),oe=fe+q*(L+T),Ae={type:"slide",dist:ve*.75};Le("Фасад ящика",J,L,se,oe+L/2,ae,Ae),D==="profile"&&ge("Ручка-профиль",[J,18,8],[se,oe+L-9,ae+M/2+4],"metal",{motion:Ae,facade:!0}),le(se,oe+L*.62,ae+M/2,!1,J,Ae),me(S[B]+13,I[B]-26,Math.max(oe+20,ie+8),Math.max(70,Math.min(180,L-50)),K,Ae)}}const Ue=String(n.lighting??"none");if(Ue==="strip")ge("Светодиодная лента",[H-40,6,14],[0,De-3,ue-A-30],"light"),i("led_strip",(H-40)/1e3),i("led_driver",1);else if(Ue==="spots"){for(let ee=0;ee<P;ee++)ge("Светильник",[8,60,60],[S[ee]+I[ee]/2,De-4,be+R*.6],"light",{shape:"cyl",axis:"y"});i("led_spot",P),i("led_driver",1)}const Se=[...t].map(([ee,J])=>({code:ee,qty:Math.round(J*100)/100}));return{parts:e,hardware:Se,dims:{w:s,h:o,d:a}}}const Ku=[{id:"config",name:"Конфигурация"},{id:"materials",name:"Материалы"},{id:"hardware",name:"Фурнитура"}],ju=[{id:"dims",name:"Габариты",tab:"config"},{id:"body",name:"Корпус",tab:"config"},{id:"facade",name:"Фасад",tab:"config"},{id:"back",name:"Задняя стенка",tab:"config"},{id:"drawers",name:"Выдвижные ящики",tab:"config"},{id:"plinth",name:"Цоколь",tab:"config"},{id:"section",name:"Настройка секции",tab:"config"},{id:"extra",name:"Дополнительно",tab:"config"},{id:"manager",name:"Менеджеру",tab:"config"},{id:"mat_body",name:"Корпус",tab:"materials",summary:["body_material","thickness"]},{id:"mat_back",name:"Задняя стенка",tab:"materials",summary:["back","back_thickness"]},{id:"mat_plinth",name:"Цоколь",tab:"materials",summary:["plinth_material","plinth_thickness"]},{id:"mat_shelves",name:"Полки",tab:"materials",summary:["body_material","thickness"]},{id:"mat_facade",name:"Фасад",tab:"materials",summary:["facade_material","facade_cover","facade_thickness"]},{id:"hw_hinges",name:"Петли и амортизаторы",tab:"hardware"},{id:"hw_slides",name:"Направляющие",tab:"hardware"},{id:"hw_rod",name:"Штанга",tab:"hardware"},{id:"hw_legs",name:"Ножки",tab:"hardware"},{id:"hw_handles",name:"Ручки",tab:"hardware"},{id:"hw_light",name:"Подсветка",tab:"hardware"}],ne=(n,e,t,i)=>({value:n,label:e,hint:t,hardware:i}),na={affectsGeometry:!0,affectsPrice:!0},Jt=(n,e,t,i,r,s)=>({code:n,name:e,group:"dims",type:"number",unit:"мм",min:t,max:i,step:r,default:s,...na}),Yt=(n,e,t,i,r,s,o,a="мм",c)=>({code:n,name:e,group:t,type:"number",unit:a,min:i,max:r,step:s,default:o,hint:c,...na}),gi=(n,e,t,i,r,s,o)=>Yt(n,e,t,i,r,1,s,"шт",o),ze=(n,e,t,i,r,s)=>({code:n,name:e,group:t,type:"select",default:i,options:r,hint:s,...na}),dl=(n,e,t,i,r)=>({code:n,name:e,group:t,type:"boolean",default:i,hint:r,...na}),co=(n,e,t,i,r="мм")=>({code:n,name:e,group:t,type:"info",default:0,expr:i,unit:r}),Dr=[ne("on","Включено"),ne("off","Выключено")],Ar=Array.from({length:8},(n,e)=>`h${e+1}`),ul=(n,e)=>[dl("fill_common","Общее наполнение конструкции","body",!1,"Все секции повторяют настройку секции 1"),gi("sections","Количество секций","body",1,n,2),ze("section_mode","Ширина секций","body","even",[ne("even","Равномерно"),ne("manual","Вручную")]),...Array.from({length:n-1},(t,i)=>Yt(`s${i+1}_w`,`Ширина секции ${i+1}`,"body",250,1200,10,500)),co("last_w","Ширина последней секции","body","last_width"),ze("side_left","Тип установки стойки слева","body","floor",[ne("floor","На пол"),ne("bottom","На дно")]),ze("side_right","Тип установки стойки справа","body","floor",[ne("floor","На пол"),ne("bottom","На дно")]),ze("has_bottom","Дно","body","on",Dr),ze("has_top","Крышка","body","on",Dr),ze("body_joint","Соединительная фурнитура корпуса","body","confirmat",[ne("confirmat","Конфирмат",void 0,"confirmat"),ne("minifix","Minifix","Эксцентриковая стяжка, снаружи не видна","minifix"),ne("dowel","Шкант",void 0,"dowel")]),ze("joint_side_left","Сторона установки стяжек: левая боковина","body","inner",[ne("inner","Внутренняя"),ne("outer","Наружная")]),ze("joint_side_right","Сторона установки стяжек: правая боковина","body","inner",[ne("inner","Внутренняя"),ne("outer","Наружная")]),ze("joint_side_bottom","Сторона установки стяжек: дно","body","inner",[ne("inner","Внутренняя"),ne("outer","Наружная")]),ze("top_joint","Соединительная фурнитура крышки","body","confirmat",[ne("confirmat","Конфирмат",void 0,"confirmat"),ne("minifix","Minifix",void 0,"minifix"),ne("dowel","Шкант",void 0,"dowel")]),ze("top_mount","Тип установки крышки","body","inset",[ne("inset","Вкладная","Между боковинами"),ne("overlay","Накладная","Поверх боковин, на всю ширину")]),ze("shelf_over_drawers","Материал полки над ящиками","body","shelves",[ne("shelves","Материал полок"),ne("body","Материал корпуса")]),co("useful_depth_i","Полезная глубина шкафа","body","useful_depth"),...e?[ze("rod_pos","Расположение гардеробных штанг","body","top",[ne("top","С привязкой к верху"),ne("shelf","С привязкой к полке","Полка над штангой, если секция выше 1300 мм"),ne("center","По центру")])]:[]],fl=n=>[{id:"width-mode",when:"section_mode != 'manual' || sections == 1",then:[{do:"hide",param:"last_w"},...Array.from({length:n-1},(e,t)=>({do:"hide",param:`s${t+1}_w`}))],message:"Секции одинаковой ширины."},...Array.from({length:n-1},(e,t)=>({id:`s${t+1}-w-hidden`,when:`sections <= ${t+1}`,then:[{do:"hide",param:`s${t+1}_w`}],message:"Последняя секция берёт остаток ширины."})),...Array.from({length:n-1},(e,t)=>({id:`s${t+1}-w-limit`,when:`section_mode == 'manual' && sections > ${t+1}`,then:[{do:"limit",param:`s${t+1}_w`,max:"max(250, inner_width - (sections - 1) * (t + 250))"}],message:"Каждой секции нужно не меньше 250 мм."})),{id:"last-w",when:"section_mode == 'manual' && sections > 1 && last_width < 250",then:[{do:"error"}],message:"Последней секции остаётся меньше 250 мм — уменьшите ширину остальных."},{id:"plinth-bottom",when:"support == 'plinth'",then:[{do:"set",param:"has_bottom",value:"on"}],message:"Цоколь крепится к дну."},{id:"side-bottom",when:"has_bottom == 'off'",then:[{do:"set",param:"side_left",value:"floor"},{do:"set",param:"side_right",value:"floor"}],message:"Без дна стойки стоят на полу."}],ed=n=>[ze("facade_material","Материал фасада","facade",n.material,n.materials),ze("facade_cover","Покрытие фасада","facade","laminate",[ne("laminate","Ламинированный"),ne("enamel","Эмаль"),ne("pvc","Плёнка ПВХ"),ne("veneer","Шпон")]),ze("facade_thickness","Толщина материала фасада","facade","18",[ne("16","16 мм"),ne("18","18 мм"),ne("19","19 мм"),ne("22","22 мм")]),Yt("facade_recess","Отступ от полки до фасада","facade",5,40,1,10),Yt("facade_gap","Зазор фасада","facade",1.5,4,.5,3)],td=[{id:"cover-ldsp",when:"facade_material == 'ldsp'",then:[{do:"restrict",param:"facade_cover",allow:["laminate"]},{do:"restrict",param:"facade_thickness",allow:["16","18","22"]}],message:"ЛДСП выпускается только ламинированной, толщиной 16, 18 и 22 мм."},{id:"cover-mdf",when:"facade_material == 'mdf'",then:[{do:"restrict",param:"facade_cover",allow:["enamel","pvc","veneer"]}],message:"МДФ покрывается эмалью, плёнкой ПВХ или шпоном."},{id:"cover-glass",when:"oneOf(facade_material, 'mirror', 'glass')",then:[{do:"hide",param:"facade_cover"},{do:"hide",param:"facade_thickness"},{do:"hide",param:"facade_decor"}],message:"У зеркала и стекла нет покрытия и декора."}],pl=[ze("back","Материал задней стенки","back","hdf",[ne("hdf","ХДФ"),ne("ldsp","ЛДСП"),ne("none","Без стенки")]),ze("back_thickness","Толщина материала задней стенки","back","3",[ne("3","3 мм"),ne("4","4 мм"),ne("16","16 мм"),ne("18","18 мм")]),ze("back_mount","Тип установки задней стенки","back","overlay",[ne("overlay","Накладная","Прибивается сзади к корпусу"),ne("groove","В паз","Заходит в паз боковин"),ne("inset","Вкладная","Между боковинами, на стяжках")])],ml=[{id:"back-hdf",when:"back == 'hdf'",then:[{do:"restrict",param:"back_thickness",allow:["3","4"]},{do:"restrict",param:"back_mount",allow:["overlay","groove"]},{do:"hide",param:"back_decor"}],message:"ХДФ 3–4 мм ставится накладной или в паз; цвет — белый."},{id:"back-ldsp",when:"back == 'ldsp'",then:[{do:"restrict",param:"back_thickness",allow:["16","18"]},{do:"restrict",param:"back_mount",allow:["inset","groove"]}],message:"ЛДСП 16–18 мм ставится вкладной или в паз."},{id:"back-none",when:"back == 'none'",then:[{do:"hide",param:"back_thickness"},{do:"hide",param:"back_mount"},{do:"hide",param:"back_decor"}],message:"Задней стенки нет."}],gl=[Yt("drawer_len_max","Максимальная длина выдвижного ящика","drawers",250,600,50,500,"мм","Фактическая длина — по глубине корпуса"),Yt("drawer_gap","Зазор фасада внутреннего ящика","drawers",2,20,1,6)],_l=ze("drawer_type","Направляющие ящиков","hw_slides","ball",[ne("roller","Роликовые",void 0,"slide_roller"),ne("ball","Шариковые","Полное выдвижение","slide_ball"),ne("tandem","Tandembox","Металлические борта, доводчик","slide_tandem")]),ia=n=>[ze("support","Опора","plinth",n,[ne("plinth","Цоколь"),ne("legs","Ножки")]),ze("plinth_material","Материал цоколя","plinth","ldsp",[ne("ldsp","ЛДСП"),ne("mdf","МДФ")]),ze("plinth_thickness","Толщина материала цоколя","plinth","16",[ne("16","16 мм"),ne("18","18 мм")]),Yt("plinth_h","Высота цокольной части","plinth",50,150,10,80),Yt("plinth_front","Смещение цоколя переднее","plinth",0,60,5,20),Yt("plinth_back","Смещение цоколя заднее","plinth",0,60,5,0,"мм","0 — без заднего цоколя"),ze("legs_mount","Тип установки ножек","plinth","side_bottom",[ne("side_bottom","На боковину и дно"),ne("bottom","На дно")])],ra=[{id:"legs",when:"support == 'legs'",then:["plinth_material","plinth_thickness","plinth_h","plinth_front","plinth_back","plinth_decor"].map(n=>({do:"hide",param:n})),message:"Изделие на ножках — цоколя нет."},{id:"plinth",when:"support == 'plinth'",then:[{do:"hide",param:"legs_mount"},{do:"hide",param:"legs_kind"}],message:"Изделие на цоколе — ножек нет."}],Lr=(n,e,t,i,r)=>({code:n,name:e,group:t,type:"decor",decorSet:"board",materialParam:i,default:r,affectsPrice:!0}),sa=n=>[ze("body_material","Материал корпуса","mat_body","ldsp",[ne("ldsp","ЛДСП"),ne("mdf","МДФ в эмали")]),ze("thickness","Толщина плиты","mat_body","16",[ne("16","16 мм"),ne("18","18 мм")]),Lr("body_decor","Декор корпуса","mat_body","body_material","white"),ze("edge","Кромка","mat_body","pvc2",[ne("pvc04","ПВХ 0,4 мм"),ne("pvc2","ПВХ 2 мм","Скруглённая, устойчива к сколам")]),...n?[Lr("back_decor","Декор задней стенки","mat_back","body_material","white")]:[],Lr("plinth_decor","Декор цоколя","mat_plinth","plinth_material","white")],vl=Lr("shelves_decor","Декор полок","mat_shelves","body_material","white"),xl=n=>Lr("facade_decor","Декор фасада","mat_facade","facade_material",n),aa={id:"mdf-edge",when:"body_material == 'mdf'",then:[{do:"hide",param:"edge"}],message:"МДФ в эмали не кромится."},Zu=[ze("hinge_kind","Петли","hw_hinges","clip_soft",[ne("clip","Clip-On 105°",void 0,"hinge"),ne("clip_soft","Clip-On 105° с доводчиком",void 0,"hinge_soft"),ne("clip165","Clip-On 165°","Полное открывание","hinge165")]),{...dl("damper","Амортизатор силиконовый","hw_hinges",!1,"На петли без доводчика"),hardware:"damper"}],Ju=[{id:"hinges-hidden",when:"facade_type != 'hinged'",then:[{do:"hide",param:"hinge_kind"},{do:"hide",param:"damper"}],message:"Петли — только для распашных фасадов."},{id:"damper-soft",when:"hinge_kind == 'clip_soft'",then:[{do:"set",param:"damper",value:!1}],message:"У петли с доводчиком амортизатор не нужен."},{id:"push-closers",when:"handle == 'none'",then:[{do:"restrict",param:"hinge_kind",allow:["clip","clip165"]},{do:"set",param:"damper",value:!1}],message:"Открывание нажатием несовместимо с доводчиками и амортизаторами."}],nd=ze("rod_kind","Штанга","hw_rod","oval",[ne("oval","Овальная 30×15",void 0,"rod"),ne("round","Круглая Ø25",void 0,"rod_round")]),bl=ze("legs_kind","Вариант ножек","hw_legs","cabinet",[ne("cabinet","Для шкафа, 100 мм",void 0,"leg"),ne("kitchen","Кухонные регулируемые, 150 мм",void 0,"leg_kitchen")]),id=(n="bar")=>[ze("handle","Ручки","hw_handles",n,[ne("bar","Скоба",void 0,"handle_bar"),ne("knob","Кнопка",void 0,"handle_knob"),ne("profile","Профиль",void 0,"handle_profile"),ne("none","Без ручек","Открывание нажатием","push_latch")]),{code:"metal_decor",name:"Цвет фурнитуры",group:"hw_handles",type:"decor",decorSet:"metal",default:"black"}],Ml=ze("lighting","Подсветка","hw_light","none",[ne("none","Нет"),ne("strip","Лента",void 0,"led_strip"),ne("spots","Точечная",void 0,"led_spot")]),oa=[{code:"assembly",name:"Сборка у клиента",group:"extra",type:"boolean",default:!1,affectsPrice:!0},{code:"discount",name:"Скидка",group:"manager",type:"number",unit:"%",min:0,max:20,step:1,default:0,visibility:"manager",affectsPrice:!0}],Hr={label:"Сборка у клиента",when:"assembly",amount:"max(2500, subtotal * 0.1)",group:"services"},Qu=[ne("shelves","Полки"),ne("rod","Штанга"),ne("rod_shelves","Штанга и полки"),ne("drawers_shelves","Ящики и полки"),ne("rod_drawers","Штанга и ящики"),ne("empty","Пусто")],Sl=(n,e=Qu)=>n.flatMap((t,i)=>{const r=i+1,s=`s${r}_`,o=`Секция ${r}: `,a=c=>({...c,group:"section",section:r});return[a(ze(`${s}middle`,`${o}средняя стойка`,"section","off",Dr,"Делит секцию на две половины")),a(ze(`${s}fill`,`${o}наполнение секции`,"section",t.fill,e)),a(ze(`${s}top`,`${o}верхняя секция`,"section","off",Dr,"Отдельное отделение вверху секции")),a(Yt(`${s}top_h`,`${o}высота верхней секции`,"section",250,600,50,400)),a(ze(`${s}cut`,`${o}произвольный вырез в задней стенке`,"section","off",Dr,"Под плинтус или трубы")),a(Yt(`${s}cut_h`,`${o}высота выреза`,"section",30,300,10,80)),a(Yt(`${s}cut_d`,`${o}глубина выреза`,"section",10,100,5,30)),a(ze(`${s}door`,`${o}открытие фасада`,"section",r%2?"left":"right",[ne("none","Открытая","Без двери"),ne("left","Петли слева"),ne("right","Петли справа"),ne("double","Две створки")])),a(ze(`${s}shelf_mode`,`${o}расположение полок по высоте`,"section","even",[ne("even","Равномерно"),ne("manual","Вручную")])),a(gi(`${s}shelves`,`${o}количество полок`,"section",0,8,t.shelves??4)),a(gi(`${s}drawers`,`${o}количество ящиков`,"section",1,4,t.drawers??2)),...Ar.map((c,l)=>a(Yt(`${s}${c}`,`${o}${l===0?"высота до 1-й полки":`высота от ${l}-й до ${l+1}-й полки`}`,"section",100,1500,5,300))),a(co(`${s}h_top`,`${o}высота над верхней полкой`,"section",`s${r}_over_top`))]}),yl=(n,e)=>{const t=`s${n}_`,i=["middle","fill","top","top_h","cut","cut_h","cut_d","door","shelf_mode","shelves","drawers",...Ar,"h_top"],r=i.filter(l=>l!=="door"&&!l.startsWith("cut")),s=l=>l.map(h=>({do:"hide",param:t+h})),o=`sections >= ${n}`,a=`${o} && oneOf(${t}fill, 'shelves', 'rod_shelves', 'drawers_shelves')`,c=`${o} && oneOf(${t}fill, 'drawers_shelves', 'rod_drawers')`;return[...n>1?[{id:`${t}hidden`,when:`sections < ${n}`,then:s(i),message:`Секции ${n} нет при выбранном числе секций.`},{id:`${t}common`,when:"fill_common",then:s(r),message:"Наполнение общее — задаётся в секции 1."}]:[],{id:`${t}rod-depth`,when:`${o} && depth < 480`,then:[{do:"restrict",param:`${t}fill`,allow:["shelves","drawers_shelves","empty"]}],message:"Штанга для плечиков — при глубине от 480 мм."},{id:`${t}no-shelves`,when:`!${a}`,then:s(["shelf_mode","shelves",...Ar,"h_top"]),message:"В этой секции полок нет."},{id:`${t}no-drawers`,when:`!${c}`,then:s(["drawers"]),message:"В этой секции ящиков нет."},{id:`${t}shelves-max`,when:a,then:[{do:"limit",param:`${t}shelves`,max:`${t}shelves_max`}],message:"Расстояние между полками — не меньше 250 мм; под штангой остаётся 1000 мм для одежды."},{id:`${t}drawers-max`,when:c,then:[{do:"limit",param:`${t}drawers`,max:`${t}drawers_max`}],message:"Над ящиками должно остаться не меньше 900 мм."},{id:`${t}fit`,when:`${o} && ${t}free < 0`,then:[{do:"error"}],message:`Секция ${n}: наполнение не помещается по высоте — уберите верхнюю секцию, ящики или штангу.`},{id:`${t}top-hidden`,when:`${t}top != 'on'`,then:s(["top_h"]),message:"Верхней секции нет."},{id:`${t}cut-hidden`,when:`${t}cut != 'on'`,then:s(["cut_h","cut_d"]),message:"Выреза нет."},{id:`${t}manual`,when:`${t}shelf_mode != 'manual' || ${t}shelves == 0`,then:s([...Ar,"h_top"]),message:"Полки расставлены равномерно."},...Ar.slice(1).map((l,h)=>({id:`${t}${l}-hidden`,when:`${t}shelves < ${h+2}`,then:s([l]),message:"Полок меньше."})),{id:`${t}manual-fit`,when:`${t}shelf_mode == 'manual' && ${t}shelves > 0 && ${a} && ${t}over_top < 50`,then:[{do:"error"}],message:`Секция ${n}: полки не помещаются по высоте — над верхней полкой должно остаться не меньше 50 мм.`},{id:`${t}middle-width`,when:`${o} && ${t}width < 500`,then:[{do:"set",param:`${t}middle`,value:"off"}],message:"Средняя стойка — в секциях от 500 мм: каждой половине нужно 250 мм."},...e?[{id:`${t}door-hidden`,when:"facade_type != 'hinged'",then:s(["door"]),message:"Отдельные двери — только у распашного фасада."},{id:`${t}door-wide`,when:`${o} && ${t}width + t > 600`,then:[{do:"restrict",param:`${t}door`,allow:["double","none"]}],message:"Распашная дверь шире 600 мм не производится — две створки."},{id:`${t}door-narrow`,when:`${o} && ${t}width + t < 600`,then:[{do:"restrict",param:`${t}door`,allow:["left","right","none"]}],message:"Створка уже 300 мм не производится — одна дверь."}]:[{id:`${t}door-hidden`,when:"true",then:s(["door"]),message:"Двери секций не выбираются."}]]},El=(n,e)=>({id:"section-width",when:"section_mode != 'manual'",then:[{do:"limit",param:"sections",min:`ceil(inner_width / ${e})`,max:`max(1, floor(inner_width / ${n}))`}],message:`Ширина секции — от ${n} до ${e} мм: полка длиннее провисает.`}),rd={id:"glass-decor",when:"oneOf(facade_material, 'mirror', 'glass')",then:[{do:"hide",param:"facade_decor"}],message:"У зеркала и стекла нет декора."},sd={id:"depth-slides",when:"depth < 550",then:[{do:"restrict",param:"drawer_type",allow:["roller"]}],message:"При глубине меньше 550 мм доступны только роликовые направляющие."},ad={id:"no-drawers",when:"drawers_total == 0",then:[{do:"hide",param:"drawer_type"},{do:"hide",param:"drawer_len_max"},{do:"hide",param:"drawer_gap"},{do:"hide",param:"shelf_over_drawers"}],message:"Ящиков нет."},ef={id:"wardrobe-loft",sku:"ШР-100",name:"Шкаф «Лофт»",category:"Шкафы",collection:"Лофт",version:5,kind:"cabinet",description:"Шкаф для одежды: распашной, купе или открытый. Каждая секция настраивается отдельно: штанги, полки, ящики, двери.",install:["Отдельностоящий","Встроенный"],leadTimeDays:14,params:[Jt("width","Ширина",400,2400,50,1200),Jt("height","Высота",1800,2700,50,2400),Jt("depth","Глубина",350,650,10,580),...ul(4,!0),ze("facade_type","Тип фасада","facade","hinged",[ne("hinged","Распашные"),ne("sliding","Купе"),ne("none","Без фасадов")]),gi("doors","Количество дверей купе","facade",2,4,2),...ed({material:"ldsp",materials:[ne("ldsp","ЛДСП"),ne("mdf","МДФ"),ne("mirror","Зеркало"),ne("glass","Стекло матовое")]}),dl("mezzanine","Антресоль с отдельными дверями","facade",!1),...pl,...gl,...ia("plinth"),...Sl([{fill:"rod"},{fill:"drawers_shelves",shelves:3,drawers:2},{fill:"shelves"},{fill:"shelves"}]),...oa,...sa(!0),vl,xl("sonoma"),...Zu,_l,nd,bl,...id(),Ml],rules:[...fl(4),...td,...ml,...ra,...Ju,sd,{id:"doors-sliding-only",when:"facade_type != 'sliding'",then:[{do:"hide",param:"doors"}],message:"Число дверей задаётся для купе; распашные двери — в настройке секций."},{id:"sliding-width",when:"width < 1050",then:[{do:"restrict",param:"facade_type",allow:["hinged","none"]}],message:"Двери-купе — для шкафов от 1050 мм."},{id:"sliding-depth",when:"depth < 500",then:[{do:"restrict",param:"facade_type",allow:["hinged","none"]}],message:"Система купе занимает 100 мм глубины — нужна глубина от 500 мм."},{id:"sliding-leaf",when:"facade_type == 'sliding'",then:[{do:"limit",param:"doors",min:"max(2, ceil(inner_width / 1200))",max:"min(4, floor(inner_width / 500))"}],message:"Ширина двери-купе — от 500 до 1200 мм."},{id:"glass-leaf",when:"facade_type != 'none' && leaf_width < 400",then:[{do:"restrict",param:"facade_material",allow:["ldsp","mdf","mirror"]}],message:"Стеклянный фасад недоступен при ширине двери меньше 400 мм."},{id:"sliding-infill",when:"facade_type == 'sliding'",then:[{do:"restrict",param:"facade_material",allow:["ldsp","mirror","glass"]},{do:"set",param:"mezzanine",value:!1},{do:"hide",param:"handle"},{do:"hide",param:"facade_recess"},{do:"hide",param:"facade_gap"}],message:"Двери-купе: наполнение ЛДСП, зеркало или стекло; антресоль недоступна."},{id:"open-facade",when:"facade_type == 'none'",then:[...["facade_material","facade_cover","facade_thickness","facade_recess","facade_gap","facade_decor","handle"].map(n=>({do:"hide",param:n})),{do:"set",param:"mezzanine",value:!1}],message:"Открытый шкаф — без фасадов и антресоли."},rd,El(300,1e3),...[1,2,3,4].flatMap(n=>yl(n,!0)),{id:"wide-drawer",when:"drawers_total > 0 && section_width > 900",then:[{do:"warn"}],message:"Ящик шире 900 мм быстро разбалтывается — добавьте секцию."},{id:"tall-door",when:"facade_type == 'hinged' && !mezzanine && hinged_doors > 0 && front_zone > 2450",then:[{do:"error"}],message:"Распашная дверь выше 2450 мм не производится: добавьте антресоль или уменьшите высоту."},ad,aa],price:{base:"4500 + width * 1.5 + sections * 600",baseLabel:"Работы: раскрой, кромление, присадка, упаковка",modifiers:[{label:"Антресоль: дополнительная присадка",when:"mezzanine",amount:"1800"},Hr]}},tf={id:"sliding-city",sku:"ШК-200",name:"Шкаф-купе «Сити»",category:"Шкафы",collection:"Сити",version:4,kind:"cabinet",description:"Шкаф-купе с алюминиевым профилем. Двери — ЛДСП, зеркало или матовое стекло. Наполнение — по секциям.",install:["Отдельностоящий","Встроенный"],leadTimeDays:18,fixed:{facade_type:"sliding",mezzanine:!1,support:"plinth",handle:"none",hinge_kind:"clip",damper:!1,facade_cover:"laminate",facade_recess:10,facade_gap:3},params:[Jt("width","Ширина",1100,2700,50,1800),Jt("height","Высота",2e3,2700,50,2400),Jt("depth","Глубина",500,700,10,620),...ul(5,!0),gi("doors","Количество дверей","facade",2,4,2),ze("facade_material","Наполнение дверей","facade","mirror",[ne("ldsp","ЛДСП"),ne("mirror","Зеркало"),ne("glass","Стекло матовое")]),ze("facade_thickness","Толщина наполнения","facade","16",[ne("16","16 мм"),ne("18","18 мм")]),...pl,...gl,...ia("plinth").filter(n=>n.code!=="support"&&n.code!=="legs_mount"),...Sl([{fill:"rod"},{fill:"rod"},{fill:"drawers_shelves",shelves:3,drawers:3},{fill:"shelves"},{fill:"shelves"}]),...oa,...sa(!0),vl,xl("graphite"),{code:"metal_decor",name:"Цвет профиля",group:"mat_facade",type:"decor",decorSet:"metal",default:"chrome"},_l,nd,Ml],rules:[...fl(5),...ml,...ra,sd,{id:"sliding-leaf",when:"true",then:[{do:"limit",param:"doors",min:"max(2, ceil(inner_width / 1200))",max:"min(4, floor(inner_width / 500))"}],message:"Ширина двери-купе — от 500 до 1200 мм."},{id:"tall-mirror",when:"facade_material == 'mirror' && height > 2600",then:[{do:"warn"}],message:"Зеркало выше 2500 мм делается с горизонтальным разделителем."},{id:"infill-thickness",when:"facade_material != 'ldsp'",then:[{do:"hide",param:"facade_thickness"}],message:"Зеркало и стекло — 4 мм в профиле."},rd,El(350,1e3),...[1,2,3,4,5].flatMap(n=>yl(n,!1)),{id:"drawer-behind-door",when:"drawers_total > 0 && section_width > leaf_width - 60",then:[{do:"warn"}],message:"Секция с ящиками шире двери: ящик будет упираться в соседнюю дверь. Увеличьте число секций."},ad,aa],price:{base:"6500 + width * 2 + sections * 600",baseLabel:"Работы: раскрой, кромление, присадка, сборка дверей",modifiers:[Hr]}},od=(n,e,t,i,r)=>[Jt("width","Ширина",n[0],n[1],50,n[2]),Jt("height","Высота",e[0],e[1],50,e[2]),Jt("depth","Глубина",t[0],t[1],10,t[2]),...r?[gi("sections","Колонок ящиков","body",1,3,1)]:[],ze("body_joint","Соединительная фурнитура корпуса","body","confirmat",[ne("confirmat","Конфирмат",void 0,"confirmat"),ne("minifix","Minifix",void 0,"minifix"),ne("dowel","Шкант",void 0,"dowel")]),...ed({material:"ldsp",materials:[ne("ldsp","ЛДСП"),ne("mdf","МДФ")]}).filter(s=>s.code!=="facade_recess"),gi("drawers","Ящиков в колонке","drawers",i[0],i[1],i[2]),...gl,...ia("legs"),...oa,...sa(!1),xl("sonoma"),_l,bl,...id("bar")],ld=[...td,...ra,{id:"depth-slides",when:"depth < 450",then:[{do:"restrict",param:"drawer_type",allow:["roller"]}],message:"При глубине меньше 450 мм доступны только роликовые направляющие."},{id:"tandem-depth",when:"depth < 500",then:[{do:"restrict",param:"drawer_type",allow:["roller","ball"]}],message:"Tandembox — при глубине от 500 мм."},{id:"front-height",when:"true",then:[{do:"limit",param:"drawers",min:"ceil(front_zone / 400)",max:"floor(front_zone / 140)"}],message:"Высота фасада ящика — от 140 до 400 мм."},aa],cd={facade_type:"drawers",mezzanine:!1,back:"hdf",back_thickness:"3",back_mount:"overlay",has_bottom:"on",has_top:"on",top_mount:"overlay",side_left:"floor",side_right:"floor"},nf={id:"chest-nordic",sku:"КМ-300",name:"Комод «Нордик»",category:"Комоды и тумбы",collection:"Нордик",version:3,kind:"cabinet",description:"Комод с выдвижными ящиками в одну–три колонки. На ножках или цоколе.",install:["Отдельностоящий"],leadTimeDays:10,fixed:cd,params:od([400,1600,900],[500,1300,850],[350,550,450],[2,6,4],!0),rules:[...ld,{id:"column-width",when:"true",then:[{do:"limit",param:"sections",min:"ceil(width / 900)",max:"max(1, floor(width / 350))"}],message:"Ширина ящика — от 350 до 900 мм."}],price:{base:"2800 + width * 1.2 + sections * drawers * 350",baseLabel:"Работы: раскрой, кромление, присадка, сборка ящиков",modifiers:[Hr]}},rf={id:"nightstand-nordic",sku:"ТП-310",name:"Тумба прикроватная «Нордик»",category:"Комоды и тумбы",collection:"Нордик",version:2,kind:"cabinet",description:"Прикроватная тумба с одним–тремя ящиками.",install:["Отдельностоящий"],leadTimeDays:7,fixed:{...cd,sections:1},params:od([350,600,450],[400,650,500],[350,450,450],[1,3,2],!1),rules:ld,price:{base:"1900 + drawers * 350",baseLabel:"Работы: раскрой, кромление, присадка, сборка ящиков",modifiers:[Hr]}},sf={id:"shelving-grid",sku:"СТ-400",name:"Стеллаж «Грид»",category:"Стеллажи",collection:"Грид",version:2,kind:"cabinet",description:"Открытый стеллаж. Полки в каждой секции — равномерно или по своим высотам.",install:["Отдельностоящий","Модульный"],leadTimeDays:7,fixed:{facade_type:"none",mezzanine:!1,fill_common:!1},params:[Jt("width","Ширина",400,2400,50,1200),Jt("height","Высота",800,2600,50,2e3),Jt("depth","Глубина",250,450,10,320),...ul(Tr,!1).filter(n=>!["fill_common","shelf_over_drawers"].includes(n.code)),...pl,...ia("plinth"),...Sl(Array.from({length:Tr},()=>({fill:"shelves",shelves:4})),[ne("shelves","Полки"),ne("empty","Пусто")]),...oa,...sa(!0),vl,bl,Ml],rules:[...fl(Tr),...ml,...ra,El(250,900),...Array.from({length:Tr},(n,e)=>yl(e+1,!1)).flat(),{id:"open-back",when:"height > 1800",then:[{do:"restrict",param:"back",allow:["hdf","ldsp"]}],message:"Стеллаж выше 1800 мм без задней стенки теряет жёсткость."},{id:"wall-fix",when:"height > 2000 && depth < 300",then:[{do:"warn"}],message:"Высокий неглубокий стеллаж нужно крепить к стене — крепёж в комплекте."},aa],price:{base:"2200 + width * 0.8 + sections * 4 * 120",baseLabel:"Работы: раскрой, кромление, присадка, упаковка",modifiers:[Hr]}},ho=[ef,tf,nf,rf,sf],Wn=n=>ho.find(e=>e.id===n),uo=600,af=900,Xn=1;function wl(n){const e=n.rot===90||n.rot===270,t=(e?n.d:n.w)/2,i=(e?n.w:n.d)/2;return{x0:n.x-t,y0:n.y-i,x1:n.x+t,y1:n.y+i}}function fo(n,e){const t=wl(n);switch(n.rot){case 0:return{x0:t.x0,x1:t.x1,y0:t.y1,y1:t.y1+e};case 90:return{x0:t.x0-e,x1:t.x0,y0:t.y0,y1:t.y1};case 180:return{x0:t.x0,x1:t.x1,y0:t.y0-e,y1:t.y0};default:return{x0:t.x1,x1:t.x1+e,y0:t.y0,y1:t.y1}}}function hd(n,e){const t=e.kind==="door"?e.width:150;switch(e.wall){case 0:return{x0:e.offset,x1:e.offset+e.width,y0:0,y1:t};case 1:return{x0:n.w-t,x1:n.w,y0:e.offset,y1:e.offset+e.width};case 2:return{x0:e.offset,x1:e.offset+e.width,y0:n.l-t,y1:n.l};default:return{x0:0,x1:t,y0:e.offset,y1:e.offset+e.width}}}const ma=(n,e)=>n.x0<e.x1-Xn&&e.x0<n.x1-Xn&&n.y0<e.y1-Xn&&e.y0<n.y1-Xn,fc=(n,e)=>n.x0>=-Xn&&n.y0>=-Xn&&n.x1<=e.w+Xn&&n.y1<=e.l+Xn;function dd(n,e){const t=[],i=e.map(wl);return e.forEach((r,s)=>{fc(i[s],n)||t.push({level:"error",message:`«${r.title}» выходит за стены помещения.`,ids:[r.id]});for(let a=s+1;a<e.length;a++)ma(i[s],i[a])&&t.push({level:"error",message:`«${r.title}» и «${e[a].title}» пересекаются.`,ids:[r.id,e[a].id]});for(const a of n.elements)ma(i[s],hd(n,a))&&(a.kind==="door"?t.push({level:"error",message:`«${r.title}» перекрывает дверной проём.`,ids:[r.id,a.id]}):r.h>af&&t.push({level:"warn",message:`«${r.title}» выше подоконника и закрывает окно.`,ids:[r.id,a.id]}));const o=a=>{if(a<=0)return!1;const c=fo(r,a);return!fc(c,n)||i.some((l,h)=>h!==s&&ma(c,l))};o(r.opening)?t.push({level:"error",message:`«${r.title}»: не хватает ${Math.round(r.opening)} мм перед фасадом — двери или ящики не откроются.`,ids:[r.id]}):o(uo)&&t.push({level:"warn",message:`«${r.title}»: проход перед изделием уже ${uo} мм.`,ids:[r.id]})}),t}function _i(n,e){const t=Hu(n,e),i=Yu(t.values),r=Wu(i,t.values),s=Xu(n,t.values,r);return{model:n,resolved:t,geometry:i,bom:r,price:s,blocked:t.notices.some(o=>o.level==="error")}}const ud="fb.project.v1",pc=1500,mc=()=>({items:[],placements:{},room:{w:4200,l:3200,elements:[{id:"door-1",kind:"door",wall:2,offset:3100,width:900},{id:"window-1",kind:"window",wall:0,offset:1400,width:1400}]},delivery:!1});function of(){try{const n=localStorage.getItem(ud);if(n)return{...mc(),...JSON.parse(n)}}catch{}return mc()}function lf(n){try{localStorage.setItem(ud,JSON.stringify(n))}catch{}}const Ki=()=>Math.random().toString(36).slice(2,9);function fd(n){const e=Wn(n.modelId);return e?_i(e,n.values):null}function cf(n){const e=n.resolved.values;return e.facade_type==="hinged"?Number(hl(e).leaf_max):e.facade_type==="drawers"?Math.min(450,Number(e.depth)*.75):0}function pd(n){const e=[];for(const t of n.items){const i=fd(t),r=n.placements[t.id];if(!i||!r)continue;const{w:s,h:o,d:a}=i.geometry.dims;e.push({id:t.id,title:i.model.name,w:s,d:a,h:o,...r,opening:cf(i)})}return e}function hf(n,e){const t=JSON.stringify({m:n,v:e});return btoa(unescape(encodeURIComponent(t))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function df(n){const e=/[#&]c=([A-Za-z0-9_-]+)/.exec(n);if(!e)return null;try{const t=JSON.parse(decodeURIComponent(escape(atob(e[1].replace(/-/g,"+").replace(/_/g,"/")))));return typeof(t==null?void 0:t.m)=="string"&&typeof(t==null?void 0:t.v)=="object"?t:null}catch{return null}}function Ir(n,e,t){const i=document.createElement("a");i.href=e.startsWith("data:")?e:URL.createObjectURL(new Blob([e],{type:t})),i.download=n,i.click(),e.startsWith("data:")||setTimeout(()=>URL.revokeObjectURL(i.href),1e3)}const wt=n=>`${Ls(Math.round(n))} ₽`,uf={sofa:850,armchair:850,bed:1e3,nightstand:500,wardrobe:2300,dresser:850,shelving:1900,tv_stand:500,desk:750,chair:850,dining_table:750,coffee_table:450,shoe_rack:900,kitchen:2150,vanity:850};function ff(n,e,t,i){const r=i||uf[n],s=[];let o=0;const a=(_,f,u,M,y,b,T,A)=>s.push({id:`p${++o}`,name:_,shape:"box",size:[u-f,y-M,T-b],pos:[(f+u)/2,(M+y)/2,(b+T)/2],finish:A}),c=(_,f,u,M,y,b,T)=>s.push({id:`p${++o}`,name:_,shape:"cyl",axis:"y",size:[y-M,b,b],pos:[f,(M+y)/2,u],finish:T}),l=-e/2,h=e/2,p=(_,f,u,M="plinth")=>{for(const y of[l+f,h-f])for(const b of[f,t-f])c("Ножка",y,b,0,_,u,M)},d=(_,f,u,M,y,b,T,A="bar")=>{const P=(f-_)/b,I=(M-u)/T;for(let E=0;E<b;E++)for(let x=0;x<T;x++){const D=_+E*P+2,z=_+(E+1)*P-2,O=u+x*I+2,X=u+(x+1)*I-2;a("Фасад",D,z,O,X,y,y+18,"facade");const j=(D+z)/2,Y=(O+X)/2;if(A==="knob")c("Ручка",j,y+30,Y-12,Y+12,24,"metal");else if(T===1&&b>1){const Z=E%2?D+40:z-40;a("Ручка",Z-6,Z+6,Y-90,Y+90,y+18,y+42,"metal")}else a("Ручка",j-Math.min(90,P/4),j+Math.min(90,P/4),X-50,X-38,y+18,y+42,"metal")}},m=(_,f,u,M,y,b)=>{a("Корпус",l,h,_,f,0,u-18,"body"),d(l,h,_,f,u-18,M,y,b)};switch(n){case"sofa":case"armchair":{const _=Math.min(200,Math.max(110,e*.12)),f=90,u=Math.min(440,r*.52),M=Math.min(220,t*.24);p(f,60,40),a("Основание",l,h,f,u-90,0,t,"facade");for(const A of[-1,1])a("Подлокотник",A<0?l:h-_,A<0?l+_:h,f,Math.min(r,u+190),0,t,"facade");a("Спинка",l+_,h-_,u-90,r,0,M,"facade");const y=e-2*_,b=n==="armchair"?1:y>1800?3:2,T=y/b;for(let A=0;A<b;A++){const P=l+_+A*T;a("Подушка сиденья",P+4,P+T-4,u-90,u,M,t-10,"shelf"),a("Подушка спинки",P+10,P+T-10,u,r-60,M,M+150,"shelf")}break}case"bed":{p(110,70,50),a("Царга",l,h,110,330,90,t,"body"),a("Изголовье",l,h,110,r,0,90,"facade"),a("Матрас",l+25,h-25,330,550,100,t-20,"drawerbox"),a("Покрывало",l+15,h-15,510,562,90+(t-90)*.34,t-10,"shelf");const M=e>=1200?2:1,y=(e-120)/M;for(let b=0;b<M;b++)a("Подушка",l+60+b*y+15,l+60+(b+1)*y-15,550,660,120,490,"drawerbox");break}case"nightstand":p(90,40,30),m(90,r,t,1,2,"knob");break;case"dresser":p(100,50,36),m(100,r,t,e>1e3?2:1,Math.max(3,Math.min(5,Math.round((r-100)/190))));break;case"tv_stand":p(80,50,34),m(80,r,t,Math.max(2,Math.round(e/500)),1);break;case"shoe_rack":a("Цоколь",l+20,h-20,0,70,20,t-40,"plinth"),m(70,r,t,Math.max(1,Math.round(e/450)),2);break;case"wardrobe":a("Цоколь",l+20,h-20,0,80,20,t-40,"plinth"),a("Корпус",l,h,80,r,0,t-18,"body"),d(l,h,80,r-450,t-18,Math.max(2,Math.round(e/500)),1),d(l,h,r-450,r,t-18,Math.max(2,Math.round(e/500)),1,"knob");break;case"shelving":{const f=Math.max(1,Math.round(e/420)),u=Math.max(2,Math.round((r-60)/360));a("Цоколь",l+18,h-18,0,60,10,t-20,"plinth"),a("Задняя стенка",l,h,60,r,0,6,"hdf");for(let b=0;b<=f;b++){const T=l+(e-18)*b/f;a("Стойка",T,T+18,60,r,0,t,"body")}for(let b=0;b<=u;b++){const T=60+(r-60-18)*b/u;a("Полка",l,h,T,T+18,0,t,"body")}const M=(e-18)/f,y=(r-60-18)/u;for(const[b,T]of[[0,0],[f-1,Math.min(2,u-1)]]){const A=l+b*M+18+20,P=60+T*y+18;a("Короб",A,A+M-18-40,P,P+Math.min(260,y-18-20),t*.25,t-10,"facade")}break}case"desk":{const f=Math.min(420,e*.35);a("Столешница",l,h,r-25,r,0,t,"shelf"),a("Опора",l+20,l+40,0,r-25,30,t-30,"body"),a("Тумба",h-f,h-20,0,r-25,30,t-40,"body"),d(h-f,h-20,20,r-25-4,t-40,1,3),a("Царга",l+40,h-f,r-25-90,r-25,30,48,"body");break}case"chair":{const _=Math.min(460,r*.54),f=40;p(_-40,30,34),a("Сиденье",l,h,_-40,_,0,t,"facade");for(const u of[-1,1])a("Стойка спинки",u<0?l+12:h-44,u<0?l+44:h-12,_,r,12,12+f,"plinth");a("Спинка",l+20,h-20,r-260,r-20,20,20+f,"facade");break}case"dining_table":case"coffee_table":{const _=n==="dining_table"?32:28;if(e===t)if(s.push({id:`p${++o}`,name:"Столешница",shape:"cyl",axis:"y",size:[_,e,e],pos:[0,r-_/2,t/2],finish:"shelf"}),n==="dining_table")c("Опора",0,t/2,60,r-_,110,"plinth"),c("Основание",0,t/2,0,60,e*.5,"plinth");else{for(let f=0;f<3;f++){const u=f*2*Math.PI/3+Math.PI/2;c("Ножка",Math.cos(u)*e*.33,t/2+Math.sin(u)*e*.33,0,r-_,36,"plinth")}s.push({id:`p${++o}`,name:"Нижняя полка",shape:"cyl",axis:"y",size:[18,e*.7,e*.7],pos:[0,120,t/2],finish:"body"})}else a("Столешница",l,h,r-_,r,0,t,"shelf"),p(r-_,60,n==="dining_table"?56:40),n==="coffee_table"?a("Нижняя полка",l+40,h-40,110,128,40,t-40,"body"):a("Царга",l+60,h-60,r-_-80,r-_,60,t-60,"body");break}case"kitchen":{const u=Math.min(r-350,1450),M=Math.min(340,t*.6),y=Math.max(2,Math.round(e/600));a("Цоколь",l,h,0,100,0,t-60,"plinth"),a("Нижние шкафы",l,h,100,850,0,t-38,"body"),d(l,h,100,850,t-38,y,1),a("Столешница",l-10,h+10,850,890,0,t,"shelf");const b=l+e*.62;a("Мойка",b-280,b+280,890,894,80,t-80,"metal"),c("Смеситель",b,70,890,1190,30,"metal"),a("Варочная панель",l+e*.22-290,l+e*.22+290,890,896,60,t-60,"hdf"),a("Навесные шкафы",l,h,u,r,0,M-18,"body"),d(l,h,u,r,M-18,y,1);break}case"vanity":{p(150,40,30,"metal"),a("Корпус",l,h,150,r-60,0,t-18,"body"),d(l,h,150,r-60,t-18,e>=700?2:1,1),a("Раковина",l,h,r-60,r,0,t,"drawerbox"),c("Смеситель",0,90,r,r+220,32,"metal");break}}const g=Math.max(r,...s.map(_=>_.pos[1]+_.size[_.shape==="cyl"?0:1]/2));return{parts:s,dims:{w:e,h:g,d:t}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="170",ji={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,gc=1,mf=2,md=1,gd=2,yn=3,jn=0,Ft=1,En=2,$n=0,Zi=1,_c=2,vc=3,xc=4,gf=5,oi=100,_f=101,vf=102,xf=103,bf=104,Mf=200,Sf=201,yf=202,Ef=203,po=204,mo=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,Pf=211,Df=212,Lf=213,If=214,go=0,_o=1,vo=2,tr=3,xo=4,bo=5,Mo=6,So=7,_d=0,Uf=1,Nf=2,qn=0,Ff=1,kf=2,Of=3,vd=4,Bf=5,zf=6,Hf=7,xd=300,nr=301,ir=302,yo=303,Eo=304,la=306,wo=1e3,hi=1001,To=1002,ln=1003,Vf=1004,jr=1005,mn=1006,ga=1007,di=1008,Pn=1009,bd=1010,Md=1011,Or=1012,Al=1013,vi=1014,Tn=1015,Vr=1016,Rl=1017,Cl=1018,rr=1020,Sd=35902,yd=1021,Ed=1022,on=1023,wd=1024,Td=1025,Ji=1026,sr=1027,Ad=1028,Pl=1029,Rd=1030,Dl=1031,Ll=1033,Us=33776,Ns=33777,Fs=33778,ks=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Do=36196,Lo=37492,Io=37496,Uo=37808,No=37809,Fo=37810,ko=37811,Oo=37812,Bo=37813,zo=37814,Ho=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,$o=37820,qo=37821,Os=36492,Yo=36494,Ko=36495,Cd=36283,jo=36284,Zo=36285,Jo=36286,Gf=3200,Wf=3201,Pd=0,Xf=1,Gn="",Xt="srgb",or="srgb-linear",ca="linear",nt="srgb",Ti=7680,bc=519,$f=512,qf=513,Yf=514,Dd=515,Kf=516,jf=517,Zf=518,Jf=519,Qo=35044,Mc="300 es",An=2e3,Ys=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,el=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function Qf(n,e){return(n%e+e)%e}function _a(n,e,t){return(1-t)*n+t*e}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ep={DEG2RAD:Ur};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],p=i[7],d=i[2],m=i[5],g=i[8],_=r[0],f=r[3],u=r[6],M=r[1],y=r[4],b=r[7],T=r[2],A=r[5],P=r[8];return s[0]=o*_+a*M+c*T,s[3]=o*f+a*y+c*A,s[6]=o*u+a*b+c*P,s[1]=l*_+h*M+p*T,s[4]=l*f+h*y+p*A,s[7]=l*u+h*b+p*P,s[2]=d*_+m*M+g*T,s[5]=d*f+m*y+g*A,s[8]=d*u+m*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(r*l-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Ge;function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){const n=Ks("canvas");return n.style.display="block",n}const Sc={};function Rr(n){n in Sc||(Sc[n]=!0,console.warn(n))}function np(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ip(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:or,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(n.r=Qi(n.r),n.g=Qi(n.g),n.b=Qi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const yc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],wc=[.3127,.329],Tc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[or]:{primaries:yc,whitePoint:wc,transfer:ca,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:yc,whitePoint:wc,transfer:nt,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let Ai;class sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ks("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xa(r[o].image)):s.push(xa(r[o]))}else s=xa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let op=0;class kt extends Mi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=hi,r=hi,s=mn,o=di,a=on,c=Pn,l=kt.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Yn(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wo:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wo:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=xd;kt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(m+1)/2,T=(u+1)/2,A=(h+d)/4,P=(p+_)/4,I=(g+f)/4;return y>b&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=P/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=I/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=I/s),this.set(i,r,s,t),this}let M=Math.sqrt((f-g)*(f-g)+(p-_)*(p-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(p-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lp extends Mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends lp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ud extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cp extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(p!==_||c!==d||l!==m||h!==g){let f=1-a;const u=c*d+l*m+h*g+p*_,M=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const T=Math.sqrt(y),A=Math.atan2(T,u*M);f=Math.sin(f*A)/T,a=Math.sin(a*A)/T}const b=a*M;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,p=p*f+_*b,f===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=T,l*=T,h*=T,p*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],p=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*m-l*d,e[t+1]=c*g+h*d+l*p-a*m,e[t+2]=l*g+h*m+a*d-c*p,e[t+3]=h*g-a*p-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),p=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*p+l*m*g,this._y=l*m*p-d*h*g,this._z=l*h*g+d*m*p,this._w=l*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+l*m*g,this._y=l*m*p-d*h*g,this._z=l*h*g-d*m*p,this._w=l*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-l*m*g,this._y=l*m*p+d*h*g,this._z=l*h*g+d*m*p,this._w=l*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-l*m*g,this._y=l*m*p+d*h*g,this._z=l*h*g-d*m*p,this._w=l*h*p+d*m*g;break;case"YZX":this._x=d*h*p+l*m*g,this._y=l*m*p+d*h*g,this._z=l*h*g-d*m*p,this._w=l*h*p-d*m*g;break;case"XZY":this._x=d*h*p-l*m*g,this._y=l*m*p-d*h*g,this._z=l*h*g+d*m*p,this._w=l*h*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=i+a+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+c*l+o*p-a*h,this.y=i+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new U,Rc=new bi;class Gr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Jr.subVectors(this.max,pr),Ri.subVectors(e.a,pr),Ci.subVectors(e.b,pr),Pi.subVectors(e.c,pr),Un.subVectors(Ci,Ri),Nn.subVectors(Pi,Ci),Qn.subVectors(Ri,Pi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Qn.z,Qn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Qn.z,0,-Qn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Qn.y,Qn.x,0];return!Ma(t,Ri,Ci,Pi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,Ri,Ci,Pi,Jr))?!1:(Qr.crossVectors(Un,Nn),t=[Qr.x,Qr.y,Qr.z],Ma(t,Ri,Ci,Pi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,Zr=new Gr,Ri=new U,Ci=new U,Pi=new U,Un=new U,Nn=new U,Qn=new U,pr=new U,Jr=new U,Qr=new U,ei=new U;function Ma(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ei.fromArray(n,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),h=i.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hp=new Gr,mr=new U,Sa=new U;class ha{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Sa)),this.expandByPoint(mr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new U,ya=new U,es=new U,Fn=new U,Ea=new U,ts=new U,wa=new U;class Il{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ya.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,o=-this.direction.dot(es),a=Fn.dot(this.direction),c=-Fn.dot(es),l=Fn.lengthSq(),h=Math.abs(1-o*o);let p,d,m,g;if(h>0)if(p=o*c-a,d=o*a-c,g=s*h,p>=0)if(d>=-g)if(d<=g){const _=1/h;p*=_,d*=_,m=p*(p+o*d+2*a)+d*(o*p+d+2*c)+l}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*c)+l;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*c)+l;else d<=-g?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+l):d<=g?(p=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+l);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ya).addScaledVector(es,d),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){Ea.subVectors(t,e),ts.subVectors(i,e),wa.crossVectors(Ea,ts);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const c=a*this.direction.dot(ts.crossVectors(Fn,ts));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(Fn));if(l<0||c+l>o)return null;const h=-a*Fn.dot(wa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,c,l,h,p,d,m,g,_,f){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,p,d,m,g,_,f)}set(e,t,i,r,s,o,a,c,l,h,p,d,m,g,_,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=g,u[11]=_,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*p,g=a*h,_=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,g=l*h,_=l*p;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,g=l*h,_=l*p;t[0]=d-_*a,t[4]=-o*p,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*p,g=a*h,_=a*p;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*p,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*p,t[8]=g*p+m,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*p+g,t[10]=d-_*p}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+_,t[5]=o*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=a*h,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,up)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),kn.crossVectors(i,Vt),kn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),kn.crossVectors(i,Vt)),kn.normalize(),ns.crossVectors(Vt,kn),r[0]=kn.x,r[4]=ns.x,r[8]=Vt.x,r[1]=kn.y,r[5]=ns.y,r[9]=Vt.y,r[2]=kn.z,r[6]=ns.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],p=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],u=i[14],M=i[3],y=i[7],b=i[11],T=i[15],A=r[0],P=r[4],I=r[8],E=r[12],x=r[1],D=r[5],z=r[9],O=r[13],X=r[2],j=r[6],Y=r[10],Z=r[14],$=r[3],de=r[7],ce=r[11],be=r[15];return s[0]=o*A+a*x+c*X+l*$,s[4]=o*P+a*D+c*j+l*de,s[8]=o*I+a*z+c*Y+l*ce,s[12]=o*E+a*O+c*Z+l*be,s[1]=h*A+p*x+d*X+m*$,s[5]=h*P+p*D+d*j+m*de,s[9]=h*I+p*z+d*Y+m*ce,s[13]=h*E+p*O+d*Z+m*be,s[2]=g*A+_*x+f*X+u*$,s[6]=g*P+_*D+f*j+u*de,s[10]=g*I+_*z+f*Y+u*ce,s[14]=g*E+_*O+f*Z+u*be,s[3]=M*A+y*x+b*X+T*$,s[7]=M*P+y*D+b*j+T*de,s[11]=M*I+y*z+b*Y+T*ce,s[15]=M*E+y*O+b*Z+T*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],u=e[15];return g*(+s*c*p-r*l*p-s*a*d+i*l*d+r*a*m-i*c*m)+_*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+t*l*p-t*a*m-s*o*p+i*o*m+s*a*h-i*l*h)+u*(-r*a*h-t*c*p+t*a*d+r*o*p-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],u=e[15],M=p*f*l-_*d*l+_*c*m-a*f*m-p*c*u+a*d*u,y=g*d*l-h*f*l-g*c*m+o*f*m+h*c*u-o*d*u,b=h*_*l-g*p*l+g*a*m-o*_*m-h*a*u+o*p*u,T=g*p*c-h*_*c-g*a*d+o*_*d+h*a*f-o*p*f,A=t*M+i*y+r*b+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=M*P,e[1]=(_*d*s-p*f*s-_*r*m+i*f*m+p*r*u-i*d*u)*P,e[2]=(a*f*s-_*c*s+_*r*l-i*f*l-a*r*u+i*c*u)*P,e[3]=(p*c*s-a*d*s-p*r*l+i*d*l+a*r*m-i*c*m)*P,e[4]=y*P,e[5]=(h*f*s-g*d*s+g*r*m-t*f*m-h*r*u+t*d*u)*P,e[6]=(g*c*s-o*f*s-g*r*l+t*f*l+o*r*u-t*c*u)*P,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*m+t*c*m)*P,e[8]=b*P,e[9]=(g*p*s-h*_*s-g*i*m+t*_*m+h*i*u-t*p*u)*P,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*u+t*a*u)*P,e[11]=(h*a*s-o*p*s-h*i*l+t*p*l+o*i*m-t*a*m)*P,e[12]=T*P,e[13]=(h*_*r-g*p*r+g*i*d-t*_*d-h*i*f+t*p*f)*P,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*f-t*a*f)*P,e[15]=(o*p*r-h*a*r+h*i*c-t*p*c-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,d=s*l,m=s*h,g=s*p,_=o*h,f=o*p,u=a*p,M=c*l,y=c*h,b=c*p,T=i.x,A=i.y,P=i.z;return r[0]=(1-(_+u))*T,r[1]=(m+b)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(d+u))*A,r[6]=(f+M)*A,r[7]=0,r[8]=(g+y)*P,r[9]=(f-M)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const l=1/s,h=1/o,p=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=p,rn.elements[9]*=p,rn.elements[10]*=p,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=An){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(a===An)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ys)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=An){const c=this.elements,l=1/(t-e),h=1/(i-r),p=1/(o-s),d=(t+e)*l,m=(i+r)*h;let g,_;if(a===An)g=(o+s)*p,_=-2*p;else if(a===Ys)g=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new U,rn=new ut,dp=new U(0,0,0),up=new U(1,1,1),kn=new U,ns=new U,Vt=new U,Cc=new ut,Pc=new bi;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const Dc=new U,Li=new bi,bn=new ut,is=new U,gr=new U,pp=new U,mp=new bi,Lc=new U(1,0,0),Ic=new U(0,1,0),Uc=new U(0,0,1),Nc={type:"added"},gp={type:"removed"},Ii={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Mt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new U,t=new gn,i=new bi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?is.copy(e):is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(gr,is,this.up):bn.lookAt(is,gr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(bn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new U(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,Mn=new U,Aa=new U,Sn=new U,Ui=new U,Ni=new U,Fc=new U,Ra=new U,Ca=new U,Pa=new U,Da=new at,La=new at,Ia=new at;class qt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),Mn.subVectors(i,t),Aa.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Mn),c=sn.dot(Aa),l=Mn.dot(Mn),h=Mn.dot(Aa),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Da.setScalar(0),La.setScalar(0),Ia.setScalar(0),Da.fromBufferAttribute(e,t),La.fromBufferAttribute(e,i),Ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Da,s.x),o.addScaledVector(La,s.y),o.addScaledVector(Ia,s.z),o}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),Mn.subVectors(e,t),sn.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),sn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,i),Ni.subVectors(s,i),Ra.subVectors(e,i);const c=Ui.dot(Ra),l=Ni.dot(Ra);if(c<=0&&l<=0)return t.copy(i);Ca.subVectors(e,r);const h=Ui.dot(Ca),p=Ni.dot(Ca);if(h>=0&&p<=h)return t.copy(r);const d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ui,o);Pa.subVectors(e,s);const m=Ui.dot(Pa),g=Ni.dot(Pa);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ni,a);const f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return Fc.subVectors(s,r),a=(p-h)/(p-h+(m-g)),t.copy(r).addScaledVector(Fc,a);const u=1/(f+_+d);return o=_*u,a=d*u,t.copy(i).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},rs={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Qf(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ua(o,s,e+1/3),this.g=Ua(o,s,e),this.b=Ua(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ke.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Nt(Rt.r*255,0,255))*65536+Math.round(Nt(Rt.g*255,0,255))*256+Math.round(Nt(Rt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Xt){Ke.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(rs);const i=_a(On.h,rs.h,t),r=_a(On.s,rs.s,t),s=_a(On.l,rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ye;Ye.NAMES=Fd;let _p=0;class Jn extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Yn(),this.name="",this.blending=Zi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ul extends Jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new U,ss=new Ie;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}}class kd extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Od extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vp=0;const Zt=new ut,Na=new Mt,Fi=new U,Gt=new Gr,_r=new Gr,Et=new U;class Qt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Od:kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Gt.min,_r.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,_r.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(_r.min),Gt.expandByPoint(_r.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(e,l),Et.add(Fi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new U,c[I]=new U;const l=new U,h=new U,p=new U,d=new Ie,m=new Ie,g=new Ie,_=new U,f=new U;function u(I,E,x){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),h.sub(l),p.sub(l),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(_),a[E].add(_),a[x].add(_),c[I].add(f),c[E].add(f),c[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,E=M.length;I<E;++I){const x=M[I],D=x.start,z=x.count;for(let O=D,X=D+z;O<X;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new U,b=new U,T=new U,A=new U;function P(I){T.fromBufferAttribute(r,I),A.copy(T);const E=a[I];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(A,E);const D=b.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,E=M.length;I<E;++I){const x=M[I],D=x.start,z=x.count;for(let O=D,X=D+z;O<X;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,p=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,p=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new cn(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){const d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){const m=l[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],p=s[l];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new ut,ti=new Il,as=new ha,Oc=new U,os=new U,ls=new U,cs=new U,Fa=new U,hs=new U,Bc=new U,ds=new U;class pt extends Mt{constructor(e=new Qt,t=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],p=s[c];h!==0&&(Fa.fromBufferAttribute(p,e),o?hs.addScaledVector(Fa,h):hs.addScaledVector(Fa.sub(t),h))}t.add(hs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(as.containsPoint(ti.origin)===!1&&(ti.intersectSphere(as,Oc)===null||ti.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(kc.copy(s).invert(),ti.copy(e.ray).applyMatrix4(kc),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],u=o[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,T=y;b<T;b+=3){const A=a.getX(b),P=a.getX(b+1),I=a.getX(b+2);r=us(this,u,e,i,l,h,p,A,P,I),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,u=_;f<u;f+=3){const M=a.getX(f),y=a.getX(f+1),b=a.getX(f+2);r=us(this,o,e,i,l,h,p,M,y,b),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],u=o[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,T=y;b<T;b+=3){const A=b,P=b+1,I=b+2;r=us(this,u,e,i,l,h,p,A,P,I),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,u=_;f<u;f+=3){const M=f,y=f+1,b=f+2;r=us(this,o,e,i,l,h,p,M,y,b),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function xp(n,e,t,i,r,s,o,a){let c;if(e.side===Ft?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===jn,a),c===null)return null;ds.copy(a),ds.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ds);return l<t.near||l>t.far?null:{distance:l,point:ds.clone(),object:n}}function us(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,os),n.getVertexPosition(c,ls),n.getVertexPosition(l,cs);const h=xp(n,e,t,i,os,ls,cs,Bc);if(h){const p=new U;qt.getBarycoord(Bc,os,ls,cs,p),r&&(h.uv=qt.getInterpolatedAttribute(r,a,c,l,p,new Ie)),s&&(h.uv1=qt.getInterpolatedAttribute(s,a,c,l,p,new Ie)),o&&(h.normal=qt.getInterpolatedAttribute(o,a,c,l,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};qt.getNormal(os,ls,cs,d.normal),h.face=d,h.barycoord=p}return h}class Si extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(p,2));function g(_,f,u,M,y,b,T,A,P,I,E){const x=b/P,D=T/I,z=b/2,O=T/2,X=A/2,j=P+1,Y=I+1;let Z=0,$=0;const de=new U;for(let ce=0;ce<Y;ce++){const be=ce*D-O;for(let K=0;K<j;K++){const Fe=K*x-z;de[_]=Fe*M,de[f]=be*y,de[u]=X,l.push(de.x,de.y,de.z),de[_]=0,de[f]=0,de[u]=A>0?1:-1,h.push(de.x,de.y,de.z),p.push(K/P),p.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let be=0;be<P;be++){const K=d+be+j*ce,Fe=d+be+j*(ce+1),H=d+(be+1)+j*(ce+1),ie=d+(be+1)+j*ce;c.push(K,Fe,ie),c.push(Fe,H,ie),$+=6}a.addGroup(m,$,E),m+=$,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const r in i)e[r]=i[r]}return e}function bp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Mp={clone:ar,merge:Ut};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zd extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new U,zc=new Ie,Hc=new Ie;class $t extends zd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Hc),t.subVectors(Hc,zc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Oi=1;class Ep extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(ki,Oi,e,t);r.layers=this.layers,this.add(r);const s=new $t(ki,Oi,e,t);s.layers=this.layers,this.add(s);const o=new $t(ki,Oi,e,t);o.layers=this.layers,this.add(o);const a=new $t(ki,Oi,e,t);a.layers=this.layers,this.add(a);const c=new $t(ki,Oi,e,t);c.layers=this.layers,this.add(c);const l=new $t(ki,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hd extends kt{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:$n});s.uniforms.tEquirect.value=t;const o=new pt(r,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=mn),new Ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ka=new U,Tp=new U,Ap=new Ge;class Hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ka.subVectors(i,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ap.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new ha,fs=new U;class Nl{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],p=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],u=r[12],M=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-s,d-l,f-m,b-u).normalize(),i[1].setComponents(c+s,d+l,f+m,b+u).normalize(),i[2].setComponents(c+o,d+h,f+g,b+M).normalize(),i[3].setComponents(c-o,d-h,f-g,b-M).normalize(),i[4].setComponents(c-a,d-p,f-_,b-y).normalize(),t===An)i[5].setComponents(c+a,d+p,f+_,b+y).normalize();else if(t===Ys)i[5].setComponents(a,p,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,p=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,l){const h=c.array,p=c.updateRanges;if(n.bindBuffer(l,a),p.length===0)n.bufferSubData(l,0,h);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){const g=p[d],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,p[d]=_)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){const _=p[m];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Wr extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,p=e/a,d=t/c,m=[],g=[],_=[],f=[];for(let u=0;u<h;u++){const M=u*d-o;for(let y=0;y<l;y++){const b=y*p-s;g.push(b,-M,0),_.push(0,0,1),f.push(y/a),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<a;M++){const y=M+l*u,b=M+l*(u+1),T=M+1+l*(u+1),A=M+1+l*u;m.push(y,b,A),m.push(b,T,A)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Dp,alphamap_pars_fragment:Lp,alphatest_fragment:Ip,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Fp,batching_pars_vertex:kp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Kp,color_pars_vertex:jp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:rm,colorspace_fragment:sm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:xm,lights_pars_begin:bm,lights_toon_fragment:Sm,lights_toon_pars_fragment:ym,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Fm,map_particle_fragment:km,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:$m,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Km,normal_vertex:jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:rg,project_vertex:sg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:dg,shadowmap_vertex:ug,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:vg,specularmap_pars_fragment:xg,tonemapping_fragment:bg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:yg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Dg,cube_vert:Lg,cube_frag:Ig,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Fg,distanceRGBA_frag:kg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:$g,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Kg,meshphong_vert:jg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:r_,shadow_frag:s_,sprite_vert:a_,sprite_frag:o_},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ps={r:0,b:0,g:0},ii=new gn,l_=new ut;function c_(n,e,t,i,r,s,o){const a=new Ye(0);let c=s===!0?0:1,l,h,p=null,d=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const b=g(M);b===null?u(a,c):b&&b.isColor&&(u(b,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(M,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===la)?(h===void 0&&(h=new pt(new Si(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ar(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(ii)),h.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,(p!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new pt(new Wr(2,2),new Zn({name:"BackgroundMaterial",uniforms:ar(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||d!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=b,d=b.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,y){M.getRGB(ps,Bd(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:_,addToRenderList:f}}function h_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,D,z,O,X){let j=!1;const Y=p(O,z,D);s!==Y&&(s=Y,l(s.object)),j=m(x,O,z,X),j&&g(x,O,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(x,D,z,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function p(x,D,z){const O=z.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let Y=j[O];return Y===void 0&&(Y=d(c()),j[O]=Y),Y}function d(x){const D=[],z=[],O=[];for(let X=0;X<t;X++)D[X]=0,z[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,D,z,O){const X=s.attributes,j=D.attributes;let Y=0;const Z=z.getAttributes();for(const $ in Z)if(Z[$].location>=0){const ce=X[$];let be=j[$];if(be===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),ce===void 0||ce.attribute!==be||be&&ce.data!==be.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function g(x,D,z,O){const X={},j=D.attributes;let Y=0;const Z=z.getAttributes();for(const $ in Z)if(Z[$].location>=0){let ce=j[$];ce===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const be={};be.attribute=ce,ce&&ce.data&&(be.data=ce.data),X[$]=be,Y++}s.attributes=X,s.attributesNum=Y,s.index=O}function _(){const x=s.newAttributes;for(let D=0,z=x.length;D<z;D++)x[D]=0}function f(x){u(x,0)}function u(x,D){const z=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function M(){const x=s.newAttributes,D=s.enabledAttributes;for(let z=0,O=D.length;z<O;z++)D[z]!==x[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function y(x,D,z,O,X,j,Y){Y===!0?n.vertexAttribIPointer(x,D,z,X,j):n.vertexAttribPointer(x,D,z,O,X,j)}function b(x,D,z,O){_();const X=O.attributes,j=z.getAttributes(),Y=D.defaultAttributeValues;for(const Z in j){const $=j[Z];if($.location>=0){let de=X[Z];if(de===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),de!==void 0){const ce=de.normalized,be=de.itemSize,K=e.get(de);if(K===void 0)continue;const Fe=K.buffer,H=K.type,ie=K.bytesPerElement,ye=H===n.INT||H===n.UNSIGNED_INT||de.gpuType===Al;if(de.isInterleavedBufferAttribute){const ue=de.data,Re=ue.stride,ke=de.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)u($.location+ge,ue.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<$.locationSize;ge++)f($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ge=0;ge<$.locationSize;ge++)y($.location+ge,be/$.locationSize,H,ce,Re*ie,(ke+be/$.locationSize*ge)*ie,ye)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)u($.location+ue,de.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<$.locationSize;ue++)f($.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ue=0;ue<$.locationSize;ue++)y($.location+ue,be/$.locationSize,H,ce,be*ie,be/$.locationSize*ue*ie,ye)}}else if(Y!==void 0){const ce=Y[Z];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv($.location,ce);break;case 3:n.vertexAttrib3fv($.location,ce);break;case 4:n.vertexAttrib4fv($.location,ce);break;default:n.vertexAttrib1fv($.location,ce)}}}}M()}function T(){I();for(const x in i){const D=i[x];for(const z in D){const O=D[z];for(const X in O)h(O[X].object),delete O[X];delete D[z]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const D=i[x.id];for(const z in D){const O=D[z];for(const X in O)h(O[X].object),delete O[X];delete D[z]}delete i[x.id]}function P(x){for(const D in i){const z=i[D];if(z[x.id]===void 0)continue;const O=z[x.id];for(const X in O)h(O[X].object),delete O[X];delete z[x.id]}}function I(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function d_(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,p){p!==0&&(n.drawArraysInstanced(i,l,h,p),t.update(h,i,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function c(l,h,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function u_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==on&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Tn&&!I)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:T,maxSamples:A}}function f_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Hn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,u=n.get(p);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{const M=s?0:i,y=M*4;let b=u.clippingState||null;c.value=b,b=h(g,d,y,m);for(let T=0;T!==y;++T)b[T]=t[T];u.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,g){const _=p!==null?p.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const u=m+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<u)&&(f=new Float32Array(u));for(let y=0,b=m;y!==_;++y,b+=4)o.copy(p[y]).applyMatrix4(M,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function p_(n){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=nr:a===Eo&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yo||a===Eo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gd extends zd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,Vc=[.125,.215,.35,.446,.526,.582],li=20,Oa=new Gd,Gc=new Ye;let Ba=null,za=0,Ha=0,Va=!1;const si=(1+Math.sqrt(5))/2,Bi=1/si,Wc=[new U(-si,Bi,0),new U(si,Bi,0),new U(-Bi,0,si),new U(Bi,0,si),new U(0,si,-Bi),new U(0,si,Bi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Vr,format:on,colorSpace:or,depthBuffer:!1},r=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(s)),this._blurMaterial=g_(s,e,t)}return r}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=qn,h.autoClear=!1;const m=new Ul({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new pt(new Si,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(Gc),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):M===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const y=this._cubeSize;ms(r,M*y,u>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===nr||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ms(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wc[(r-s-1)%Wc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new pt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):li;f>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);const u=[];let M=0;for(let P=0;P<li;++P){const I=P/_,E=Math.exp(-I*I/2);u.push(E),P===0?M+=E:P<f&&(M+=2*E)}for(let P=0;P<u.length;P++)u[P]=u[P]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],T=3*b*(r>y-qi?r-y+qi:0),A=4*(this._cubeSize-b);ms(t,T,A,3*b,2*b),c.setRenderTarget(t),c.render(p,Oa)}}function m_(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+Vc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-qi?c=Vc[o-n+qi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,p=1+l,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,_=3,f=2,u=1,M=new Float32Array(_*g*m),y=new Float32Array(f*g*m),b=new Float32Array(u*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,I=A>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];M.set(E,_*g*A),y.set(d,f*g*A);const x=[A,A,A,A,A,A];b.set(x,u*g*A)}const T=new Qt;T.setAttribute("position",new cn(M,_)),T.setAttribute("uv",new cn(y,f)),T.setAttribute("faceIndex",new cn(b,u)),e.push(T),r>qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xc(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function g_(n,e,t){const i=new Float32Array(li),r=new U(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function $c(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function qc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function __(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===yo||c===Eo,h=c===nr||c===ir;if(l||h){let p=e.get(a);const d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new tl(n)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new tl(n)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function v_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Rr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x_(n,e,t,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,u=_.length;f<u;f++)e.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(p){const d=p.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const _=m[g];for(let f=0,u=_.length;f<u;f++)e.update(_[f],n.ARRAY_BUFFER)}}function l(p){const d=[],m=p.index,g=p.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let y=0,b=M.length;y<b;y+=3){const T=M[y+0],A=M[y+1],P=M[y+2];d.push(T,A,A,P,P,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const T=y+0,A=y+1,P=y+2;d.push(T,A,A,P,P,T)}}else return;const f=new(Ld(d)?Od:kd)(d,1);f.version=_;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function b_(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let f=0;for(let u=0;u<g;u++)f+=m[u];t.update(f,i,1)}function p(d,m,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)l(d[u]/o,m[u],_[u]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=m[M]*_[M];t.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function M_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function S_(n,e,t){const i=new WeakMap,r=new at;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==p){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),f===!0&&(b=3);let T=a.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*A*4*p),I=new Ud(P,T,A,p);I.type=Tn,I.needsUpdate=!0;const E=b*4;for(let D=0;D<p;D++){const z=u[D],O=M[D],X=y[D],j=T*A*4*D;for(let Y=0;Y<z.count;Y++){const Z=Y*E;g===!0&&(r.fromBufferAttribute(z,Y),P[j+Z+0]=r.x,P[j+Z+1]=r.y,P[j+Z+2]=r.z,P[j+Z+3]=0),_===!0&&(r.fromBufferAttribute(O,Y),P[j+Z+4]=r.x,P[j+Z+5]=r.y,P[j+Z+6]=r.z,P[j+Z+7]=0),f===!0&&(r.fromBufferAttribute(X,Y),P[j+Z+8]=r.x,P[j+Z+9]=r.y,P[j+Z+10]=r.z,P[j+Z+11]=X.itemSize===4?r.w:1)}}d={count:p,texture:I,size:new Ie(T,A)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function y_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return p}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Wd extends kt{constructor(e,t,i,r,s,o,a,c,l,h=Ji){if(h!==Ji&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ji&&(i=vi),i===void 0&&h===sr&&(i=rr),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xd=new kt,Yc=new Wd(1,1),$d=new Ud,qd=new cp,Yd=new Hd,Kc=[],jc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kc[r];if(s===void 0&&(s=new Float32Array(r),Kc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function da(n,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Qc.set(i),n.uniformMatrix2fv(this.addr,!1,Qc),yt(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Jc.set(i),n.uniformMatrix3fv(this.addr,!1,Jc),yt(t,i)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Zc.set(i),n.uniformMatrix4fv(this.addr,!1,Zc),yt(t,i)}}function D_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function N_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function B_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yc.compareFunction=Dd,s=Yc):s=Xd,t.setTexture2D(e||s,r)}function z_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qd,r)}function H_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yd,r)}function V_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$d,r)}function G_(n){switch(n){case 5126:return E_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return D_;case 35667:case 35671:return L_;case 35668:case 35672:return I_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return F_;case 36295:return k_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(n,e){n.uniform1fv(this.addr,e)}function X_(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function $_(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function q_(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Y_(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K_(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j_(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z_(n,e){n.uniform1iv(this.addr,e)}function J_(n,e){n.uniform2iv(this.addr,e)}function Q_(n,e){n.uniform3iv(this.addr,e)}function e0(n,e){n.uniform4iv(this.addr,e)}function t0(n,e){n.uniform1uiv(this.addr,e)}function n0(n,e){n.uniform2uiv(this.addr,e)}function i0(n,e){n.uniform3uiv(this.addr,e)}function r0(n,e){n.uniform4uiv(this.addr,e)}function s0(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xd,s[o])}function a0(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qd,s[o])}function o0(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yd,s[o])}function l0(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$d,s[o])}function c0(n){switch(n){case 5126:return W_;case 35664:return X_;case 35665:return $_;case 35666:return q_;case 35674:return Y_;case 35675:return K_;case 35676:return j_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class h0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G_(t.type)}}class d0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}}class u0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function eh(n,e){n.seq.push(e),n.map[e.id]=e}function f0(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),o=Ga.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){eh(t,l===void 0?new h0(a,n,e):new d0(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new u0(a),eh(t,p)),t=p}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);f0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const p0=37297;let m0=0;function g0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nh=new Ge;function _0(n){Ke._getMatrix(nh,Ke.workingColorSpace,n);const e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ih(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g0(n.getShaderSource(e),o)}else return r}function v0(n,e){const t=_0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x0(n,e){let t;switch(e){case Ff:t="Linear";break;case kf:t="Reinhard";break;case Of:t="Cineon";break;case vd:t="ACESFilmic";break;case zf:t="AgX";break;case Hf:t="Neutral";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gs=new U;function b0(){Ke.getLuminanceCoefficients(gs);const n=gs.x.toFixed(4),e=gs.y.toFixed(4),t=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function S0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cr(n){return n!==""}function rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(E0,T0)}const w0=new Map;function T0(n,e){let t=We[e];if(t===void 0){const i=w0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(n){return n.replace(A0,R0)}function R0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===md?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function L0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function I0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=C0(t),l=P0(t),h=D0(t),p=L0(t),d=I0(t),m=M0(t),g=S0(s),_=r.createProgram();let f,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),u.length>0&&(u+=`
`)):(f=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),u=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?We.tonemapping_pars_fragment:"",t.toneMapping!==qn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),b0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=nl(o),o=rh(o,t),o=sh(o,t),a=nl(a),a=rh(a,t),a=sh(a,t),o=ah(o),a=ah(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=M+f+o,b=M+u+a,T=th(r,r.VERTEX_SHADER,y),A=th(r,r.FRAGMENT_SHADER,b);r.attachShader(_,T),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(T).trim(),X=r.getShaderInfoLog(A).trim();let j=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,A);else{const Z=ih(r,T,"vertex"),$=ih(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Z+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||X==="")&&(Y=!1);Y&&(D.diagnostics={runnable:j,programLog:z,vertexShader:{log:O,prefix:f},fragmentShader:{log:X,prefix:u}})}r.deleteShader(T),r.deleteShader(A),I=new Bs(r,_),E=y0(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,p0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k0(e),t.set(e,i)),i}}class k0{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}}function O0(n,e,t,i,r,s,o){const a=new Nd,c=new F0,l=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,x,D,z,O){const X=z.fog,j=O.geometry,Y=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),$=Z&&Z.mapping===la?Z.image.height:null,de=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,be=ce!==void 0?ce.length:0;let K=0;j.morphAttributes.position!==void 0&&(K=1),j.morphAttributes.normal!==void 0&&(K=2),j.morphAttributes.color!==void 0&&(K=3);let Fe,H,ie,ye;if(de){const $e=fn[de];Fe=$e.vertexShader,H=$e.fragmentShader}else Fe=E.vertexShader,H=E.fragmentShader,c.update(E),ie=c.getVertexShaderID(E),ye=c.getFragmentShaderID(E);const ue=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Ne=!!E.map,Be=!!E.matcap,ft=!!Z,N=!!E.aoMap,Pt=!!E.lightMap,Xe=!!E.bumpMap,He=!!E.normalMap,Pe=!!E.displacementMap,Ze=!!E.emissiveMap,De=!!E.metalnessMap,R=!!E.roughnessMap,S=E.anisotropy>0,V=E.clearcoat>0,te=E.dispersion>0,re=E.iridescence>0,Q=E.sheen>0,ve=E.transmission>0,me=S&&!!E.anisotropyMap,xe=V&&!!E.clearcoatMap,qe=V&&!!E.clearcoatNormalMap,le=V&&!!E.clearcoatRoughnessMap,Me=re&&!!E.iridescenceMap,Le=re&&!!E.iridescenceThicknessMap,Ue=Q&&!!E.sheenColorMap,Se=Q&&!!E.sheenRoughnessMap,ee=!!E.specularMap,J=!!E.specularColorMap,fe=!!E.specularIntensityMap,L=ve&&!!E.transmissionMap,ae=ve&&!!E.thicknessMap,B=!!E.gradientMap,q=!!E.alphaMap,se=E.alphaTest>0,oe=!!E.alphaHash,Ae=!!E.extensions;let tt=qn;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(tt=n.toneMapping);const Je={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:Fe,fragmentShader:H,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:or,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:Be,envMap:ft,envMapMode:ft&&Z.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:Pt,bumpMap:Xe,normalMap:He,displacementMap:d&&Pe,emissiveMap:Ze,normalMapObjectSpace:He&&E.normalMapType===Xf,normalMapTangentSpace:He&&E.normalMapType===Pd,metalnessMap:De,roughnessMap:R,anisotropy:S,anisotropyMap:me,clearcoat:V,clearcoatMap:xe,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:te,iridescence:re,iridescenceMap:Me,iridescenceThicknessMap:Le,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:ee,specularColorMap:J,specularIntensityMap:fe,transmission:ve,transmissionMap:L,thicknessMap:ae,gradientMap:B,opaque:E.transparent===!1&&E.blending===Zi&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:se,alphaHash:oe,combine:E.combine,mapUv:Ne&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:Pt&&_(E.lightMap.channel),bumpMapUv:Xe&&_(E.bumpMap.channel),normalMapUv:He&&_(E.normalMap.channel),displacementMapUv:Pe&&_(E.displacementMap.channel),emissiveMapUv:Ze&&_(E.emissiveMap.channel),metalnessMapUv:De&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:me&&_(E.anisotropyMap.channel),clearcoatMapUv:xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(E.sheenRoughnessMap.channel),specularMapUv:ee&&_(E.specularMap.channel),specularColorMapUv:J&&_(E.specularColorMap.channel),specularIntensityMapUv:fe&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:ae&&_(E.thicknessMap.channel),alphaMapUv:q&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(He||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Ne||q),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:K,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:Ze&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function u(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(x,E),y(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){const x=g[E.type];let D;if(x){const z=fn[x];D=Mp.clone(z.uniforms)}else D=E.uniforms;return D}function T(E,x){let D;for(let z=0,O=h.length;z<O;z++){const X=h[z];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new U0(n,x,E,s),h.push(D)),D}function A(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function P(E){c.remove(E)}function I(){c.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:I}}function B0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ch(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,d,m,g,_,f){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:_,group:f},n[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=_,u.group=f),e++,u}function a(p,d,m,g,_,f){const u=o(p,d,m,g,_,f);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(p,d,m,g,_,f){const u=o(p,d,m,g,_,f);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(p,d){t.length>1&&t.sort(p||z0),i.length>1&&i.sort(d||lh),r.length>1&&r.sort(d||lh)}function h(){for(let p=e,d=n.length;p<d;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function H0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ch,n.set(i,[o])):r>=s.length?(o=new ch,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W0=0;function X0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $0(n){const e=new V0,t=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new ut,o=new ut;function a(l){let h=0,p=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,f=0,u=0,M=0,y=0,b=0,T=0,A=0,P=0;l.sort(X0);for(let E=0,x=l.length;E<x;E++){const D=l[E],z=D.color,O=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*O,p+=z.g*O,d+=z.b*O;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],O);P++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,$=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(O),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[_]=Y;const Z=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,Z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=Z.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=j,b++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(z).multiplyScalar(O),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=Y,f++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,$=t.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(O),Y.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[u]=Y,u++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==f||I.hemiLength!==u||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==b||I.numSpotMaps!==T||I.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=f,I.hemiLength=u,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=b,I.numSpotMaps=T,I.numLightProbes=P,i.version=W0++)}function c(l,h){let p=0,d=0,m=0,g=0,_=0;const f=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const y=l[u];if(y.isDirectionalLight){const b=i.directional[p];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),p++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:i}}function hh(n){const e=new $0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function q0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hh(n),e.set(r,[a])):s>=o.length?(a=new hh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Y0 extends Jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J0(n,e,t){let i=new Nl;const r=new Ie,s=new Ie,o=new at,a=new Y0({depthPacking:Wf}),c=new K0,l={},h=t.maxTextureSize,p={[jn]:Ft,[Ft]:jn,[En]:En},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:j0,fragmentShader:Z0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let u=this.type;this.render=function(A,P,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=u!==yn&&this.type===yn,X=u===yn&&this.type!==yn;for(let j=0,Y=A.length;j<Y;j++){const Z=A[j],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const de=$.getFrameExtents();if(r.multiply(de),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,$.mapSize.y=s.y)),$.map===null||O===!0||X===!0){const be=this.type!==yn?{minFilter:ln,magFilter:ln}:{};$.map!==null&&$.map.dispose(),$.map=new xi(r.x,r.y,be),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ce=$.getViewportCount();for(let be=0;be<ce;be++){const K=$.getViewport(be);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),z.viewport(o),$.updateMatrices(Z,be),i=$.getFrustum(),b(P,I,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===yn&&M($,I),$.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(E,x,D)};function M(A,P){const I=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,I,m,_,null)}function y(A,P,I,E){let x=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=I.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=x.uuid,O=P.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let j=X[O];j===void 0&&(j=x.clone(),X[O]=j,P.addEventListener("dispose",T)),x=j}if(x.visible=P.visible,x.wireframe=P.wireframe,E===yn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:p[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=I}return x}function b(A,P,I,E,x){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===yn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=e.update(A),X=A.material;if(Array.isArray(X)){const j=O.groups;for(let Y=0,Z=j.length;Y<Z;Y++){const $=j[Y],de=X[$.materialIndex];if(de&&de.visible){const ce=y(A,de,E,x);A.onBeforeShadow(n,A,P,I,O,ce,$),n.renderBufferDirect(I,null,O,ce,A,$),A.onAfterShadow(n,A,P,I,O,ce,$)}}}else if(X.visible){const j=y(A,X,E,x);A.onBeforeShadow(n,A,P,I,O,j,null),n.renderBufferDirect(I,null,O,j,A,null),A.onAfterShadow(n,A,P,I,O,j,null)}}const z=A.children;for(let O=0,X=z.length;O<X;O++)b(z[O],P,I,E,x)}function T(A){A.target.removeEventListener("dispose",T);for(const I in l){const E=l[I],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Q0={[go]:_o,[vo]:Mo,[xo]:So,[tr]:bo,[_o]:go,[Mo]:vo,[So]:xo,[bo]:tr};function ev(n,e){function t(){let L=!1;const ae=new at;let B=null;const q=new at(0,0,0,0);return{setMask:function(se){B!==se&&!L&&(n.colorMask(se,se,se,se),B=se)},setLocked:function(se){L=se},setClear:function(se,oe,Ae,tt,Je){Je===!0&&(se*=tt,oe*=tt,Ae*=tt),ae.set(se,oe,Ae,tt),q.equals(ae)===!1&&(n.clearColor(se,oe,Ae,tt),q.copy(ae))},reset:function(){L=!1,B=null,q.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,B=null,q=null,se=null;return{setReversed:function(oe){if(ae!==oe){const Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT);const tt=se;se=null,this.setClear(tt)}ae=oe},getReversed:function(){return ae},setTest:function(oe){oe?ue(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(oe){B!==oe&&!L&&(n.depthMask(oe),B=oe)},setFunc:function(oe){if(ae&&(oe=Q0[oe]),q!==oe){switch(oe){case go:n.depthFunc(n.NEVER);break;case _o:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case xo:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case Mo:n.depthFunc(n.GREATER);break;case So:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=oe}},setLocked:function(oe){L=oe},setClear:function(oe){se!==oe&&(ae&&(oe=1-oe),n.clearDepth(oe),se=oe)},reset:function(){L=!1,B=null,q=null,se=null,ae=!1}}}function r(){let L=!1,ae=null,B=null,q=null,se=null,oe=null,Ae=null,tt=null,Je=null;return{setTest:function($e){L||($e?ue(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function($e){ae!==$e&&!L&&(n.stencilMask($e),ae=$e)},setFunc:function($e,Dt,Ot){(B!==$e||q!==Dt||se!==Ot)&&(n.stencilFunc($e,Dt,Ot),B=$e,q=Dt,se=Ot)},setOp:function($e,Dt,Ot){(oe!==$e||Ae!==Dt||tt!==Ot)&&(n.stencilOp($e,Dt,Ot),oe=$e,Ae=Dt,tt=Ot)},setLocked:function($e){L=$e},setClear:function($e){Je!==$e&&(n.clearStencil($e),Je=$e)},reset:function(){L=!1,ae=null,B=null,q=null,se=null,oe=null,Ae=null,tt=null,Je=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},p={},d=new WeakMap,m=[],g=null,_=!1,f=null,u=null,M=null,y=null,b=null,T=null,A=null,P=new Ye(0,0,0),I=0,E=!1,x=null,D=null,z=null,O=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=Z>=2);let de=null,ce={};const be=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),Fe=new at().fromArray(be),H=new at().fromArray(K);function ie(L,ae,B,q){const se=new Uint8Array(4),oe=n.createTexture();n.bindTexture(L,oe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<B;Ae++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ae+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return oe}const ye={};ye[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(tr),Xe(!1),He(gc),ue(n.CULL_FACE),N($n);function ue(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function ke(L,ae){return p[L]!==ae?(n.bindFramebuffer(L,ae),p[L]=ae,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function ge(L,ae){let B=m,q=!1;if(L){B=d.get(ae),B===void 0&&(B=[],d.set(ae,B));const se=L.textures;if(B.length!==se.length||B[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ae=se.length;oe<Ae;oe++)B[oe]=n.COLOR_ATTACHMENT0+oe;B.length=se.length,q=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,q=!0);q&&n.drawBuffers(B)}function Ne(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Be={[oi]:n.FUNC_ADD,[_f]:n.FUNC_SUBTRACT,[vf]:n.FUNC_REVERSE_SUBTRACT};Be[xf]=n.MIN,Be[bf]=n.MAX;const ft={[Mf]:n.ZERO,[Sf]:n.ONE,[yf]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[Cf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[wf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Pf]:n.CONSTANT_COLOR,[Df]:n.ONE_MINUS_CONSTANT_COLOR,[Lf]:n.CONSTANT_ALPHA,[If]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ae,B,q,se,oe,Ae,tt,Je,$e){if(L===$n){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),L!==gf){if(L!==f||$e!==E){if((u!==oi||b!==oi)&&(n.blendEquation(n.FUNC_ADD),u=oi,b=oi),$e)switch(L){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,T=null,A=null,P.set(0,0,0),I=0,f=L,E=$e}return}se=se||ae,oe=oe||B,Ae=Ae||q,(ae!==u||se!==b)&&(n.blendEquationSeparate(Be[ae],Be[se]),u=ae,b=se),(B!==M||q!==y||oe!==T||Ae!==A)&&(n.blendFuncSeparate(ft[B],ft[q],ft[oe],ft[Ae]),M=B,y=q,T=oe,A=Ae),(tt.equals(P)===!1||Je!==I)&&(n.blendColor(tt.r,tt.g,tt.b,Je),P.copy(tt),I=Je),f=L,E=!1}function Pt(L,ae){L.side===En?Re(n.CULL_FACE):ue(n.CULL_FACE);let B=L.side===Ft;ae&&(B=!B),Xe(B),L.blending===Zi&&L.transparent===!1?N($n):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const q=L.stencilWrite;a.setTest(q),q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){x!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),x=L)}function He(L){L!==pf?(ue(n.CULL_FACE),L!==D&&(L===gc?n.cullFace(n.BACK):L===mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=L}function Pe(L){L!==z&&(Y&&n.lineWidth(L),z=L)}function Ze(L,ae,B){L?(ue(n.POLYGON_OFFSET_FILL),(O!==ae||X!==B)&&(n.polygonOffset(ae,B),O=ae,X=B)):Re(n.POLYGON_OFFSET_FILL)}function De(L){L?ue(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+j-1),de!==L&&(n.activeTexture(L),de=L)}function S(L,ae,B){B===void 0&&(de===null?B=n.TEXTURE0+j-1:B=de);let q=ce[B];q===void 0&&(q={type:void 0,texture:void 0},ce[B]=q),(q.type!==L||q.texture!==ae)&&(de!==B&&(n.activeTexture(B),de=B),n.bindTexture(L,ae||ye[L]),q.type=L,q.texture=ae)}function V(){const L=ce[de];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Fe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function Se(L){H.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),H.copy(L))}function ee(L,ae){let B=l.get(ae);B===void 0&&(B=new WeakMap,l.set(ae,B));let q=B.get(L);q===void 0&&(q=n.getUniformBlockIndex(ae,L.name),B.set(L,q))}function J(L,ae){const q=l.get(ae).get(L);c.get(ae)!==q&&(n.uniformBlockBinding(ae,q,L.__bindingPointIndex),c.set(ae,q))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,ce={},p={},d=new WeakMap,m=[],g=null,_=!1,f=null,u=null,M=null,y=null,b=null,T=null,A=null,P=new Ye(0,0,0),I=0,E=!1,x=null,D=null,z=null,O=null,X=null,Fe.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Re,bindFramebuffer:ke,drawBuffers:ge,useProgram:Ne,setBlending:N,setMaterial:Pt,setFlipSided:Xe,setCullFace:He,setLineWidth:Pe,setPolygonOffset:Ze,setScissorTest:De,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:Me,texImage3D:Le,updateUBOMapping:ee,uniformBlockBinding:J,texStorage2D:qe,texStorage3D:le,texSubImage2D:Q,texSubImage3D:ve,compressedTexSubImage2D:me,compressedTexSubImage3D:xe,scissor:Ue,viewport:Se,reset:fe}}function dh(n,e,t,i){const r=tv(i);switch(t){case yd:return n*e;case wd:return n*e;case Td:return n*e*2;case Ad:return n*e/r.components*r.byteLength;case Pl:return n*e/r.components*r.byteLength;case Rd:return n*e*2/r.components*r.byteLength;case Dl:return n*e*2/r.components*r.byteLength;case Ed:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case Ll:return n*e*4/r.components*r.byteLength;case Us:case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(n,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(n,8)*Math.max(e,8)/2;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Os:case Yo:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cd:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(n){switch(n){case Pn:case bd:return{byteLength:1,components:1};case Or:case Md:case Vr:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case vi:case Al:case Tn:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):Ks("canvas")}function _(R,S,V){let te=1;const re=De(R);if((re.width>V||re.height>V)&&(te=V/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(te*re.width),ve=Math.floor(te*re.height);p===void 0&&(p=g(Q,ve));const me=S?g(Q,ve):p;return me.width=Q,me.height=ve,me.getContext("2d").drawImage(R,0,0,Q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+ve+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function f(R){return R.generateMipmaps}function u(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,S,V,te,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),S===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),S===n.RGBA){const ve=re?ca:Ke.getTransfer(te);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=ve===nt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(R,S){let V;return R?S===null||S===vi||S===rr?V=n.DEPTH24_STENCIL8:S===Tn?V=n.DEPTH32F_STENCIL8:S===Or&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===rr?V=n.DEPTH_COMPONENT24:S===Tn?V=n.DEPTH_COMPONENT32F:S===Or&&(V=n.DEPTH_COMPONENT16),V}function T(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&h.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),x(S)}function I(R){const S=i.get(R);if(S.__webglInit===void 0)return;const V=R.source,te=d.get(V);if(te){const re=te[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(R),Object.keys(te).length===0&&d.delete(V)}i.remove(R)}function E(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const V=R.source,te=d.get(V);delete te[S.__cacheKey],o.memory.textures--}function x(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let re=0;re<S.__webglFramebuffer[te].length;re++)n.deleteFramebuffer(S.__webglFramebuffer[te][re]);else n.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)n.deleteFramebuffer(S.__webglFramebuffer[te]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let te=0,re=V.length;te<re;te++){const Q=i.get(V[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(R)}let D=0;function z(){D=0}function O(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function j(R,S){const V=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,R,S);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function Y(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){H(V,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function Z(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){H(V,R,S);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function $(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ie(V,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const de={[wo]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},ce={[ln]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},be={[$f]:n.NEVER,[Jf]:n.ALWAYS,[qf]:n.LESS,[Dd]:n.LEQUAL,[Yf]:n.EQUAL,[Zf]:n.GEQUAL,[Kf]:n.GREATER,[jf]:n.NOTEQUAL};function K(R,S){if(S.type===Tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===ga||S.magFilter===jr||S.magFilter===di||S.minFilter===mn||S.minFilter===ga||S.minFilter===jr||S.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,de[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,de[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,de[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ce[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==jr&&S.minFilter!==di||S.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const te=S.source;let re=d.get(te);re===void 0&&(re={},d.set(te,re));const Q=X(S);if(Q!==R.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[Q].usedTimes++;const ve=re[R.__cacheKey];ve!==void 0&&(re[R.__cacheKey].usedTimes--,ve.usedTimes===0&&E(S)),R.__cacheKey=Q,R.__webglTexture=re[Q].texture}return V}function H(R,S,V){let te=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=n.TEXTURE_3D);const re=Fe(R,S),Q=S.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+V);const ve=i.get(Q);if(Q.version!==ve.__version||re===!0){t.activeTexture(n.TEXTURE0+V);const me=Ke.getPrimaries(Ke.workingColorSpace),xe=S.colorSpace===Gn?null:Ke.getPrimaries(S.colorSpace),qe=S.colorSpace===Gn||me===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=_(S.image,!1,r.maxTextureSize);le=Ze(S,le);const Me=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let Ue=y(S.internalFormat,Me,Le,S.colorSpace,S.isVideoTexture);K(te,S);let Se;const ee=S.mipmaps,J=S.isVideoTexture!==!0,fe=ve.__version===void 0||re===!0,L=Q.dataReady,ae=T(S,le);if(S.isDepthTexture)Ue=b(S.format===sr,S.type),fe&&(J?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Me,Le,null));else if(S.isDataTexture)if(ee.length>0){J&&fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ue,ee[0].width,ee[0].height);for(let B=0,q=ee.length;B<q;B++)Se=ee[B],J?L&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Se.width,Se.height,Me,Le,Se.data):t.texImage2D(n.TEXTURE_2D,B,Ue,Se.width,Se.height,0,Me,Le,Se.data);S.generateMipmaps=!1}else J?(fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ue,le.width,le.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Me,Le,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Me,Le,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){J&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ue,ee[0].width,ee[0].height,le.depth);for(let B=0,q=ee.length;B<q;B++)if(Se=ee[B],S.format!==on)if(Me!==null)if(J){if(L)if(S.layerUpdates.size>0){const se=dh(Se.width,Se.height,S.format,S.type);for(const oe of S.layerUpdates){const Ae=Se.data.subarray(oe*se/Se.data.BYTES_PER_ELEMENT,(oe+1)*se/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,oe,Se.width,Se.height,1,Me,Ae)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Se.width,Se.height,le.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Ue,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Se.width,Se.height,le.depth,Me,Le,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Ue,Se.width,Se.height,le.depth,0,Me,Le,Se.data)}else{J&&fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ue,ee[0].width,ee[0].height);for(let B=0,q=ee.length;B<q;B++)Se=ee[B],S.format!==on?Me!==null?J?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?L&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Se.width,Se.height,Me,Le,Se.data):t.texImage2D(n.TEXTURE_2D,B,Ue,Se.width,Se.height,0,Me,Le,Se.data)}else if(S.isDataArrayTexture)if(J){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ue,le.width,le.height,le.depth),L)if(S.layerUpdates.size>0){const B=dh(le.width,le.height,S.format,S.type);for(const q of S.layerUpdates){const se=le.data.subarray(q*B/le.data.BYTES_PER_ELEMENT,(q+1)*B/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,le.width,le.height,1,Me,Le,se)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,Le,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Me,Le,le.data);else if(S.isData3DTexture)J?(fe&&t.texStorage3D(n.TEXTURE_3D,ae,Ue,le.width,le.height,le.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,Le,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Me,Le,le.data);else if(S.isFramebufferTexture){if(fe)if(J)t.texStorage2D(n.TEXTURE_2D,ae,Ue,le.width,le.height);else{let B=le.width,q=le.height;for(let se=0;se<ae;se++)t.texImage2D(n.TEXTURE_2D,se,Ue,B,q,0,Me,Le,null),B>>=1,q>>=1}}else if(ee.length>0){if(J&&fe){const B=De(ee[0]);t.texStorage2D(n.TEXTURE_2D,ae,Ue,B.width,B.height)}for(let B=0,q=ee.length;B<q;B++)Se=ee[B],J?L&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,Me,Le,Se):t.texImage2D(n.TEXTURE_2D,B,Ue,Me,Le,Se);S.generateMipmaps=!1}else if(J){if(fe){const B=De(le);t.texStorage2D(n.TEXTURE_2D,ae,Ue,B.width,B.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Le,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Me,Le,le);f(S)&&u(te),ve.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,V){if(S.image.length!==6)return;const te=Fe(R,S),re=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const Q=i.get(re);if(re.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+V);const ve=Ke.getPrimaries(Ke.workingColorSpace),me=S.colorSpace===Gn?null:Ke.getPrimaries(S.colorSpace),xe=S.colorSpace===Gn||ve===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let q=0;q<6;q++)!qe&&!le?Me[q]=_(S.image[q],!0,r.maxCubemapSize):Me[q]=le?S.image[q].image:S.image[q],Me[q]=Ze(S,Me[q]);const Le=Me[0],Ue=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),ee=y(S.internalFormat,Ue,Se,S.colorSpace),J=S.isVideoTexture!==!0,fe=Q.__version===void 0||te===!0,L=re.dataReady;let ae=T(S,Le);K(n.TEXTURE_CUBE_MAP,S);let B;if(qe){J&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,ee,Le.width,Le.height);for(let q=0;q<6;q++){B=Me[q].mipmaps;for(let se=0;se<B.length;se++){const oe=B[se];S.format!==on?Ue!==null?J?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,oe.width,oe.height,Ue,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,oe.width,oe.height,Ue,Se,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,ee,oe.width,oe.height,0,Ue,Se,oe.data)}}}else{if(B=S.mipmaps,J&&fe){B.length>0&&ae++;const q=De(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,ee,q.width,q.height)}for(let q=0;q<6;q++)if(le){J?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me[q].width,Me[q].height,Ue,Se,Me[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,Me[q].width,Me[q].height,0,Ue,Se,Me[q].data);for(let se=0;se<B.length;se++){const Ae=B[se].image[q].image;J?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,Ae.width,Ae.height,Ue,Se,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,ee,Ae.width,Ae.height,0,Ue,Se,Ae.data)}}else{J?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ue,Se,Me[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,Ue,Se,Me[q]);for(let se=0;se<B.length;se++){const oe=B[se];J?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,Ue,Se,oe.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,ee,Ue,Se,oe.image[q])}}}f(S)&&u(n.TEXTURE_CUBE_MAP),Q.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ye(R,S,V,te,re,Q){const ve=s.convert(V.format,V.colorSpace),me=s.convert(V.type),xe=y(V.internalFormat,ve,me,V.colorSpace),qe=i.get(S),le=i.get(V);if(le.__renderTarget=S,!qe.__hasExternalTextures){const Me=Math.max(1,S.width>>Q),Le=Math.max(1,S.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,xe,Me,Le,S.depth,0,ve,me,null):t.texImage2D(re,Q,xe,Me,Le,0,ve,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),He(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,re,le.__webglTexture,0,Xe(S)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,re,le.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(R,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const te=S.depthTexture,re=te&&te.isDepthTexture?te.type:null,Q=b(S.stencilBuffer,re),ve=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=Xe(S);He(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Q,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,R)}else{const te=S.textures;for(let re=0;re<te.length;re++){const Q=te[re],ve=s.convert(Q.format,Q.colorSpace),me=s.convert(Q.type),xe=y(Q.internalFormat,ve,me,Q.colorSpace),qe=Xe(S);V&&He(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,xe,S.width,S.height):He(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const re=te.__webglTexture,Q=Xe(S);if(S.depthTexture.format===Ji)He(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(S.depthTexture.format===sr)He(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ke(R){const S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=te}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=n.createRenderbuffer(),ue(S.__webglDepthbuffer[te],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ue(S.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,S,V){const te=i.get(R);S!==void 0&&ye(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ke(R)}function Ne(R){const S=R.texture,V=i.get(R),te=i.get(S);R.addEventListener("dispose",P);const re=R.textures,Q=R.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=S.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let xe=0;xe<S.mipmaps.length;xe++)V.__webglFramebuffer[me][xe]=n.createFramebuffer()}else V.__webglFramebuffer[me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)V.__webglFramebuffer[me]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ve)for(let me=0,xe=re.length;me<xe;me++){const qe=i.get(re[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const xe=re[me];V.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const qe=s.convert(xe.format,xe.colorSpace),le=s.convert(xe.type),Me=y(xe.internalFormat,qe,le,xe.colorSpace,R.isXRRenderTarget===!0),Le=Xe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,V.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),K(n.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(V.__webglFramebuffer[me][xe],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else ye(V.__webglFramebuffer[me],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);f(S)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let me=0,xe=re.length;me<xe;me++){const qe=re[me],le=i.get(qe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),K(n.TEXTURE_2D,qe),ye(V.__webglFramebuffer,R,qe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),f(qe)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),K(me,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(V.__webglFramebuffer[xe],R,S,n.COLOR_ATTACHMENT0,me,xe);else ye(V.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,me,0);f(S)&&u(me),t.unbindTexture()}R.depthBuffer&&ke(R)}function Be(R){const S=R.textures;for(let V=0,te=S.length;V<te;V++){const re=S[V];if(f(re)){const Q=M(R),ve=i.get(re).__webglTexture;t.bindTexture(Q,ve),u(Q),t.unbindTexture()}}}const ft=[],N=[];function Pt(R){if(R.samples>0){if(He(R)===!1){const S=R.textures,V=R.width,te=R.height;let re=n.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),me=S.length>1;if(me)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const qe=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,V,te,0,0,V,te,re,n.NEAREST),c===!0&&(ft.length=0,N.length=0,ft.push(n.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ft.push(Q),N.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const qe=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Xe(R){return Math.min(r.maxSamples,R.samples)}function He(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ze(R,S){const V=R.colorSpace,te=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==or&&V!==Gn&&(Ke.getTransfer(V)===nt?(te!==on||re!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ge,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function iv(n,e){function t(i,r=Gn){let s;const o=Ke.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.BYTE;if(i===Md)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Vr)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===on)return n.RGBA;if(i===wd)return n.LUMINANCE;if(i===Td)return n.LUMINANCE_ALPHA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Ad)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===Rd)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Us||i===Ns||i===Fs||i===ks)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===Po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===Lo||i===Io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Do||i===Lo)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Io)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uo||i===No||i===Fo||i===ko||i===Oo||i===Bo||i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===$o||i===qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===No)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ko)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Go)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$o)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os||i===Yo||i===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Os)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===jo||i===Zo||i===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Os)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class rv extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,i),u=this._getHandJoint(l,_);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zn({vertexShader:av,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cv extends Mi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,d=null,m=null,g=null;const _=new lv,f=t.getContextAttributes();let u=null,M=null;const y=[],b=[],T=new Ie;let A=null;const P=new $t;P.viewport=new at;const I=new $t;I.viewport=new at;const E=[P,I],x=new rv;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=y[H];return ie===void 0&&(ie=new Wa,y[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=y[H];return ie===void 0&&(ie=new Wa,y[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=y[H];return ie===void 0&&(ie=new Wa,y[H]=ie),ie.getHandSpace()};function O(H){const ie=b.indexOf(H.inputSource);if(ie===-1)return;const ye=y[ie];ye!==void 0&&(ye.update(H.inputSource,H.frame,l||o),ye.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let H=0;H<y.length;H++){const ie=b[H];ie!==null&&(b[H]=null,y[H].disconnect(ie))}D=null,z=null,_.reset(),e.setRenderTarget(u),m=null,d=null,p=null,r=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const ie={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new xi(m.framebufferWidth,m.framebufferHeight,{format:on,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ie=null,ye=null,ue=null;f.depth&&(ue=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=f.stencil?sr:Ji,ye=f.stencil?rr:vi);const Re={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new xi(d.textureWidth,d.textureHeight,{format:on,type:Pn,depthTexture:new Wd(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(H){for(let ie=0;ie<H.removed.length;ie++){const ye=H.removed[ie],ue=b.indexOf(ye);ue>=0&&(b[ue]=null,y[ue].disconnect(ye))}for(let ie=0;ie<H.added.length;ie++){const ye=H.added[ie];let ue=b.indexOf(ye);if(ue===-1){for(let ke=0;ke<y.length;ke++)if(ke>=b.length){b.push(ye),ue=ke;break}else if(b[ke]===null){b[ke]=ye,ue=ke;break}if(ue===-1)break}const Re=y[ue];Re&&Re.connect(ye)}}const Y=new U,Z=new U;function $(H,ie,ye){Y.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);const ue=Y.distanceTo(Z),Re=ie.projectionMatrix.elements,ke=ye.projectionMatrix.elements,ge=Re[14]/(Re[10]-1),Ne=Re[14]/(Re[10]+1),Be=(Re[9]+1)/Re[5],ft=(Re[9]-1)/Re[5],N=(Re[8]-1)/Re[0],Pt=(ke[8]+1)/ke[0],Xe=ge*N,He=ge*Pt,Pe=ue/(-N+Pt),Ze=Pe*-N;if(ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ze),H.translateZ(Pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Re[10]===-1)H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const De=ge+Pe,R=Ne+Pe,S=Xe-Ze,V=He+(ue-Ze),te=Be*Ne/R*De,re=ft*Ne/R*De;H.projectionMatrix.makePerspective(S,V,te,re,De,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function de(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ie=H.near,ye=H.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),x.near=I.near=P.near=ie,x.far=I.far=P.far=ye,(D!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,z=x.far),P.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,x.layers.mask=P.layers.mask|I.layers.mask;const ue=H.parent,Re=x.cameras;de(x,ue);for(let ke=0;ke<Re.length;ke++)de(Re[ke],ue);Re.length===2?$(x,P,I):x.projectionMatrix.copy(P.projectionMatrix),ce(H,x,ue)};function ce(H,ie,ye){ye===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ye.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=el*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let be=null;function K(H,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ue=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let ke=0;ke<ye.length;ke++){const ge=ye[ke];let Ne=null;if(m!==null)Ne=m.getViewport(ge);else{const ft=p.getViewSubImage(d,ge);Ne=ft.viewport,ke===0&&(e.setRenderTargetTextures(M,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(M))}let Be=E[ke];Be===void 0&&(Be=new $t,Be.layers.enable(ke),Be.viewport=new at,E[ke]=Be),Be.matrix.fromArray(ge.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ge.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ke===0&&(x.matrix.copy(Be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(Be)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const ke=p.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,r.renderState)}}for(let ye=0;ye<y.length;ye++){const ue=b[ye],Re=y[ye];ue!==null&&Re!==void 0&&Re.update(ue,ie,l||o)}be&&be(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Fe=new Vd;Fe.setAnimationLoop(K),this.setAnimationLoop=function(H){be=H},this.dispose=function(){}}}const ri=new gn,hv=new ut;function dv(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Bd(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,M,y,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,b)):u.isMeshMatcapMaterial?(s(f,u),g(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),_(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?c(f,u,M,y):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ft&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ft&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const M=e.get(u),y=M.envMap,b=M.envMapRotation;y&&(f.envMap.value=y,ri.copy(b),ri.x*=-1,ri.y*=-1,ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),f.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(ri)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,M,y){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*M,f.scale.value=y*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,M){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function _(f,u){const M=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uv(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function l(M,y){let b=r[M.id];b===void 0&&(g(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",f));const T=y.program;i.updateUBOMapping(M,T);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){const y=p();M.__bindingPointIndex=y;const b=n.createBuffer(),T=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],b=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,P=b.length;A<P;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,x=I.length;E<x;E++){const D=I[E];if(m(D,A,E,T)===!0){const z=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<O.length;j++){const Y=O[j],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,z+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,b,T){const A=M.value,P=y+"_"+b;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{const I=T[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(M){const y=M.uniforms;let b=0;const T=16;for(let P=0,I=y.length;P<I;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,D=E.length;x<D;x++){const z=E[x],O=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=O.length;X<j;X++){const Y=O[X],Z=_(Y),$=b%T,de=$%Z.boundary,ce=$+de;b+=de,ce!==0&&T-ce<Z.storage&&(b+=T-ce),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=Z.storage}}}const A=b%T;return A>0&&(b+=T-A),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function f(M){const y=M.target;y.removeEventListener("dispose",f);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class fv{constructor(e={}){const{canvas:t=tp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,u=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=qn,this.toneMappingExposure=1;const b=this;let T=!1,A=0,P=0,I=null,E=-1,x=null;const D=new at,z=new at;let O=null;const X=new Ye(0);let j=0,Y=t.width,Z=t.height,$=1,de=null,ce=null;const be=new at(0,0,Y,Z),K=new at(0,0,Y,Z);let Fe=!1;const H=new Nl;let ie=!1,ye=!1;const ue=new ut,Re=new ut,ke=new U,ge=new at,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ft(){return I===null?$:1}let N=i;function Pt(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const F="webgl2";if(N=Pt(F,w),N===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,He,Pe,Ze,De,R,S,V,te,re,Q,ve,me,xe,qe,le,Me,Le,Ue,Se,ee,J,fe,L;function ae(){Xe=new v_(N),Xe.init(),J=new iv(N,Xe),He=new u_(N,Xe,e,J),Pe=new ev(N,Xe),He.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),Ze=new M_(N),De=new B0,R=new nv(N,Xe,Pe,De,He,J,Ze),S=new p_(b),V=new __(b),te=new Rp(N),fe=new h_(N,te),re=new x_(N,te,Ze,fe),Q=new y_(N,re,te,Ze),Ue=new S_(N,He,R),le=new f_(De),ve=new O0(b,S,V,Xe,He,fe,le),me=new dv(b,De),xe=new H0,qe=new q0(Xe),Le=new c_(b,S,V,Pe,Q,m,c),Me=new J0(b,Q,He),L=new uv(N,Ze,He,Pe),Se=new d_(N,Xe,Ze),ee=new b_(N,Xe,Ze),Ze.programs=ve.programs,b.capabilities=He,b.extensions=Xe,b.properties=De,b.renderLists=xe,b.shadowMap=Me,b.state=Pe,b.info=Ze}ae();const B=new cv(b,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(Y,Z,!1))},this.getSize=function(w){return w.set(Y,Z)},this.setSize=function(w,F,G=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,Z=F,t.width=Math.floor(w*$),t.height=Math.floor(F*$),G===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*$,Z*$).floor()},this.setDrawingBufferSize=function(w,F,G){Y=w,Z=F,$=G,t.width=Math.floor(w*G),t.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,F,G,W){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,F,G,W),Pe.viewport(D.copy(be).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,F,G,W){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,F,G,W),Pe.scissor(z.copy(K).multiplyScalar($).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(w){Pe.setScissorTest(Fe=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(w=!0,F=!0,G=!0){let W=0;if(w){let k=!1;if(I!==null){const he=I.texture.format;k=he===Ll||he===Dl||he===Pl}if(k){const he=I.texture.type,_e=he===Pn||he===vi||he===Or||he===rr||he===Rl||he===Cl,Ee=Le.getClearColor(),we=Le.getClearAlpha(),Oe=Ee.r,Ve=Ee.g,Te=Ee.b;_e?(g[0]=Oe,g[1]=Ve,g[2]=Te,g[3]=we,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Oe,_[1]=Ve,_[2]=Te,_[3]=we,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),xe.dispose(),qe.dispose(),De.dispose(),S.dispose(),V.dispose(),Q.dispose(),fe.dispose(),L.dispose(),ve.dispose(),B.dispose(),B.removeEventListener("sessionstart",yi),B.removeEventListener("sessionend",Ei),en.stop()};function q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Ze.autoReset,F=Me.enabled,G=Me.autoUpdate,W=Me.needsUpdate,k=Me.type;ae(),Ze.autoReset=w,Me.enabled=F,Me.autoUpdate=G,Me.needsUpdate=W,Me.type=k}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const F=w.target;F.removeEventListener("dispose",Ae),tt(F)}function tt(w){Je(w),De.remove(w)}function Je(w){const F=De.get(w).programs;F!==void 0&&(F.forEach(function(G){ve.releaseProgram(G)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,W,k,he){F===null&&(F=Ne);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Ee=lu(w,F,G,W,k);Pe.setMaterial(W,_e);let we=G.index,Oe=1;if(W.wireframe===!0){if(we=re.getWireframeAttribute(G),we===void 0)return;Oe=2}const Ve=G.drawRange,Te=G.attributes.position;let je=Ve.start*Oe,ct=(Ve.start+Ve.count)*Oe;he!==null&&(je=Math.max(je,he.start*Oe),ct=Math.min(ct,(he.start+he.count)*Oe)),we!==null?(je=Math.max(je,0),ct=Math.min(ct,we.count)):Te!=null&&(je=Math.max(je,0),ct=Math.min(ct,Te.count));const ht=ct-je;if(ht<0||ht===1/0)return;fe.setup(k,W,Ee,G,we);let Bt,Qe=Se;if(we!==null&&(Bt=te.get(we),Qe=ee,Qe.setIndex(Bt)),k.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*ft()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(k.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Pe.setLineWidth(Ce*ft()),k.isLineSegments?Qe.setMode(N.LINES):k.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else k.isPoints?Qe.setMode(N.POINTS):k.isSprite&&Qe.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ce=k._multiDrawStarts,_n=k._multiDrawCounts,et=k._multiDrawCount,tn=we?te.get(we).bytesPerElement:1,wi=De.get(W).currentProgram.getUniforms();for(let Ht=0;Ht<et;Ht++)wi.setValue(N,"_gl_DrawID",Ht),Qe.render(Ce[Ht]/tn,_n[Ht])}else if(k.isInstancedMesh)Qe.renderInstances(je,ht,k.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_n=Math.min(G.instanceCount,Ce);Qe.renderInstances(je,ht,_n)}else Qe.render(je,ht)};function $e(w,F,G){w.transparent===!0&&w.side===En&&w.forceSinglePass===!1?(w.side=Ft,w.needsUpdate=!0,qr(w,F,G),w.side=jn,w.needsUpdate=!0,qr(w,F,G),w.side=En):qr(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),u=qe.get(G),u.init(F),y.push(u),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==G&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const W=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ee=he[_e];$e(Ee,G,k),W.add(Ee)}else $e(he,G,k),W.add(he)}),y.pop(),u=null,W},this.compileAsync=function(w,F,G=null){const W=this.compile(w,F,G);return new Promise(k=>{function he(){if(W.forEach(function(_e){De.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){k(w);return}setTimeout(he,10)}Xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Dt=null;function Ot(w){Dt&&Dt(w)}function yi(){en.stop()}function Ei(){en.start()}const en=new Vd;en.setAnimationLoop(Ot),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(w){Dt=w,B.setAnimationLoop(w),w===null?en.stop():en.start()},B.addEventListener("sessionstart",yi),B.addEventListener("sessionend",Ei),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(F),F=B.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,F,I),u=qe.get(w,y.length),u.init(F),y.push(u),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(Re),ye=this.localClippingEnabled,ie=le.init(this.clippingPlanes,ye),f=xe.get(w,M.length),f.init(),M.push(f),B.enabled===!0&&B.isPresenting===!0){const he=b.xr.getDepthSensingMesh();he!==null&&cr(he,F,-1/0,b.sortObjects)}cr(w,F,0,b.sortObjects),f.finish(),b.sortObjects===!0&&f.sort(de,ce),Be=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Be&&Le.addToRenderList(f,w),this.info.render.frame++,ie===!0&&le.beginShadows();const G=u.state.shadowsArray;Me.render(G,w,F),ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=f.opaque,k=f.transmissive;if(u.setupLights(),F.isArrayCamera){const he=F.cameras;if(k.length>0)for(let _e=0,Ee=he.length;_e<Ee;_e++){const we=he[_e];Hl(W,k,w,we)}Be&&Le.render(w);for(let _e=0,Ee=he.length;_e<Ee;_e++){const we=he[_e];Xr(f,w,we,we.viewport)}}else k.length>0&&Hl(W,k,w,F),Be&&Le.render(w),Xr(f,w,F);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(b,w,F),fe.resetDefaultState(),E=-1,x=null,y.pop(),y.length>0?(u=y[y.length-1],ie===!0&&le.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function cr(w,F,G,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){W&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const _e=Q.update(w),Ee=w.material;Ee.visible&&f.push(w,_e,Ee,G,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){const _e=Q.update(w),Ee=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ge.copy(_e.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(Ee)){const we=_e.groups;for(let Oe=0,Ve=we.length;Oe<Ve;Oe++){const Te=we[Oe],je=Ee[Te.materialIndex];je&&je.visible&&f.push(w,_e,je,G,ge.z,Te)}}else Ee.visible&&f.push(w,_e,Ee,G,ge.z,null)}}const he=w.children;for(let _e=0,Ee=he.length;_e<Ee;_e++)cr(he[_e],F,G,W)}function Xr(w,F,G,W){const k=w.opaque,he=w.transmissive,_e=w.transparent;u.setupLightsView(G),ie===!0&&le.setGlobalState(b.clippingPlanes,G),W&&Pe.viewport(D.copy(W)),k.length>0&&$r(k,F,G),he.length>0&&$r(he,F,G),_e.length>0&&$r(_e,F,G),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Hl(w,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new xi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Vr:Pn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const he=u.state.transmissionRenderTarget[W.id],_e=W.viewport||D;he.setSize(_e.z,_e.w);const Ee=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(X),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),Be&&Le.render(G);const we=b.toneMapping;b.toneMapping=qn;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ie===!0&&le.setGlobalState(b.clippingPlanes,W),$r(w,G,W),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Te=0,je=F.length;Te<je;Te++){const ct=F[Te],ht=ct.object,Bt=ct.geometry,Qe=ct.material,Ce=ct.group;if(Qe.side===En&&ht.layers.test(W.layers)){const _n=Qe.side;Qe.side=Ft,Qe.needsUpdate=!0,Vl(ht,G,W,Bt,Qe,Ce),Qe.side=_n,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}b.setRenderTarget(Ee),b.setClearColor(X,j),Oe!==void 0&&(W.viewport=Oe),b.toneMapping=we}function $r(w,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,he=w.length;k<he;k++){const _e=w[k],Ee=_e.object,we=_e.geometry,Oe=W===null?_e.material:W,Ve=_e.group;Ee.layers.test(G.layers)&&Vl(Ee,F,G,we,Oe,Ve)}}function Vl(w,F,G,W,k,he){w.onBeforeRender(b,F,G,W,k,he),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(b,F,G,W,w,he),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,b.renderBufferDirect(G,F,W,k,w,he),k.side=jn,k.needsUpdate=!0,b.renderBufferDirect(G,F,W,k,w,he),k.side=En):b.renderBufferDirect(G,F,W,k,w,he),w.onAfterRender(b,F,G,W,k,he)}function qr(w,F,G){F.isScene!==!0&&(F=Ne);const W=De.get(w),k=u.state.lights,he=u.state.shadowsArray,_e=k.state.version,Ee=ve.getParameters(w,k.state,he,F,G),we=ve.getProgramCacheKey(Ee);let Oe=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Ae),Oe=new Map,W.programs=Oe);let Ve=Oe.get(we);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===_e)return Wl(w,Ee),Ve}else Ee.uniforms=ve.getUniforms(w),w.onBeforeCompile(Ee,b),Ve=ve.acquireProgram(Ee,we),Oe.set(we,Ve),W.uniforms=Ee.uniforms;const Te=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=le.uniform),Wl(w,Ee),W.needsLights=hu(w),W.lightsStateVersion=_e,W.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function Gl(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Bs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Wl(w,F){const G=De.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function lu(w,F,G,W,k){F.isScene!==!0&&(F=Ne),R.resetTextureUnits();const he=F.fog,_e=W.isMeshStandardMaterial?F.environment:null,Ee=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:or,we=(W.isMeshStandardMaterial?V:S).get(W.envMap||_e),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let ht=qn;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=b.toneMapping);const Bt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=Bt!==void 0?Bt.length:0,Ce=De.get(W),_n=u.state.lights;if(ie===!0&&(ye===!0||w!==x)){const jt=w===x&&W.id===E;le.setState(W,w,jt)}let et=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==_n.state.version||Ce.outputColorSpace!==Ee||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==we||W.fog===!0&&Ce.fog!==he||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==Ve||Ce.morphTargets!==Te||Ce.morphNormals!==je||Ce.morphColors!==ct||Ce.toneMapping!==ht||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=W.version);let tn=Ce.currentProgram;et===!0&&(tn=qr(W,F,k));let wi=!1,Ht=!1,hr=!1;const dt=tn.getUniforms(),hn=Ce.uniforms;if(Pe.useProgram(tn.program)&&(wi=!0,Ht=!0,hr=!0),W.id!==E&&(E=W.id,Ht=!0),wi||x!==w){Pe.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),ip(ue),rp(ue),dt.setValue(N,"projectionMatrix",ue)):dt.setValue(N,"projectionMatrix",w.projectionMatrix),dt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Ln=dt.map.cameraPosition;Ln!==void 0&&Ln.setValue(N,ke.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ht=!0,hr=!0)}if(k.isSkinnedMesh){dt.setOptional(N,k,"bindMatrix"),dt.setOptional(N,k,"bindMatrixInverse");const jt=k.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),dt.setValue(N,"boneTexture",jt.boneTexture,R))}k.isBatchedMesh&&(dt.setOptional(N,k,"batchingTexture"),dt.setValue(N,"batchingTexture",k._matricesTexture,R),dt.setOptional(N,k,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",k._indirectTexture,R),dt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",k._colorsTexture,R));const dr=G.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Ue.update(k,G,tn),(Ht||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,dt.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=we,hn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(hn.envMapIntensity.value=F.environmentIntensity),Ht&&(dt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Ce.needsLights&&cu(hn,hr),he&&W.fog===!0&&me.refreshFogUniforms(hn,he),me.refreshMaterialUniforms(hn,W,$,Z,u.state.transmissionRenderTarget[w.id]),Bs.upload(N,Gl(Ce),hn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bs.upload(N,Gl(Ce),hn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(N,"center",k.center),dt.setValue(N,"modelViewMatrix",k.modelViewMatrix),dt.setValue(N,"normalMatrix",k.normalMatrix),dt.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let Ln=0,In=jt.length;Ln<In;Ln++){const Xl=jt[Ln];L.update(Xl,tn),L.bind(Xl,tn)}}return tn}function cu(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,G){De.get(w.texture).__webglTexture=F,De.get(w.depthTexture).__webglTexture=G;const W=De.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const G=De.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){I=w,A=F,P=G;let W=!0,k=null,he=!1,_e=!1;if(w){const we=De.get(w);if(we.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(we.__hasExternalTextures)R.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&De.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Ve=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?k=Ve[F][G]:k=Ve[F],he=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[G]:k=Ve,D.copy(w.viewport),z.copy(w.scissor),O=w.scissorTest}else D.copy(be).multiplyScalar($).floor(),z.copy(K).multiplyScalar($).floor(),O=Fe;if(Pe.bindFramebuffer(N.FRAMEBUFFER,k)&&W&&Pe.drawBuffers(w,k),Pe.viewport(D),Pe.scissor(z),Pe.setScissorTest(O),he){const we=De.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,G)}else if(_e){const we=De.get(w.texture),Oe=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,G||0,Oe)}E=-1},this.readRenderTargetPixels=function(w,F,G,W,k,he,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Pe.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const we=w.texture,Oe=we.format,Ve=we.type;if(!He.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&G>=0&&G<=w.height-k&&N.readPixels(F,G,W,k,J.convert(Oe),J.convert(Ve),he)}finally{const we=I!==null?De.get(I).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,W,k,he,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){const we=w.texture,Oe=we.format,Ve=we.type;if(!He.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-W&&G>=0&&G<=w.height-k){Pe.bindFramebuffer(N.FRAMEBUFFER,Ee);const Te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(F,G,W,k,J.convert(Oe),J.convert(Ve),0);const je=I!==null?De.get(I).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,je);const ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await np(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(Te),N.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,G=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(w.image.width*W),he=Math.floor(w.image.height*W),_e=F!==null?F.x:0,Ee=F!==null?F.y:0;R.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,_e,Ee,k,he),Pe.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,W=null,k=0){w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],F=arguments[2],k=arguments[3]||0,G=null);let he,_e,Ee,we,Oe,Ve,Te,je,ct;const ht=w.isCompressedTexture?w.mipmaps[k]:w.image;G!==null?(he=G.max.x-G.min.x,_e=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Oe=G.min.y,Ve=G.isBox3?G.min.z:0):(he=ht.width,_e=ht.height,Ee=ht.depth||1,we=0,Oe=0,Ve=0),W!==null?(Te=W.x,je=W.y,ct=W.z):(Te=0,je=0,ct=0);const Bt=J.convert(F.format),Qe=J.convert(F.type);let Ce;F.isData3DTexture?(R.setTexture3D(F,0),Ce=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Ce=N.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),wi=N.getParameter(N.UNPACK_SKIP_ROWS),Ht=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const hr=w.isDataArrayTexture||w.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const hn=De.get(w),dr=De.get(F),jt=De.get(hn.__renderTarget),Ln=De.get(dr.__renderTarget);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,jt.__webglFramebuffer),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let In=0;In<Ee;In++)hr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(w).__webglTexture,k,Ve+In),w.isDepthTexture?(dt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(F).__webglTexture,k,ct+In),N.blitFramebuffer(we,Oe,he,_e,Te,je,he,_e,N.DEPTH_BUFFER_BIT,N.NEAREST)):dt?N.copyTexSubImage3D(Ce,k,Te,je,ct+In,we,Oe,he,_e):N.copyTexSubImage2D(Ce,k,Te,je,ct+In,we,Oe,he,_e);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ce,k,Te,je,ct,he,_e,Ee,Bt,Qe,ht.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,k,Te,je,ct,he,_e,Ee,Bt,ht.data):N.texSubImage3D(Ce,k,Te,je,ct,he,_e,Ee,Bt,Qe,ht):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Te,je,he,_e,Bt,Qe,ht.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Te,je,ht.width,ht.height,Bt,ht.data):N.texSubImage2D(N.TEXTURE_2D,k,Te,je,he,_e,Bt,Qe,ht);N.pixelStorei(N.UNPACK_ROW_LENGTH,_n),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht),k===0&&F.generateMipmaps&&N.generateMipmap(Ce),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,W=null,k=0){return w.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],F=arguments[3],k=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,G,W,k)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,Pe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Kd extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new U;class js{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jd extends Jn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const vr=new U,Hi=new U,Vi=new U,Gi=new Ie,xr=new Ie,Zd=new ut,_s=new U,br=new U,vs=new U,uh=new Ie,Xa=new Ie,fh=new Ie;class mv extends Mt{constructor(e=new jd){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pv(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new js(i,3,0,!1)),zi.setAttribute("uv",new js(i,2,3,!1))}this.geometry=zi,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xs(_s.set(-.5,-.5,0),Vi,o,Hi,r,s),xs(br.set(.5,-.5,0),Vi,o,Hi,r,s),xs(vs.set(.5,.5,0),Vi,o,Hi,r,s),uh.set(0,0),Xa.set(1,0),fh.set(1,1);let a=e.ray.intersectTriangle(_s,br,vs,!1,vr);if(a===null&&(xs(br.set(-.5,.5,0),Vi,o,Hi,r,s),Xa.set(0,1),a=e.ray.intersectTriangle(_s,vs,br,!1,vr),a===null))return;const c=e.ray.origin.distanceTo(vr);c<e.near||c>e.far||t.push({distance:c,point:vr.clone(),uv:qt.getInterpolation(vr,_s,br,vs,uh,Xa,fh,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xs(n,e,t,i,r,s){Gi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(xr.x=s*Gi.x-r*Gi.y,xr.y=r*Gi.x+s*Gi.y):xr.copy(Gi),n.copy(e),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(Zd)}class il extends Jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zs=new U,Js=new U,ph=new ut,Mr=new Il,bs=new ha,$a=new U,mh=new U;class Jd extends Mt{constructor(e=new Qt,t=new il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Zs.fromBufferAttribute(t,r-1),Js.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Zs.distanceTo(Js);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(r),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;ph.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){const u=h.getX(_),M=h.getX(_+1),y=Ms(this,e,Mr,c,u,M);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(m),u=Ms(this,e,Mr,c,_,f);u&&t.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){const u=Ms(this,e,Mr,c,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=Ms(this,e,Mr,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ms(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Zs.fromBufferAttribute(o,r),Js.fromBufferAttribute(o,s),t.distanceSqToSegment(Zs,Js,$a,mh)>i)return;$a.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($a);if(!(c<e.near||c>e.far))return{distance:c,point:mh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const gh=new U,_h=new U;class gv extends Jd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)gh.fromBufferAttribute(t,r),_h.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gh.distanceTo(_h);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qd extends kt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kl extends Qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],m=[];let g=0;const _=[],f=i/2;let u=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(m,2));function M(){const b=new U,T=new U;let A=0;const P=(t-e)/i;for(let I=0;I<=s;I++){const E=[],x=I/s,D=x*(t-e)+e;for(let z=0;z<=r;z++){const O=z/r,X=O*c+a,j=Math.sin(X),Y=Math.cos(X);T.x=D*j,T.y=-x*i+f,T.z=D*Y,p.push(T.x,T.y,T.z),b.set(j,P,Y).normalize(),d.push(b.x,b.y,b.z),m.push(O,1-x),E.push(g++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const x=_[E][I],D=_[E+1][I],z=_[E+1][I+1],O=_[E][I+1];(e>0||E!==0)&&(h.push(x,D,O),A+=3),(t>0||E!==s-1)&&(h.push(D,z,O),A+=3)}l.addGroup(u,A,0),u+=A}function y(b){const T=g,A=new Ie,P=new U;let I=0;const E=b===!0?e:t,x=b===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,f*x,0),d.push(0,x,0),m.push(.5,.5),g++;const D=g;for(let z=0;z<=r;z++){const X=z/r*c+a,j=Math.cos(X),Y=Math.sin(X);P.x=E*Y,P.y=f*x,P.z=E*j,p.push(P.x,P.y,P.z),d.push(0,x,0),A.x=j*.5+.5,A.y=Y*.5*x+.5,m.push(A.x,A.y),g++}for(let z=0;z<r;z++){const O=T+z,X=D+z;b===!0?h.push(X,X+1,O):h.push(X+1,X,O),I+=3}l.addGroup(u,I,b===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ss=new U,ys=new U,qa=new U,Es=new qt;class _v extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ur*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:f,c:u}=Es;if(_.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),u.fromBufferAttribute(a,l[2]),Es.getNormal(qa),p[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,p[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,p[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){const y=(M+1)%3,b=p[M],T=p[y],A=Es[h[M]],P=Es[h[y]],I=`${b}_${T}`,E=`${T}_${b}`;E in d&&d[E]?(qa.dot(d[E].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(P.x,P.y,P.z)),d[E]=null):I in d||(d[I]={index0:l[M],index1:l[y],normal:qa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:f}=d[g];Ss.fromBufferAttribute(a,_),ys.fromBufferAttribute(a,f),m.push(Ss.x,Ss.y,Ss.z),m.push(ys.x,ys.y,ys.z)}this.setAttribute("position",new Kt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vv extends Jn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class un extends Jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xv extends Ol{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ya=new ut,vh=new U,xh=new U;class eu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bh=new ut,Sr=new U,Ka=new U;class bv extends eu{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sr),Ka.copy(i.position),Ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ka),i.updateMatrixWorld(),r.makeTranslation(-Sr.x,-Sr.y,-Sr.z),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}}class Mv extends Ol{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sv extends eu{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yv extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Sv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ev extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);const Sh={type:"change"},Bl={type:"start"},tu={type:"end"},ws=new Il,yh=new Hn,wv=Math.cos(70*ep.DEG2RAD),xt=new U,zt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ja=1e-6;class Tv extends Ev{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new bi,this._lastTargetPosition=new U,this._quat=new bi().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mh,this._sphericalDelta=new Mh,this._scale=1,this._panOffset=new U,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new U,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rv.bind(this),this._onPointerDown=Av.bind(this),this._onPointerUp=Cv.bind(this),this._onContextMenu=Fv.bind(this),this._onMouseWheel=Lv.bind(this),this._onKeyDown=Iv.bind(this),this._onTouchStart=Uv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Pv.bind(this),this._onMouseMove=Dv.bind(this),this._interceptControlDown=kv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sh),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=zt:i>Math.PI&&(i-=zt),r<-Math.PI?r+=zt:r>Math.PI&&(r-=zt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<wv?this.object.lookAt(this.target):(yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(yh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ja||this._lastTargetPosition.distanceToSquared(this.target)>ja?(this.dispatchEvent(Sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xt.copy(r).sub(this.target);let s=xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Av(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Rv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tu),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Pv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Bl)}function Dv(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Lv(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tu))}function Iv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Uv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Bl)}function Nv(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function Fv(n){this.enabled!==!1&&n.preventDefault()}function kv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Bv extends Kd{constructor(){super();const e=new Si;e.deleteAttribute("uv");const t=new un({side:Ft}),i=new un,r=new Mv(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new pt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new pt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new pt(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new pt(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new pt(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new pt(e,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const d=new pt(e,Wi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const m=new pt(e,Wi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new pt(e,Wi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new pt(e,Wi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const f=new pt(e,Wi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const u=new pt(e,Wi(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Wi(n){const e=new Ul;return e.color.setScalar(n),e}const Ct=.001;function zv(n){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle=n,t.fillRect(0,0,256,256);for(let r=0;r<90;r++){const s=Math.random()*256;t.strokeStyle=`rgba(${r%2?"0,0,0":"255,255,255"},${.03+Math.random()*.06})`,t.lineWidth=.5+Math.random()*1.6,t.beginPath(),t.moveTo(s,0),t.bezierCurveTo(s+6,80,s-6,170,s+3,256),t.stroke()}const i=new Qd(e);return i.colorSpace=Xt,i}function Hv(n){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(36,43,57,.92)",t.beginPath(),t.roundRect(8,8,240,48,14),t.fill(),t.fillStyle="#fff",t.font="600 30px Manrope, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,128,33);const i=new mv(new jd({map:new Qd(e),depthTest:!1,transparent:!0}));return i.scale.set(.52,.13,1),i.renderOrder=10,i}class nu{constructor(e){this.host=e,this.scene=new Kd,this.camera=new $t(35,1,.05,60),this.root=new ui,this.dimsGroup=new ui,this.moving=[],this.facades=[],this.openness=0,this.target=0,this.mode="closed",this.raf=0,this.lastDims="",this.disposables=[],this.renderer=new fv({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gd,this.renderer.toneMapping=vd,this.renderer.toneMappingExposure=.78,e.appendChild(this.renderer.domElement);const t=new tl(this.renderer);this.scene.environment=t.fromScene(new Bv,.04).texture,t.dispose(),this.scene.add(new xv(16777215,14278117,.35));const i=new yv(16777215,1.5);i.position.set(2.5,4.5,4),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-3,right:3,top:3.5,bottom:-1,near:.5,far:12}),i.shadow.bias=-4e-4,this.scene.add(i);const r=new pt(new Wr(30,30),new vv({opacity:.16}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r,this.root,this.dimsGroup),this.controls=new Tv(this.camera,this.renderer.domElement),this.controls.enableDamping=!1,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=.6,this.controls.maxDistance=12,this.controls.addEventListener("change",()=>this.render()),this.camera.position.set(2.6,1.9,4.2),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize()}resize(){const e=this.host.clientWidth||600,t=this.host.clientHeight||400;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render()}material(e,t,i){const r=i.get(e);if(r)return r;let s;const o=a=>{if(!a.wood)return new un({color:a.color,roughness:.62});const c=zv(a.color);return this.disposables.push(c),new un({map:c,roughness:.7})};return e==="body"?s=o(t.body):e==="shelf"?s=o(t.shelf):e==="plinth"?s=o(t.plinth):e==="facade"?s=o(t.facade):e==="drawerbox"?s=new un({color:"#f4f3ef",roughness:.7}):e==="hdf"?s=new un({color:"#e9e4da",roughness:.85}):e==="metal"?s=new un({color:t.metal,metalness:.85,roughness:.32}):e==="mirror"?s=new un({color:"#dfe6ea",metalness:1,roughness:.04}):e==="glass"?s=new un({color:"#dbe7ea",transparent:!0,opacity:.45,roughness:.35}):s=new un({color:"#fff6d8",emissive:"#ffe9a8",emissiveIntensity:1.6}),i.set(e,s),this.disposables.push(s),s}setData(e,t,i,r){var c;for(const l of this.disposables)l.dispose();this.disposables=[],this.root.clear(),this.dimsGroup.clear(),this.moving=[],this.facades=[];const s=new Map,o=new il({color:2370361,transparent:!0,opacity:.22});this.disposables.push(o);for(const l of e){let h;l.shape==="cyl"?(h=new kl(l.size[1]/2*Ct,l.size[1]/2*Ct,l.size[0]*Ct,20),l.axis==="x"?h.rotateZ(Math.PI/2):l.axis==="z"&&h.rotateX(Math.PI/2)):h=new Si(l.size[0]*Ct,l.size[1]*Ct,l.size[2]*Ct);const p=new pt(h,this.material(l.finish,t,s));if(p.castShadow=l.finish!=="glass"&&l.finish!=="light",p.receiveShadow=!0,this.disposables.push(h),l.shape==="box"&&l.finish!=="light"){const g=new _v(h);this.disposables.push(g),p.add(new gv(g,o))}const d=new U(l.pos[0],l.pos[1],l.pos[2]).multiplyScalar(Ct);let m=p;if(((c=l.motion)==null?void 0:c.type)==="hinge"){const g=new ui;g.position.set(l.motion.pivot[0]*Ct,0,l.motion.pivot[1]*Ct),p.position.copy(d).sub(g.position),g.add(p),m=g}else p.position.copy(d);this.root.add(m),l.motion&&this.moving.push({node:m,part:l,base:m.position.clone()}),l.facade&&this.facades.push(m)}r&&this.buildDims(i);const a=`${i.w}|${i.h}|${i.d}`;a!==this.lastDims&&this.fit(i,this.lastDims===""),this.lastDims=a,this.applyMotion(),this.render()}buildDims({w:e,h:t,d:i}){const r=new il({color:154367});this.disposables.push(r);const s=(o,a,c)=>{const l=[new U(...o).multiplyScalar(Ct),new U(...a).multiplyScalar(Ct)],h=new Qt().setFromPoints(l);this.disposables.push(h),this.dimsGroup.add(new Jd(h,r));const p=Hv(c);p.position.copy(l[0]).add(l[1]).multiplyScalar(.5),this.dimsGroup.add(p)};s([-e/2,t+120,i],[e/2,t+120,i],C("{0} мм",e)),s([-e/2-160,0,i],[-e/2-160,t,i],C("{0} мм",t)),s([e/2+160,0,0],[e/2+160,0,i],C("{0} мм",i))}fit({w:e,h:t,d:i},r){const s=new U(0,t/2*Ct,i/2*Ct),a=Math.hypot(e,t,i)/2*Ct/Math.sin(this.camera.fov*Math.PI/360)*1.12,c=r?new U(.62,.3,1).normalize():this.camera.position.clone().sub(this.controls.target).normalize();this.controls.target.copy(s),this.camera.position.copy(s).addScaledVector(c,a),this.controls.update()}setMode(e){this.mode=e,this.target=e==="open"?1:0;for(const i of this.facades)i.visible=e!=="nofacade";cancelAnimationFrame(this.raf);const t=()=>{this.openness+=(this.target-this.openness)*.16,Math.abs(this.target-this.openness)<.004&&(this.openness=this.target),this.applyMotion(),this.render(),this.openness!==this.target&&(this.raf=requestAnimationFrame(t))};t()}applyMotion(){for(const e of this.facades)e.visible=this.mode!=="nofacade";for(const e of this.moving){const t=e.part.motion;t.type==="hinge"?e.node.rotation.y=t.dir*this.openness*1.75:t.type==="slide"?e.node.position.z=e.base.z+t.dist*Ct*this.openness:e.node.position.x=e.base.x+t.dx*Ct*this.openness}}render(){this.renderer.render(this.scene,this.camera)}snapshot(){return this.render(),this.renderer.domElement.toDataURL("image/png")}dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect(),this.controls.dispose();for(const e of this.disposables)e.dispose();this.renderer.dispose(),this.renderer.domElement.remove()}}const zl=n=>({body:Vn(String(n.body_decor)),shelf:Vn(String(n.shelves_decor??n.body_decor)),plinth:Vn(String(n.plinth_decor??n.body_decor)),facade:Vn(String(n.facade_decor??n.body_decor)),metal:Vn(String(n.metal_decor??"chrome")).color}),Eh=[{body:{color:"#c9a77c",wood:!0},facade:{color:"#a29d93"},shelf:{color:"#cfc9bf"},plinth:{color:"#b89568",wood:!0},metal:"#c9ccd1"},{body:{color:"#6b4630",wood:!0},facade:{color:"#4f5359"},shelf:{color:"#6a6e75"},plinth:{color:"#1d1d1f"},metal:"#1d1d1f"},{body:{color:"#f3f2ee"},facade:{color:"#d8cfc2"},shelf:{color:"#efe9df"},plinth:{color:"#b9975b"},metal:"#b9975b"}],Vv={Нордик:0,Лофт:1,Сити:2},Gv=n=>{const e=Vv[n]??[...n].reduce((t,i)=>t+i.charCodeAt(0),0)%Eh.length;return Eh[e]};let yr;function Wv(){if(yr!==void 0)return yr;const n=document.createElement("div");n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;left:-10000px;top:0;width:640px;height:480px;pointer-events:none",document.body.appendChild(n);try{yr=new nu(n)}catch{yr=null,n.remove()}return yr}const wh=new Map;let Th=Promise.resolve();function Xv(n){return new Promise((e,t)=>{const i=new Image;i.onerror=t,i.onload=()=>{const{width:r,height:s}=i,o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");a.drawImage(i,0,0);const c=a.getImageData(0,0,r,s).data;let l=r,h=s,p=-1,d=-1;for(let f=0;f<s;f++)for(let u=0;u<r;u++)c[(f*r+u)*4+3]<12||(u<l&&(l=u),u>p&&(p=u),f<h&&(h=f),f>d&&(d=f));if(p<0)return e(n);let m=(p-l+1)*1.12,g=(d-h+1)*1.12;m/g>4/3?g=m*3/4:m=g*4/3;const _=document.createElement("canvas");_.width=Math.round(m),_.height=Math.round(g),_.getContext("2d").drawImage(o,(l+p)/2-m/2,(h+d)/2-g/2,m,g,0,0,_.width,_.height),e(_.toDataURL("image/webp",.9))},i.src=n})}function iu(n,e){const t=wh.get(n);if(t)return t;const i=Th.then(()=>new Promise(r=>requestAnimationFrame(()=>{try{const s=Wv();if(!s)return r(null);s.setData(...e()),Xv(s.snapshot()).then(r,()=>r(null))}catch{r(null)}})));return Th=i,wh.set(n,i),i}function $v(n){return iu(`p:${n.kind}:${n.w}x${n.d}x${n.h}:${n.collection}`,()=>{const{parts:e,dims:t}=ff(n.kind,n.w,n.d,n.h);return[e,Gv(n.collection),t,!1]})}function qv(n){return iu(`c:${n.modelId}:${JSON.stringify(n.values)}`,()=>{const e=_i(Wn(n.modelId),n.values);return[e.geometry.parts,zl(e.resolved.values),e.geometry.dims,!1]})}function Yv({model:n,initial:e,editing:t,manager:i,onSave:r,onBack:s}){const[o,a]=rt({stack:[e],at:0}),[c,l]=rt("closed"),[h,p]=rt("3d"),[d,m]=rt(!0),[g,_]=rt("price"),[f,u]=rt(""),[M,y]=rt("config"),[b,T]=rt(""),A=Kn(null),P=o.stack[o.at],I=zr(()=>_i(n,P),[n,P]),E=I.resolved.values,x=(K,Fe)=>{const H=[...K.stack.slice(0,K.at+1),Fe].slice(-60);return{stack:H,at:H.length-1}},D=(K,Fe)=>a(H=>x(H,{..._i(n,H.stack[H.at]).resolved.values,[K]:Fe})),z=()=>a(K=>({...K,at:Math.max(0,K.at-1)})),O=()=>a(K=>({...K,at:Math.min(K.stack.length-1,K.at+1)})),X=()=>a(K=>x(K,{})),j=K=>{T(K),setTimeout(()=>T(""),2600)},Y=async()=>{const K=`${location.origin}${location.pathname}#c=${hf(n.id,E)}`;try{await navigator.clipboard.writeText(K),j(C("Ссылка на конфигурацию скопирована"))}catch{prompt(C("Ссылка на конфигурацию"),K)}},Z=f.trim().toLowerCase(),$=K=>!I.resolved.state[K.code].hidden&&(i||K.visibility!=="manager")&&(!Z||C(K.name).toLowerCase().includes(Z)||K.name.toLowerCase().includes(Z)),de=ju.flatMap(K=>K.id==="dims"||!Z&&K.tab!==M?[]:K.id!=="section"?[{...K,params:n.params.filter(H=>H.group===K.id&&$(H))}]:[...new Set(n.params.filter(H=>H.group==="section").map(H=>H.section))].sort((H,ie)=>H-ie).map(H=>({...K,id:`section-${H}`,name:C("Настройка секции {0}",H),params:n.params.filter(ie=>ie.section===H&&$(ie))}))).filter(K=>K.params.length),ce=n.params.filter(K=>K.group==="dims"&&$(K)),be=K=>v(tx,{def:K,value:E[K.code],state:I.resolved.state[K.code],onChange:Fe=>D(K.code,Fe)},K.code);return v("div",{class:"cfg",children:[v("div",{class:"cfg-head",children:[v("button",{class:"link",onClick:s,children:["← ",C("Каталог")]}),v("div",{children:[v("h2",{children:C(n.name)}),v("span",{class:"muted small",children:C("{0} · коллекция «{1}» · версия модели {2} · срок {3} дн.",Xi(n.sku),C(n.collection),n.version,n.leadTimeDays)})]}),v("div",{class:"tools",children:[v("button",{class:"tool",onClick:z,disabled:o.at===0,title:C("Отменить"),"aria-label":C("Отменить"),children:"↶"}),v("button",{class:"tool",onClick:O,disabled:o.at>=o.stack.length-1,title:C("Вернуть"),"aria-label":C("Вернуть"),children:"↷"}),v("button",{class:"tool wide",onClick:X,title:C("Вернуть значения фабрики"),children:C("Сбросить к базовой")}),v("button",{class:"tool wide",onClick:Y,children:C("Поделиться")})]})]}),v("div",{class:"cfg-body",children:[v("section",{class:"stage",children:[v("div",{class:"stage-bar",children:[v("div",{class:"seg",children:[v("button",{class:h==="3d"?"on":"",onClick:()=>p("3d"),children:"3D"}),v("button",{class:h==="scheme"?"on":"",onClick:()=>p("scheme"),children:C("Схема")})]}),v("div",{class:"seg",children:["closed","open","nofacade"].map(K=>v("button",{class:c===K?"on":"",onClick:()=>l(K),children:C(K==="closed"?"Закрыт":K==="open"?"Открыт":"Без фасадов")},K))}),v("label",{class:"check",children:[v("input",{type:"checkbox",checked:d,onChange:K=>m(K.target.checked)})," ",C("Размеры")]})]}),v("div",{class:"stage-view",children:[v(Kv,{cfg:I,mode:c,dims:d,hidden:h!=="3d",viewerRef:A}),h==="scheme"&&v(Zv,{parts:I.geometry.parts,dims:I.geometry.dims,look:zl(E),facades:c!=="nofacade"})]}),v(Jv,{cfg:I}),v("div",{class:"tabs",children:[v("button",{class:g==="price"?"on":"",onClick:()=>_("price"),children:C("Цена")}),v("button",{class:g==="spec"?"on":"",onClick:()=>_("spec"),children:C("Спецификация")}),v("button",{class:g==="rules"?"on":"",onClick:()=>_("rules"),children:C("Правила фабрики")})]}),g==="price"&&v(ix,{cfg:I}),g==="spec"&&v(rx,{cfg:I}),g==="rules"&&v(ax,{model:n})]}),v("aside",{class:"panel",children:[v("input",{class:"search",type:"search",placeholder:C("Найти параметр"),value:f,onInput:K=>u(K.target.value)}),ce.length>0&&v("details",{open:!0,children:[v("summary",{children:C("Габариты")}),ce.map(be)]}),v("div",{class:"seg ptabs",role:"tablist",children:Ku.map(K=>v("button",{role:"tab","aria-selected":M===K.id,class:M===K.id?"on":"",onClick:()=>y(K.id),children:C(K.name)},K.id))}),de.map(K=>v("details",{open:K.tab!=="config"||!K.id.startsWith("section")||K.id==="section-1",children:[v("summary",{children:[C(K.name),K.id==="section-1"&&v("span",{class:"muted small",children:[" · ",C("счёт слева направо")]})]}),K.tab==="materials"&&v(Qv,{model:n,v:E,codes:K.summary??[],decor:K.params.find(Fe=>Fe.type==="decor")}),K.params.map(Fe=>v(Br,{children:[be(Fe),K.tab==="hardware"&&v(ex,{def:Fe,value:E[Fe.code]})]},Fe.code))]},K.id)),!de.length&&v("p",{class:"muted small",children:C(Z?"Ничего не найдено.":"В этой вкладке для модели нет настроек.")}),v("div",{class:"buy",children:[v("div",{class:"total",children:[v("span",{class:"muted small",children:C("Стоимость изделия")}),v("b",{children:wt(I.price.total)})]}),v("button",{class:"btn primary",disabled:I.blocked,onClick:()=>r(E),title:I.blocked?C("Исправьте ошибки конфигурации"):"",children:C(t?"Сохранить изменения":"Добавить в проект")}),v("div",{class:"exports",children:[v("button",{class:"link",onClick:()=>A.current&&lx(I,A.current.snapshot()),children:C("КП в PDF")}),v("button",{class:"link",onClick:()=>A.current&&Ir(`${Xi(n.sku)}.png`,A.current.snapshot(),"image/png"),children:C("Изображение")}),v("button",{class:"link",onClick:()=>Ir(`${Xi(n.sku)}-spec.csv`,ox(I),"text/csv;charset=utf-8"),children:C("Спецификация CSV")}),v("button",{class:"link",onClick:()=>Ir(`${Xi(n.sku)}.json`,JSON.stringify({model:n.id,version:n.version,values:E,bom:I.bom,price:I.price},null,2),"application/json"),children:"JSON"})]})]})]})]}),b&&v("div",{class:"toast",role:"status",children:b})]})}function Kv({cfg:n,mode:e,dims:t,hidden:i,viewerRef:r}){const s=Kn(null),[o,a]=rt(!1);an(()=>{try{r.current=new nu(s.current)}catch{a(!0)}return()=>{var l;(l=r.current)==null||l.dispose(),r.current=null}},[]);const c=qs();return an(()=>{var l;(l=r.current)==null||l.setData(n.geometry.parts,zl(n.resolved.values),n.geometry.dims,t)},[n,t,c]),an(()=>{var l;(l=r.current)==null||l.setMode(e)},[e,n]),v("div",{class:"view3d",ref:s,style:i?"visibility:hidden;position:absolute;inset:0":"",children:o&&v("p",{class:"muted pad",children:C("Браузер не поддерживает WebGL — откройте вкладку «Схема».")})})}const jv={body:n=>n.body.color,shelf:n=>n.shelf.color,plinth:n=>n.plinth.color,facade:n=>n.facade.color,drawerbox:()=>"#f4f3ef",hdf:()=>"#e9e4da",metal:n=>n.metal,mirror:()=>"#cfe0e8",glass:()=>"#dbe7ea",light:()=>"#ffe9a8"};function Zv({parts:n,dims:e,look:t,facades:i}){const s=n.filter(a=>i||!a.facade).sort((a,c)=>a.pos[2]-c.pos[2]),o=a=>a.shape==="cyl"?a.axis==="x"?[a.size[0],a.size[1]]:a.axis==="y"?[a.size[1],a.size[0]]:[a.size[1],a.size[2]]:[a.size[0],a.size[1]];return v("svg",{class:"scheme",viewBox:`${-e.w/2-260} ${-e.h-260} ${e.w+260*2} ${e.h+260*1.6}`,role:"img","aria-label":C("Схема изделия, вид спереди"),children:[s.map(a=>{const[c,l]=o(a);return v("rect",{x:a.pos[0]-c/2,y:-a.pos[1]-l/2,width:c,height:l,fill:jv[a.finish](t),"fill-opacity":a.facade?.55:1,stroke:"#242b39","stroke-width":"3"},a.id)}),v("g",{stroke:"#025aff","stroke-width":"4",fill:"#025aff","font-size":"70","font-weight":"700","text-anchor":"middle",children:[v("line",{x1:-e.w/2,y1:-e.h-110,x2:e.w/2,y2:-e.h-110}),v("text",{x:"0",y:-e.h-140,stroke:"none",children:e.w}),v("line",{x1:e.w/2+110,y1:-e.h,x2:e.w/2+110,y2:"0"}),v("text",{x:e.w/2+150,y:-e.h/2,stroke:"none",transform:`rotate(90 ${e.w/2+150} ${-e.h/2})`,children:e.h}),v("text",{x:"0",y:"110",stroke:"none",fill:"#6e6e6e","font-weight":"500",children:C("вид спереди · глубина {0} мм",e.d)})]})]})}function Jv({cfg:n}){const e=n.resolved.notices;if(!e.length)return v("div",{class:"notice ok",children:C("Конфигурация проверена: изделие можно изготовить.")});const t={error:0,warn:1,info:2};return v("div",{class:"notices",role:"status","aria-live":"polite",children:[...e].sort((i,r)=>t[i.level]-t[r.level]).map((i,r)=>v("div",{class:`notice ${i.level}`,children:C(i.message)},r))})}const Ah=n=>{if(n.section===void 0)return C(n.name);const e=C(n.name.replace(/^Секция \d+: /,""));return e.charAt(0).toUpperCase()+e.slice(1)};function Qv({model:n,v:e,codes:t,decor:i}){const r=t.map(o=>{const a=n.params.find(c=>c.code===o);return a?C(er(a,e[o])):""}).filter(Boolean).join(" · "),s=i?Vn(String(e[i.code])):void 0;return!r&&!s?null:v("div",{class:"mat-card",children:[v("i",{style:`background:${s?s.wood?`repeating-linear-gradient(95deg, ${s.color}, ${s.color} 5px, rgba(0,0,0,.08) 6px)`:s.color:"#e9e4da"}`}),v("div",{children:[v("b",{children:C((s==null?void 0:s.name)??"ХДФ белый")}),v("div",{class:"muted small",children:r})]})]})}function ex({def:n,value:e}){var r,s;const t=n.type==="boolean"?e?n.hardware:void 0:(s=(r=n.options)==null?void 0:r.find(o=>o.value===e))==null?void 0:s.hardware,i=t?ao[t]:void 0;return i?v("div",{class:"hw-card",children:[v("span",{children:C(i.name)}),v("b",{children:[wt(i.price)," / ",C(i.unit)]})]}):null}function tx({def:n,value:e,state:t,onChange:i}){const r=t.reasons[0];let s;if(n.type==="info")return v("div",{class:"ctl info",children:[v("span",{class:"ctl-name",children:Ah(n)}),v("b",{children:C(er(n,e))})]});if(n.type==="number"){const a=t.min??n.min,c=t.max??n.max,l=n.step??1,h=t.locked||a>=c;s=v("div",{class:"num",children:[v("button",{"aria-label":C("Меньше"),disabled:h||Number(e)<=a,onClick:()=>i(Number(e)-l),children:"−"}),v("input",{type:"number",value:Number(e),min:a,max:c,step:l,disabled:h,onChange:p=>i(Number(p.target.value)),"aria-label":C(n.name)}),v("button",{"aria-label":C("Больше"),disabled:h||Number(e)>=c,onClick:()=>i(Number(e)+l),children:"+"}),c-a>l*6&&v("input",{class:"range",type:"range",value:Number(e),min:a,max:c,step:l,disabled:h,onInput:p=>i(Number(p.target.value)),"aria-label":C("{0}, ползунок",C(n.name))}),v("span",{class:"muted small lim",children:[a,"–",c," ",C(n.unit??"")]})]})}else if(n.type==="boolean")s=v("label",{class:"switch",children:[v("input",{type:"checkbox",checked:!!e,disabled:t.locked,onChange:a=>i(a.target.checked)}),v("span",{children:C(e?"Да":"Нет")})]});else if(n.type==="decor"){const a=t.allow??[];s=v("div",{class:"swatches",children:[mi.filter(c=>a.includes(c.id)).map(c=>v("button",{class:`swatch ${e===c.id?"on":""}`,title:C(c.name),"aria-label":C(c.name),"aria-pressed":e===c.id,onClick:()=>i(c.id),children:v("i",{style:`background:${c.wood?`repeating-linear-gradient(95deg, ${c.color}, ${c.color} 5px, rgba(0,0,0,.08) 6px)`:c.color}`})},c.id)),v("span",{class:"muted small",children:C(er(n,e))})]})}else s=v("div",{class:"opts",children:n.options.map(a=>{const c=t.locked?e!==a.value:t.allow?!t.allow.includes(a.value):!1;return v("button",{class:e===a.value?"on":"",disabled:c,"aria-pressed":e===a.value,title:C((c?t.optionReasons[a.value]??r:a.hint)??""),onClick:()=>i(a.value),children:C(a.label)},a.value)})});const o=Object.values(t.optionReasons)[0];return v("div",{class:"ctl",children:[v("div",{class:"ctl-name",children:[Ah(n),n.hint&&v("span",{class:"muted small",children:[" · ",C(n.hint)]})]}),s,(t.locked||n.type==="select"&&o)&&v("div",{class:"why",children:C((t.locked?r:o)??"")})]})}const nx={materials:"Материалы",hardware:"Фурнитура",work:"Работы",modifiers:"Доплаты",services:"Услуги",discount:"Скидка"};function ix({cfg:n}){return v("table",{class:"tbl",children:v("tbody",{children:[n.price.lines.map((e,t)=>v("tr",{children:[v("td",{class:"muted",children:C(nx[e.group])}),v("td",{children:C(e.label)}),v("td",{class:"r",children:wt(e.amount)})]},t)),v("tr",{class:"sum",children:[v("td",{colSpan:2,children:C("Итого за изделие")}),v("td",{class:"r",children:wt(n.price.total)})]})]})})}function rx({cfg:n}){const e=n.bom.totals;return v("div",{children:[v("p",{class:"muted small",children:C("Деталей: {0} · плита {1} м² · кромка {2} м · масса ≈ {3} кг",e.panelCount,Ls(e.area,2),Ls(e.edge,1),Math.round(e.weight))}),v("div",{class:"scroll",children:[v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("Деталь")}),v("th",{children:C("Материал")}),v("th",{children:C("Декор")}),v("th",{class:"r",children:C("Размер, мм")}),v("th",{class:"r",children:C("Кол-во")})]})}),v("tbody",{children:n.bom.panels.map((t,i)=>v("tr",{children:[v("td",{children:C(t.name)}),v("td",{children:C(t.materialName)}),v("td",{children:C(t.decor)}),v("td",{class:"r",children:[t.l," × ",t.w]}),v("td",{class:"r",children:t.qty})]},i))})]}),v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("Фурнитура")}),v("th",{class:"r",children:C("Кол-во")}),v("th",{class:"r",children:C("Сумма")})]})}),v("tbody",{children:n.bom.hardware.map(t=>v("tr",{children:[v("td",{children:C(t.name)}),v("td",{class:"r",children:[Ls(t.qty,Number.isInteger(t.qty)?0:1)," ",C(t.unit)]}),v("td",{class:"r",children:wt(t.sum)})]},t.code))})]})]})]})}const sx={restrict:"ограничить варианты",set:"подобрать автоматически",limit:"сузить диапазон",hide:"скрыть",error:"запретить заказ",warn:"предупредить"};function ax({model:n}){const e=t=>{var i;return C(((i=n.params.find(r=>r.code===t))==null?void 0:i.name)??t)};return v("div",{class:"scroll",children:[v("p",{class:"muted small",children:C("Модель и её правила задаёт технолог фабрики. Клиент меняет только значения параметров — изделие, которое фабрика не умеет производить, собрать нельзя.")}),v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("Если")}),v("th",{children:C("То")}),v("th",{children:C("Пояснение клиенту")})]})}),v("tbody",{children:n.rules.map(t=>v("tr",{children:[v("td",{children:v("code",{children:t.when==="true"?C("всегда"):t.when})}),v("td",{children:t.then.map(i=>`${C(sx[i.do])}${"param"in i?` «${e(i.param)}»`:""}`).join("; ")}),v("td",{class:"muted",children:C(t.message)})]},t.id))})]}),v("p",{class:"muted small",children:[C("Формула работ:")," ",v("code",{children:n.price.base})]})]})}function ox(n){const e=[["Деталь","Материал","Декор","Длина","Ширина","Толщина","Кол-во","Кромка, м"].map(t=>C(t))];for(const t of n.bom.panels)e.push([C(t.name),C(t.materialName),C(t.decor),t.l,t.w,t.t,t.qty,t.edge.toFixed(2)].map(String));e.push([],["Фурнитура","Ед.","Кол-во","Цена","Сумма"].map(t=>C(t)));for(const t of n.bom.hardware)e.push([C(t.name),C(t.unit),t.qty,t.price,t.sum].map(String));return"\uFEFF"+e.map(t=>t.map(i=>`"${i.replace(/"/g,'""')}"`).join(";")).join(`\r
`)}const It=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function lx(n,e){const t=window.open("","_blank");if(!t)return;const i=n.resolved.values,r=n.model.params.filter(o=>!n.resolved.state[o.code].hidden&&o.visibility!=="manager"),s=C(n.model.name);t.document.write(`<!doctype html><html lang="${It(qs().slice(0,2))}"><meta charset="utf-8"><title>${It(C("КП — {0}",s))}</title>
<style>body{font:14px/1.45 Arial,sans-serif;color:#242b39;margin:32px}h1{font-size:22px;margin:0 0 4px}img{max-width:100%;max-height:360px;display:block;margin:12px auto}
table{width:100%;border-collapse:collapse;margin:10px 0 18px}td,th{border-bottom:1px solid #e4e4e4;padding:5px 6px;text-align:left}.r{text-align:right}.sum td{font-weight:700;font-size:16px}.m{color:#6e6e6e}</style>
<h1>${It(C("Коммерческое предложение: {0}",s))}</h1><div class="m">${It(Xi(n.model.sku))} · ${new Date().toLocaleDateString(qs())} · ${It(C("срок изготовления {0} дн. · цены демонстрационные",n.model.leadTimeDays))}</div>
<img src="${e}" alt="">
<table><tr><th>${It(C("Параметр"))}</th><th>${It(C("Значение"))}</th></tr>${r.map(o=>`<tr><td>${It(C(o.name))}</td><td>${It(C(er(o,i[o.code])))}</td></tr>`).join("")}</table>
<table><tr><th>${It(C("Статья"))}</th><th class="r">${It(C("Сумма"))}</th></tr>${n.price.lines.map(o=>`<tr><td>${It(C(o.label))}</td><td class="r">${It(wt(o.amount))}</td></tr>`).join("")}<tr class="sum"><td>${It(C("Итого"))}</td><td class="r">${It(wt(n.price.total))}</td></tr></table>`),t.document.close(),setTimeout(()=>t.print(),400)}const ua=[{kind:"nightstand",name:"Тумба прикроватная",typical:[500,450],match:/прикроват/i},{kind:"tv_stand",name:"Тумба под ТВ",typical:[1600,450],match:/(тумб\S*\s+(под|для)\s+(тв|tv|телевизор))|тв-?тумб|tv-?тумб/i},{kind:"vanity",name:"Тумба с раковиной",typical:[800,480],match:/тумб\S*\s+(с|под)\s+раковин|тумб\S*\s+для\s+ванн/i},{kind:"shoe_rack",name:"Обувница",typical:[800,350],match:/обувниц|тумб\S*\s+для\s+обуви/i},{kind:"coffee_table",name:"Журнальный стол",round:!0,typical:[900,900],match:/(журнальн|кофейн|приставн)\S*\s+стол|стол\S*\s+(журнальн|кофейн|приставн)/i},{kind:"dining_table",name:"Обеденный стол",round:!0,typical:[1e3,1e3],match:/(обеденн|кухонн)\S*\s+стол|стол\S*\s+(обеденн|кухонн)/i},{kind:"desk",name:"Письменный стол",typical:[1200,600],match:/(письменн|компьютерн|рабоч)\S*\s+стол|стол\S*\s+(письменн|компьютерн|рабоч)/i},{kind:"kitchen",name:"Кухонный гарнитур",typical:[2400,600],match:/кухн|кухонн\S*\s+гарнитур/i},{kind:"sofa",name:"Диван",typical:[2200,1e3],match:/диван|софа/i},{kind:"armchair",name:"Кресло",typical:[850,850],match:/кресл/i},{kind:"bed",name:"Кровать",typical:[1700,2100],match:/кроват/i},{kind:"wardrobe",name:"Шкаф",typical:[1800,600],match:/шкаф|гардероб/i},{kind:"dresser",name:"Комод",typical:[1e3,450],match:/комод/i},{kind:"shelving",name:"Стеллаж",typical:[1e3,350],match:/стеллаж|этажерк/i},{kind:"chair",name:"Стул",typical:[480,520],match:/стул|табурет/i}],Dn=n=>ua.find(e=>e.kind===n);function ru(...n){for(const e of n){if(!e)continue;const t=ua.find(i=>i.match.test(e));if(t)return t.kind}return null}const cx={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},Nr=n=>n.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1").replace(/&(amp|lt|gt|quot|apos);/g,(e,t)=>cx[t]).replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(Number(t))).trim(),Wt=(n,e)=>{const t=new RegExp(`<${e}(?:\\s[^>]*)?>([\\s\\S]*?)</${e}>`,"i").exec(n);return t?Nr(t[1]):void 0},Er=(n,e)=>{const t=new RegExp(`\\b${e}\\s*=\\s*("([^"]*)"|'([^']*)')`,"i").exec(n);return t?Nr(t[2]??t[3]):void 0},hx={мм:1,mm:1,см:10,cm:10,м:1e3,m:1e3},dx=/^(?:общ\S+\s+|габаритн\S+\s+)?(ширина|глубина|высота|длина|диаметр)(?:\s+(?:изделия|товара|общая|габаритная))?\s*(?:[,(]\s*(мм|см|м|mm|cm|m)\.?\s*\)?)?$/i;function ux(n,e){const t=Number(n.replace(",",".").replace(/[^\d.]/g,""));if(!Number.isFinite(t)||t<=0)return 0;const i=e?hx[e.toLowerCase().replace(".","")]:void 0;return Math.round(t*(i??(t>=400?1:10)))}function Qs(n){const e=typeof n=="string"?n.trim():"";return e.startsWith("//")?`https:${e}`:/^https?:\/\/[^\s"'<>]+$/i.test(e)?e:void 0}function fx(n){var s,o,a,c;const e=l=>{const h=new Map;for(const p of(Wt(n,l)??"").matchAll(/<(?:category|collection)\s([^>]*)>([\s\S]*?)<\/(?:category|collection)>/gi)){const d=Er(p[1],"id");d&&h.set(d,Wt(p[2],"name")??Nr(p[2].replace(/<[^>]+>/g," ")))}return h},t=e("categories"),i=e("collections"),r={goods:[],total:0,skipped:{noKind:0,noSize:0,noPrice:0}};for(const l of n.matchAll(/<offer\s([^>]*)>([\s\S]*?)<\/offer>/gi)){r.total++;const h=l[2],p=Wt(h,"name")??[Wt(h,"typePrefix"),Wt(h,"vendor"),Wt(h,"model")].filter(Boolean).join(" "),d=new Map,m={};for(const b of h.matchAll(/<param\s([^>]*)>([\s\S]*?)<\/param>/gi)){const T=Er(b[1],"name")??"";d.set(T.toLowerCase(),{value:Nr(b[2]),unit:Er(b[1],"unit")});const A=dx.exec(T.trim());A&&(m[s=A[1].toLowerCase()]??(m[s]=ux(Nr(b[2]),Er(b[1],"unit")??A[2])))}const g=ru(Wt(h,"typePrefix"),p,t.get(Wt(h,"categoryId")??""));if(!g){r.skipped.noKind++;continue}const _=m.диаметр,f=_||m.ширина||m.длина||0,u=_||m.глубина||(m.ширина?m.длина:0)||0;if(!f||!u){r.skipped.noSize++;continue}const M=Number((Wt(h,"price")??"").replace(/\s/g,"").replace(",","."));if(!(M>0)){r.skipped.noPrice++;continue}const y=i.get(Wt(h,"collectionId")??"")??((o=d.get("коллекция"))==null?void 0:o.value)??((a=d.get("серия"))==null?void 0:a.value)??((c=d.get("линейка"))==null?void 0:c.value)??Wt(h,"vendor")??"Без коллекции";r.goods.push({id:Er(l[1],"id")??String(r.total),kind:g,name:p,collection:y,w:f,d:u,h:m.высота??0,price:M,url:Qs(Wt(h,"url")),picture:Qs(Wt(h,"picture"))})}return r}function px(n){const e=JSON.parse(n),t={goods:[],total:0,skipped:{noKind:0,noSize:0,noPrice:0}};return Array.isArray(e)&&e.forEach((i,r)=>{t.total++;const s=ua.some(o=>o.kind===i.kind)?i.kind:ru(i.name);if(!s)return void t.skipped.noKind++;if(!(Number(i.w)>0&&Number(i.d)>0))return void t.skipped.noSize++;if(!(Number(i.price)>0))return void t.skipped.noPrice++;t.goods.push({id:String(i.id??r+1),kind:s,name:String(i.name??Dn(s).name),collection:String(i.collection??"Без коллекции"),w:Number(i.w),d:Number(i.d),h:Number(i.h)||0,price:Number(i.price),url:Qs(i.url),picture:Qs(i.picture)})}),t}function mx(n){return n.trimStart().startsWith("[")?px(n):fx(n)}const gx=[{name:"Нордик",k:1},{name:"Лофт",k:1.25},{name:"Сити",k:1.55}],Rh={sofa:[[1600,900,850,38e3],[1900,950,850,46e3],[2200,950,880,54e3],[2500,1e3,880,63e3],[2800,1050,880,74e3]],armchair:[[650,650,800,14e3],[750,780,850,18500],[850,850,900,23e3],[950,900,950,28e3]],bed:[[1e3,2080,1e3,17e3],[1300,2080,1e3,21e3],[1500,2100,1050,25e3],[1700,2100,1050,29e3],[1900,2100,1100,34e3],[2100,2150,1100,39e3]],nightstand:[[350,350,450,4200],[400,400,480,5200],[450,420,500,5900],[500,450,500,6800],[600,450,520,7900]],wardrobe:[[800,520,2200,19e3],[1e3,580,2300,24e3],[1200,580,2300,28e3],[1500,600,2400,36e3],[1800,600,2400,43e3],[2e3,600,2400,48e3],[2400,620,2400,57e3]],dresser:[[600,400,850,9500],[800,420,850,11800],[1e3,450,850,14500],[1200,450,900,17500],[1400,480,900,20500]],shelving:[[600,300,1900,7400],[800,320,1900,9200],[1e3,320,2e3,11500],[1200,350,2e3,13800],[1600,350,2e3,17900]],tv_stand:[[1e3,380,450,8900],[1200,400,480,10500],[1400,400,480,12300],[1600,420,500,14800],[1800,420,500,16900],[2e3,450,520,19500],[2400,450,520,23500]],desk:[[900,550,750,8200],[1e3,600,750,9400],[1200,600,750,11200],[1400,650,750,13600],[1600,700,750,16500]],chair:[[420,480,820,3900],[450,520,850,5200],[480,550,880,6800],[560,580,900,8900]],dining_table:[[800,800,750,12500],[900,900,750,14500],[1e3,1e3,750,17e3],[1100,1100,750,19800],[1200,800,750,16800],[1400,850,750,19900],[1600,900,760,24500]],coffee_table:[[450,450,500,4800],[600,600,450,6500],[800,800,420,8900],[900,900,420,10400],[1e3,1e3,400,12500],[1100,600,450,9800]],shoe_rack:[[600,300,900,5400],[800,320,900,6900],[1e3,350,950,8600],[1200,350,950,10200]],kitchen:[[1600,600,2150,58e3],[2e3,600,2150,72e3],[2400,600,2150,86e3],[2800,600,2150,99e3],[3200,600,2150,114e3],[3600,600,2150,128e3]],vanity:[[500,420,850,9800],[600,450,850,11500],[800,480,850,14900],[1e3,480,850,18500]]},su=Object.keys(Rh).flatMap(n=>Rh[n].flatMap(([e,t,i,r])=>gx.map(({name:s,k:o},a)=>{const c=Dn(n).round?e===t?" круглый":" прямоугольный":"";return{id:`${n}-${e}x${t}-${a+1}`,kind:n,name:`${Dn(n).name}${c} «${s}»`,collection:s,w:e,d:t,h:i,price:Math.round(r*o/100)*100}}))),au=.75,Ch=(n,e,t)=>e/n.w*(t/n.d);function _x(n,e){return e.kind!==n.kind?!1:e.w<=n.w&&e.w>=n.w*au&&e.d<=n.d&&(!n.h||!e.h||e.h<=n.h)}const vx={wardrobe:["wardrobe-loft","sliding-city"],dresser:["chest-nordic"],nightstand:["nightstand-nordic"],shelving:["shelving-grid"]};function xx(n){const e=[];for(const t of vx[n.kind]??[]){const i=Wn(t);if(!i)continue;const r={};let s=!0;for(const[h,p]of[["width",n.w],["depth",n.d],["height",n.h]]){const d=i.params.find(g=>g.code===h);if(!d||d.min===void 0||d.max===void 0){s=!1;break}if(!p)continue;const m=Math.floor(Math.min(p,d.max)/(d.step??1))*(d.step??1);if(m<d.min){s=!1;break}r[h]=m}if(!s)continue;const o=_i(i,r),{w:a,d:c,h:l}=o.geometry.dims;o.blocked||a>n.w||c>n.d||a<n.w*au||e.push({modelId:t,name:`${i.name} — под размер`,values:o.resolved.values,w:a,d:c,h:l,price:o.price.total})}return e}function bx(n,e){const t=e.filter(r=>_x(n,r)).map(r=>({product:r,fill:Ch(n,r.w,r.d),price:r.price})),i=xx(n).map(r=>({custom:r,fill:Ch(n,r.w,r.d),price:r.price}));return[...t,...i].sort((r,s)=>s.fill-r.fill||r.price-s.price)}const Yi=n=>n!=null&&n.product?`p:${n.product.id}`:n!=null&&n.custom?`c:${n.custom.modelId}`:"";function Mx(n,e){const t=n.map(h=>({slot:h,options:bx(h,e)})),i=(h,p,d,m)=>({id:h,name:p,note:d,lines:t.map(g=>({...g,pick:m(g.options)}))}),r=h=>[...h].sort((p,d)=>p.price-d.price)[0],o=[i("fit","Точно по месту","Изделия, которые заполняют место плотнее всего; где фабрика делает под размер — под размер.",h=>h[0]),i("economy","Эконом","Самое доступное изделие под каждое место.",r)],a=new Map;for(const h of t)for(const p of new Set(h.options.map(d=>{var m;return(m=d.product)==null?void 0:m.collection}).filter(Boolean)))a.set(p,(a.get(p)??0)+1);const c=[...a].sort((h,p)=>p[1]-h[1]).slice(0,3);for(const[h,p]of c)p<2||o.push(i(`col:${h}`,`Коллекция «${h}»`,`${p} из ${n.length} позиций — из одной коллекции, остальное подобрано по месту.`,d=>d.find(m=>{var g;return((g=m.product)==null?void 0:g.collection)===h})??d[0]));const l=new Set;return o.filter(h=>{const p=h.lines.map(d=>Yi(d.pick)).join("|");return l.has(p)?!1:(l.add(p),!0)})}function Ph(n){return{total:n.reduce((e,t)=>{var i;return e+(((i=t.pick)==null?void 0:i.price)??0)*t.slot.qty},0),covered:n.filter(e=>e.pick).length}}function Sx(n,e){const t=e.filter(i=>i.kind===n).map(i=>i.w);return t.length?[Math.min(...t),Math.max(...t)]:null}const bt=(n,e,t,i,r,s,o=1,a=0)=>({id:n,room:e,kind:t,qty:o,w:i,d:r,h:a,mark:s}),yx=[bt("s1","Гостиная","sofa",2e3,1e3,[.715,.135]),bt("s2","Гостиная","armchair",900,900,[.81,.15]),bt("s3","Гостиная","coffee_table",1e3,1e3,[.715,.245]),bt("s4","Гостиная","wardrobe",2e3,650,[.635,.32]),bt("s5","Гостиная","tv_stand",2e3,450,[.73,.565]),bt("s6","Прихожая","wardrobe",1900,600,[.518,.53]),bt("s7","Прихожая","shoe_rack",800,350,[.59,.56]),bt("s8","Спальня","bed",1800,2150,[.175,.83]),bt("s9","Спальня","nightstand",500,450,[.1,.885],2),bt("s10","Спальня","desk",1200,600,[.115,.64]),bt("s11","Спальня","chair",500,550,[.11,.7]),bt("s12","Спальня","wardrobe",2400,600,[.297,.83]),bt("s13","Кухня","kitchen",3400,600,[.72,.905]),bt("s14","Кухня","dining_table",1e3,1e3,[.745,.745]),bt("s15","Кухня","chair",500,550,[.79,.76],3),bt("s16","Ванная","vanity",800,480,[.405,.815]),bt("s17","Балкон","armchair",700,700,[.905,.72],2),bt("s18","Балкон","coffee_table",600,600,[.92,.775]),bt("s19","Балкон","shelving",1200,450,[.905,.93])],Dh="fb.kit.v1",rl="fb.goods.v1",Ex="./sample-plan.jpg",Fr=200;function Lh(n,e){try{const t=localStorage.getItem(n);if(t)return JSON.parse(t)}catch{}return e}function ou(n,e,t){try{localStorage.setItem(n,JSON.stringify(e))}catch{try{t!==void 0&&localStorage.setItem(n,JSON.stringify(t))}catch{}}}function wx({onCustom:n,onAddCustom:e}){const[t,i]=rt(()=>Lh(Dh,{plan:null,slots:[]})),[r,s]=rt(()=>Lh(rl,{source:"",goods:[]})),[o,a]=rt("items"),[c,l]=rt(null);an(()=>ou(Dh,t,{...t,planSrc:void 0,plan:t.plan==="own"?null:t.plan}),[t]);const h=Kn(null),p=Kn(!1);an(()=>{var M,y;p.current&&((y=(M=h.current)==null?void 0:M.closest(".fb"))==null||y.scrollIntoView({block:"start"})),p.current=!0},[o]);const d=r.goods.length?r.goods:su,m=(M,y)=>i(b=>({...b,slots:b.slots.map(T=>T.id===M?{...T,...y}:T)})),g=M=>{const y=t.slots[t.slots.length-1],b="wardrobe",[T,A]=Dn(b).typical,P={id:Ki(),room:(y==null?void 0:y.room)??"Комната",kind:b,qty:1,w:T,d:A,h:0,mark:M};i(I=>({...I,slots:[...I.slots,P]})),l(P.id)},_=M=>{var T;const y=(T=M.target.files)==null?void 0:T[0];if(!y)return;const b=new FileReader;b.onload=()=>{i({plan:"own",planSrc:String(b.result),slots:[]}),a("items")},b.readAsDataURL(y)};if(!t.plan)return v("div",{class:"empty",children:[v("h2",{children:C("Комплект мебели по плану квартиры")}),v("p",{class:"muted",children:C("Отметьте мебель на плане, укажите размеры мест — и получите несколько комплектов из каталога производителя на всю квартиру.")}),v("div",{class:"kit-start",children:[v("button",{class:"btn primary",onClick:()=>i({plan:"sample",slots:yx}),children:C("Открыть план-образец")}),v("label",{class:"btn soft file",children:[C("Загрузить свой план"),v("input",{type:"file",accept:"image/png,image/jpeg,image/svg+xml",onChange:_})]})]}),v("p",{class:"muted small",children:C("На плане-образце мебель уже отмечена. На своём плане отметьте её щелчком по изображению: автоматическое распознавание подключается на следующем этапе.")})]});const f=t.slots.length>0&&t.slots.every(M=>M.w>=Fr&&M.d>=Fr),u=[{id:"items",name:`${C("Мебель на плане")}${t.slots.length?` · ${t.slots.length}`:""}`},{id:"sizes",name:C("Размеры мест"),off:!t.slots.length},{id:"kits",name:C("Комплекты"),off:!f}];return v("div",{class:"kit",ref:h,children:[v("div",{class:"kit-head",children:[v("div",{class:"seg",children:u.map((M,y)=>v("button",{class:o===M.id?"on":"",disabled:M.off,onClick:()=>a(M.id),children:[y+1,". ",M.name]},M.id))}),v("button",{class:"link",onClick:()=>{i({plan:null,slots:[]}),a("items")},children:C("Другой план")})]}),o==="items"&&v(Tx,{state:t,selected:c,select:l,setSlot:m,addSlot:g,remove:M=>i(y=>({...y,slots:y.slots.filter(b=>b.id!==M)})),next:()=>a("sizes")}),o==="sizes"&&v(Ax,{slots:t.slots,goods:d,setSlot:m,ready:f,next:()=>a("kits")}),o==="kits"&&v(Px,{slots:t.slots,goods:d,catalog:r,setCatalog:s,onCustom:n,onAddCustom:e})]})}const zs=n=>Math.max(0,Math.round(Number(n.target.value)||0));function Tx({state:n,selected:e,select:t,setSlot:i,addSlot:r,remove:s,next:o}){const a=n.plan==="sample"?Ex:n.planSrc;return v("div",{class:"kit-items",children:[v("div",{children:[v("div",{class:"kit-plan",onClick:l=>{const h=l.currentTarget.getBoundingClientRect();r([(l.clientX-h.left)/h.width,(l.clientY-h.top)/h.height])},children:[a&&v("img",{src:a,alt:C("План квартиры")}),n.slots.map((l,h)=>l.mark&&v("button",{class:`mark${e===l.id?" on":""}`,style:{left:`${l.mark[0]*100}%`,top:`${l.mark[1]*100}%`},title:`${C(Dn(l.kind).name)} · ${C(l.room)}`,onClick:p=>{p.stopPropagation(),t(l.id)},children:h+1},l.id))]}),v("p",{class:"muted small",children:[n.plan==="sample"?`${C("План-образец: мебель отмечена заранее.")} `:"",C("Щёлкните по плану, чтобы добавить мебель в этой точке.")]})]}),v("aside",{class:"kit-list",children:[v("h3",{children:C("Мебель на плане")}),!n.slots.length&&v("p",{class:"muted small",children:C("Пока ничего не отмечено.")}),n.slots.map((l,h)=>v("div",{class:`kit-row${e===l.id?" on":""}`,onClick:()=>t(l.id),children:[v("i",{children:h+1}),v("select",{value:l.kind,"aria-label":C("Вид мебели {0}",h+1),onChange:p=>{const d=p.target.value,[m,g]=Dn(d).typical;i(l.id,{kind:d,w:m,d:g})},children:ua.map(p=>v("option",{value:p.kind,children:C(p.name)},p.kind))}),v("input",{type:"text",value:C(l.room),"aria-label":C("Помещение {0}",h+1),onChange:p=>i(l.id,{room:p.target.value.trim()||"Комната"})}),v("input",{class:"qty",type:"number",min:"1",max:"20",value:l.qty,"aria-label":C("Количество {0}",h+1),onChange:p=>i(l.id,{qty:Math.max(1,Math.min(20,zs(p)))})}),v("button",{class:"link","aria-label":C("Убрать {0}",h+1),onClick:p=>{p.stopPropagation(),s(l.id)},children:"×"})]},l.id)),v("div",{class:"kit-actions",children:[v("button",{class:"tool wide",onClick:()=>r(),children:["+ ",C("Добавить мебель")]}),v("button",{class:"btn primary",disabled:!n.slots.length,onClick:o,children:C("Далее: размеры")})]})]})]})}function Ax({slots:n,goods:e,setSlot:t,ready:i,next:r}){return v("div",{children:[v("p",{class:"muted",children:C("Укажите свободное место под каждое изделие — ширину вдоль стены и глубину от стены. Подберутся изделия, которые встают в это место и занимают его не меньше чем на три четверти по ширине.")}),v("div",{class:"scroll",children:v("table",{class:"tbl kit-sizes",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("№")}),v("th",{children:C("Помещение")}),v("th",{children:C("Мебель")}),v("th",{children:C("Ширина места, мм")}),v("th",{children:C("Глубина, мм")}),v("th",{children:C("Высота не более, мм")}),v("th",{children:C("Кол-во")}),v("th",{children:C("В каталоге")})]})}),v("tbody",{children:n.map((s,o)=>{const a=Sx(s.kind,e);return v("tr",{children:[v("td",{children:o+1}),v("td",{children:C(s.room)}),v("td",{children:v("b",{children:C(Dn(s.kind).name)})}),v("td",{children:v("input",{type:"number",min:Fr,step:"10",value:s.w,"aria-label":C("Ширина места {0}",o+1),onChange:c=>t(s.id,{w:zs(c)})})}),v("td",{children:v("input",{type:"number",min:Fr,step:"10",value:s.d,"aria-label":C("Глубина места {0}",o+1),onChange:c=>t(s.id,{d:zs(c)})})}),v("td",{children:v("input",{type:"number",min:"0",step:"10",value:s.h||"",placeholder:C("без ограничения"),"aria-label":C("Высота {0}",o+1),onChange:c=>t(s.id,{h:zs(c)})})}),v("td",{children:s.qty}),v("td",{class:"muted small",children:a?C("ширина {0}–{1}",a[0],a[1]):C("нет такого вида")})]},s.id)})})]})}),!i&&v("div",{class:"notice warn",children:C("Ширина и глубина каждого места — не меньше {0} мм.",Fr)}),v("div",{class:"kit-actions",children:v("button",{class:"btn primary",disabled:!i,onClick:r,children:C("Подобрать комплекты")})})]})}const Hs=n=>{const e=n.product??n.custom;return`${e.w}×${e.d}${e.h?`×${e.h}`:""}`},fi=n=>{var e;return C(((e=n.product)==null?void 0:e.name)??n.custom.name)};function Rx({m:n,open:e}){var h;const t=(h=n.product)==null?void 0:h.picture,[i,r]=rt(!1),[s,o]=rt(null),a=!!(t&&!i);an(()=>{if(a)return;let p=!0;return o(null),(n.product?$v(n.product):qv(n.custom)).then(d=>{p&&o(d)}),()=>{p=!1}},[Yi(n),a]);const c=a?t:s,l=C(a?"Фото из каталога производителя":n.custom?"3D-модель изделия под размер":"Фото в каталоге нет — 3D-изображение в габаритах товара");return v("button",{class:`kit-photo${a?"":" is-3d"}`,title:l,"aria-label":C("{0}: увеличить",fi(n)),disabled:!c,onClick:()=>c&&e({src:c,photo:a,m:n}),children:[c?v("img",{src:c,alt:fi(n),loading:"lazy",referrerpolicy:"no-referrer",onError:()=>a&&r(!0)}):v("span",{class:"muted small",children:"…"}),c&&!a&&v("i",{children:"3D"})]})}function Cx({shown:n,close:e}){an(()=>{const i=r=>r.key==="Escape"&&e();return addEventListener("keydown",i),()=>removeEventListener("keydown",i)},[]);const{m:t}=n;return v("div",{class:"kit-lightbox",role:"dialog","aria-modal":"true","aria-label":fi(t),onClick:e,children:v("figure",{onClick:i=>i.stopPropagation(),children:[v("img",{src:n.src,alt:fi(t),referrerpolicy:"no-referrer"}),v("figcaption",{children:[v("b",{children:fi(t)}),v("span",{class:"muted small",children:[C("{0} мм",Hs(t))," · ",wt(t.price)," · ",C(n.photo?"фото из каталога производителя":t.custom?"3D-модель изделия под размер":"фото в каталоге нет, показана 3D-форма в габаритах товара")]})]}),v("button",{class:"link",onClick:e,children:C("Закрыть")})]})})}function Px({slots:n,goods:e,catalog:t,setCatalog:i,onCustom:r,onAddCustom:s}){const o=zr(()=>Mx(n,e),[n,e]),[a,c]=rt(""),[l,h]=rt({}),[p,d]=rt(null),[m,g]=rt(0),[_,f]=rt(null),u=x=>x.lines.map(D=>{var O;const z=(O=l[x.id])==null?void 0:O[D.slot.id];return z===void 0?D:{...D,pick:D.options.find(X=>Yi(X)===z)}}),M=o.find(x=>x.id===a)??o[0],y=u(M),{total:b,covered:T}=Ph(y),A=y.filter(x=>{var D;return(D=x.pick)==null?void 0:D.custom}).map(x=>({custom:x.pick.custom,qty:x.slot.qty})),P=x=>{var O;const D=(O=x.target.files)==null?void 0:O[0];if(!D)return;const z=new FileReader;z.onload=()=>{try{const X=mx(String(z.result));if(d(X),X.goods.length){const j={source:D.name,goods:X.goods};i(j),ou(rl,j),h({})}}catch{d({error:C("Файл не удалось прочитать: нужен YML-фид (XML) или JSON-массив товаров.")})}},z.readAsText(D)},I=()=>{i({source:"",goods:[]}),d(null),h({});try{localStorage.removeItem(rl)}catch{}},E=()=>{const x=[["№","Помещение","Мебель","Место, мм","Изделие","Коллекция","Габариты, мм","Цена","Кол-во","Сумма","Ссылка","Фото"].map(D=>C(D))];y.forEach((D,z)=>{var O,X,j,Y,Z,$,de;return x.push([z+1,C(D.slot.room),C(Dn(D.slot.kind).name),`${D.slot.w}×${D.slot.d}`,D.pick?fi(D.pick):C("нет подходящего"),(O=D.pick)!=null&&O.product?C(D.pick.product.collection):(X=D.pick)!=null&&X.custom?C("под размер"):"",D.pick?Hs(D.pick):"",((j=D.pick)==null?void 0:j.price)??"",D.slot.qty,D.pick?D.pick.price*D.slot.qty:"",((Z=(Y=D.pick)==null?void 0:Y.product)==null?void 0:Z.url)??"",((de=($=D.pick)==null?void 0:$.product)==null?void 0:de.picture)??""].map(String))}),x.push(["","","","","","","","",C("Итого"),String(b),"",""]),Ir("komplekt.csv","\uFEFF"+x.map(D=>D.map(z=>`"${z.replace(/"/g,'""')}"`).join(";")).join(`\r
`),"text/csv;charset=utf-8")};return v("div",{children:[v("div",{class:"kit-catalog",children:[v("span",{children:[v("b",{children:C("Каталог:")})," ",t.goods.length?C("{0} · {1} товаров",t.source,t.goods.length):C("демонстрационный · {0} товаров, цены условные",su.length)]}),v("label",{class:"link file",children:[C("Загрузить фид производителя (YML или JSON)"),v("input",{type:"file",accept:".xml,.yml,.json,text/xml,application/json",onChange:P})]}),t.goods.length>0&&v("button",{class:"link",onClick:I,children:C("Вернуть демо-каталог")})]}),p&&("error"in p?v("div",{class:"notice error",children:p.error}):v("div",{class:`notice ${p.goods.length?"ok":"warn"}`,children:C("В фиде {0} предложений, в подбор взято {1}. Пропущено: без размеров изделия — {2}, вид мебели не определён — {3}, без цены — {4}. Размеры читаются из параметров «Ширина», «Глубина», «Высота», «Длина», «Диаметр»; габариты упаковки не используются.",p.total,p.goods.length,p.skipped.noSize,p.skipped.noKind,p.skipped.noPrice)})),v("div",{class:"kit-tabs",children:o.map(x=>{const D=Ph(u(x));return v("button",{class:x.id===M.id?"on":"","aria-pressed":x.id===M.id,onClick:()=>c(x.id),children:[v("b",{children:C(x.name)}),v("span",{children:wt(D.total)}),v("span",{class:"small",children:C("{0} из {1} мест",D.covered,x.lines.length)})]},x.id)})}),v("p",{class:"muted",children:C(M.note)}),v("div",{class:"scroll",children:v("table",{class:"tbl kit-lines",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("№")}),v("th",{children:C("Место")}),v("th",{children:C("Фото")}),v("th",{children:C("Изделие")}),v("th",{class:"r",children:C("Занимает ширины")}),v("th",{class:"r",children:C("Цена")}),v("th",{class:"r",children:C("Кол-во")}),v("th",{class:"r",children:C("Сумма")}),v("th",{})]})}),v("tbody",{children:y.map((x,D)=>{var z,O,X;return v("tr",{children:[v("td",{children:D+1}),v("td",{children:[v("b",{children:C(Dn(x.slot.kind).name)}),v("br",{}),v("span",{class:"muted small",children:[C(x.slot.room)," · ",C("{0} мм",`${x.slot.w}×${x.slot.d}`)]})]}),v("td",{children:x.pick?v(Rx,{m:x.pick,open:f}):v("span",{class:"kit-photo empty"})}),v("td",{children:[x.options.length?v("select",{value:Yi(x.pick),"aria-label":C("Изделие для места {0}",D+1),onChange:j=>h({...l,[M.id]:{...l[M.id],[x.slot.id]:j.target.value}}),children:[x.options.map(j=>v("option",{value:Yi(j),children:[fi(j)," · ",Hs(j)," · ",wt(j.price)]},Yi(j))),v("option",{value:"",children:C("— не включать —")})]}):v("span",{class:"why",children:C("В каталоге нет изделия под это место — измените размеры или обратитесь к менеджеру.")}),x.pick&&v("div",{class:"muted small",children:[x.pick.custom?C("Изготовление под размер по правилам фабрики"):C("Коллекция «{0}»",C(x.pick.product.collection))," · ",C("{0} мм",Hs(x.pick))]})]}),v("td",{class:"r",children:x.pick?`${Math.round((x.pick.product??x.pick.custom).w/x.slot.w*100)}%`:"—"}),v("td",{class:"r",children:x.pick?wt(x.pick.price):"—"}),v("td",{class:"r",children:x.slot.qty}),v("td",{class:"r",children:v("b",{children:x.pick?wt(x.pick.price*x.slot.qty):"—"})}),v("td",{class:"r",children:[((z=x.pick)==null?void 0:z.custom)&&v("button",{class:"link",onClick:()=>r(x.pick.custom),children:C("Настроить")}),((X=(O=x.pick)==null?void 0:O.product)==null?void 0:X.url)&&v("a",{class:"link",href:x.pick.product.url,target:"_blank",rel:"noopener noreferrer",children:C("На сайте")})]})]},x.slot.id)})})]})}),v("div",{class:"project-foot",children:[v("span",{class:"check muted",children:C("Закрыто мест: {0} из {1}",T,y.length)}),v("div",{class:"total",children:[v("span",{class:"muted small",children:C("Комплект «{0}»",C(M.name))}),v("b",{children:wt(b)})]}),v("button",{class:"btn soft",onClick:E,children:C("Скачать комплект (CSV)")}),v("button",{class:"btn primary",disabled:!A.length,onClick:()=>{s(A),g(A.length)},children:[C("Изделия под размер — в проект"),A.length?` · ${A.length}`:""]})]}),_&&v(Cx,{shown:_,close:()=>f(null)}),m>0&&v("div",{class:"notice ok",children:C("В проект добавлено изделий под размер: {0}. Их можно доработать в конструкторе и расставить на плане помещения.",m)})]})}const Ts=120;function Dx({project:n,update:e}){const t=Kn(null),i=Kn(null),[r,s]=rt(null),{room:o}=n,a=pd(n),c=dd(o,a),l=new Map;for(const T of c)for(const A of T.ids)l.get(A)!=="error"&&l.set(A,T.level);const h=n.items.filter(T=>!n.placements[T.id]),p=T=>{const A=t.current.createSVGPoint();return A.x=T.clientX,A.y=T.clientY,A.matrixTransform(t.current.getScreenCTM().inverse())},d=(T,A,P,I)=>{const E=a.find(O=>O.id===T),x=I===90||I===270,D=E?(x?E.d:E.w)/2:0,z=E?(x?E.w:E.d)/2:0;A-D<Ts?A=D:o.w-(A+D)<Ts&&(A=o.w-D),P-z<Ts?P=z:o.l-(P+z)<Ts&&(P=o.l-z),e({...n,placements:{...n.placements,[T]:{x:Math.round(A/10)*10,y:Math.round(P/10)*10,rot:I}}})},m=T=>{if(!i.current)return;const A=p(T);d(i.current.id,A.x-i.current.dx,A.y-i.current.dy,n.placements[i.current.id].rot)},g=()=>{if(!r||!n.placements[r])return;const T=n.placements[r];d(r,T.x,T.y,(T.rot+90)%360)},_=()=>{if(!r)return;const T={...n.placements};delete T[r],e({...n,placements:T}),s(null)},f=T=>e({...n,room:{...o,...T}}),u=(T,A)=>f({elements:o.elements.map(P=>P.id===T?{...P,...A}:P)}),M=T=>T.wall%2===0?o.w:o.l,y=T=>{var I;const A=(I=T.target.files)==null?void 0:I[0];if(!A)return;const P=new FileReader;P.onload=()=>{const E=new Image;E.onload=()=>e({...n,plan:{src:String(P.result),widthMm:o.w,ratio:E.height/E.width}}),E.src=String(P.result)},P.readAsDataURL(A)},b=300;return v("div",{class:"room",children:[v("aside",{class:"room-side",children:[v("h3",{children:C("Помещение")}),v("div",{class:"row2",children:[v("label",{children:[C("Ширина, мм"),v("input",{type:"number",min:"1500",max:"12000",step:"50",value:o.w,onChange:T=>f({w:Math.max(1500,Number(T.target.value))})})]}),v("label",{children:[C("Длина, мм"),v("input",{type:"number",min:"1500",max:"12000",step:"50",value:o.l,onChange:T=>f({l:Math.max(1500,Number(T.target.value))})})]})]}),v("h3",{children:C("Двери и окна")}),o.elements.map(T=>v("div",{class:"el",children:[v("b",{children:C(T.kind==="door"?"Дверь":"Окно")}),v("select",{value:T.wall,onChange:A=>u(T.id,{wall:Number(A.target.value),offset:0}),"aria-label":C("Стена"),children:[v("option",{value:"0",children:C("верхняя стена")}),v("option",{value:"1",children:C("правая")}),v("option",{value:"2",children:C("нижняя")}),v("option",{value:"3",children:C("левая")})]}),v("input",{type:"range",min:"0",max:Math.max(0,M(T)-T.width),step:"50",value:T.offset,onInput:A=>u(T.id,{offset:Number(A.target.value)}),"aria-label":C("Положение на стене")}),v("button",{class:"link",onClick:()=>f({elements:o.elements.filter(A=>A.id!==T.id)}),children:C("убрать")})]},T.id)),v("div",{class:"row2",children:[v("button",{class:"tool wide",onClick:()=>f({elements:[...o.elements,{id:Ki(),kind:"door",wall:3,offset:200,width:900}]}),children:["+ ",C("Дверь")]}),v("button",{class:"tool wide",onClick:()=>f({elements:[...o.elements,{id:Ki(),kind:"window",wall:1,offset:600,width:1400}]}),children:["+ ",C("Окно")]})]}),v("h3",{children:C("Обмерный план")}),v("p",{class:"muted small",children:C("Загрузите план (PNG, JPG, SVG) и укажите его реальную ширину — изображение ляжет подложкой в масштабе.")}),v("input",{type:"file",accept:"image/png,image/jpeg,image/svg+xml",onChange:y}),n.plan&&v("div",{class:"row2",children:[v("label",{children:[C("Ширина плана, мм"),v("input",{type:"number",min:"500",step:"50",value:n.plan.widthMm,onChange:T=>e({...n,plan:{...n.plan,widthMm:Math.max(500,Number(T.target.value))}})})]}),v("button",{class:"link",onClick:()=>e({...n,plan:void 0}),children:C("убрать план")})]}),v("h3",{children:C("Изделия проекта")}),!n.items.length&&v("p",{class:"muted small",children:C("Сначала добавьте изделия из конструктора.")}),h.map(T=>v("button",{class:"tool wide",onClick:()=>{d(T.id,o.w/2,o.l/2,0),s(T.id)},children:C("Поставить: {0}",Lx(n,T.id))},T.id)),r&&n.placements[r]&&v("div",{class:"row2",children:[v("button",{class:"tool wide",onClick:g,children:C("Повернуть на 90°")}),v("button",{class:"tool wide",onClick:_,children:C("Убрать с плана")})]})]}),v("div",{class:"room-main",children:[v("svg",{ref:t,class:"plan",viewBox:`${-b} ${-b} ${o.w+b*2} ${o.l+b*2}`,onPointerMove:m,onPointerUp:()=>i.current=null,onPointerLeave:()=>i.current=null,children:[n.plan&&v("image",{href:n.plan.src,x:"0",y:"0",width:n.plan.widthMm,height:n.plan.widthMm*n.plan.ratio,opacity:"0.55",preserveAspectRatio:"none"}),v("rect",{x:"0",y:"0",width:o.w,height:o.l,fill:n.plan?"none":"#fff",stroke:"#242b39","stroke-width":"60"}),o.elements.map(T=>{const A=hd(o,T);return v("rect",{x:A.x0,y:A.y0,width:A.x1-A.x0,height:A.y1-A.y0,fill:T.kind==="door"?"rgba(2,90,255,.10)":"rgba(39,208,97,.22)",stroke:T.kind==="door"?"#025aff":"#1a9a4a","stroke-width":"12","stroke-dasharray":"40 30"},T.id)}),a.map(T=>{const A=wl(T),P=fo(T,Math.max(T.opening,uo)),I=l.get(T.id),E=I==="error"?"#e0443a":I==="warn"?"#e89a1c":"#025aff",x=fo(T,40);return v("g",{style:"cursor:grab",onPointerDown:D=>{var O,X;const z=p(D);i.current={id:T.id,dx:z.x-T.x,dy:z.y-T.y},s(T.id),(X=(O=D.currentTarget).setPointerCapture)==null||X.call(O,D.pointerId)},children:[v("rect",{x:P.x0,y:P.y0,width:P.x1-P.x0,height:P.y1-P.y0,fill:E,opacity:"0.08"}),v("rect",{x:A.x0,y:A.y0,width:A.x1-A.x0,height:A.y1-A.y0,rx:"14",fill:I?`${E}22`:"#e6efff",stroke:E,"stroke-width":r===T.id?30:16}),v("rect",{x:x.x0,y:x.y0,width:x.x1-x.x0,height:x.y1-x.y0,fill:E}),v("text",{x:T.x,y:T.y,"font-size":"110","font-weight":"700",fill:"#242b39","text-anchor":"middle","dominant-baseline":"middle",children:C(T.title).replace(/[«»„“”]/g,"")})]},T.id)}),v("text",{x:o.w/2,y:-110,"font-size":"120","font-weight":"700",fill:"#6e6e6e","text-anchor":"middle",children:C("{0} мм",o.w)}),v("text",{x:-110,y:o.l/2,"font-size":"120","font-weight":"700",fill:"#6e6e6e","text-anchor":"middle",transform:`rotate(-90 -110 ${o.l/2})`,children:C("{0} мм",o.l)})]}),v("div",{class:"notices",role:"status","aria-live":"polite",children:[c.map((T,A)=>v("div",{class:`notice ${T.level}`,children:C(T.message)},A)),!c.length&&a.length>0&&v("div",{class:"notice ok",children:C("Расстановка проверена: пересечений нет, двери и ящики открываются, проходы свободны.")}),!a.length&&v("div",{class:"notice info",children:C("Перетаскивайте изделия по плану: они прилипают к стенам. Синяя полоса — фасад, бледная зона — место для открывания и прохода.")})]})]})]})}function Lx(n,e){var i;const t=n.items.find(r=>r.id===e);return C((t&&((i=Wn(t.modelId))==null?void 0:i.name))??"")}function Ix(){const[n,e]=rt(of),[t,i]=rt("catalog"),[r,s]=rt(null),[o,a]=rt(!1),[c,l]=rt(Au);an(()=>Ru(l),[]),an(()=>lf(n),[n]);const h=Kn(null),p=Kn(!1);an(()=>{var _;p.current&&((_=h.current)==null||_.scrollIntoView({block:"start"})),p.current=!0},[t]),an(()=>{const _=df(location.hash),f=_&&Wn(_.m);_&&f&&d(f,_.v)},[]);const d=(_,f={},u)=>{s({model:_,values:f,itemId:u,key:Ki()}),i("configurator")},m=_=>{r&&(e(f=>r.itemId?{...f,items:f.items.map(u=>u.id===r.itemId?{...u,values:_}:u)}:{...f,items:[...f.items,{id:Ki(),modelId:r.model.id,modelVersion:r.model.version,values:_,qty:1}]}),i("project"))},g=[{id:"catalog",name:C("Каталог")},{id:"configurator",name:C("Конструктор"),off:!r},{id:"project",name:`${C("Проект")}${n.items.length?` · ${n.items.length}`:""}`},{id:"room",name:C("План помещения")},{id:"kit",name:C("Подбор по плану")}];return v("div",{class:"fb",ref:h,lang:c,children:[v("nav",{class:"steps","aria-label":C("Шаги"),children:[g.map((_,f)=>v("button",{class:t===_.id?"on":"",disabled:_.off,onClick:()=>i(_.id),children:[v("i",{children:f+1}),_.name]},_.id)),v("label",{class:"check role",children:[v("input",{type:"checkbox",checked:o,onChange:_=>a(_.target.checked)})," ",C("Режим менеджера")]})]}),t==="catalog"&&v(Ux,{onOpen:_=>d(_)}),t==="configurator"&&r&&v(Yv,{model:r.model,initial:r.values,editing:!!r.itemId,manager:o,onSave:m,onBack:()=>i("catalog")},r.key),t==="project"&&v(Fx,{project:n,update:e,onEdit:_=>{const f=n.items.find(M=>M.id===_),u=f&&Wn(f.modelId);f&&u&&d(u,f.values,_)},onCatalog:()=>i("catalog"),onRoom:()=>i("room")}),t==="room"&&v(Dx,{project:n,update:e}),t==="kit"&&v(wx,{onCustom:_=>{const f=Wn(_.modelId);f&&d(f,_.values)},onAddCustom:_=>e(f=>({...f,items:[...f.items,..._.flatMap(({custom:u,qty:M})=>{const y=Wn(u.modelId);return y?[{id:Ki(),modelId:y.id,modelVersion:y.version,values:u.values,qty:M}]:[]})]}))})]})}function Ux({onOpen:n}){const[e,t]=rt("Все"),i=["Все",...new Set(ho.map(s=>s.category))],r=zr(()=>ho.filter(s=>e==="Все"||s.category===e).map(s=>({m:s,c:_i(s,{})})),[e]);return v("div",{children:[v("div",{class:"seg cats",children:i.map(s=>v("button",{class:e===s?"on":"",onClick:()=>t(s),children:C(s)},s))}),v("div",{class:"cards",children:r.map(({m:s,c:o})=>{const a=s.params.find(l=>l.code==="width"),c=s.params.find(l=>l.code==="height");return v("article",{class:"card-model",children:[v(Nx,{model:s}),v("h3",{children:C(s.name)}),v("p",{class:"muted small",children:C(s.description)}),v("p",{class:"small",children:[C("Ш {0}–{1} · В {2}–{3} мм",a.min,a.max,c.min,c.max),v("br",{}),s.install.map(l=>C(l)).join(" · ")," · ",C("{0} дней",s.leadTimeDays)]}),v("div",{class:"card-foot",children:[v("b",{children:C("от {0}",wt(o.price.total))}),v("button",{class:"btn primary",onClick:()=>n(s),children:C("Настроить")})]})]},s.id)})})]})}function Nx({model:n}){const e=zr(()=>_i(n,{}),[n]),{w:t,h:i}=e.geometry.dims,r=[...e.geometry.parts].filter(o=>o.shape==="box").sort((o,a)=>o.pos[2]-a.pos[2]),s=o=>o==="facade"?"#c9a77c":o==="metal"?"#3a3d44":o==="mirror"?"#cfe0e8":o==="glass"?"#dbe7ea":o==="plinth"?"#e4e2dc":"#f3f2ee";return v("svg",{class:"thumb",viewBox:`${-t/2-150} ${-i-150} ${t+300} ${i+300}`,"aria-hidden":"true",children:r.map(o=>v("rect",{x:o.pos[0]-o.size[0]/2,y:-o.pos[1]-o.size[1]/2,width:o.size[0],height:o.size[1],fill:s(o.finish),stroke:"#242b39","stroke-width":"5"},o.id))})}function Fx({project:n,update:e,onEdit:t,onCatalog:i,onRoom:r}){const[s,o]=rt(!1),a=n.items.map(m=>({it:m,c:fd(m)})).filter(m=>m.c),l=a.reduce((m,g)=>m+g.c.price.total*g.it.qty,0)+(n.delivery&&a.length?pc:0),h=dd(n.room,pd(n)).filter(m=>m.level==="error"),p=!a.length||a.some(m=>m.c.blocked)||h.length>0,d=()=>{const m={created:new Date().toISOString(),items:a.map(({it:g,c:_})=>({model:g.modelId,modelVersion:g.modelVersion,qty:g.qty,values:_.resolved.values,bom:_.bom,price:_.price.total})),room:n.room,placements:n.placements,delivery:n.delivery,total:l};Ir("order.json",JSON.stringify(m,null,2),"application/json"),o(!0)};return a.length?v("div",{class:"project",children:[v("h2",{children:C("Спецификация проекта")}),v("div",{class:"scroll",children:v("table",{class:"tbl",children:[v("thead",{children:v("tr",{children:[v("th",{children:C("Изделие")}),v("th",{children:C("Параметры")}),v("th",{class:"r",children:C("Цена")}),v("th",{class:"r",children:C("Кол-во")}),v("th",{class:"r",children:C("Сумма")}),v("th",{})]})}),v("tbody",{children:a.map(({it:m,c:g})=>{const _=g.resolved.values,f=g.model.params.filter(u=>["body_decor","facade_decor","facade_type","facade_material"].includes(u.code)&&!g.resolved.state[u.code].hidden).map(u=>C(er(u,_[u.code]))).join(", ");return v("tr",{children:[v("td",{children:[v("b",{children:C(g.model.name)}),v("br",{}),v("span",{class:"muted small",children:[Xi(g.model.sku)," · ",C("версия {0}",m.modelVersion)]})]}),v("td",{children:[_.width," × ",_.height," × ",_.depth," ",C("мм"),v("br",{}),v("span",{class:"muted small",children:f}),g.blocked&&v("div",{class:"why",children:C("Есть ошибки — откройте изделие")})]}),v("td",{class:"r",children:wt(g.price.total)}),v("td",{class:"r",children:v("input",{class:"qty",type:"number",min:"1",max:"20",value:m.qty,"aria-label":C("Количество"),onChange:u=>e({...n,items:n.items.map(M=>M.id===m.id?{...M,qty:Math.max(1,Math.min(20,Number(u.target.value)||1))}:M)})})}),v("td",{class:"r",children:v("b",{children:wt(g.price.total*m.qty)})}),v("td",{class:"r",children:[v("button",{class:"link",onClick:()=>t(m.id),children:C("Изменить")})," ",v("button",{class:"link",onClick:()=>{const u={...n.placements};delete u[m.id],e({...n,items:n.items.filter(M=>M.id!==m.id),placements:u})},children:C("Удалить")})]})]},m.id)})})]})}),v("div",{class:"project-foot",children:[v("label",{class:"check",children:[v("input",{type:"checkbox",checked:n.delivery,onChange:m=>e({...n,delivery:m.target.checked})})," ",C("Доставка — {0}",wt(pc))]}),v("div",{class:"total",children:[v("span",{class:"muted small",children:C("Итого по проекту")}),v("b",{children:wt(l)})]}),v("button",{class:"btn soft",onClick:r,children:C("Расставить на плане")}),v("button",{class:"btn primary",disabled:p,onClick:d,children:C("Оформить заявку")})]}),h.length>0&&v("div",{class:"notice error",children:C("На плане помещения есть ошибки расстановки — исправьте их перед заявкой.")}),s&&v("div",{class:"notice ok",children:C("Заявка сформирована и скачана файлом order.json: параметры, деталировка и цены по каждому изделию. В рабочей системе этот же пакет уходит в CRM и 1С фабрики.")})]}):v("div",{class:"empty",children:[v("h2",{children:C("В проекте пока нет изделий")}),v("p",{class:"muted",children:C("Выберите модель в каталоге и настройте её под себя.")}),v("button",{class:"btn primary",onClick:i,children:C("Открыть каталог")})]})}Pu();const Za=document.getElementById("furniture-builder");Za&&(Za.replaceChildren(),vu(v(Ix,{}),Za));
