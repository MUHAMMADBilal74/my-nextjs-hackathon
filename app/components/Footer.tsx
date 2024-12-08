// Footer.tsx
const Footer = () => (
  <footer
    style={{
      backgroundColor: '#333', // Dark background for the footer
      color: '#fff', // Light text color for contrast
      padding: '1rem 2rem', // Padding for spacing
      textAlign: 'center',
      marginTop: '2rem',
      borderTop: '1px solid #ddd', // Subtle border to separate from content
    }}
  >
    <p
      style={{
        fontSize: '1rem',
        margin: '0',
        letterSpacing: '0.5px',
      }}
    >
      &copy; 2024 BISMILLAH. All rights reserved.
    </p>
    <div style={{ marginTop: '1rem' }}>
      <a
        href="/privacy-policy"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 1rem',
        }}
      >
        Privacy Policy
      </a>
      <a
        href="/terms-of-service"
        style={{
          color: '#fff',
          textDecoration: 'none',
          margin: '0 1rem',
        }}
      >
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;
