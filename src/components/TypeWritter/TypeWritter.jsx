import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter"



const TypeWritter = () => {
    return (
        <div className="mt-10 mb-10 border-dashed border-t border-indigo-500">
            <div className="text-5xl p-10 text-orange-500 text-center font-bold">
                <Typewriter
                    words={['Jute & Wooden Crafts Websites']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={350}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>
            <div>
                <p className="ml-20 mt-10 mb-10">
                    Explore a wide range of eco-friendly and sustainable jute and wooden crafts. From intricately woven jute baskets to beautifully carved wooden sculptures, discover unique handcrafted pieces for your home and lifestyle.
                </p>
            </div>
            <div className=" flex justify-around">
                <div>
                    <h1 className="text-green-800 text-6xl  font-extrabold">100+</h1>
                    <h4 className="text-sky-600 text-4xl font-bold">Card Item</h4>
                </div>
                <div className="">
                    <h1 className="text-green-600 text-6xl  font-extrabold">500+</h1>
                    <h4 className="text-sky-800 text-4xl font-bold">Registers</h4>
                </div>
                <div>
                    <h1 className="text-green-400 text-6xl  font-extrabold">1200+</h1>
                    <h4 className="text-sky-900 text-4xl font-bold">Visitors</h4>
                </div>
            </div>

            

        </div>
    );
}

export default TypeWritter
