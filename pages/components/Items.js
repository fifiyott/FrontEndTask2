import Image from 'next/image'
const Items = (props) => {
    return (
      <div >
        Product Brand : {props.brandname} <br/>
        Product Picture : <Image src={props.brandimage} width={80} height={80}></Image>
      <hr/>
      </div>
    
    );
  }
   
  export default Items;