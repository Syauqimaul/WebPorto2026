import * as LucideIcons from 'lucide-react';
import { aboutHighlights } from '../data/portfolioData';
import profileImg from '../assets/img/profile.jpg';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <img
              src={profileImg}
              alt="Foto profil Muhammad"
              className="about-image"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <span className="section-label reveal">About Me</span>
            <h2 className="section-title reveal reveal-delay-1">
              Berkenalan dengan saya
            </h2>
            <p className="reveal reveal-delay-2">
              Halo! Saya Muhammad, mahasiswa D4 yang memiliki passion di bidang{' '}
              <strong>Web Development</strong> dan <strong>Data Analytics</strong>.
              Saya percaya bahwa kombinasi antara kemampuan membangun antarmuka digital
              dan mengolah data adalah kekuatan yang powerful di era modern.
            </p>
            <p className="reveal reveal-delay-3">
              Saat ini, saya fokus mengembangkan skill frontend development dengan HTML, CSS,
              dan JavaScript, sambil mendalami data analytics melalui sertifikasi dan kursus online.
              Saya sedang mencari kesempatan magang untuk mengaplikasikan pengetahuan dan terus belajar
              dari profesional di industri.
            </p>

            <div className="about-highlights reveal reveal-delay-4">
              {aboutHighlights.map((item) => {
                const Icon = LucideIcons[item.icon];
                return (
                  <div className="about-highlight" key={item.title}>
                    <div className="icon-box">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
