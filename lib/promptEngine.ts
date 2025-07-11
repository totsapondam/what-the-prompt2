function generateSetting(data) {
  return `Scene takes place at ${data.time} with ${data.lighting} lighting in a ${data.location}, specifically ${data.locationDetail}. The atmosphere is ${data.mood}, with background sound of ${data.sound}.`;
}
function generateStyle(data) {
  return `The image feels ${data.emotion}, styled in ${data.visualStyle}.`;
}
function generateCamera(data) {
  return `Camera angle is ${data.cameraAngle} and it uses ${data.cameraMovement} movement.`;
}
function generateCharacters(data) {
  return data.characters.map((char, i) => 
    `Character ${i+1}: ${char.name}, ${char.age}, ${char.gender}, ${char.personality}, wearing ${char.outfit}, ${char.hairStyle} hair, ${char.bodyType}.`
  ).join('\n');
}
export function generatePrompt(data) {
  return [
    generateSetting(data),
    generateStyle(data),
    generateCharacters(data),
    generateCamera(data),
  ].join('\n');
}
