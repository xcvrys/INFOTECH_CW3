import create from 'zustand';

const useSentenceBuilderStore = create<sentenceBuilderStoreProps>(set => ({
  sentence: [],
  onboardingCompleted: 0,
  addToSentence: word => set(s => ({sentence: [...s.sentence, word]})),
  clearSentence: () => set(() => ({sentence: []})),
  removeLastWord: () => set(s => ({sentence: s.sentence.slice(0, -1)})),
  setOnboardingCompleted: () =>
    set(s => ({onboardingCompleted: s.onboardingCompleted + 1})),
}));

interface sentenceBuilderStoreProps {
  sentence: string[];
  addToSentence: (word: string) => void;
  clearSentence: () => void;
  removeLastWord: () => void;
  onboardingCompleted: number;
  setOnboardingCompleted: () => void;
}

export default useSentenceBuilderStore;
