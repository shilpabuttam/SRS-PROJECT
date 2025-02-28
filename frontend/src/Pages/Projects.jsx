import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
function Projects() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    useEffect(() => {
        if (count1 >= 100) {
            return true
        };
        const interval = setInterval(() => {
            setCount1(count1 => count1 + 1)
        }, 10)
        return () => clearInterval(interval);
    }, [count1])
    useEffect(() => {
        if (count2 >= 25) {
            return true
        };
        const interval = setInterval(() => {
            setCount2(count2 => count2 + 1)
        }, 50)
        return () => clearInterval(interval);
    }, [count2])
    useEffect(() => {
        if (count3 >= 50) {
            return true
        };
        const interval = setInterval(() => {
            setCount3(count3 => count3 + 1)
        }, 10)
        return () => clearInterval(interval);
    }, [count3])
    return (
        <>
        <div className='container1'>
        <div className='heading'>
            <h1>What Sets Us Apart
            </h1>
        </div>
        <div className='mainDiv'>
           <div>
               <Card style={{ width: '18rem' }}>
                   <Card.Body>
                       <h1><span style={{color:'#59CE8F',fontWeight:'650'}}>{count1}K+</span> <span style={{color:'#525E75',fontWeight:650}}>Ongoing</span></h1>
                       <p>We leverage the latest technologies and tools to deliver state-of-the-art solutions. Our team stays updated with industry trends and innovations to provide the best possible outcomes.</p>
                   </Card.Body>
               </Card>
           </div>
           <div>
           <Card style={{ width: '18rem' }}>
           <Card.Body>
               <h1><span style={{color:'#3AA6B9',fontWeight:'650'}}> {count3}K+</span> <span style={{color:'#525E75',fontWeight:650}}>Delivery</span></h1>
               <p>We believe that every business is unique, and so are their needs. Our customized solutions are tailored to meet the specific requirements of each client, ensuring that they get the best results.</p>
               </Card.Body>
               </Card>
           </div>
           <div>
           <Card style={{ width: '18rem' }}>
           <Card.Body>
               <h1><span style={{color:'#FF6969',fontWeight:'650'}}>{count2}K+</span> <span style={{color:'#525E75',fontWeight:650}}>Latest</span></h1>
               <p>We work closely with our clients, involving them in every step of the process. Our collaborative approach ensures that we understand their vision and deliver solutions that align with their goals. </p>
               </Card.Body>
               </Card>
           </div>
       </div>
        </div>
      
        </>
        
    )
}

export default Projects;