(function($) {

	function NfqPrettify() {}

	NfqPrettify.prototype._create = function() {
		$.ajax({
		  url: "hook.php"
		}).done(function(msg) {
		   $('form').after($('<p></p>').text('Today\'s code: '+msg));
		});

		$(this.element).find('label').wrap( $("<div></div>").addClass('make-div-pretty') );
		$(this.element).find('input').not('input[type=submit]').addClass('make-input-pretty');

	};

	NfqPrettify.prototype._destroy = function() {
        this._super();
        this.stop();
    };

    NfqPrettify.prototype._setOption = function (key, value){}

	$.widget("nfq.nfqPrettify", NfqPrettify.prototype);
})(jQuery);