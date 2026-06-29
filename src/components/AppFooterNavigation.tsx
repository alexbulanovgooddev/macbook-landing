import type { FC } from 'react'
import { footerNavigationLinks } from '~/constants'

export const AppFooterNavigation: FC = () => {
	return (
		<div className='app-footer-navigation'>
			<ul className='app-footer-navigation__list'>
				{footerNavigationLinks.map(({ label }) => (
					<li className='app-footer-navigation__item' key={label}>
						<a className='app-footer-navigation__link' href='#'>
							{label}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
