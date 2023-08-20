import { LiaCommentAltSolid  } from 'react-icons/lia';
import { AiOutlineEye  } from 'react-icons/ai';
import { FcLike  } from 'react-icons/fc';
import { PiShareLight  } from 'react-icons/pi';
import { useEffect, useState } from 'react';



const  Products = (props) => {
    const [incommingData , setIncommingData] = useState()

    useEffect(() => {
        setIncommingData(props.data)
    },[props.data])


    const date = (timeStamp) =>{
        return new Intl.DateTimeFormat('fa-IR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)

    }

    

	return (
        <>
                { incommingData ?
                incommingData.map((item, key) => {
                    return  <div key={item.id} className='product-card'>
                    <section className='product-card__title'>
                        <div className='product-card__title--name'>
                            <b>{item.name +' '+ item.username}</b>
                            <a>{item.username}</a>
                        </div>
                        <img className='product-card__title--profileImg' src='./src/assets/profile.jpg'/>
                    </section>
                    <section className='product-card__content'>
                        <img className='product-card__content--previewImg' src="./src/assets/postImage.jpg"></img>
                        <div className='product-card__content--info'>
                            <div className="product-card__content--info--activity">
                                <div><AiOutlineEye size={22}/>2</div>
                                <div><PiShareLight size={22}/>0</div>
                                <div><LiaCommentAltSolid size={22}/>0</div>
                                <div><FcLike size={22}/>2</div>
                            </div>
                            <div className="product-card__content--info--caption">
                                    <p>{date(item.timestamp)}</p>
                                    <p>{item.text}</p>
                            </div>
                        </div>
                    </section>
                    <section className='product-card__buttons'>
                    <button className='product-card__buttons--remove-btn' onClick={() => props.remove(item.id)}>حذف پست</button>
                    </section>
                </div>
                }) : ''}
        </>
	)
}

export default Products
