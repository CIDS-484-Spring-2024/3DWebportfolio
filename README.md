# 3D Portfolio & RPG-Style Navigation

## Description
Create a captivating, interactive 3D portfolio using Three.js and Blender, offering an RPG game-like navigation experience. Users can move a player character around a virtual world to explore various projects and skills in an immersive environment.

## Features
- Real-time 3D graphics and animations with Three.js
- Custom models and textures from Blender
- RPG-style character movement to navigate the portfolio
- Interactive elements within the 3D world

## Technologies
- Three.js
- Blender
- lil-gui
- JavaScript
- HTML/CSS

## Code Example
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')
const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')
// Create a player object
const player = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.7, 0.3),
    new THREE.MeshStandardMaterial({ color: '#ff0000' })
  );
  player.position.set(0, 0.5, 0); // Set the initial position of the player
  scene.add(player);
  
  // Handle keyboard events
  const keys = {}; // Object to hold the state of each key (pressed or not)
  document.addEventListener('keydown', (event) => {
    keys[event.code] = true; // Set the key state to true when pressed
  });
  document.addEventListener('keyup', (event) => {
    keys[event.code] = false; // Set the key state to false when released
  });
  
  // Update the player's position based on the keyboard events
  const speed = 0.1; // Define the speed of the player's movement
  const updatePlayerPosition = () => {
    if (keys['ArrowUp']) { // Move forward
      player.position.z -= speed;
    }
    if (keys['ArrowDown']) { // Move backward
      player.position.z += speed;
    }
    if (keys['ArrowLeft']) { // Turn left
      player.position.x -= speed;
    }
    if (keys['ArrowRight']) { // Turn right
      player.position.x += speed;
    }
  };

/**
 * House
 */
// House container
const house = new THREE.Group()
scene.add(house)

//Walls
const foundwall = new THREE.Mesh(
    new THREE.BoxGeometry(9.8, 0.15, 2.3),
    new THREE.MeshStandardMaterial({ color: '#ffffff' })
)
foundwall.position.set(1.8, 0.1, -4.585)

const foundwall1 = new THREE.Mesh(
    new THREE.BoxGeometry(2.3, 0.15, 2.3),
    new THREE.MeshStandardMaterial({ color: '#ffffff' })
)

foundwall1.position.set(-0.159, 0.1, -3.6 )


const Bwall = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 4, 2),
    new THREE.MeshStandardMaterial({ 
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture })
)
Bwall.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(Bwall.geometry.attributes.uv.array, 2))
Bwall.position.set(1.807, 2, -4.585)

const Swall = new THREE.Mesh(
    new THREE.BoxGeometry(2, 4, 2),
    new THREE.MeshStandardMaterial({ 
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture})
)
Swall.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(Swall.geometry.attributes.uv.array, 2))

Swall.position.set(-0.159, 2, -3.601)
// Door
const door = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1, 0.2),
    new THREE.MeshStandardMaterial({ color: "#4a392b" })
)
door.position.set(5.249, 0.7, -3.601);

//roof
const roof = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 0.15, 2),
    new THREE.MeshStandardMaterial({ color: '#BAB4B5' })
)
roof.position.set(1.807, 4.08, -4.585)
const roof1 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 0.15, 2),
    new THREE.MeshStandardMaterial({ color: '#BAB4B5' })
)
roof1.position.set(-0.159, 4.08, -3.601)

house.add(foundwall)
house.add(foundwall1)
house.add(Bwall)
house.add(Swall)
house.add(door)
house.add(roof)
house.add(roof1)

const Prucha= new THREE.Group()
scene.add(Prucha)

const Pruchawall = new THREE.Mesh(
    new THREE.BoxGeometry(9.8, 0.15, 2.3),
    new THREE.MeshStandardMaterial({ color: '#ffffff' })
)
Pruchawall.position.set(1.8, 0.1, 3.774)

const Pruchawall1 = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 1.2, 1),
    new THREE.MeshStandardMaterial({ 
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture})
)
Pruchawall1.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(Pruchawall1.geometry.attributes.uv.array, 2))
Pruchawall1.position.set(1.807, 0.824, 5.249)

const Pruchawall2 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.15, 1.2),
    new THREE.MeshStandardMaterial({ color: '#ffffff' })
)

Pruchawall2.position.set(1.807, 0.1, 5.249 )

const Pwall = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 4, 2),
    new THREE.MeshStandardMaterial({ 
        map: bricksColorTexture,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture })
)
Pwall.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(Pwall.geometry.attributes.uv.array, 2))
Pwall.position.set(1.807, 2, 3.774)

const Prucharoof = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 0.15, 2),
    new THREE.MeshStandardMaterial({ color: '#BAB4B5' })
)
Prucharoof.position.set(1.807, 4.08, 3.774)
const Prucharoof1 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.05, 2),
    new THREE.MeshStandardMaterial({ color: '#BAB4B5' })
)
Prucharoof1.position.set(1.807, 1.4, 4.9)

const Pruchadoor = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1, 0.2),
    new THREE.MeshStandardMaterial({ color: "#4a392b" })
)
Pruchadoor.position.set(1.807, 0.7, 5.66);
gui.add(Pruchadoor.position, 'x').min(- 20).max(20).step(0.001)
gui.add(Pruchadoor.position, 'y').min(- 20).max(20).step(0.001)
gui.add(Pruchadoor.position, 'z').min(- 20).max(20).step(0.001)


Prucha.add(Pruchawall)
Prucha.add(Pruchawall1)
Prucha.add(Pruchawall2)
Prucha.add(Pwall)
Prucha.add(Prucharoof)
Prucha.add(Prucharoof1)
Prucha.add(Pruchadoor)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ 
        map: grassColorTexture,
        aoMap: grassAmbientOcclusionTexture,
        normalMap: grassNormalTexture,
        roughnessMap: grassRoughnessTexture})
)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, - 2)
scene.add(moonLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 1000)
camera.position.set(2, 2, 10)
camera.rotation.set(-0.1, 0, 0)
camera.fov = 60
camera.updateProjectionMatrix()


scene.add(camera)
