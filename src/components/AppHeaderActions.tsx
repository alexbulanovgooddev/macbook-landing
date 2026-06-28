import type { FC } from 'react'

export const AppHeaderActions: FC = () => {
	return (
		<div className='app-header-actions'>
			<div className='app-header-actions__wrapper'>
				<button className='app-header-actions__button'>
					<img src='/images/search.svg' width='24' height='24' alt='Search' />
				</button>
				<button className='app-header-actions__button'>
					<img src='/images/cart.svg' width='24' height='24' alt='Cart' />
				</button>
			</div>
		</div>
	)
}
