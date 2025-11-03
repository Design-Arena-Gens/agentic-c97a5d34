import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

  const product = {
    name: "Godrej aer Spray",
    description: "Room Freshener for Home & Office - Musk After Smoke (220 ml)",
    features: "Long-Lasting Fragrance",
    hsn8: "3307 4900",
    hsn10: "3307 49 00 90",
    category: "Air Fresheners & Deodorisers",
    chapter: "Chapter 33 - Essential oils and resinoids; perfumery, cosmetic or toilet preparations"
  };

  return (
    <>
      <Head>
        <title>HSN Code Finder - Godrej aer Spray</title>
        <meta name="description" content="Find HSN codes for Godrej aer Spray Room Freshener" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header>
          <h1>🔍 HSN Code Finder</h1>
          <p className="subtitle">Product Classification & Tax Codes</p>
        </header>

        <main>
          <div className="product-card">
            <div className="product-icon">🌸</div>
            <h2>{product.name}</h2>
            <p className="product-desc">{product.description}</p>
            <div className="feature-badge">{product.features}</div>
          </div>

          <div className="hsn-results">
            <div className="hsn-card primary">
              <div className="hsn-label">8-Digit HSN Code</div>
              <div className="hsn-code">{product.hsn8}</div>
              <div className="hsn-info">Standard Classification</div>
            </div>

            <div className="hsn-card primary">
              <div className="hsn-label">10-Digit HSN Code</div>
              <div className="hsn-code">{product.hsn10}</div>
              <div className="hsn-info">Detailed Classification</div>
            </div>
          </div>

          <button
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? '▲ Hide Details' : '▼ Show Classification Details'}
          </button>

          {showDetails && (
            <div className="details-panel">
              <div className="detail-item">
                <strong>Product Category:</strong>
                <span>{product.category}</span>
              </div>
              <div className="detail-item">
                <strong>HSN Chapter:</strong>
                <span>{product.chapter}</span>
              </div>
              <div className="detail-item">
                <strong>Code Breakdown:</strong>
                <ul>
                  <li><strong>33</strong> - Chapter (Essential oils, perfumery, cosmetics)</li>
                  <li><strong>07</strong> - Heading (Pre-shave, shaving, after-shave preparations, personal deodorants, bath preparations, depilatories)</li>
                  <li><strong>49</strong> - Sub-heading (Other preparations)</li>
                  <li><strong>00</strong> - Further classification</li>
                  <li><strong>90</strong> - Detailed classification (Other)</li>
                </ul>
              </div>
              <div className="detail-item">
                <strong>Usage:</strong>
                <span>For GST filing, invoicing, and customs documentation in India</span>
              </div>
            </div>
          )}

          <div className="info-box">
            <h3>📋 About HSN Codes</h3>
            <p>
              HSN (Harmonized System of Nomenclature) codes are internationally standardized
              product classification codes used for taxation and customs purposes. In India,
              8-digit codes are commonly used for GST, while 10-digit codes provide more
              detailed classification.
            </p>
          </div>
        </main>

        <footer>
          <p>HSN Code Classification System • For Reference Only</p>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        header {
          text-align: center;
          color: white;
          margin-bottom: 40px;
          padding-top: 20px;
        }

        h1 {
          font-size: 3rem;
          margin: 0;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.95;
          margin-top: 10px;
        }

        main {
          max-width: 900px;
          margin: 0 auto;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .product-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .product-card h2 {
          color: #333;
          margin: 0 0 15px 0;
          font-size: 2rem;
        }

        .product-desc {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .feature-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 25px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .hsn-results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .hsn-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .hsn-card:hover {
          transform: translateY(-5px);
        }

        .hsn-card.primary {
          border-top: 5px solid #667eea;
        }

        .hsn-label {
          color: #888;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .hsn-code {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 10px;
          font-family: 'Courier New', monospace;
          letter-spacing: 2px;
        }

        .hsn-info {
          color: #666;
          font-size: 0.95rem;
        }

        .details-btn {
          width: 100%;
          background: white;
          border: none;
          border-radius: 10px;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
          color: #667eea;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }

        .details-btn:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .details-panel {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .detail-item {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }

        .detail-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .detail-item strong {
          display: block;
          color: #667eea;
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .detail-item span {
          color: #333;
          font-size: 1rem;
          line-height: 1.6;
        }

        .detail-item ul {
          margin: 10px 0 0 0;
          padding-left: 20px;
        }

        .detail-item li {
          color: #333;
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .info-box {
          background: rgba(255,255,255,0.95);
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .info-box h3 {
          color: #667eea;
          margin: 0 0 15px 0;
          font-size: 1.5rem;
        }

        .info-box p {
          color: #333;
          line-height: 1.8;
          margin: 0;
          font-size: 1rem;
        }

        footer {
          text-align: center;
          color: white;
          padding: 30px 0;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .product-card {
            padding: 25px;
          }

          .hsn-code {
            font-size: 2rem;
          }

          .hsn-results {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
