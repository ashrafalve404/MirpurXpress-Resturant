'use client';

export default function Loading() {
  return (
    <div className="loading-container">
      <style jsx>{`
        .loading-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #ffb400;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loading-text {
          margin-top: 20px;
          font-family: 'Hind Siliguri', sans-serif;
          color: #333;
          font-size: 16px;
        }
      `}</style>
      <div className="spinner"></div>
      <p className="loading-text">লোড হচ্ছে...</p>
    </div>
  );
}
