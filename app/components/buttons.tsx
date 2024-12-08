interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ text, variant = 'primary' }) => {
    const buttonClasses =
      variant === 'primary'
        ? 'bg-primary text-white hover:bg-secondary'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
    return (
      <button className={`px-6 py-2 rounded ${buttonClasses} transition`}>
        {text}
      </button>
    );
  };
  
  export default Button;
  