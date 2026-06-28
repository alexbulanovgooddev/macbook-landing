import type { FC } from 'react'
import { headerNavigationLinks } from '~/constants'

export const AppHeaderNavigation: FC = () => {
	return (
		<nav className='app-header-navigation'>
			<ul className='app-header-navigation__list'>
				{headerNavigationLinks.map(({ label }) => (
					<li className='app-header-navigation__item' key={label}>
						<a className='app-header-navigation__link' href='#'>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
