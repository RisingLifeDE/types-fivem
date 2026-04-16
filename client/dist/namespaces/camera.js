/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 *
 * Hash: 0x8F57A89D
 */
export function getCamMatrix(camera, rightVector, forwardVector, upVector, position) {
    const _camera = typeof camera == 'object' ? camera.handle() : camera;
    GetCamMatrix(_camera, rightVector, forwardVector, upVector, position);
}
