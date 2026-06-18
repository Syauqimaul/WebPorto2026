import * as LucideIcons from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <span className="section-label reveal">Skills</span>
        <h2 className="section-title reveal reveal-delay-1">Apa yang saya kuasai</h2>
        <p className="section-desc reveal reveal-delay-2">
          Skill yang terus saya kembangkan di bidang web development dan data analytics.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = LucideIcons[category.icon];
            return (
              <div
                className={`skill-category reveal${catIdx > 0 ? ` reveal-delay-${catIdx}` : ''}`}
                key={category.title}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    {CategoryIcon && <CategoryIcon size={24} />}
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.subtitle}</p>
                  </div>
                </div>
                <div className="skill-tags">
                  {category.tags.map((tag) => {
                    const TagIcon = LucideIcons[tag.icon];
                    return (
                      <span className="skill-tag" key={tag.label}>
                        {TagIcon && <TagIcon size={14} />}
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
