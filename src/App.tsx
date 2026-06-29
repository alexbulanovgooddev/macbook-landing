import { AppHeader } from '@/components/AppHeader'
import { HomeHero } from '@/components/HomeHero'
import { ProductViewer } from '@/components/ProductViewer'
import { HomeShowcase } from '@/components/HomeShowcase'
import { HomePerformance } from '@/components/HomePerformance'
import { HomeFeatures } from '@/components/HomeFeatures'
import { HomeHighlights } from '@/components/HomeHighlights'

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
				<HomeFeatures />
				<HomeHighlights />
			</main>
		</>
	)
}

export default App
