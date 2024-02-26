import './cart.scss'
const Cartbottom = () => {
    const imag = [
        { 
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png'
        },
        {
            imgUrl: 'https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png'
        }

    ]

    return (
        <div>
            <div className="cart-bottom">
                <div>
                    {
                        imag.map((val) => {
                            return (<img src={val.imgUrl} alt="images" key={Math.random()} />)
                        })
                    }
                </div>
                <div>
                    Need Help ? Contact Us
                </div>
            </div>

        </div>
    )
}

export default Cartbottom;