import { cubicOut } from "svelte/easing";
import { crossfade } from "svelte/transition";

export const [send, receive] = crossfade({
  delay: 500,
  duration: 400,
  easing: cubicOut,
});
