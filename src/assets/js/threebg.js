import { Thumbs } from "swiper";
import * as THREE from "three";
import images from "./images"
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1, 1000);


const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".three-bg").appendChild(renderer.domElement);


// responsive 
window.addEventListener("resize", ()=> {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})
const geometry = new THREE.PlaneGeometry(18, 10, 15, 9);
const material = new THREE.MeshBasicMaterial({
    //color:0xff0000,
    map:loader.load(images.bg2),
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();
function animate(){
    const time = clock.getElapsedTime();
    for( let i = 0; i < count; i++) {
     const x = geometry.attributes.position.getX(i);
     const y = geometry.attributes.position.getY(i);

     geometry.attributes.position.setZ(i, 0.2 * Math.sin(x * time * .6));
     geometry.computeVertexNormals();
     geometry.attributes.position.needsUpdate =  true;
    }
    requestAnimationFrame(animate);
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    
}

animate()
