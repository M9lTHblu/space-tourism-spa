import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

/*
{
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
*/
export const DestinationNav = () => {
  // const {destinations} = useData();
  // const [active, setActive] = useState(destinations[0].name);

  return (

      <List>
        <li><Link to='moon'>moon</Link></li>
        <li><Link to='mars'>mars</Link></li>
        <li><Link to='titan'>titan</Link></li>
        <li><Link to='europa'>europa</Link></li>
        {/*{destinations.map((item, i) => {*/}
        {/*  const path = item.name.toLowerCase();*/}
        {/*  return (*/}
        {/*      // <li key={i} onClick={() => setActive(item.name)}>*/}
        {/*      //   <Link to={path} $active={active === item.name}>*/}
        {/*      //     {item.name}*/}
        {/*      //   </Link>*/}
        {/*      //   {active === item.name && <Underline />}*/}
        {/*      // </li>*/}
        {/*      */}
        {/*  );*/}
        {/*})}*/}
      </List>

  );
};

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 27px;
`;

// const DestinationLink = styled(Link)`
//   display: block;
//   padding: 8px 0;
//   font-family: var(--condensed);
//   font-size: 14px;
//   line-height: 17px;
//   letter-spacing: 2.3625px;
//   color: ${({$active}) => $active ? 'var(--light)' : 'var(--primary)'};
//   text-decoration: none;
//   text-transform: uppercase;
// `;

const Underline = styled(motion.div)`
  width: 100%;
  height: 3px;
  background-color: var(--light);

`;
