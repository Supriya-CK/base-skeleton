<template>
  <div class="PageFooter">
    <footer class="footer">
      <div class="content container is-fluid">
        <div class="columns">

          <div class="column is-2 links">
            <p class="headings">Features</p>
            <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>Chat & Messaging</li>
                  <li>Moderation & Data</li>
                </ul>
              </div>
            </div>
          </div>


          <div class="column is-2 links">
            <p class="headings">Solutions</p>
             <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>Social Media</li>
                  <li>Gmaing</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column is-2 links">
            <p class="headings">Documentation</p>
            <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>Unity SDK</li>
                  <li>Platform API</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column is-2 links">
            <p class="headings">Support</p>
            <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>Help Center</li>
                  <li>Conatct US</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column is-2 links">
            <p class="headings">Comapny</p>
            <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>About Us</li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column is-2 links">
             <p class="headings">Follow Us At</p>
            <div class="columns is-mobile">
              <div class="column social-links">
                <ul>
                  <li>
                    <figure class="image is-32x32">
                      <img src="./../assets/img/footer-fb.png">
                    </figure>
                  </li>
                  <li>
                    <figure class="image is-32x32">
                      <img src="./../assets/img/footer-TT.png">
                    </figure>
                  </li>
                  <li>
                    <figure class="image is-32x32">
                      <img src="./../assets/img/footer-lI.png">
                    </figure>
                  </li>
                  <li>
                    <figure class="image is-32x32">
                      <img src="./../assets/img/footer-gH.png">
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.PageFooter{
  position: relative;
  top: 150px;
  width: 100%;
  .footer {
    padding: 2rem 1.5rem 2rem;
    .content {
      ul {
        margin-left: 0px;
      }
      .headings {
        color: grey;
        margin-bottom: 0.5em;
      }
      .social-links {
        ul {
          display: flex;
          li {
            margin-top: 0.25rem;
          }
          .image.is-32x32 {
            margin: 0 0.3rem;
          }
        }
      }
    }
  }
}
</style>
