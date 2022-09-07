const useRandomGenerate = () => {
  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomLowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * 20)];
  };

  return {
    number: getRandomNumber,
    uppercase: getRandomUppercase,
    lowercase: getRandomLowercase,
    symbol: getRandomSymbol,
  };
};

export default useRandomGenerate;
