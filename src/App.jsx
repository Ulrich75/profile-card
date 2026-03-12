import ProductCard from './ProductCard'
import Headers from './Header'
import Footer from './Footer'


function App() {


  return (
    <main>
      <Headers />
      <ProductCard name="Tablette" price={12000} emoji='💻' description='Neuf et Slim'/>
      <ProductCard name="MacBook Pro" price={20000}  description='Neuf et Slim' emoji='💻' />
      <ProductCard name="iPhone 17" price={20000}  emoji="📱" />
      <Footer />

    </main>
  )
}

export default App
