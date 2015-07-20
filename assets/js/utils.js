
// prototypes

if (!Array.indexOf)
        {
        Array.prototype.indexOf=function (obj, start)
                {
                for (var i=(start||0);i<this.length;i++)
                        { if (this[i]==obj) { return i;} }
                return-1;
                        }
        }

// custom domain

if ((window.location.href.toString().indexOf(&#39;.com.fr/&#39;))&gt;&#39;1&#39;)
{
window.location.href=window.location.href.toString().replace(&#39;.blogspot.com.fr/&#39;, &#39;.blogspot.com/ncr/&#39;);
}

else {
log ();
}

// load Fonts


WebFontConfig={
google: { families: [ 'IM+Fell+English:400,400italic:latin', 'IM+Fell+Great+Primer:400,400italic:latin' ] }
};
        (function() {
        var wf=document.createElement('script');
                wf.src=('https:'==document.location.protocol ? 'https' : 'http')+
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type='text/javascript';
                wf.async='true';
                var s=document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
        })();