Handlebars.registerHelper('list', function(items, options){
	if (Object.prototype.toString.call(items) === '[object Array]'){
		var out = '';
		for (var i = 0, l = items.length; i < l; i++){
			out += options.fn(items[i]);
		}
		return out;
	}
});