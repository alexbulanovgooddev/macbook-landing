export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended'
	],
	ignoreFiles: ['dist/**', 'node_modules/**', 'coverage/**'],
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			customSyntax: 'postcss-scss'
		}
	],
	rules: {
		'no-invalid-position-at-import-rule': null,
		'no-duplicate-selectors': true,
		// `/` is valid plain CSS (font shorthand, grid, aspect-ratio),
		// so don't treat it as a SCSS division operator.
		'scss/operator-no-unspaced': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'reference',
					'apply',
					'tailwind',
					'theme',
					'variant',
					'custom-variant',
					'utility',
					'source',
					'plugin',
					'config'
				]
			}
		]
	}
}
