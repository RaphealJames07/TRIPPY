
import { Collapse } from 'antd';
import './AboutColl.css'

const items = [
  {
    key: '1',
    label: 'About Trippy',
    children: <p>"Trippy transcends being a mere travel app; it's an open door to transformative journeys. With an unwavering passion for exploration, we're committed to turning your travel dreams into tangible memories. At Trippy, each adventure is meticulously curated to ensure a seamless, unforgettable experience that takes you beyond the ordinary and into the extraordinary realms of the world."</p>,
  },
  {
    key: '2',
    label: 'ABout Our Offers',
    children: <p>Welcome to the heart of Trippy's offerings, a realm where more than deals await. Our offers are pathways to a world of personalized flights, accommodations, and moments. They're meticulously  crafted to grant you not just a place to stay or a flight to catch, but the chance to immerse yourself in unique experiences that define your journey. At Trippy, every offer is an opportunity to create memories that linger long after the journey ends.</p>,
  },
  {
    key: '3',
    label: 'About US',
    children: <p>Trippy's inception sprang from a shared love of exploration. Envisioned by fellow travelers, our commitment is woven into each aspect of our service. From effortless booking to exceptional support, we endeavor to make your journey seamless. We believe in the magic of travel, in its ability to reshape perspectives and broaden horizons. As we chart paths across the world, our goal remains unwavering: to craft a community of explorers who find solace in the vast landscapes of the unknown, knowing that Trippy is a compass guiding them through every adventure.</p>,
  },
];
const Faq = () => <Collapse accordion items={items} size='large'/>;
export default Faq;