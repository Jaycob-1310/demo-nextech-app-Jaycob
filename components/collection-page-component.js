export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');

    return {
      itemsStore,
    };
  },
  template: /* html */ `
    <section class="page-shell">
      <div class="hero-panel compact">
        <div class="d-flex flex-wrap justify-content-between align-items-start gap-3">
          <div>
            <span class="accent-pill"><i class="bi bi-card-list"></i>Species collection</span>
            <h1 class="display-6 fw-bold mb-2">Browse ancient life forms</h1>
            <p class="text-muted mb-0">
              Each card offers a quick preview of a species and opens a fuller detail view when you are ready.
            </p>
          </div>
          <div class="stats-pill">
            <i class="bi bi-collection"></i>{{ itemsStore.items.length }} species shown
          </div>
        </div>
      </div>

      <div class="page-section">
        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading items...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
          No items found in the dataset.
        </div>

        <div v-else class="row g-4">
          <div class="col-12 col-md-6 col-lg-4" v-for="item in itemsStore.items" :key="item.id">
            <article class="collection-card h-100">
              <img
                v-if="item.imageUrl"
                :src="item.imageUrl"
                :alt="item.name"
                class="collection-card-image" />
              <div
                v-else
                class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
                No image available
              </div>

              <div class="card-body p-3 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
                  <h2 class="h5 card-title mb-0">{{ item.name }}</h2>
                  <span class="badge text-bg-primary">{{ item.category || 'General' }}</span>
                </div>

                <p class="card-text text-muted flex-grow-1 collection-description">
                  {{ item.description || 'No description available.' }}
                </p>

                <p class="small mb-1"><strong>When:</strong> {{ item.period || 'Unknown' }}</p>
                <p class="small mb-3"><strong>Location:</strong> {{ item.location || 'N/A' }}</p>

                <div class="d-grid">
                  <router-link :to="'/items/' + item.id" class="btn btn-outline-primary btn-sm">
                    View details
                  </router-link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
};
