// Get references to the eyes and pupils
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

// Function to update the position of the pupils based on mouse movement
function updatePupils(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate the distance from the center of each eye to the mouse position
  const leftEyeRect = leftEye.getBoundingClientRect();
  const rightEyeRect = rightEye.getBoundingClientRect();

  const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
  const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

  const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
  const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

  const deltaXLeft = mouseX - leftEyeCenterX;
  const deltaYLeft = mouseY - leftEyeCenterY;
  const distanceLeft = Math.sqrt(deltaXLeft ** 2 + deltaYLeft ** 2);

  const deltaXRight = mouseX - rightEyeCenterX;
  const deltaYRight = mouseY - rightEyeCenterY;
  const distanceRight = Math.sqrt(deltaXRight ** 2 + deltaYRight ** 2);

  // Limit the maximum distance the pupils can move
  const maxDistance = 10;
  const clampedDistanceLeft = Math.min(distanceLeft, maxDistance);
  const clampedDistanceRight = Math.min(distanceRight, maxDistance);

  // Calculate the angle for the pupils' movement
  const angleLeft = Math.atan2(deltaYLeft, deltaXLeft);
  const angleRight = Math.atan2(deltaYRight, deltaXRight);

  // Calculate the new position for the pupils
  const newLeftX = Math.cos(angleLeft) * clampedDistanceLeft;
  const newLeftY = Math.sin(angleLeft) * clampedDistanceLeft;

  const newRightX = Math.cos(angleRight) * clampedDistanceRight;
  const newRightY = Math.sin(angleRight) * clampedDistanceRight;

  // Update the pupils' position
  leftPupil.style.transform = `translate(-50%, -50%) translate(${newLeftX}px, ${newLeftY}px)`;
  rightPupil.style.transform = `translate(-50%, -50%) translate(${newRightX}px, ${newRightY}px)`;
}

// Add an event listener to update the pupils when the mouse moves
document.addEventListener('mousemove', updatePupils);