import React from "react";
import { motion } from "framer-motion";

export default function SideElements({ email, socialLinks, onIconClick, onEmailClick }) {
    return (
        <>
            {/* Left Side - Social Icons (Desktop) */}
            <div className="hidden lg:flex fixed left-6 bottom-0 z-50 flex-col items-center gap-5" style={{ position: 'fixed' }}>
                <div className="flex flex-col gap-5">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                                whileHover={{ y: -3, scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => onIconClick && onIconClick(social.label)}
                                aria-label={social.label}
                            >
                                {social.isCustom ? (
                                    <Icon size={20} />
                                ) : (
                                    <Icon size={20} strokeWidth={2} />
                                )}
                            </motion.a>
                        );
                    })}
                </div>
                <div className="w-px h-24 bg-gray-300"></div>
            </div>

            {/* Social Icons Footer (Mobile Only) */}
            <div className="flex lg:hidden fixed bottom-0 left-0 w-full z-50 justify-center items-center bg-white py-2 gap-6" style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.05)' }}>
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onIconClick && onIconClick(social.label)}
                            aria-label={social.label}
                        >
                            {social.isCustom ? (
                                <Icon size={24} />
                            ) : (
                                <Icon size={24} strokeWidth={2} />
                            )}
                        </motion.a>
                    );
                })}
            </div>

            {/* Right Side - Email */}
            <div className="hidden lg:flex fixed right-6 bottom-0 z-50 flex-col items-center gap-4" style={{ position: 'fixed' }}>
                <motion.a
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300 text-sm font-medium"
                    style={{ writingMode: "vertical-rl" }}
                    whileHover={{ y: -3 }}
                    onClick={onEmailClick}
                >
                    {email}
                </motion.a>
                <div className="w-px h-24 bg-gray-300"></div>
            </div>
        </>
    );
}
