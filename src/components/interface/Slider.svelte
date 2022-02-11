<script>
import RangeSlider from "svelte-range-slider-pips";

export let sClass;
export let sSelector;
export let sType;
export let sMin;
export let sMax;
</script>

<main>
    <RangeSlider type="range" id="input" min={sMin} max={sMax} springValues="stiffness: 0.1, damping: 0.2" float/>
</main>

<style>
main {
    width: 128px;
    margin: 0 auto;
}


</style>