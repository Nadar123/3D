// ThreeDObject.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

type ThreeDObjectProps = {
  shape: 'rectangle' | 'triangle' | 'circle';
};

const ThreeDObject: React.FC<ThreeDObjectProps> = ({ shape }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 500, // Adjust the aspect ratio
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let geometry;
    switch (shape) {
      case 'rectangle':
        geometry = new THREE.BoxGeometry(1, 1, 1);
        break;
      case 'triangle':
        geometry = new THREE.ConeGeometry(1, 1, 3);
        break;
      case 'circle':
        geometry = new THREE.SphereGeometry(1, 32, 32);
        break;
      default:
        return;
    }

    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      vertexColors: THREE.FaceColors,
    });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    renderer.setSize(window.innerWidth, 500); // Set the height to 500px
    mountRef.current.appendChild(renderer.domElement);

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('click', onClick, false);

    function onMouseMove(event: any) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onClick() {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        const { face } = intersects[0];
        face.color.set(0x0000ff);
        intersects[0].object.geometry.colorsNeedUpdate = true;
      }
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [shape]);

  return <div ref={mountRef} />;
};

export default ThreeDObject;
