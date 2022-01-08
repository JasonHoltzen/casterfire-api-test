<script>
  export let placeholder;
  export let options = [];
  export let selected = [];
  export let showText = true;
  export let icons = {};
  export let idPrefix = "";
</script>

<fieldset>
  <legend>{placeholder}</legend>
  <ul class="options">
    {#each options as o}
    <li>
      <input
        type="checkbox"
        bind:group={selected}
        id={idPrefix + o}
        name={o}
        value={o}
      />
      <label for={o} class={o}>
        {#if !!icons[o]}
          <svelte:component this={icons[o]} />
        {:else if !!icons["all"]}
          <svelte:component this={icons["all"]} />
        {:else}
          {#if showText}
            <span class="text">
              {o}
            </span>
          {/if}
        {/if}
      </label>
    </li>
    {/each}
  </ul>
</fieldset>

<style lang="scss">
  
</style>