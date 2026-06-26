export default {
  name: 'about-page-component',
  template: /* html */ `
    <section class="page-shell">
      <div class="hero-panel compact">
        <div class="row g-4">
          <div class="col-lg-8">
            <span class="accent-pill"><i class="bi bi-book"></i>About this project</span>
            <h1 class="display-6 fw-bold mb-3">A calm, easy way to learn about extinct life</h1>
            <p class="lead mb-3">
              This app was built to help Ethan explore prehistoric animals and plants through clear, simple information.
            </p>
            <p class="mb-0 text-muted">
              The goal is to keep each page focused and inviting, so learning feels natural rather than overwhelming.
            </p>
          </div>

          <div class="col-lg-4">
            <div class="page-card">
              <h2 class="h6">How the app helps</h2>
              <ul class="feature-list mt-3">
                <li><i class="bi bi-check-circle-fill"></i>Shows a curated collection of extinct species</li>
                <li><i class="bi bi-check-circle-fill"></i>Highlights when and where each one lived</li>
                <li><i class="bi bi-check-circle-fill"></i>Provides a detail page for deeper learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section">
        <div class="row g-4">
          <div class="col-lg-7">
            <article class="page-card">
              <h2 class="h5">Why the layout was updated</h2>
              <p class="text-muted mb-3">
                The updated design gives every page a stronger structure with a welcoming intro, clear sections, and more room for the content to breathe.
              </p>
              <p class="mb-0 text-muted">
                The result is a simple experience that feels organized and easier to follow from the home page to the detail page.
              </p>
            </article>
          </div>

          <div class="col-lg-5">
            <article class="page-card">
              <h2 class="h5">What you can expect</h2>
              <ul class="feature-list mt-3">
                <li><i class="bi bi-arrow-right-circle-fill"></i>Simple navigation between pages</li>
                <li><i class="bi bi-arrow-right-circle-fill"></i>Cards that present species at a glance</li>
                <li><i class="bi bi-arrow-right-circle-fill"></i>Clearer detail sections for deeper facts</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
};
