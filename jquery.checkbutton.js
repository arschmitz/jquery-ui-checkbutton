// JavaScript Document
(function($){
	/*$.widget('ui.checkbutton','ui-button', {
		_create: function(){
			this.element.after('<div id="'+this.element.attr('id')+'_container" class="ui-checkbutton"></div');
			this.element.appendTo(checkbutton);
			$('label[for="'+this.element.attr('id')+'"]').appendTo(checkbutton);
			checkbutton.button(this.options).toggle(function(e){
							checkbutton.find('input').attr("checked", true).change();
							checkbutton.one('mouseleave',function(){
								checkbutton.addClass('ui-state-hover');
							});
							checkbutton.hover(function(){
								checkbutton.removeClass('ui-state-hover');				   
							},function(){
								checkbutton.addClass('ui-state-hover');
							});
					},function(e){
						checkbutton.find('input').attr("checked", false).change();
						checkbutton.one('mouseleave',function(){
							checkbutton.removeClass('ui-state-hover');
						});
						checkbutton.hover(function(){
							checkbutton.addClass('ui-state-hover');				   
						},function(){
							checkbutton.removeClass('ui-state-hover');
						});
					});
					if(checkbutton.find('input').is(':checked')){
						checkbutton.addClass('ui-state-hover');
					}
		},
		
		destroy: function(){
			console.log('destroy');
 			//this.element.parent().button('destroy');
		},
		
		refresh: function(){
			console.log('refresh');
			//checkbutton.button('refresh');
		},
		
		_setOption: function(key, value){
			console.log('option');
			//checkbutton.button('option',key,value);
		},
		_setOptions: function( options ){
			console.log('options');
			//checkbutton.button('option',options);
		},
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			},
			create: function(){
				$(this).find('input').click(function(e){
					e.stopImmediatePropagation();
					$(this).parent().click();
				});
			}
		},
		widget: function(){
			console.log('widget');
			return $('#'+this.element.attr('id')+'_contain').button('widget');
		},
		disable: function(){
			console.log('disable');
			//checkbutton.button('disable');
		},
		enable: function(){
			console.log('enable');
			//checkbutton.button('enable');
		}
	});
})(jQuery);*/
$.widget( "ui.checkbutton", {
	options: {
		disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			},
			create: function(){
				$(this).find('input').click(function(e){
					e.stopImmediatePropagation();
					$(this).parent().click();
				});
			}
	},

	_create: function() {
		this.element.addClass( "ui-checkbutton" );
	
	},

	_init: function() {
		this.refresh();
	},

	_setOption: function( key, value ) {
		this.element.button( "option", key, value );
		$.Widget.prototype._setOption.call(this,key,value);
		//once jquery ui 1.9 hits switch to super
		//this._super( key, value );
	},

	refresh: function() {
	alert(JSON.stringify(this.options));
		this.element.button(this.options);
		this.element.toggle(function(e){
							$(this).find('input').attr("checked", true).change();
							$(this).one('mouseleave',function(){
								$(this).addClass('ui-state-hover');
							});
							$(this).hover(function(){
								$(this).removeClass('ui-state-hover');				   
							},function(){
								$(this).addClass('ui-state-hover');
							});
					},function(e){
						$(this).find('input').attr("checked", false).change();
						$(this).one('mouseleave',function(){
							$(this).removeClass('ui-state-hover');
						});
						$(this).hover(function(){
							$(this).addClass('ui-state-hover');				   
						},function(){
							$(this).removeClass('ui-state-hover');
						});
					})
		if(this.element.find('input').is(':checked')){
						this.element.addClass('ui-state-hover');
					}
		
	},

	destroy: function() {
		this.element.removeClass( "ui-checkbutton" );
		this.element.button( "destroy" );
	},
	widget: function(){
		return this.element;
	}
});

}( jQuery ) );