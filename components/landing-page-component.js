export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">Extinct Species Guide</h1>
      <p class="lead">Explore animals and plants that lived long ago, and learn why, what, when, where, and how they lived in their time.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-list-check me-1"></i>Explore the Species Collection</router-link>

      <h2 class="h4 mt-3">App Description</h2>
      <p>
        This app helps Ethan browse a set of extinct species and see details for each one. The collection page shows a short description for every species, and the detail page explains how it lived and where it once belonged in the world.
      </p>
      <p>
        The idea is to keep the app simple and easy to use while focusing on clear topics like species name, habitat, and the reason they are remembered today.
      </p>
    </div>
  `,
};
