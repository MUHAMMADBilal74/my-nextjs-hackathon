'use client'; // Ensure the component is a client-side component

const ProductCard = ({ product }) => {
  // Event handler functions
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = '#FF4500';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = '#FF6347';
  };

  return (
    <div
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        padding: '1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '500px', // Ensure uniform card size
        boxSizing: 'border-box',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          maxHeight: '200px',
          objectFit: 'cover',
        }}
      />
      <h2
        style={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#333',
          minHeight: '50px',
          textTransform: 'capitalize',
          letterSpacing: '0.5px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {product.title}
      </h2>
      <p
        style={{
          marginTop: '0.5rem',
          color: '#777',
          fontSize: '1rem',
          fontStyle: 'italic',
          lineHeight: '1.6',
          height: '60px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}
      >
        {product.description}
      </p>
      <p
        style={{
          marginTop: '0.5rem',
          fontWeight: 'bold',
          color: '#FF6347',
          fontSize: '1.125rem',
          textAlign: 'center',
          letterSpacing: '0.5px',
        }}
      >
        {product.price}
      </p>
      <div
        style={{
          marginTop: 'auto',
        }}
      >
        <button
          style={{
            backgroundColor: '#FF6347',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem',
            width: '100%',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
