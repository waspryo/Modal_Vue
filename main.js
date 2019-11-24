Vue.component("my-modal", {
  template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
          <div class="box">
              <h3>
                  this is modal body
              </h3>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    `
});

new Vue({
  el: '#root',
  data:{
      showLoginModal: false
  }
});
