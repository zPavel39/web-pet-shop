import React, { useEffect, useState } from 'react';
import { AllPackageFood } from '../../database/package';
import catImage from './../../image/pack/Object.png'
import './Cards.scss';

export const Cards = () => {

    const [packages, setPackages] = useState([])

    useEffect(() => {
        const packageDataBase = AllPackageFood()
        setPackages(packageDataBase)
    }, []);

    return (
        <div>
            <p className='cards__question'>Ты сегодня покормил кота?</p>
            <ul className='cards'>
                {packages.map((pack) => {
                    const { id, name, description, flavor, offer, weight } = pack;
                    return (
                        <li className='cards__item' key={id}>
                            <div className='cards__main'>
                                <h2 className='cards__title'>Сказочное заморское яство</h2>
                                <div>
                                    <h1 className='cards__name'>{name}</h1>
                                    <p className='cards__flavor'>{flavor}</p>
                                </div>
                                <div>
                                    <p className='cards__description'>{description}</p>
                                    <p className='cards__offer'>{offer}</p>
                                </div>
                            </div>
                            <div className='cards__ellipse'>
                                <span className='cards__ellipse_weight'>{weight}</span>
                                <span className='cards__ellipse_kg'>кг</span>
                            </div>
                            <img className='cards__img' src={catImage} alt='Cat' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}