# All-place-able-foods-should-mold.-Eating-it-causes-poison-damage

Bedrock add-on that makes **all place-able foods** moldy and dangerous, using **no custom PNG/Ogg assets**.

## What it does

- If a place-able food is eaten (an item with both `minecraft:food` and `minecraft:block_placer`), the player takes:
  - instant damage (`2` HP), and
  - poison for 10 seconds.
- When a normal cake is placed, it is immediately replaced with a `moldy_food:moldy_cake` block.

## Model + texture approach (no custom textures)

This project now includes a resource pack model for moldy cake that is bound to **vanilla textures**:
- `textures/blocks/cake_top`
- `textures/blocks/cake_side`
- `textures/blocks/cake_bottom`

So there are still no custom `.png` or `.ogg` files in this repo.

## Files

### Behavior pack
- `behavior_pack/manifest.json`
- `behavior_pack/scripts/main.js`
- `behavior_pack/blocks/moldy_cake.json`

### Resource pack
- `resource_pack/manifest.json`
- `resource_pack/blocks.json`
- `resource_pack/models/blocks/moldy_cake.geo.json`
- `resource_pack/textures/terrain_texture.json`

## Install (Bedrock)

1. Copy `behavior_pack` to your world `behavior_packs` folder.
2. Copy `resource_pack` to your world `resource_packs` folder.
3. Enable both packs on the world.
4. Enable Script API / required experiments if your Bedrock version prompts for them.
