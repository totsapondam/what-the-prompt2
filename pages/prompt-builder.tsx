import { useState } from 'react';
import { generatePrompt } from '../lib/promptEngine';

export default function PromptBuilder() {
  const [output, setOutput] = useState('');
  const [data, setData] = useState({
    time: 'morning',
    lighting: 'natural',
    location: 'park',
    locationDetail: 'under a tree',
    mood: 'joyful',
    sound: 'birds chirping',
    emotion: 'warm',
    visualStyle: 'cinematic',
    cameraAngle: 'eye level',
    cameraMovement: 'pan',
    characters: [{
      name: 'Mimi',
      age: '7',
      gender: 'female',
      personality: 'curious',
      outfit: 'blue dress',
      hairStyle: 'long',
      bodyType: 'slim'
    }]
  });

  return (
    <div className="p-6 space-y-4 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold">🎯 สร้าง Prompt</h1>
      <button
        onClick={() => setOutput(generatePrompt(data))}
        className="bg-yellow-400 text-black px-4 py-2 rounded"
      >
        สร้าง Prompt
      </button>
      {output && <pre className="bg-gray-800 p-4 rounded whitespace-pre-wrap">{output}</pre>}
    </div>
  );
}
