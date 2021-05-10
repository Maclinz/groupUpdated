import uuid from 'react-uuid';
import climate1 from '../img/content/climate.png';
import sphere_energy from '../img/content/sphere_energy.png';
import climate_change from '../img/content/climate_change.png';
import greenhouse from '../img/content/greenhouse.png';
import greenhouse_effect from '../img/content/greenhouse_effect.jpg';

const content = [
    {
        id: uuid(),
        category: 'Weather & Climate',
        images: [climate1, sphere_energy],
        cat_bg: 'var(--blue-color-light)',
        link: '',
        title: 'Weather & Climate',
        title2: 'How Do We Know the Climate Is Changing?',
        text1: 'Weather is a specific event—like a rainstorm or hot day—that happens over a few hours, days or weeks. Climate is the average weather conditions in a place over 30 years or more.',
        text2: 'Scientists have been observing Earth for a long time. They use NASA satellites and other instruments to collect many types of information about Earths land, atmosphere, ocean and ice. This information tells us that Earths climate is getting warmer.'
    },
    {
        id: uuid(),
        category: 'Big Questions',
        images: [climate_change],
        cat_bg: 'var(--green-color)',
        link: 'https://climatekids.nasa.gov/climate-change-meaning/',
        title: 'What is Climate Change?',
        title2: 'How Do We Know the Climate Is Changing?',
        text1: `Climate change describes a change in the average conditions — such as temperature and rainfall — in a region over a long period of time. Climate change describes a change in the average conditions — such as temperature and rainfall — in a region over a long period of time. For example, 20,000 years ago, much of the United States was covered in glaciers.
                In the United States today, we have a warmer climate and fewer glaciers. Global climate change refers to the average long-term changes over the entire Earth. These include warming temperatures and changes in precipitation, as well as the effects of Earth’s warming, such as:`,
        text1_bullets: ['Rising sea levels','Shrinking mountain glaciers', 'Ice melting at a faster rate than usual in Greenland, Antarctica and the Arctic', 'Changes in flower and plant blooming times.'],
        text2: 'Scientists have been observing Earth for a long time. They use NASA satellites and other instruments to collect many types of information about Earths land, atmosphere, ocean and ice. This information tells us that Earths climate is getting warmer.'
    },
    {
        id: uuid(),
        category: 'Big Questions',
        images: [greenhouse, greenhouse_effect],
        cat_bg: 'var(--blue-color)',
        link: 'https://climatekids.nasa.gov/climate-change-meaning/',
        title: 'What Is the Greenhouse Effect?',
        title2: 'How does the greenhouse effect work?',
        text1: `The greenhouse effect is a process that occurs when gases in 
                Earth's atmosphere trap the Sun's heat. This process makes Earth much warmer than it would be without an atmosphere. The greenhouse effect is one of the things that makes Earth a comfortable place to live.`,
        text1_bullets: [],
        text2: `As you might expect from the name, the greenhouse effect works … like a greenhouse! A greenhouse is a building with glass walls and a glass roof. Greenhouses are used to grow plants, such as tomatoes and tropical flowers.
                A greenhouse stays warm inside, even during the winter. In the daytime, sunlight shines into the greenhouse and warms the plants and air inside. At nighttime, 
                it's colder outside, but the greenhouse stays pretty warm inside. 
                That's because the glass walls of the greenhouse trap the Sun's heat.`
    },
]

export default content;