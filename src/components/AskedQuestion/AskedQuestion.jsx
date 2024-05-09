import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const AskedQuestion = () => {
    return (
        <div className='mt-10 mb-10 border-dashed border-t border-indigo-500'>
            <div className="text-5xl p-10 text-cyan-500 text-center font-bold">
                <Typewriter
                    words={['Everyone Asked Questions']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>
            {/* <div className='p-10'>
                <h1 className='text-center text-rose-950 mt-10 text-5xl font-semibold'>Everyone Asked Questions</h1>
            </div> */}
            <div className="join join-vertical w-full p-10">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-medium">
                        How do I care for my clay-made pottery?
                    </div>
                    <div className="collapse-content">
                        <p>Hand wash with mild soap and water. Avoid sudden temperature changes to prevent cracking. Not suitable for microwave or dishwasher use.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium ">
                        What makes stoneware different from other types of pottery?
                    </div>
                    <div className="collapse-content">
                        <p>Stoneware is fired at higher temperatures, resulting in a denser and more durable finish, making it ideal for everyday use.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        Can I use porcelain pottery in the microwave or oven?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, porcelain pottery is microwave and oven-safe. However, avoid sudden temperature changes to prevent thermal shock.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        Is terra cotta pottery suitable for outdoor use?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, terra cotta pottery is often used outdoors due to its durability and ability to withstand varying weather conditions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        What types of architectural ceramics do you offer?
                    </div>
                    <div className="collapse-content">
                        <p>Our architectural ceramics include custom tiles, decorative panels, and sculptural elements crafted to enhance interior and exterior spaces.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        Do you offer customization options for home decor pottery?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer customization services for home decor pottery. Contact us to discuss your specific requirements and preferences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        How can I place an order for your products?
                    </div>
                    <div className="collapse-content">
                        <p>You can place an order directly through our website or contact us via email or phone for personalized assistance with your purchase.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We offer a 30-day return policy for unused and undamaged items. Please refer to our Returns & Exchanges page for detailed instructions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-medium">
                        <a className="">Do you ship internationally?</a>

                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer international shipping. Shipping rates and delivery times may vary depending on the destination. Please refer to our Shipping Information page for details.</p>
                    </div>
                </div>
            </div>
            {/* <div className='justify-between grid grid-cols-2 p-20 border-spacing-2'>
                <div>
                    <h1 className='text-4xl font-semibold mb-5'>Subscribe to Newsletter</h1>
                    <h2 className='text-2xl font-semibold mt-5 mb-5 text-violet-800'>Provide your email to get email notification when we launch new products or publish new articles
                    </h2>
                </div>
                <div>
                    <div className="join mt-10 p-5">
                        <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                        <button className="btn join-item rounded-r-full ">Subscribe</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AskedQuestion
