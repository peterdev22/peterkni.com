<script>
  import { PUBLIC_CF_IMAGES } from '$env/static/public';
  import { T } from '@threlte/core';
  import {
    Gizmo,
    Environment,
    OrbitControls,
    GLTF,
    useDraco,
    ContactShadows
  } from '@threlte/extras';

  const dracoLoader = useDraco();

  let { source } = $props();
</script>

<Environment url="/assets/3d/brown_photostudio_02_1k.hdr" />

<T.PerspectiveCamera makeDefault position={[1, 1, 1]} fov={30}>
  <OrbitControls
    autoRotate
    autoRotateSpeed={0.5}
    minDistance={0.5}
    maxDistance={8}
    enableDamping
    enablePan={false}
    target={[0, 0.35, 0]}
  >
    <Gizmo />
  </OrbitControls>
</T.PerspectiveCamera>

<!-- <T.DirectionalLight intensity={10} position.x={1} position.y={1} color={'#FFF4E5'}/> -->

<T.GridHelper args={[10, 10]} position.y={-0.001} />

<ContactShadows scale={1} blur={2} far={10} opacity={0.7} />

<GLTF url={"/TEST/printo.gltf"} {dracoLoader} />