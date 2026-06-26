export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top">
      <div class="container-fluid px-3 px-md-4">
        <router-link class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <i class="bi bi-flower3"></i>
          <span>Extinct Species Guide</span>
        </router-link>

        <div class="ms-auto d-flex flex-wrap gap-2">
          <router-link class="nav-pill" to="/">
            <i class="bi bi-house me-1"></i>Home
          </router-link>
          <router-link class="nav-pill" to="/items">
            <i class="bi bi-card-list me-1"></i>Species
          </router-link>
          <router-link class="nav-pill" to="/about">
            <i class="bi bi-info-circle me-1"></i>About
          </router-link>
        </div>
      </div>
    </nav>
  `,
};
