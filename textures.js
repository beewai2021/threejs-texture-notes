// ================================================================================
// Texture characteristics
// --------------------------------------------------------------------------------

// Opacity will only work when transparent is on
material.transparent = true
material.opacity = 0.5

// Material sides
material.side = THREE.DoubleSide || THREE.FrontSide || THREE.BackSide

// Changing the material's flatshading requires the material to be recompiled
material.flatShading = true || false
material.needsUpdate = true

// ================================================================================

// ================================================================================
// Loading Textures
// --------------------------------------------------------------------------------

// Use global LoadingManager to mutualize/consolidate all texture loaders
const loadingManager = new THREE.LoadingManager()
loadManager.onStart = () => {
  console.log("loading started")
}
loadManager.onProgress = () => {
  console.log("loading")
}
loadManager.onLoad = () => {
  console.log("loading completed")
}
loadManager.onError = () => {
  console.log("loading failed")
}

const cubeTextureLoader = new THREE.CubeTextureLoader(loadManager)
// cube map must have 6 sides
const environmentMapTexture = cubeTextureLoader.load([
  "/environmentMaps/px.png", // positive x
  "/environmentMaps/nx.png", // negative x
  "/environmentMaps/py.png",
  "/environmentMaps/ny.png",
  "/environmentMaps/pz.png",
  "/environmentMaps/nz.png",
])

const material = new THREE.MeshStandardMaterial({
  envMap: environmentMapTexture,
  metalness: 0.7,
  roughness: 0.2,
})
// or
scene.background = environmentMapTexture

// ================================================================================

// ================================================================================
// Using textures
// --------------------------------------------------------------------------------

const textureLoader = new THREE.TextureLoader(loadingManager)

// Color (Albedo) texture
const colorTexture = textureLoader.load("texture.jpg")
const material = new THREE.MeshStandardMaterial({
  map: colorTexture,
})

// Alpha texture
const alphaTexture = textureLoader.load("alpha.jpg")
const material = new THREE.MeshStandardMaterial({
  transparent: true,
  alphaMap: alphaTexture,
})

// Displacement (height) texture
// Requires a lot of vertices in the geometry to accurately displace the heights of the material
const displacementTexture = textureLoader.load("displacement.jpg")
const material = new THREE.MeshStandardMaterial({
  displacementMap: displacementTexture,
  displacementScale: 0.35,
})

// Normal texture
// PNG is recommended to match the exact positions for each vertex with the texture detail
const normalTexture = textureLoader.load("normal.png")
const material = new THREE.MeshStandardMaterial({
  normalMap: normalTexture,
})
material.normalScale.x = 0.5 // 0 <---> 1
material.normalScale.y = 0.5 // 0 <---> 1

// Ambient occlusion texture
const ambientOcclusionTexture = textureLoader.load("ambientOcclusion.jpg")
const cube = new THREE.BoxBufferGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({
  aoMap: ambientOcclusionTexture,
})
// AO map requires duplication of existing uv coordinates to uv2
cube.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(cube.geometry.attributes.uv.array, 2)
)

// Metalness & Roughness texture
const metalnessTexture = textureLoader.load("metalness.jpg")
const roughnessTexture = textureLoader.load("roughness.jpg")
const material = new THREE.MeshStandardMaterial({
  metalnessMap: metalnessTexture,
  roughnessMap: roughnessTexture,
  // when using metalness and roughness maps, the metalness and roughness values should not be explicitly declared
})

// MatCap (material capture) texture
const matcapTexture = textureLoader.load("matcap.jpg")
const material = new THREE.MeshMatcapMaterial({
  matcap: matcapTexture,
})

// Gradient texture
// Gradient texture can be a very small image of squares with shades from black to white
const gradientTexture = textureLoader.load("gradient.jpg")
const material = new THREE.MeshToonMaterial({
  gradientMap: gradientTexture,
})
// cartoonish look
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false

// ================================================================================
