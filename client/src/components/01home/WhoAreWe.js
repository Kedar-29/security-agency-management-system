import React from "react";
import { motion } from "framer-motion";

function Who() {
    return (
        <motion.div 
            className="feedback-container w-11/12 mx-auto py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="feedback-content bg-white shadow-lg rounded-2xl p-8">
                <h1 className="feedback-title text-3xl font-bold text-center mb-6 text-gray-800">
                    Who We Are
                </h1>
                <ul className="feedback-list space-y-6">
                    <motion.li 
                        className="feedback-item text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        We are your dedicated partners in protection. With a deep-rooted commitment to safeguarding our clients' assets and peace of
                        mind, we have forged a reputation as a trusted name in the security industry. Our team is composed of highly trained
                        professionals with diverse backgrounds in security, law enforcement, and risk management.
                    </motion.li>
                    <motion.li 
                        className="feedback-item text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        What defines us is not only our expertise but also our genuine care for the well-being of our clients. With a focus on proactive
                        risk assessment and rapid response, we stand as your proactive defense against potential threats. At Tactical Panthers, our
                        mission is to provide a sense of security that empowers individuals, businesses, and communities to thrive without fear. Join us
                        in shaping a safer future.
                    </motion.li>
                </ul>
            </div>
        </motion.div>
    );
}

export default Who;
