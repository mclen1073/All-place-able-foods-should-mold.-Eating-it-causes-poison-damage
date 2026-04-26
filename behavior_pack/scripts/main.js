import { world } from "@minecraft/server";

const MOLDY_BLOCK_ID = "moldy_food:moldy_cake";

/**
 * A place-able food is any consumed item that has both:
 * - a food component (it can be eaten)
 * - a block placer component (it can be placed as a block)
 */
function isPlaceableFood(itemStack) {
  if (!itemStack) return false;

  const hasFood = Boolean(itemStack.getComponent("minecraft:food"));
  const hasBlockPlacer = Boolean(itemStack.getComponent("minecraft:block_placer"));

  return hasFood && hasBlockPlacer;
}

world.afterEvents.playerPlaceBlock.subscribe((event) => {
  const { block } = event;

  if (!block || block.typeId !== "minecraft:cake") {
    return;
  }

  block.setType(MOLDY_BLOCK_ID);
});

world.afterEvents.itemCompleteUse.subscribe((event) => {
  const { source, itemStack } = event;

  if (!source || !itemStack || !isPlaceableFood(itemStack)) {
    return;
  }

  source.applyDamage(2);
  source.addEffect("poison", 200, {
    amplifier: 0,
    showParticles: true
  });

  source.onScreenDisplay.setActionBar("§2That tasted moldy... §a+Poison");
});
