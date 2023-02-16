import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.querySelector('#c')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 1,1,1);
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);
scene.add( cube );

const geometry1 = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material1 = new THREE.MeshStandardMaterial( { color: 0xffff00} );
const torus = new THREE.Mesh( geometry1, material1 );
scene.add( torus );

const light = new THREE.DirectionalLight(0xffffff, 1, 100)
light.position.set(10,10,10);
scene.add(light);

camera.position.z = 20;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  torus.rotation.x -= 0.005;
  torus.rotation.y -= 0.005;
  renderer.render( scene, camera);
}

animate();

