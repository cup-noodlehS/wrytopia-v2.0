<template>
  <div
    class="modal fade"
    id="modalWrite"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            WRITE ME AN OUTLINE
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          An outline is not merely a roadmap for your story; it's the backbone
          that shapes your narrative and propels it forward. It’s not just a
          tool for writers; it's a strategy for successfully passing the review
          process of the editors. So, before you embark on your next writing
          journey, remember that a well-defined outline is your most potent
          ally. <br /><br />Uncertain about where to begin with your outline?
          Join forces with our experts!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="form-btn">
            LEZGAWWW
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalRevise"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            REVISE ME AN OUTLINE
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Revising the outline of your story may initially seem like a tiring
          task, but it is a critical step on the path to writing success,
          especially when aiming to get your story get your desired contract on
          online writing platforms. A well-revised outline ensures that your
          narrative is finely tuned, with a clear structure, engaging plot
          points, and well-developed characters.<br /><br />Tired from revising
          your outline? Collaborate with us!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="form-btn">
            LEZGAWWW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverModals",
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/variables.scss";

#form-btn {
  font-family: clashDisplayMedium !important;
  border-radius: 30px;
  border-width: 2px !important;
  border-color: $accent !important;
  transition: all 0.6s ease !important;
  color: $accent !important;
  background-color: $accent;
  color: $white !important;

  &:hover {
    color: $accent !important;
    background-color: $white;
    border-color: $accent !important;
  }
}
.modal-body {
  color: $gray !important;
}
</style>
