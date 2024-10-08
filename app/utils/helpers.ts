export function getRandomIndex(arrayLength: number) {
  return Math.floor(Math.random() * arrayLength);
}

export function shuffleArray(array: any[]) {
  const shuffledArray = [...array]; // Create a copy of the array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function shorten(sentence: string, maxLength: number) {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + '...';
    } else {
      return sentence;
    }
  }
  
