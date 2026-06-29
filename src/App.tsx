import { AppHeader } from '@/components/AppHeader'
import { HomeHero } from '@/components/HomeHero'
import { ProductViewer } from '@/components/ProductViewer'

function App() {
	return (
		<>
			<AppHeader />
			<main>
				<HomeHero />
				<ProductViewer />
			</main>
		</>
	)
}

export default App
