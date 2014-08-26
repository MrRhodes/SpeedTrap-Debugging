
(function() {

	var src = null;

	var decode = function(j) {
		return j.replace(/(.....)(........)/g, '$2$1').replace(/(..)(..)/g, '$2$1').replace(/\+/g,'&').replace(/q([0-9A-F]{2})/g,'%$1');
	};

	var t = setInterval(function() {
		console.log('Debugging speedtrap...');
		var s = document.getElementById('stodScriptElement');
		if (s.src != src) {
			src = s.src;
			qs = src.substring( src.indexOf('?') + 1 );
			qs = qs.split('&');

			var y = (function(g) {
				for (var i=0; i< g.length; i++) {
					var pair = g[i].split("=");
					if (pair[0] == 'y') return pair.slice(1).join('=');
				};
			})(qs);

			y = decode(y);
			y = decodeURIComponent(y);

			// objectify
			var obj = (function(g) {
				var o = {};
				var vars = g.split('&');
				for (var i=0; i< vars.length; i++) {
					var pair = vars[i].split("=");
					o[pair[0]] = pair.slice(1).join('=');
				};
				return o;
			})(y);

			console.log(obj);


		};
	},1000);

})();
