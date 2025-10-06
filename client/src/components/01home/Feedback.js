import React from "react";
import { motion } from "framer-motion";

function Feedback() {
    return (
        <motion.div 
            className="w-11/12 mx-auto py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
             <br/><br/><br/>
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Feedback From Clients</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.li 
                    className="bg-gray-100 shadow-lg rounded-2xl p-6 text-gray-700 leading-relaxed flex flex-col justify-center items-center h-100 w-100 mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    "Tactical Panthers' team of bouncers and guards has consistently demonstrated professionalism and a strong sense of responsibility. Their proactive approach to security has given us peace of mind knowing that our property and people are in safe hands." 
                    <span className="font-bold mt-2">- Patson Motors</span>
                </motion.li>
                <motion.li 
                    className="bg-gray-100 shadow-lg rounded-2xl p-6 text-gray-700 leading-relaxed flex flex-col justify-center items-center h-100 w-100 mx-auto"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    "The level of trust and confidence we have in Tactical Panthers is a testament to their reliability and the quality of their services. Their presence has undoubtedly contributed to creating a secure environment for our business, staff, and clients." 
                    <span className="font-bold mt-2">- K.L.E Hospital</span>
                </motion.li>
                <motion.li 
                    className="bg-gray-100 shadow-lg rounded-2xl p-6 text-gray-700 leading-relaxed flex flex-col justify-center items-center h-100 w-100 mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    "Over the years, Tactical Panthers has consistently exceeded our expectations. Their ability to adapt to our evolving security needs, coupled with their quick response times and efficient communication, has been invaluable to our operations." 
                    <span className="font-bold mt-2">- Jogin Electricals</span>
                </motion.li>
            </ul>
        </motion.div>
    );
}

export default Feedback;
