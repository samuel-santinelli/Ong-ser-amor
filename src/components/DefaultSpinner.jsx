import { useEffect, useState } from "react";
import { Fold } from "react-native-animated-spinkit";

const DefaultSpinner = () => {
  const colorsArray = [        
    "#FD0101",
    "#FFD700",
    "#6B8E23",
    "#4B0082",
    "#D9D9D9",
    "#9ACD32",
    "#ADFF2F",
    "#09BAE1",
  ];

  const getRandomColor = (currentColor) => {
    let newColor;
    do {
      newColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    } while (newColor === currentColor);
    return newColor;
  };

  const [currentColor, setCurrentColor] = useState(getRandomColor(null));

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prevColor) => getRandomColor(prevColor));
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);
  return <Fold size={80} color={currentColor} />;
};

export default DefaultSpinner;
