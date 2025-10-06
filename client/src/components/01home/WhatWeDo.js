import React from "react";
import { motion } from "framer-motion";

function What() {
    return (
        <motion.div 
            className="w-11/12 mx-auto py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">What We Do</h1>
                <ul className="space-y-6">
                    <motion.li 
                        className="text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        At Tactical Panthers, our mission is to provide comprehensive and cutting-edge security solutions that empower our clients to
                        thrive in a secure environment. With a focus on delivering excellence, we offer a wide range of services tailored to meet the
                        diverse needs of businesses, organizations, and individuals.
                    </motion.li>
                    <motion.li 
                        className="text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Our expertise spans across various domains, including corporate security, event management, executive protection, and more. We
                        specialize in assessing risks, devising strategic security plans, and implementing state-of-the-art technology to ensure the
                        safety of people, assets, and properties. From access control and surveillance systems to security personnel deployment, we
                        combine advanced tools with a skilled team to create a holistic security ecosystem.
                    </motion.li>
                </ul>
            </div>
        </motion.div>
    );
}

export default What;
