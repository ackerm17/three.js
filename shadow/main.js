import './style.css'
import * as THREE from "three"

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry( 3, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const sphere = new THREE.Mesh( geometry, material );
sphere.castShadow = true;
sphere.receiveShadow = false;
scene.add( sphere );

const light = new THREE.DirectionalLight(0xffffff, 1, 100)
light.position.set(10,10,10);
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, 800/600, 0.1, 100);
camera.position.z = 20;
scene.add(camera);
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(800,600);
renderer.render(scene, camera)

