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

/**
 * House
 */
// House container
const house = new THREE.Group()
scene.add(house)

//Walls
const foundwall = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.15, 6),
    new THREE.MeshStandardMaterial({ color: '#ffffff' })
)
foundwall.position.y = 0.1
foundwall.position.x = 2
foundwall.position.z = -3.601

const Bwall = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 4, 2),
    new THREE.MeshStandardMaterial({ color: '#B55A30' })
)
Bwall.position.set(1.807, 2, -4.585)

const Swall = new THREE.Mesh(
    new THREE.BoxGeometry(2, 4, 2),
    new THREE.MeshStandardMaterial({ color: '#B55A30' })
)
Swall.position.set(-0.159, 2, -3.601)

// Door
const door = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 1, 0.2),
    new THREE.MeshStandardMaterial({ color: "#4a392b" })
)
door.position.set(3.774, 1.25, -3.601);


house.add(foundwall)
house.add(Bwall)
house.add(Swall)
house.add(door)

gui.add(door.position, 'x').min(- 20).max(20).step(0.001)
gui.add(door.position, 'y').min(- 20).max(20).step(0.001)
gui.add(door.position, 'z').min(- 20).max(20).step(0.001)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ color: '#a9c388' })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()