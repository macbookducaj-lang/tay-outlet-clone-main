async function getProducts() {
  // On appelle notre propre route API
  const res = await fetch('https://votre-site.com/api/products', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des produits');
  }
  
  return res.json();
}

export default async function Page() {
  const products = await getProducts();
  
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nos Sneakers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price} €</p>
          </div>
        ))}
      </div>
    </main>
  );
}
