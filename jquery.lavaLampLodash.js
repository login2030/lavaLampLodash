(function($) {
	jQuery.fn.lavaLampLodash = function(opt) {
		opt = $.extend({
			speed: 500, // скорость анимации
			prefix: 'main-nav', // префикс для классов внутри меню
			returnStarting: true // если true, то плавающая полоска при убирании с меню будет улетать к активному пункту
		}, opt);
		var make = function() {
			var $this = $(this);
			var itemParent = $this.find('.' + opt.prefix + '__item-parent');
			var item = $this.find('.' + opt.prefix + '__item');
			var onItem = $this.find('.' + opt.prefix + '__item--on');
			var onLodash = $('<i/>', {
				class: opt.prefix + '__lodash ' + opt.prefix + '__lodash--on'
			});
			var hoverLodash = $('<i/>', {
				class: opt.prefix + '__lodash ' + opt.prefix + '__lodash--hover'
			});
			var setCssLodash = function(el, stepfather) {
				el.css({
					width: stepfather.width(),
					left: stepfather.position().left
				});
			};
			var setAnimateLodash = function(el, stepfather) {
				el.stop().animate({
					width: stepfather.width(),
					left: stepfather.position().left
				}, opt.speed);
			};

			$this.append(onLodash, hoverLodash);
			setCssLodash(onLodash, onItem);
			setCssLodash(hoverLodash, onItem);

			itemParent.hover(
				function() {
					var $el = $(this).find('.' + opt.prefix + '__item');
					setAnimateLodash(hoverLodash, $el);
				},
				function() {
					var $el = opt.returnStarting ? onItem : $(this).find('.' + opt.prefix + '__item');
					setAnimateLodash(hoverLodash, $el);
				}
			);
		};
		return this.each(make);
	};
})(jQuery);
