import React, { useEffect, useState } from 'react';
import { AllPackageFood } from '../../database/package';
import catImage from './../../image/pack/Object.png'
import './Cards.scss';

export const Cards = () => {
    // Коллекция выбранных товаров
    const [packBasket, setPackBasket] = useState([])

    const [packages, setPackages] = useState([])

    useEffect(() => {
        const packageDataBase = AllPackageFood()
        setPackages(packageDataBase)
    }, []);

    const handleClickBasket = (pack) => {
        const { id } = pack
        if (packBasket.find(x => x.id === id)) {
            setPackBasket(packBasket.filter(i => i.id !== id))
        } else {
            setPackBasket(prev => [...prev, pack])
        }
    }
    console.log(packBasket)
    return (
        <div>
            <p className='cards__question'>Ты сегодня покормил кота?</p>
            <ul className='cards'>
                {packages.map((pack) => {
                    const { id, name, description, flavor, offer, weight } = pack;
                    const selected = packBasket.find(x => x.id === id);
                    return (
                        <li className={selected ? 'cards__item cards__item_selected' : 'cards__item'} key={id} onClick={(e) => handleClickBasket(pack)}>
                            <div className={selected ? 'cards__top cards__top_selected' : 'cards__top'}>
                                <h2 className='cards__title'>Сказочное заморское яство</h2>
                            </div>
                            <div className={selected ? 'cards__bottom cards__bottom_selected' : 'cards__bottom'}>
                                <div className='cards__main'>
                                    <div>
                                        <h1 className='cards__name'>{name}</h1>
                                        <p className='cards__flavor'>{flavor}</p>
                                    </div>
                                    <div>
                                        <p className='cards__description'>{description}</p>
                                        <p className='cards__offer'>{offer}</p>
                                    </div>
                                </div>
                                <div className={selected ? 'cards__ellipse cards__ellipse_selected' : 'cards__ellipse'}>
                                    <span className='cards__ellipse_weight'>{weight}</span>
                                    <span className='cards__ellipse_kg'>кг</span>
                                </div>
                            </div>
                            <img className='cards__img' src={catImage} alt='Cat' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}