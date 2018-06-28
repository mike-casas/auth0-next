export default function getTranslation({currentTranslations, defaultTranslations}, key) {
  console.log(currentTranslations);
  const findTranslation = (dictionary, key) => {
    if (dictionary.length > 0) {
      const currentText = dictionary.find(
        item => item.key === key
      );
      if (currentText) {
        return currentText.text;
      }
      return undefined;
    }
    return undefined;
  };
  const currentText = findTranslation(currentTranslations, key);
  if (currentText) {
    return currentText;
  }
  return findTranslation(defaultTranslations, key);
}
