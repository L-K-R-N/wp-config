import React from 'react';
import me from '@/assets/3.jpg';
import Iconf from '@/assets/1.svg'
import cl from './About.module.scss'
const About = () => {    



    return (
        <div data-testid="App.DataTestId">
            Aboutaaaa
            <Iconf color='green' width={300} className={cl.icon}/>
            {me}
        </div>
    );
};

export default About