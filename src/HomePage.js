import styles from './HomePage.module.css';
import Button from './components/Button';
import BoxFlex from './components/BoxFlex';
import themes from './components/themes';
//import { setConfiguration } from 'react-grid-system';
//import { Container, Row, Col } from 'react-grid-system';
//setConfiguration({ maxScreenClass: 'xl' });

const HomePage = () => {
  return (
    <div className={styles.home}>
      <BoxFlex
        w={'33%'}
        h={700}
        fD={'column'}
      >
        <BoxFlex
          w={300}
          h={300}
          fD={'column'}
          color={themes.primaryColor}
          className={styles.logo}
        >
          <h1>@jossid</h1>
        </BoxFlex>
        <BoxFlex w={300} h={300} fD={'column'} color={themes.primaryColor} className={styles.dates}>
          <h1>Josep Valls</h1>
          <h3> FullStack Web Developer </h3>
          <h5>BootCamp Web 13 en KeepCoding</h5>
        </BoxFlex>
      </BoxFlex>
      <BoxFlex
        w={'33%'}
        h={700}
        fD={'column'}
      >
        <Button />
        <Button />
      </BoxFlex>     
      <BoxFlex
          w={'33%'}
          h={700}
          fD={'column'}
          color={themes.primaryColor}
          className={styles.projects}
        >
        <BoxFlex
        w={300}
        h={300}
        fD={'column'}
        className={styles.links}
      >
          <h1>HOLA</h1>
        </BoxFlex>
      </BoxFlex>

    </div>
  );
};

export default HomePage;
