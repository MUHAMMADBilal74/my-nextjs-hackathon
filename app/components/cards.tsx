const Card = ({ title, description }: { title: string; description: string }) => (
    <div className="rounded-lg shadow-lg p-4 bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  export default Card;
  