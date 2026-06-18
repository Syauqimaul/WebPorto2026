import { Mail } from 'lucide-react';
import { contactLinks } from '../data/portfolioData';

// Import contact logos
import instagramLogo from '../assets/img/projects/new/Instagram Logo.jpg';
import linkedinLogo from '../assets/img/projects/new/linkedinn.jpg';
import githubLogo from '../assets/img/projects/new/github.jpg';

const logoImages = {
  'Instagram Logo.jpg': instagramLogo,
  'linkedinn.jpg': linkedinLogo,
  'github.jpg': githubLogo,
};

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="contact-info">
            <span className="section-label reveal">Contact</span>
            <h2 className="section-title reveal reveal-delay-1">Mari terhubung</h2>
            <p className="reveal reveal-delay-2"></p>

            <div className="contact-links">
              {contactLinks.map((link, idx) => {
                const isExternal = link.type !== 'email';
                return (
                  <a
                    key={link.type}
                    href={link.href}
                    className={`contact-link reveal reveal-delay-${idx + 3}`}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <div className="link-icon">
                      {link.icon === 'Mail' ? (
                        <Mail size={20} />
                      ) : (
                        <img
                          src={logoImages[link.logo]}
                          alt={link.label}
                          width={20}
                          height={20}
                          className="contact-logo"
                        />
                      )}
                    </div>
                    <div>
                      <span className="link-label">{link.label}</span>
                      <span className="link-value">{link.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
