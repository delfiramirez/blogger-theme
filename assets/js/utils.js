
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

	(function(){
			var URL = document.URL,
			
			      	reg = /\.blogspot\.(com\...|..)\//
				
			if( URL.match( reg ) )
			{
				window.location = URL.replace( reg, ".blogspot.com\/ncr\/" )
			}
			else {
			        log ();
			}
		})()
		document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
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
