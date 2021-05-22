<template>
  <div class="wrapper">
    <div class="home">
      <div class="header">
        <div class="row space">
          <img class="" src="assets/img/logo.png" alt="" />
          <button
            type="button"
            data-toggle="modal"
            data-target="#overlay"
            class="btn-add"
            v-on:click="setImgLink('assets/img/link-modal.png')"
          >
            <img src="assets/img/add.png" alt="" />
          </button>
        </div>
      </div>

      <div class="list-group" v-for="link in links" :key="link.id">
        <button class="btn-group">
          <img class="link-icon" :src="link.gambar" alt="" />
          <h3 class="" style="text-transform: uppercase">
            {{ link.nama_link }}
          </h3>
          <img
            src="assets/img/edit.svg"
            alt=""
            v-on:click="editLink(link.id)"
          />
        </button>

        <!-- <button class="btn-group">
          <img src="assets/img/tokped.svg" alt="" />
          <h3 class="">TOKOPEDIA</h3>
          <img class="edit" src="assets/img/edit.svg" alt="" />
        </button> -->
      </div>

      <div
        id="overlay"
        class="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="overlayTitle"
        aria-hidden="true"
      >
        <div class="pop-up">
          <div class="modal-action">
            <button type="button" onclick="closeModal()" class="close-btn">
              <i class="fas fa-times" style="color: white"></i>
            </button>
          </div>
          <div class="modal-fill">
            <div class="modal-icon">
              <div
                class="card-icon"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <img class="card-img" :src="imgLink" alt="" />
              </div>
            </div>
            <div class="modal-form">
              <form v-on:submit.prevent="addLink">
                <div class="grup-input">
                  <label for="linkName">Link Name</label>
                  <input
                    v-model="nama_link"
                    type="text"
                    name="link_name"
                    placeholder="Link Name"
                    id="linkName"
                  />
                </div>
                <div class="grup-input">
                  <label for="url">Url</label>
                  <input
                    v-model="url"
                    type="text"
                    name="name"
                    placeholder="#"
                    id="url"
                  />
                </div>
                <div class="grup-input">
                  <button type="submit" class="kotak-submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        id="modalEdit"
        class="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="overlayTitle"
        aria-hidden="true"
      >
        <div class="pop-up">
          <div class="modal-action">
            <button
              type="button"
              onclick="$('#modalEdit').modal('hide')"
              class="close-btn"
            >
              <i class="fas fa-times" style="color: white"></i>
            </button>
          </div>
          <div class="modal-fill">
            <div class="modal-icon">
              <div
                class="card-icon"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <img class="card-img" :src="imgLink" alt="" />
              </div>
            </div>
            <div class="modal-form">
              <form v-on:submit.prevent="submitEdit">
                <div class="grup-input">
                  <label for="linkName">Link Name</label>
                  <input
                    v-model="nama_link"
                    type="text"
                    name="link_name"
                    placeholder="Link Name"
                    id="linkName"
                  />
                </div>
                <div class="grup-input">
                  <label for="url">Url</label>
                  <input
                    v-model="url"
                    type="text"
                    name="name"
                    placeholder="#"
                    id="url"
                  />
                </div>
                <div class="grup-input">
                  <button type="submit" class="kotak-submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" onclick="tutupModal()" class="close-btn">
                <i class="fas fa-times" style="color: white"></i>
              </button>
            </div>

            <div class="align-self-center modal-body">
              <div class="text-center row">
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/wa.svg')"
                >
                  <!-- copasen ndek semuane terus link e diganti -->
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/wa.svg"
                    alt=""
                  />
                  <h5 class="name-icon">WHATSAPP</h5>
                </div>
                <div
                  class="mr-4 ml-4 select-icon"
                  v-on:click="setImgLink('assets/img/tele.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/tele.svg"
                    alt=""
                  />
                  <h5 class="name-icon">TELEGRAM</h5>
                </div>
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/line.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/line.svg"
                    alt=""
                  />
                  <h5 class="name-icon">LINE</h5>
                </div>
              </div>
              <div class="text-center mt-2 row">
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/tokoped.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/tokoped.svg"
                    alt=""
                  />
                  <h5 class="name-icon">TOKOPEDIA</h5>
                </div>
                <div
                  class="mr-4 ml-3 select-icon"
                  v-on:click="setImgLink('assets/img/bukalapak.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/bukalapak.svg"
                    alt=""
                  />
                  <h5 class="name-icon">BUKALAPAK</h5>
                </div>
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/shope.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/shope.svg"
                    alt=""
                  />
                  <h5 class="name-icon">SHOPEE</h5>
                </div>
              </div>
              <div class="text-center mt-2 row">
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/fb.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/fb.svg"
                    alt=""
                  />
                  <h5 class="name-icon">FACEBOOK</h5>
                </div>
                <div
                  class="mr-4 ml-4 select-icon"
                  v-on:click="setImgLink('assets/img/ig.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/ig.svg"
                    alt=""
                  />
                  <h5 class="name-icon">INSTAGRAM</h5>
                </div>
                <div
                  class="select-icon"
                  v-on:click="setImgLink('assets/img/twitter.svg')"
                >
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/twitter.svg"
                    alt=""
                  />
                  <h5 class="name-icon">TWITTER</h5>
                </div>
              </div>
              <div class="text-center mt-2 row">
                <div class="ml-2 select-icon">
                  <img
                    class="mb-2 icon-select"
                    src="assets/img/lain.svg"
                    alt=""
                  />
                  <h5 class="name-icon">DEFAULT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgLink: "assets/img/link-modal.png",
      nama_link: "",
      url: "",
      gambar: "",
      links: [],
      id: 0,
      id_users: "",
    };
  },
  methods: {
    setImgLink: function (link) {
      $("#exampleModalCenter").modal("hide");
      this.imgLink = link;
    },
    loadLink: function () {
      let token = localStorage.getItem("Authorization");
      axios
        .get("http://localhost:8000/api/getall", {
          headers: {
            Authorization: "Bearer" + token,
          },
        })
        .then((data) => {
          console.log(data.data);
          this.links = data.data;
        })
        .catch(console.log);
    },
    addLink: function () {
      let nama_link = this.nama_link;
      let url = this.url;
      let gambar = this.imgLink;
      let token = localStorage.getItem("Authorization");
      axios
        .post(
          "http://localhost:8000/api/insert",
          { nama_link, url, gambar },
          { headers: { Authorization: "Bearer" + token } }
        )
        .then(() => {
          this.loadLink();
          $("#overlay").modal("hide");
        })
        .catch(console.log);
    },
    editLink: function (id) {
      let token = localStorage.getItem("Authorization");
      axios
        .get("http://localhost:8000/api/link/" + id, {
          headers: { Authorization: "Bearer" + token },
        })
        .then(({ data }) => {
          let link = data[0];
          this.nama_link = link.nama_link;
          this.url = link.url;
          this.imgLink = link.gambar;
          this.id = link.id;
          $("#modalEdit").modal("show");
        })
        .catch(console.log);
    },
    submitEdit: function () {
      let token = localStorage.getItem("Authorization");
      let nama_link = this.nama_link;
      let url = this.url;
      let gambar = this.imgLink;
      let id = this.id;
      axios
        .put(
          "http://localhost:8000/api/edit/" + id,
          { nama_link, url, gambar },
          {
            headers: { Authorization: "Bearer" + token },
          }
        )
        .then(() => {
          this.loadLink();
          $("#modalEdit").modal("hide");
        })
        .catch(console.log);
    },
  },
  mounted() {
    this.loadLink();
  },
};
</script>