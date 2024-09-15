import { services } from '../data'
import { useState } from 'react';
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const hideService = (id) => {
    setServicesData(prevServices => prevServices.filter(service => service.id !== id));
  };

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onHide={() => hideService(service.id)} />
        })}
      </div>
    </section>
  )
}

export default Services;