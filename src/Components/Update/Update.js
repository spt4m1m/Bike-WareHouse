import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Update = () => {
    const [bike, setBike] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/bikes/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [id])
    // console.log(bike.name);
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME :</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{bike.name}</h1>
                            <div class="flex mb-4">
                                <p class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</p>
                            </div>
                            <p class="leading-relaxed mb-4">{bike.description}</p>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Splier</span>
                                <span class="ml-auto text-gray-900">SP Bike Suplier</span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Price</span>
                                <span class="ml-auto text-gray-900">{bike.price} tk</span>
                            </div>
                            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span class="text-gray-500">Quantity</span>
                                <span class="ml-auto text-gray-900">{bike.quantity}</span>
                            </div>
                            <div class="flex">
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delivered</button>

                            </div>
                        </div>
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={bike.img} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Update;