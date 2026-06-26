export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="page-shell">
      <div class="hero-panel">
        <div class="row g-4 align-items-center">
          <div class="col-lg-7">
            <span class="accent-pill"><i class="bi bi-compass"></i>Prehistoric learning guide</span>
            <h1 class="display-5 fw-bold mb-3">Journey through the extinct world</h1>
            <p class="lead mb-4">
              Explore animals and plants that lived long ago and learn why, what, when, where, and how they survived in their time.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <router-link to="/items" class="btn btn-primary">
                <i class="bi bi-list-check me-1"></i>Explore species
              </router-link>
              <router-link to="/about" class="btn btn-outline-primary">
                <i class="bi bi-info-circle me-1"></i>Learn about the app
              </router-link>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-card">
              <img
                src="https://picsum.photos/seed/extinct-guide/900/650"
                alt="Illustration of prehistoric life"
                class="hero-image" />
              <div class="hero-card-body">
                <h2 class="h5 mb-2">What this guide covers</h2>
                <ul class="feature-list">
                  <li><i class="bi bi-check-circle-fill"></i>Who the species were and what made them unique</li>
                  <li><i class="bi bi-check-circle-fill"></i>Where they lived and when they existed</li>
                  <li><i class="bi bi-check-circle-fill"></i>How they survived and why they disappeared</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section">
        <div class="section-heading">
          <h2>Discover in three simple steps</h2>
          <p class="text-muted mb-0">Each page is designed to make the facts easy to scan and explore.</p>
        </div>

        <div class="row g-3">
          <div class="col-md-4">
            <article class="page-card">
              <h3 class="h6">Browse the collection</h3>
              <p class="mb-0 text-muted">Start with short previews of each extinct species and pick one that interests you.</p>
            </article>
          </div>
          <div class="col-md-4">
            <article class="page-card">
              <h3 class="h6">Open the detail view</h3>
              <p class="mb-0 text-muted">Read a richer set of facts about where the species lived and how it survived.</p>
            </article>
          </div>
          <div class="col-md-4">
            <article class="page-card">
              <h3 class="h6">Keep learning</h3>
              <p class="mb-0 text-muted">Use the simple navigation to move between home, species, and the app overview.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
};
