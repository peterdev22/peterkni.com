<script>
  import { T } from '@threlte/core';
  import {
    Environment,
    OrbitControls,
    GLTF
  } from '@threlte/extras';

  // const dracoLoader = useDraco();

  let { source, cameraPos, targetPos } = $props();
</script>

<Environment url="/assets/3d/brown_photostudio_02_1k.hdr" />

<T.PerspectiveCamera makeDefault position={cameraPos} fov={30}>
  <OrbitControls
    autoRotate
    autoRotateSpeed={0.25}
    minDistance={0.5}
    maxDistance={8}
    enableDamping
    enablePan={false}
    target={targetPos}
  >
    <!-- <Gizmo /> --> <!-- gizmo potentially not working with cf pages -->
  </OrbitControls>
</T.PerspectiveCamera>

<T.GridHelper args={[10, 10]} position.y={-0.001}/>

<!-- <ContactShadows scale={1} blur={2} far={10} opacity={0.7} /> -->

<GLTF url={source} />