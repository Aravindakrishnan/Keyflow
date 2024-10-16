import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

// Key component to represent each key on the keyboard with a label
function Key({ position, label, width = 1, height = 0.2, depth = 1, color = 'white' }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Base component for the keyboard
function Base({ width, height, depth }) {
  return (
    <mesh position={[-0.3, -0.2, -0.3]}>
      {/* Create a flat base beneath the keys */}
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

// Main Keyboard layout component
export default function Keyboard() {
  const keyRows = [
    ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Del'],
    ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Up'],
    ['Fn', 'Control', 'Option', 'Command', 'Alt', 'Command', 'Option', 'Left', 'Down', 'Up', 'Right']
  ];

  const keySpacing = 1.2; // Adjust spacing between keys
  const specialKeySize = 1.5; // Adjust width for longer keys like Space, Shift
  const keyboardWidth = keyRows[0].length * keySpacing;
  const keyboardHeight = keyRows.length * keySpacing;

  return (
    <Canvas camera={{ fov: 45, position: [10, 15, 20] }} style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} position={20}/>

      {/* Render the base for the keyboard */}
      <Base width={keyboardWidth} height={0.3} depth={keyboardHeight} />

      {/* Render each key */}
      {keyRows.map((row, rowIndex) =>
        row.map((key, colIndex) => {
          // Adjust size for special keys like Backspace, Shift, and Spacebar
          let keyWidth = 1;
          if (key === 'Backspace' || key === 'Shift' || key === 'Enter') keyWidth = specialKeySize;
          if (key === 'Space') keyWidth = 6;

          return (
            <Key
              key={`${rowIndex}-${colIndex}`}
              position={[
                colIndex * keySpacing - (row.length * keySpacing) / 2,
                0, // y position
                rowIndex * keySpacing - (keyRows.length * keySpacing) / 2,
              ]}
              label={key} // Label the key with its corresponding symbol
              width={keyWidth}
              color={rowIndex === 0 ? 'white' : 'white'} // Color for function keys
            />
          );
        })
      )}
    </Canvas>
  );
}



// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// function Key({ position, color }) {
//     return (
//       <mesh position={position}>
//         <boxGeometry args={[1, 0.2, 1]} />
//         <meshStandardMaterial color={color || 'white'} />
//       </mesh>
//     );
//   }
  
// export default function Keyboard() {
//     const rows = 5;
//     const cols = 14;
//     const keySpacing = 1.1;
  
//     return (
//       <Canvas style={{ height: '100vh' }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />
  
//         {/* Render keys in a grid-like layout */}
//         {Array.from({ length: rows }).map((_, rowIndex) =>
//           Array.from({ length: cols }).map((_, colIndex) => (
//             <Key
//               key={`${rowIndex}-${colIndex}`}
//               position={[
//                 colIndex * keySpacing - (cols * keySpacing) / 2, 
//                 0, // y position
//                 rowIndex * keySpacing - (rows * keySpacing) / 2,
//               ]}
//               color={rowIndex === 0 ? 'gray' : 'white'} 
//             />
//           ))
//         )}
//       </Canvas>
//     );
//   }
  