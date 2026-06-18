import { FolderOpen, Download } from 'lucide-react';
import { heroStats } from '../data/portfolioData';
import cvFile from '../assets/img/projects/new/CV_Muhammad_Syauqi_Maulana_Anansyah.pdf';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="pulse-dot"></span>
            Open to Internship Opportunities
          </div>

          <h1>
            Aspiring <span className="accent">Web Developer</span> &amp; Data Enthusiast
          </h1>

          <p className="hero-subtitle">
            Membangun pengalaman digital yang bersih, responsif, dan bermakna —
            sambil mengeksplorasi dunia data analytics untuk insight yang lebih baik.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <FolderOpen size={16} />
              View Projects
            </a>
            <a href={cvFile} className="btn btn-outline" download>
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
