import type { FC } from 'react'
import { AppFooterLogo } from './AppFooterLogo'
import { AppFooterNavigation } from './AppFooterNavigation'

export const AppFooter: FC = () => {
	return (
		<footer className='app-footer'>
			<div className='container'>
				<div className='app-footer__wrapper'>
					<div className='app-footer__info'>
						More ways to shop: Find an Apple Store or other retailer near you.
						Or call 000800 040 1966.
					</div>
					<div className='app-footer__logo'>
						<AppFooterLogo />
					</div>
				</div>

				<hr />

				<div className='app-footer__navigation'>
					<div className='app-footer__copyright'>
						Copyright © 2024 Apple Inc. All rights reserved.
					</div>
					<AppFooterNavigation />
				</div>
			</div>
		</footer>
	)
}
