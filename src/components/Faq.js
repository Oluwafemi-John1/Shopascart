import React from 'react'

function Faq() {
  return (
    <>
    <h1 className="text-center mt-5">FAQ</h1>
    <p className="text-center">Have questions? We're here to help.</p>

    <section className="container px-5 my-2" id='accordion'>
        <div className="accordion accordion-flush px-4" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h4>How does Shopascart work?</h4>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"      data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Shopascart helps you save time and money by connecting you with a personal shopper in your area. You can shop at your favorite stores and get your groceries delivered to your door step.</div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <h4>How do I become a Shopascart Shopper</h4>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">To become a Shopascart Shopper, you need to register with us. You can do this by clicking on the button below.
                <a href="" className='text-decoration-none'><p style={{color:"#D92D20"}}>Become a Shopper</p></a>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h4>Why is Shopascart not available in my area?</h4>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Shopascart is available to only select areas of Lagos. We are working to expand our reach to other parts of the country.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h4>How do I pay for my order?</h4>
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">You can pay with your debit or credit card.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h4>What happens if something is out of stock?</h4>
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <p>You can always set a substitution preference for when something is out of stock as well as chat with your shopper to see if they have any other available options.</p>
                    <p>You can tell your shopper to:</p>
                    <p>- Pick a substitution: Your shopper will contact you directly and you can pick a substitution for the item that<br />is out of stock.</p>
                    <p>- Find the best substitute: Your shopper will find the best substitute for you.</p>
                    <p>- Don't substitute: Your shopper will not substitute anything and a refund will be issued for the item.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h4>Is there a limit to the amount of orders I can place in a day?</h4>
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">No, you can place as many orders as you want in a day.</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Faq