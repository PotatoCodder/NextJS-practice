// app/page.tsx
import Card from './components/Store';
import cardData from './store-data/storeData.json';

export const metadata = {
  title: 'Home | Store',
  description: 'Our store page',
};



export default function HomePage() {
  return (
    <div id='store' className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1 className="text-2xl font-bold text-center mt-4">Our Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
