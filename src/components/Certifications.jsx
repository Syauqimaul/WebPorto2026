import { ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

// Import cert PDFs
import ciscoPdf from '../assets/img/projects/new/cisco_sertifikat.pdf';
import mysqlPdf from '../assets/img/projects/new/MYSQLCertificate.pdf';
import dbDesignPdf from '../assets/img/projects/new/DatabaseDesignCertificate.pdf';

const certFiles = {
  'cisco_sertifikat.pdf': ciscoPdf,
  'MYSQLCertificate.pdf': mysqlPdf,
  'DatabaseDesignCertificate.pdf': dbDesignPdf,
};

export default function Certifications() {
  return (
    <section className="section" id="certifications" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <span className="section-label reveal">Certifications</span>
        <h2 className="section-title reveal reveal-delay-1">Sertifikasi</h2>
        <p className="section-desc reveal reveal-delay-2">
          Berikut adalah sertifikat-sertifikat yang saya miliki.
        </p>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div
              className={`cert-card reveal${idx > 0 ? ` reveal-delay-${idx}` : ''}`}
              key={cert.title}
            >
              <div className="cert-logo">{cert.logo}</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
                <a
                  href={certFiles[cert.credentialFile]}
                  className="cert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={12} />
                  Lihat Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
