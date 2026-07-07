import { ShoppingCart } from 'lucide-react'

function App() {
    return (
        <div className="flex items-center gap-2 text-blue-600">
            <ShoppingCart size={24} />
            <h1 className="text-3xl font-bold underline">Tailwind + Lucide working!</h1>
        </div>
    )
}

export default App