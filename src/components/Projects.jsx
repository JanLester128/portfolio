import { useState, useEffect, useCallback, useRef } from 'react';
import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const thumbRefs = useRef({});

  const filteredProjects =
    activeCategory === 'all'
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === activeCategory);

  const openLightbox = (project, imgIndex = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(imgIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = useCallback(() => {
    if (!selectedProject || !selectedProject.images) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject || !selectedProject.images) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      nextImage();
    } else if (diff < -40) {
      prevImage();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, nextImage, prevImage]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (selectedProject && thumbRefs.current[activeImageIndex]) {
      thumbRefs.current[activeImageIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeImageIndex, selectedProject]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Creative Portfolio</span>
            <h2 className="section-title">Featured Works & Outputs</h2>
            <p className="section-subtitle">
              Explore my collection of web systems, posting layout designs, business cards,
              posters, and graphic deliverables.
            </p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn>
          <div className="portfolio-filters" role="tablist" aria-label="Portfolio categories">
            {portfolio.categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? portfolio.projects.length
                  : portfolio.projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const isVideo = Boolean(project.video || project.mediaType === 'video');
            const hasMultipleImages = project.images && project.images.length > 1;
            const coverImage = project.images && project.images[0] ? project.images[0].src : '';

            return (
              <FadeIn key={project.id}>
                <article
                  className={`project-card ${isVideo ? 'project-card-video' : ''}`}
                  onClick={() => openLightbox(project, 0)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(project, 0);
                    }
                  }}
                  aria-label={`View ${project.title}`}
                >
                  <div className="project-image-container">
                    {isVideo ? (
                      <div className="project-video-thumb-wrap">
                        <video
                          src={`${project.video}#t=0.001`}
                          className="project-cover-video"
                          preload="metadata"
                          muted
                          playsInline
                        />
                        <div className="project-video-play-btn" aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={coverImage}
                        alt={project.title}
                        className="project-cover-img"
                        loading="lazy"
                      />
                    )}

                    <div className="project-image-overlay">
                      <span className="view-badge">
                        {isVideo ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Watch Video
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              <line x1="11" y1="8" x2="11" y2="14" />
                              <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                            View Full Output
                          </>
                        )}
                      </span>
                    </div>

                    {isVideo && (
                      <span className="multi-img-badge video-badge">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Video Edit
                      </span>
                    )}

                    {!isVideo && hasMultipleImages && (
                      <span className="multi-img-badge">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        {project.images.length} Views
                      </span>
                    )}
                  </div>

                  <div className="project-body">
                    <div className="project-category-tag">{project.categoryLabel}</div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <div className="project-action-row">
                      <span className="view-detail-link">
                        {isVideo ? 'Play Video \u2192' : 'Preview Details \u2192'}
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <div
              className={`lightbox-container ${
                selectedProject.video ? 'lightbox-container-video' : ''
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close preview"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="lightbox-content">
                <div
                  className="lightbox-media-wrapper"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      playsInline
                      className="lightbox-video"
                    />
                  ) : (
                    selectedProject.images &&
                    selectedProject.images[activeImageIndex] && (
                      <img
                        src={selectedProject.images[activeImageIndex].src}
                        alt={
                          selectedProject.images[activeImageIndex].caption ||
                          selectedProject.title
                        }
                        className="lightbox-img"
                      />
                    )
                  )}

                  {!selectedProject.video &&
                    selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="lightbox-nav-btn prev"
                          onClick={prevImage}
                          aria-label="Previous image"
                        >
                          &#10094;
                        </button>
                        <button
                          type="button"
                          className="lightbox-nav-btn next"
                          onClick={nextImage}
                          aria-label="Next image"
                        >
                          &#10095;
                        </button>
                      </>
                    )}
                </div>

                {/* Thumbnails if multiple images */}
                {!selectedProject.video &&
                  selectedProject.images &&
                  selectedProject.images.length > 1 && (
                    <div className="lightbox-thumbnails">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={img.src}
                          ref={(el) => (thumbRefs.current[idx] = el)}
                          type="button"
                          className={`lightbox-thumb-btn ${
                            activeImageIndex === idx ? 'active' : ''
                          }`}
                          onClick={() => setActiveImageIndex(idx)}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <img src={img.src} alt="" />
                        </button>
                      ))}
                    </div>
                  )}

                {/* Modal Footer / Information */}
                <div className="lightbox-info">
                  <div className="lightbox-header-row">
                    <span className="project-category-tag">
                      {selectedProject.categoryLabel}
                    </span>
                    {!selectedProject.video &&
                      selectedProject.images &&
                      selectedProject.images.length > 1 && (
                        <span className="lightbox-counter">
                          {activeImageIndex + 1} of {selectedProject.images.length}
                        </span>
                      )}
                    {selectedProject.video && (
                      <span className="lightbox-counter video-pill-counter">
                        HD Video
                      </span>
                    )}
                  </div>
                  <h3 className="lightbox-title">{selectedProject.title}</h3>
                  {selectedProject.images &&
                    selectedProject.images[activeImageIndex] &&
                    selectedProject.images[activeImageIndex].caption && (
                      <p className="lightbox-caption">
                        {selectedProject.images[activeImageIndex].caption}
                      </p>
                    )}
                  {selectedProject.description && (
                    <p className="lightbox-desc">{selectedProject.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
