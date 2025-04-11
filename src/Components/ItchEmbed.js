import React from 'react';
import './ItchEmbed.css';

const ItchEmbed = ({ src, title = "Itch.io Game" }) => {
    return (
        <div className="responsive-iframe-container">
            <iframe
                title={title}
                frameBorder="0"
                src={src}
                allowFullScreen
            >
                <a href={src}>{title}</a>
            </iframe>
        </div>
    );
};

export default ItchEmbed;
