<template>
  <div class="PageFooter">
    <footer class="footer">
      <div class="content container is-fluid">
        <div class="columns">

          <div class="column is-2 links">
            <p>Features</p>
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
            <p>Solutions</p>
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
            <p>Documentation</p>
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
            <p>Support</p>
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
            <p>Comapny</p>
            <div class="columns is-mobile">
              <div class="column">
                <ul>
                  <li>About</li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column is-2 links">Follow Us At</div>
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
    .content ul {
      margin-left: 0px;
    }
  }
}
</style>
