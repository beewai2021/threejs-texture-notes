Last updated: January 21, 2021

# **Three.js Texture Notes**
Three.js textures follow the PBR (Physcially Based Rendering) principle, as well as other 3D software like Blender.

### Texture Types
The following textures are `mapped` to the texture, and multiple texture maps can be applied to the same geometry at the same time.

| Texture Type  | Effect  | Format | Grayscale | White | Black
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Color (Albedo) | Basic image texture | JPG | N/A | N/A | N/A |
| Alpha | Visibility of image texture | JPG | Yes | Visible | Hidden |
| Displacement (Height) | Changes vertex positions to displacement geometry, requires more subdivisions (vertices to work with) | JPG | Yes (Grayscale: height doesn't change) | Higher | Lower |
| Normal | Add details without adding or manipulating vertices / subdivisions | PNG | N/A | N/A | N/A |
| Ambient Occlusion | Add fake, physically incorrect, static shadows to create 3D contrast | JPG | Yes | N/A | N/A |
| Metalness (usually used in combination with roughness) | Light reflections | JPG | Yes | Metalic | Not-metalic |
| Roughness (opposite of glossy) | Light diffusion. Smoother will show sharper and brighter reflections | JPG | Yes | Rough | Smooth |
| Matcap (material capture) | Fake PBR, includes built-in lighting and reflections, defines color for every vertex normal relative to the camera | JPG | N/A | N/A | N/A |