(function ($) {

	$.fn.SameHeight = function () {

		diffBoxAndContent = 0;

		this.run = function () {
			// Boxes
			var bhs = this.map(function () {
				return $(this).height();
			}).get();
			var mbh = Math.max.apply(null, bhs);

			// Contents
			var chs = this.children().map(function () {
				return $(this).height();
			}).get();
			var mch = Math.max.apply(null, chs);

			diffBoxAndContent = mbh - mch;
			this.height(mbh);
		};

		this.update = function () {
			var chs = this.children().map(function () {
				return $(this).height();
			}).get();
			var mch = Math.max.apply(null, chs);
			var newHeight = mch + diffBoxAndContent;
			this.height(newHeight);
		};

		this.run();
		my = this;
		var resize = function () {
			my.update();
		};
		$(window).resize(resize);

		return this;
	};
})(jQuery);
