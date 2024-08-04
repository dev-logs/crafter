<script lang="ts">
  export let userName: string;
  export let datetime: string;
</script>

<mj-section>
  <mj-column>
    <mj-button
      color="#fff"
      background-color="#ff3e00"
      font-family="Helvetica">
      Hi {userName}
    </mj-button>
  </mj-column>
</mj-section>
