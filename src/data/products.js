export const products = {
  'cookie-dough': {
    id: 'cookie-dough',
    name: 'Cookie Dough',
    tagline: 'Ready-to-Bake Happiness',
    color: 'var(--color-primary)', // Pinkish
    heroImage: '🍪', // Placeholder, we can replace with generated image later
    howToUse: {
      title: 'How to Bake Cutesies Cookies',
      methods: [
        {
          title: 'Oven',
          steps: [
            'Place cookie dough on the baking sheet provided.',
            'Preheat oven to 180°C.',
            'Bake for 10–12 minutes in convection mode.',
            'Cool for 5 minutes before eating.'
          ]
        },
        {
          title: 'Pan (No Oven, No problem!)',
          steps: [
            'Place a stand inside a pan, cover, and preheat on low–medium heat (5 mins).',
            'Line a heat-safe plate with baking paper and place Cutesies cookie dough on it.',
            'Put the plate on the stand, cover, and bake 15–20 minutes on low–medium heat.',
            'Rest for 5 minutes before serving.'
          ]
        }
      ],
      tip: 'Cookies firm up as they cool. Do not overbake.'
    },
    ingredients: [
      'All-purpose flour (maida)',
      'Brown sugar',
      'Butter',
      'Milk',
      'Water',
      'Chocolate',
      'Baking powder',
      'Baking soda',
      'Vanilla essence',
      'Salt'
    ],
    allergens: 'Contains gluten and dairy.',
    feedbackUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDOKmka9-LuD1MJT2cMcACFjEToZQcw4s5P8nYT46E6poAkg/viewform?embedded=true'
  },
  'pancake-batter': {
    id: 'pancake-batter',
    name: 'Pancake Batter',
    tagline: 'Fluffy Goodness in a Bottle',
    color: 'var(--color-secondary)', // Yellowish/Blueish
    heroImage: '🥞',
    howToUse: {
      title: 'How to Make Cutesies Pancakes',
      methods: [
        {
          title: 'Pancake Batter (Cone)',
          steps: [
            'Cut the tip of the cone to control pancake size: Small cut → small pancakes, Bigger cut → bigger pancakes',
            'Preheat a pan on low heat.',
            'Squeeze the batter onto the pan.',
            'Cook for 1½ minutes, then flip.',
            'Cook the other side for 1 minute.',
            'Remove when golden and serve warm.'
          ]
        }
      ],
      tips: [
        {
          title: '🍫 Chocolate Syrup Tip',
          content: [
            'If the syrup becomes thick or frozen, add 1 spoon of boiling milk and stir.',
            'If needed, add 1 more spoon only.',
            'Do not add more than 2 spoons of milk.'
          ]
        }
      ],
      note: 'Cook pancakes on low heat for best results.'
    },
    ingredients: [
      'Refined flour (maida)',
      'Butter',
      'Milk',
      'Condensed milk',
      'Baking powder',
      'Vanilla essence',
      'Chocolate'
    ],
    allergens: 'Contains gluten and dairy.',
    feedbackUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDOKmka9-LuD1MJT2cMcACFjEToZQcw4s5P8nYT46E6poAkg/viewform?embedded=true'
  }
};
