import { Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Foother = () => {
    return (
        <div className="footer">
            <Typography variant="h3" sx={{ color: 'white' }}>
                Assignment-12
            </Typography>
            <Typography variant="h6" sx={{ color: 'white' }}>
                Md. Amanullah Parvez, emailtoamanullah@gmail.com
            </Typography>

            <Typography variant="h4">
                <AiFillFacebook style={{ color: '#3b5998' }} />
                <AiFillTwitterSquare style={{ color: '#1DA1F2' }} />
                <AiFillLinkedin style={{ color: '#0077b5' }} />
                <AiFillGithub style={{ color: 'white' }} />
            </Typography>

        </div>
    );
};

export default Foother;