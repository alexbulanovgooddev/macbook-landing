import type { FC } from 'react'

export const AppHeaderLogo: FC = () => {
	return (
		<div className='app-header-logo'>
			<img
				className='app-header-logo__image'
				src='/images/logo.svg'
				width='24'
				height='24'
				alt='Apple logo'
			/>
		</div>
	)
}
