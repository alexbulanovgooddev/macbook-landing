import { AppHeader } from '@/components/AppHeader'
import { HomeHero } from '@/components/HomeHero'
import { ProductViewer } from '@/components/ProductViewer'
import { HomeShowcase } from '@/components/HomeShowcase'
import { HomePerformance } from '@/components/HomePerformance'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
	return (
		<>
			<AppHeader />
			<main>
				<HomeHero />
				<ProductViewer />
				<HomeShowcase />
				<HomePerformance />
			</main>
		</>
	)
}

export default App
