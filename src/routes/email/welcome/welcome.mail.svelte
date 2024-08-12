<script lang="ts">
  export let userName: string;
  export let datetime: string;
</script>

<mj-body>
  <mj-section background-color="#EEE">
    <mj-column>
      <mj-text font-size="15px" color="#000" align="center" font-weight="200">
          <div style="align-items: center; display: flex; justify-content: center; justify-items: center;">
              Devlog Studio
              <img src="https://devlogs.sgp1.cdn.digitaloceanspaces.com/public/assets/ic_devlog.png" alt="logo" style="margin-left: 5px; width: 20px; height: 20px;" />
          </div>
      </mj-text>
    </mj-column>
  </mj-section>
  <mj-raw>
    <!-- Image Header -->
  </mj-raw>
  <mj-section background-url="https://devlogs.sgp1.cdn.digitaloceanspaces.com/public/assets/gradient-background.gif" background-size="cover" background-repeat="no-repeat">
    <mj-column width="600px">
      <mj-text align="center" color="#fff" font-size="30px">Sharing is our key to success</mj-text>
      <mj-button background-color="#402E7A" href="https://devlog.studio">Please visit</mj-button>
    </mj-column>
  </mj-section>
  <mj-raw>
    <!-- Intro text -->
  </mj-raw>
  <mj-section background-color="#fafafa">
    <mj-column width="400px">
      <mj-text font-size="20px" align="center">Appriciate</mj-text>
      <mj-text align="center" font-weight="200" line-height="18px"> Thank you for your subscription, {userName}. Our primary mission is to develop a wide range of productivity software, and along the way, we are committed to giving back to the community. We begin by sharing our knowledge, and your subscription to our blog is a valuable sign of our impact. Your subscription is truly appreciated. Thank you. </mj-text>
      <mj-button background-color="#402E7A" href="https://devlog.studio">Visit us</mj-button>
    </mj-column>
  </mj-section>
  <mj-section background-color="#EEE">
    <mj-column>
      <mj-text align="center" color="#B4B4B8" font-weight="200">
          Website: <a href="https://devlog.studio" style="text-decoration: underline;">
            devlog.studio
          </a>
      </mj-text>
      <mj-text align="center" color="#B4B4B8" font-weight="200">Contact: team@devlog.studio</mj-text>
      <mj-text align="center" color="#B4B4B8" font-weight="200">Tan Binh, Ho Chi Minh, Viet Nam</mj-text>
      <mj-text align="center" color="#B4B4B8" font-weight="200">You're receiving this email because you subscribed to the devlog.studio.</mj-text>
    </mj-column>
  </mj-section>
</mj-body>
