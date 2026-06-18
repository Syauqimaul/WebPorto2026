import { Eye, Plus } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Import project images
import gudangkuImg from '../assets/img/projects/new/dashboad_gudangku.png';
import wicaraImg from '../assets/img/projects/new/login_wicara.png';
import wargalinkImg from '../assets/img/projects/new/wargalink.png';

const projectImages = {
  'dashboad_gudangku.png': gudangkuImg,
  'login_wicara.png': wicaraImg,
  'wargalink.png': wargalinkImg,
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label reveal">Projects</span>
        <h2 className="section-title reveal reveal-delay-1">Proyek yang sudah saya buat</h2>
        <p className="section-desc reveal reveal-delay-2">
          Koleksi proyek web development yang menunjukkan kemampuan dan kreativitas saya.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article
              className={`project-card reveal${idx > 0 ? ` reveal-delay-${idx}` : ''}`}
              key={project.id}
            >
              <div className="project-card-image">
                <img
                  src={projectImages[project.image]}
                  alt={`Screenshot ${project.title}`}
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="btn-view-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`view-project-${project.id}`}
                >
                  <Eye size={16} />
                  View Project
                </a>
              </div>
            </article>
          ))}

          {/* Coming Soon Card */}
          <div className="project-card coming-soon reveal reveal-delay-3">
            <div className="coming-soon-content">
              <div className="icon-box shimmer">
                <Plus size={28} />
              </div>
              <h3>Coming Soon</h3>
              <p>Proyek Data Analytics sedang dalam pengembangan. Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
