import React, {Component} from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';
class Services extends Component{

 constructor(props){
     super(props);
     this.state = {
        services : [
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info:'info 112mn12 m wemrn wemnr mnwe rmne r'

            },
            {
                icon:<FaHiking />,
                title: "Hiking",
                info:'info 112mn12 m wemrn wemnr mnwe rmne r'

            },
            {
                icon:<FaShuttleVan />,
                title: "free shuttle",
                info:'info 112mn12 m wemrn wemnr mnwe rmne r'

            },
            {
                icon:<FaBeer />,
                title: "free Beer",
                info:'info 112mn12 m wemrn wemnr mnwe rmne r'

            },
        ]
     }
 }

 render () {
     return (
         <section className="services">
             <Title title="services" />
             <div className="services-center">
                 {
                     this.state.services.map((item,index) => {
                         return (<article key={index} className="service">
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                         </article>);
                     })
                 }
             </div>
         </section>
     );
 }
}

export default Services;
