
import { useLoaderData } from 'react-router-dom';
import PageCard from './PageCard';

const Pages = () => {
    const {data} = useLoaderData()
    console.log(data);
    
    
    return (
        <div className=''>
            {
                data.map(singlepage=> <PageCard page={singlepage} key={singlepage._id}></PageCard>)
                
            }
            
        </div>
    );
};

export default Pages;