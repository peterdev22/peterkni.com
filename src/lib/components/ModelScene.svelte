<script>
  import { T } from '@threlte/core';
  import {
    // useDraco,
    Environment,
    OrbitControls,
    GLTF
  } from '@threlte/extras';

  // passed down props
  let { source, cameraPos, targetPos } = $props();

  // Enable the usage of draco compressed models (google script is used)
  // const dracoLoader = useDraco();

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
    <!-- gizmo currently not working with cf pages, tested: 03-07-2025 -->
    <!-- <Gizmo /> -->
  </OrbitControls>
</T.PerspectiveCamera>

<T.GridHelper args={[10, 10, '#3F3F46', '#3F3F46']} position.y={-0.001}/>
<GLTF url={source} />