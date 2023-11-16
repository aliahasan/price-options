import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='flex flex-col  bg-sky-500 rounded-lg p-4 text-white'>
           <h2 className='text-center'><span className='text-6xl font-extrabold'>{price}</span>
           <span className='text-2xl'>/month</span>
           </h2>
           <h4 className='text-3xl text-center my-5'>{name}</h4>
         <div className='text-justify pl-6 flex-grow'>
         {
            features.map((feature , index) => <p className='flex  items-center' key={index}><FaRegCheckCircle className='mr-2'></FaRegCheckCircle>{feature}</p>)
           }
         </div>
       <div className='text-center my-6' >
       <button className=' text-black bg-white px-4 py-2 rounded hover:bg-green-600 duration-500'>Buy Now</button>
       </div>
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}

export default PriceOption;