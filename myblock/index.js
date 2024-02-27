var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType( 'serjik/myblock', {
	// Gutenberg-часть (бэкенд)
	edit: function () {
		return createElement(
			'p',
			{ className: 'admin_title' },
			`Hello from backend (Edit)!`
		);
	},
	// Gutenberg-часть (фронт)
	save: function () {
		return createElement(
			'p',
			{ className: 'front_title' },
			`Hello from frontend (Save 2)!`
		);
	},
} );
