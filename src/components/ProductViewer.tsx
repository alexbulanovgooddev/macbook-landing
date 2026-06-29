import type { FC } from 'react'
import useMacbookStore from '~/store'
import { useMediaQuery } from 'react-responsive'
import { Canvas } from '@react-three/fiber'
import { StudioLights } from './three/StudioLights'
import { ModelSwitcher } from './three/ModelSwitcher'

export const ProductViewer: FC = () => {
	const { color, scale, setColor, setScale } = useMacbookStore()
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	return (
		<section className='product-viewer'>
			<div className='container'>
				<div className='product-viewer__wrapper'>
					<h2 className='product-viewer__title'>Take a closer look.</h2>

					<div className='product-viewer__content'>
						<p className='product-viewer__info'>
							Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors
						</p>

						<div className='viewer-controls'>
							<div className='viewer-controls__wrapper'>
								<div className='viewer-controls__control color-control'>
									<button
										className={`color-control__toggle ${color === '#adb5bd' ? 'is-active' : ''}`}
										type='button'
										aria-label='Set color #adb5bd'
										onClick={() => {
											setColor('#adb5bd')
										}}></button>
									<button
										className={`color-control__toggle ${color === '#2e2c2e' ? 'is-active' : ''}`}
										type='button'
										aria-label='Set color #2e2c2e'
										onClick={() => {
											setColor('#2e2c2e')
										}}></button>
								</div>

								<div className='viewer-controls__control size-control'>
									<button
										className={`size-control__toggle ${scale === 0.06 ? 'is-active' : ''}`}
										type='button'
										aria-label='Set size 14"'
										onClick={() => {
											setScale(0.06)
										}}>
										14"
									</button>
									<button
										className={`size-control__toggle ${scale === 0.08 ? 'is-active' : ''}`}
										type='button'
										aria-label='Set size 16"'
										onClick={() => {
											setScale(0.08)
										}}>
										16"
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='product-viewer__canvas'>
						<Canvas
							id='canvas'
							camera={{
								position: [0, 2, isMobile ? 8 : 5],
								fov: 50,
								near: 0.1,
								far: 100
							}}>
							<StudioLights />
							<ModelSwitcher
								scale={isMobile ? scale - 0.03 : scale}
								isMobile={isMobile}
							/>
						</Canvas>
					</div>
				</div>
			</div>
		</section>
	)
}
