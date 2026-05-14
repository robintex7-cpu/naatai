"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function MeshViewer({ jobId }: { jobId: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827);

    const camera = new THREE.PerspectiveCamera(
      60,
      el.clientWidth / el.clientHeight,
      0.01,
      100
    );
    camera.position.set(0, 1, 3);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 10, 5);
    scene.add(dir);

    const loader = new OBJLoader();
    loader.load(
      `${apiUrl}/result/${jobId}/mesh.obj`,
      (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);
        scene.add(obj);
        controls.update();
      },
      undefined,
      (err) => console.error("Mesh load error:", err)
    );

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, [jobId, apiUrl]);

  return (
    <div
      ref={mountRef}
      className="w-full"
      style={{ height: "calc(100vh - 120px)" }}
    />
  );
}
