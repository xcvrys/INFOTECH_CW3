const Sentences: SentencesItem[] = [
  {
    id: '0',
    category: '9',
    content: 'I like burger',
    icon: 'hamburger',
  },
  {
    id: '1',
    category: '9',
    content: 'I love my mum',
    icon: 'human-female',
  },
  {
    id: '2',
    category: '9',
    content: 'I love diving',
    icon: 'go-kart',
  },
  {
    id: '3',
    category: '9',
    content: 'I want to drink juice',
    icon: 'blender',
  },
  {
    id: '4',
    category: '9',
    content: 'I wat to eat apple',
    icon: 'apple',
  },
  {
    id: '5',
    category: '9',
    content: 'I need a lift',
    icon: 'car',
  },
  {
    id: '6',
    category: '9',
    content: 'I love cows',
    icon: 'cow',
  },
  {
    id: '7',
    category: '9',
    content: 'I like flowers',
    icon: 'flower',
  },
  {
    id: '8',
    category: '9',
    content: 'I need to sleep',
    icon: 'bed',
  },
];

export interface SentencesItem {
  id: string;
  category: string;
  content: string;
  icon: string;
}
export default Sentences;
