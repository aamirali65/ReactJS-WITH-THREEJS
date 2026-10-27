# ReactJS-WITH-THREEJS

A React app that renders a 3D scene with Three.js — a MacBook model loaded from a GLB file and animated as you scroll.

## How it works

- `src/MacContainer.jsx` loads `public/mac.glb` with `useGLTF`, then walks the model's nodes and retextures the screen mesh (applying a texture, zeroing emissive/metalness and raising roughness so it reads as a matte display)
- `@react-three/drei`'s `useScroll` and `useFrame` drive the animation as the page scrolls
- `src/App.jsx` mounts the scene through `<Canvas>` from `@react-three/fiber`

## Stack

React 18 · Vite · three · @react-three/fiber · @react-three/drei

## Running

```bash
npm install
npm run dev
```

Serves on `http://localhost:5173`. The model and its texture are served from `public/`, so the filenames referenced in `MacContainer.jsx` must match what's actually in that folder.

## Notes

A rendering exercise — the scene is the whole app, with no UI around it apart from the canvas.
