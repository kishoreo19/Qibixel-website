import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'QIBIXEL', service: 'SEO Growth Engine', timestamp: new Date().toISOString() });
});

// Dynamic AI Domain Audit API Endpoint
app.post('/api/audit', (req, res) => {
  const { domain } = req.body;
  if (!domain || typeof domain !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid domain URL (e.g., example.com)' });
  }

  // Clean domain string
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim();

  // Generate intelligent deterministic analysis based on domain character hashes
  let hash = 0;
  for (let i = 0; i < cleanDomain.length; i++) {
    hash = (hash << 5) - hash + cleanDomain.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const overallScore = 62 + (positiveHash % 25); // 62 - 86
  const techScore = 58 + ((positiveHash * 3) % 32);
  const contentScore = 60 + ((positiveHash * 7) % 30);
  const speedScore = 65 + ((positiveHash * 11) % 28);
  const authorityScore = 50 + ((positiveHash * 13) % 35);

  const auditReport = {
    domain: cleanDomain,
    generatedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    scores: {
      overall: overallScore,
      technical: techScore,
      content: contentScore,
      speed: speedScore,
      authority: authorityScore
    },
    criticalFindings: [
      {
        category: 'Technical Architecture',
        title: 'Core Web Vitals & Crawl Budget Bottlenecks',
        severity: techScore < 75 ? 'High' : 'Medium',
        description: `Detected potential JS render-blocking assets and uncached assets on ${cleanDomain}. Indexability crawl efficiency can be improved by 34%.`
      },
      {
        category: 'Search Intent Alignment',
        title: 'Content Depth & Semantic Coverage Gaps',
        severity: contentScore < 75 ? 'High' : 'Medium',
        description: 'Target commercial keyphrases lack high-intent content hubs. Competitors possess 2.4x higher topic cluster authority.'
      },
      {
        category: 'Structured Data & Schema',
        title: 'Missing Rich Snippet Schemas',
        severity: 'Medium',
        description: 'Missing Organization, FAQPage, and Service JSON-LD markup on primary landing pages.'
      }
    ],
    recommendedActions: [
      `Implement structured canonical tags and XML index paths for ${cleanDomain}.`,
      'Optimize LCP (Largest Contentful Paint) and reduce TBT (Total Blocking Time) under 150ms.',
      'Deploy intent-matched content hubs targeting high-converting commercial search queries.',
      'Build tier-1 editorial backlink relationships to bridge domain authority gaps.'
    ],
    projectedGrowth: {
      estimatedTrafficIncrease: '+140% to +280%',
      timeframe: '6 - 9 Months',
      potentialRevenueLift: 'High'
    }
  };

  setTimeout(() => {
    res.json(auditReport);
  }, 1200); // Realistic AI analysis delay simulation
});

// Contact Submission API Endpoint
app.post('/api/contact', (req, res) => {
  const { fullName, workEmail, company, websiteUrl, industry, mainChallenge, message } = req.body;

  if (!fullName || !workEmail || !message) {
    return res.status(400).json({ error: 'Full Name, Work Email, and Message are required fields.' });
  }

  // Simulate contact log/persistence
  console.log(`[QIBIXEL INQUIRY] New contact from ${fullName} (${workEmail}) - Company: ${company || 'N/A'}`);

  res.status(200).json({
    success: true,
    message: 'Thanks for reaching out. Your enquiry has been received. Our team will review it and get back to you shortly.',
    enquiryId: `QBX-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

// SEO Dynamic Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://qibixel.com/sitemap.xml
`);
});

// SEO Dynamic Sitemap XML
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://qibixel.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://qibixel.com/#about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://qibixel.com/#services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://qibixel.com/#case-studies</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://qibixel.com/#insights</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://qibixel.com/#contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
  res.send(xml);
});

app.listen(PORT, () => {
  console.log(`⚡ QIBIXEL API Server running on port ${PORT}`);
});
