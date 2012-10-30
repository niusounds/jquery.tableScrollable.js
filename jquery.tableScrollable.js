(function($) {
	jQuery.fn.tableScrollable = function(opt) {
		var conf = {
			// TODO how to set default value?
			height : 400
		};
		$.extend(conf, opt)
		var $table = $(this);
		$table.find('thead th').each(function(i, th) {
			var width = $(th).width();
			$table.find('tr').children(':nth-child(' + (i + 1) + ')').width(width);
		});
		$table.find('thead,tbody').css({
			display : 'block'
		});
		$table.find('tbody').css({
			overflow : 'auto',
			height : conf.height
		});
	}
})(jQuery);