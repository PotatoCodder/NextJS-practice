// app/store/Card.tsx
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <Image src={imageUrl} alt={title} width={300} height={200} className="rounded" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
