import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 'red' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 20;

let xVelocity = 0.05;
let yVelocity = 0.07;

function animate() {
  requestAnimationFrame(animate);


  cube.position.x += xVelocity;
  cube.position.y += yVelocity;


  if (cube.position.x + cube.geometry.parameters.width / 2 > window.innerWidth / 2 || cube.position.x - cube.geometry.parameters.width / 2 < -window.innerWidth / 2) {
    xVelocity = -xVelocity; 
  }

  if (cube.position.y + cube.geometry.parameters.height / 2 > window.innerHeight / 2 || cube.position.y - cube.geometry.parameters.height / 2 < -window.innerHeight / 2) {
    yVelocity = -yVelocity; 
  }

  renderer.render(scene, camera);
}

animate();
