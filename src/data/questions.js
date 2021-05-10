import uuid from 'react-uuid';

const questions = [
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'What is global warming?',
        correct_answer:'a gradual increase in the earths temperature generally due to the greenhouse effect caused by increased levels of carbon dioxide, CFCs, and other pollutants.',
        incorrect_answers: [
            ' reduction in emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere.',
            'is the total greenhouse gas emissions caused by an individual, event, organization, service, etc.',
            'is the process of capturing waste carbon dioxide, transporting it to a storage site,'
        ]

    },
    {
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'Whats in Atmosphere ?',
        correct_answer:'about 78 percent nitrogen, 21 percent oxygen, 0.9 percent argon, and 0.1 percent other gases.',
        incorrect_answers: [
            ' reduction in emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere.',
            'is the total greenhouse gas emissions caused by an individual, event, organization, service, etc.',
            'is the process of capturing waste carbon dioxide, transporting it to a storage site,'
        ]

    },
    /*{
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'True or False. No place on Earth is colder today than it was 100 years ago',
        correct_answer:'False',
        incorrect_answers: [
            'True'
        ]

    },
    /*{
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'True or False. Compared to other greenhouse gases, carbon dioxide is the most effective at trapping heat near the Earth\'s surface',
        correct_answer:'False',
        incorrect_answers: [
            'True'
        ]

    },
    {
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'True or False. Some kinds of pollution in the atmosphere can act to cool the planet by reducing the amount of solar radiation that reaches Earth\'s surface',
        correct_answer:'True',
        incorrect_answers: [
            'False'
        ]

    },*/
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'Which of these natural events affect the climate?',
        correct_answer:'All 3 answers',
        incorrect_answers: [
            'Thawing permafrost ',
            'The path of the Earth around the sun',
            'Volcanic eruptions '
        ]

    },
    {
        id: uuid(),
        category: 'Atomsphere',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'Which of these greenhouse gases is most abundant in the atmosphere?',
        correct_answer:'Water vapour',
        incorrect_answers: [
            'Carbon dioxide ',
            'Methane ',
            'Nitrous oxide '
        ]

    },
    {
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'Which of these countries has the highest per capita carbon dioxide emissions?',
        correct_answer:'Australia',
        incorrect_answers: [
            'United States',
            'Saudi Arabia ',
            'China'
        ]

    },
    {
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'Which of the following activities contributes the most to carbon emissions globally? ',
        correct_answer:'Energy supply ',
        incorrect_answers: [
            'Agriculture',
            'TransportÂ ',
            'ForestryÂ '
        ]

    },
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'Which of the following changes in climate has NOT already occurred?',
        correct_answer:'A decrease in the sea ice around Antarctica',
        incorrect_answers: [
            '0.74Â°C increase in average global temperature over the last century',
            '0.17m rise in sea level during the 20th century',
            'Fewer cold days and frosts, and more frequent heatwaves over the last 50 years'
        ]

    },
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'If we stopped burning fossil fuels today, what would happen to the climate? ',
        correct_answer:'Temperatures would continue to rise for at least 10 years, and then would level off',
        incorrect_answers: [
            'Earth\'s average temperature would immediately cool',
            'Temperatures would slowly cool over the next 5 years',
            'Temperatures would fluctuate, but stay the same on average'
        ]

    },
    {
        id: uuid(),
        category: 'Plants & Animals',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'If the global temperature rises by over 1.5Â°C what percentage of species will be at risk of extinction? ',
        correct_answer:'15-20% â€“ at least one in six species',
        incorrect_answers: [
            '100% â€“ all species will be at risk',
            '0% â€“ no species will be at risk',
            '10-15% â€“ one in ten species will be at risk'
        ]

    },
    {
        id: uuid(),
        category: 'Plants & Animals',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'What is the leading cause of coral bleaching?',
        correct_answer:'Warm water',
        incorrect_answers: [
            'CO2 dissolved in ocean water ',
            'Sunscreen in the water',
            'Ocean pollution ',
            'Sediment stirred up by extreme storms '
        ]

    },
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'What is a carbon footprint? ',
        correct_answer:'A way to measure the effect of the amount of carbon we use has on the environment',
        incorrect_answers: [
            'When you step in pencil lead',
            'The effect on fossil fuels on the surrounding land ',
            'Alien footprints'
        ]

    },
    {
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'In which European city did 196 nations agree on a landmark global plan to curb climate change in December 2015?',
        correct_answer:'Paris ',
        incorrect_answers: [
            'ViennaÂ ',
            'New Delhi ',
            'Athens'
        ]

    },
    /*{
        id: uuid(),
        category: 'Weather & Climate',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'True or False. As climate warms, we will no longer have snowstorms and cold days',
        correct_answer:'False',
        incorrect_answers: [
            'True',
        ]

    },*/
    {
        id: uuid(),
        category: 'Energy',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'Which of these is NOT a renewable energy source?',
        correct_answer:'Oil',
        incorrect_answers: [
            'Hydroelectric',
            'Wind',
            'Geothermal'
        ]

    },
    {
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'medium',
        question: 'Which of the following gases does NOT trap heat?',
        correct_answer:'Nitrogen',
        incorrect_answers: [
            'Carbon Dioxide',
            'Water Vapour',
            'Methane'
        ]

    },
    /*{
        id: uuid(),
        category: 'Atmosphere',
        type: 'multiple',
        images: [],
        difficulty: 'easy',
        question: 'Some kinds of pollution in the atmosphere can act to cool the planet by reducing the amount of solar radiation that reaches Earth\'s surface',
        correct_answer:'True',
        incorrect_answers: [
            'False',
        ]

    },*/
    {
        id: uuid(),
        category: 'Plants & Animals',
        type: 'multiple',
        images: [],
        difficulty: 'hard',
        question: 'What percentage of scientists agree that climate change is likely generated by human activities? ',
        correct_answer:'97%',
        incorrect_answers: [
            '64%',
            '12%',
            '88%'
        ]

    },
    //New Questions Here...
]

export default questions;