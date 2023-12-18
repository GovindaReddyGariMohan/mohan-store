import React from "react";
import './plp.scss'
import { useNavigate, useLocation, Link } from 'react-router-dom';
const Plpleft = ({ sub, setSub }) => {
    const plpLeft = sub
    const items = plpLeft
    const navigate = useNavigate();
    const pathName = useLocation().pathname.split('/')[3]
    const handleChange = (items) => {
        navigate(`/shop/${items}/${pathName}`)
    }

    const catogory = [
        {
            item: 'men'
        },
        {
            item: 'womens'
        },
    ]
    const price = [

        {
            start: '299',
            end: '499'
        },
        {
            start: '501',
            end: '999'
        },
        {
            start: '1405',
            end: '2530'
        },
    ]
    const color = [
        {
            item: 'Black',
            color: 'black',
            border: 'none'
        },
        {
            item: 'Red',
            color: 'red',
            border: 'none'
        },
        {
            item: 'Navy Blue',
            color: 'navy',
            border: 'none'
        },
        {
            item: 'Blue',
            color: 'blue',
            border: 'none'
        },
        {
            item: 'Grey',
            color: 'grey',
            border: 'none'
        },
        {
            item: 'White',
            color: '',
            border: 'solid 1px'
        },
        {
            item: 'Charcoal',
            color: 'black',
            border: 'none'
        },
        {
            item: 'Multi',
            color: 'wheat',
            border: 'none'
        },
        {
            item: 'Green',
            color: 'green',
            border: 'none'
        },
        {
            item: 'Orange',
            color: 'orange',
            border: 'none'
        },
        {
            item: 'Olive',
            color: 'greenyellow',
            border: 'none'
        },
        {
            item: 'Lime Green',
            color: 'green',
            border: 'none'
        }
    ]
    const discount = [
        {
            discountRange: '10'
        },
        {
            discountRange: '20'
        },
        {
            discountRange: '30'
        },
        {
            discountRange: '40'
        },
        {
            discountRange: '50'
        },
        {
            discountRange: '60'
        },
        {
            discountRange: '70'
        },
        {
            discountRange: '80'
        }
    ]
    const description = items.map(q => q.description)
    const filterDiscription = description.filter((q, idx) => description.indexOf(q) === idx)
    const title = plpLeft.map(val => val.title)
    const filterTitle = title.filter((val, item) => title.indexOf(val) === item)
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const handleCheckbox = (d, f) => {
        setSub(plpLeft.filter((val) => val.price > d && val.price < f))
    }
    const filterBrand = (items) => {
        setSub(plpLeft.filter((value) => value.description === items))
    }
    if (plpLeft.length === 0) {

        return (
            <div >
                <div >There is no items hear,search different items</div>
                <Link to='/' className="no-items-there">clickhear</Link>
            </div>
        )
    }
    else {
        return (
            <div className="plp-left">
                <div className="catogoryes">
                    {
                        catogory.map((val) => {
                            return (
                                <div className="catogory-items" key={Math.random()} onClick={() => handleChange(val?.item)}>
                                    <input type="radio" name="catogoryes" id={val.item} value={val.item} />
                                    <label htmlFor={val.item}>{Capitalize(val?.item)}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="catogoryes">
                    <h3>CATEGORIES</h3>
                    <div>
                        {
                            filterDiscription.length && filterDiscription && filterDiscription?.map((val, index) => {
                                return (
                                    <div key={index} onClick={() => filterBrand(val)}>
                                        <input type="checkbox" id={val} />
                                        <label htmlFor={val}>{val}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="brand">
                        <h3>BRAND</h3>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="catogoryes">
                        {
                            plpLeft && filterTitle?.map((val, index) => {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" id={val} />
                                        <label htmlFor={val}>{val}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="price">
                    <h3>PRICE</h3>
                    <div>
                        {

                            price.map((val, index) => {
                                return (
                                    <div key={index} onClick={() => handleCheckbox(val.start, val.end)}>
                                        <input type="checkbox" id={val.start} />
                                        <label htmlFor={val.start}>Rs.{val.start} to Rs.{val.end}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="brand">
                        <h3>COLOR</h3>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="catogoryes">
                        {
                            color.map((val, index) => {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" id={val.item} />
                                        <span className="border-baground" style={{ backgroundColor: `${val.color}`, border: `${val.border}` }}></span>
                                        <label htmlFor={val.item}>{val.item}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="discount-range">
                    <h3>DISCOUNT RANGE</h3>
                    <div>
                        {
                            discount.map((val, index) => {
                                return (<div key={index}>
                                    <input type="radio" name="catogoryes" id={val.discountRange} />
                                    <label htmlFor={val.discountRange}>{val.discountRange}% and above</label>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Plpleft;