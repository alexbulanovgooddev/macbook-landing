import type { FC } from 'react'

export const AppFooterLogo: FC = () => {
	return (
		<div className='app-footer-logo'>
			<img
				className='app-footer-logo__image'
				src='/images/logo.svg'
				width='24'
				height='24'
				alt='Apple logo'
			/>
		</div>
	)
}
