import type { FC } from 'react'
import { AppHeaderLogo } from '@components/AppHeaderLogo'
import { AppHeaderNavigation } from '@components/AppHeaderNavigation'
import { AppHeaderActions } from './AppHeaderActions'

export const AppHeader: FC = () => {
	return (
		<header className='app-header'>
			<div className='container'>
				<div className='app-header__wrapper'>
					<div className='app-header__logo'>
						<AppHeaderLogo />
					</div>

					<div className='app-header__navigation'>
						<AppHeaderNavigation />
					</div>

					<div className='app-header__actions'>
						<AppHeaderActions />
					</div>
				</div>
			</div>
		</header>
	)
}
