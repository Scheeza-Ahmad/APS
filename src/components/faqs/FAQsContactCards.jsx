import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaClock } from 'react-icons/fa';

const FAQsContactCards = ({ contactInfo }) => {
    const defaultContactInfo = [
        {
            icon: <FiPhone className="text-secondary text-2xl" />,
            title: "Call Us",
            detail: "+92 300 123 4567",
            description: "Available 8 AM - 4 PM, Monday to Friday"
        },
        {
            icon: <FiMail className="text-secondary text-2xl" />,
            title: "Email Us",
            detail: "info@alipublicschool.edu.pk",
            description: "Response within 24 hours"
        },
        {
            icon: <FaClock className="text-secondary text-2xl" />,
            title: "Visit Office",
            detail: "University Town, Peshawar",
            description: "Appointments recommended"
        }
    ];

    // If contactInfo is provided as string names, convert to icons
    const getContactIcons = () => {
        if (!contactInfo || contactInfo.length === 0) return defaultContactInfo;
        
        return contactInfo.map(info => {
            let icon;
            switch(info.icon) {
                case 'phone':
                    icon = <FiPhone className="text-secondary text-2xl" />;
                    break;
                case 'mail':
                    icon = <FiMail className="text-secondary text-2xl" />;
                    break;
                case 'clock':
                    icon = <FaClock className="text-secondary text-2xl" />;
                    break;
                default:
                    icon = <FiPhone className="text-secondary text-2xl" />;
            }
            
            return {
                ...info,
                icon
            };
        });
    };

    const contacts = getContactIcons();

    return (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((info, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-secondary/30 transition-all duration-500 hover:-translate-y-1"
                >
                    <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                            {info.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">{info.title}</h3>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                    </div>
                    <p className="text-primary font-semibold text-lg">{info.detail}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQsContactCards;