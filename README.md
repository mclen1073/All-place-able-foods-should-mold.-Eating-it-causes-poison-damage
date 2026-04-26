# All-place-able-foods-should-mold.-Eating-it-causes-poison-damage

Bedrock behavior pack (script-only, no PNG/Ogg assets) that makes **all place-able foods** dangerous.

## What it does

When a player eats an item that is both:
- `minecraft:food` (edible), and
- `minecraft:block_placer` (place-able as a block),

the add-on treats it as moldy and applies:
- instant damage (`2` HP), and
- poison for 10 seconds.

It also shows an action-bar warning message.

## Files

- `behavior_pack/manifest.json`
- `behavior_pack/scripts/main.js`

## Install (Bedrock)

1. Copy `behavior_pack` into your world's `behavior_packs` folder.
2. Enable the behavior pack in your world.
3. Make sure **Script API** is enabled for the world (if prompted by your Bedrock version).

## Notes

- This is done without custom textures (`.png`) and without sounds (`.ogg`).
- The logic is generic: if an item is edible and place-able, it is affected automatically.
