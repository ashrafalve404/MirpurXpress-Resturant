'use client';

export default function Error({ error, reset }) {
  return (
    <div className="error-container">
      <style jsx>{`
        .error-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
          padding: 20px;
          text-align: center;
        }
        .error-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        .error-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }
        .error-message {
          font-family: 'Hind Siliguri', sans-serif;
          color: #666;
          margin-bottom: 30px;
          max-width: 500px;
        }
        .retry-button {
          background: #ffb400;
          color: #000;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .retry-button:hover {
          background: #e6a200;
          transform: translateY(-2px);
        }
      `}</style>
      <div className="error-icon">😕</div>
      <h2 className="error-title">Something went wrong!</h2>
      <p className="error-message">
        আমরা দুঃখিত, কিছু ভুল হয়েছে। กรุณা পুনরায় চেষ্টা করুন।
      </p>
      <button className="retry-button" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
