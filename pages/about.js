// dependency imports
import React, { Fragment, useEffect } from 'react';
import SenseMainLayout from '../layouts/sense-main-layout';
import { useDispatch } from 'react-redux';

// redux imports
import {setBackgroundImage, setBackgroundContent} from '../redux/ui-store/sense-main-header-store/actions/sense-main-header-background-actions';

// app components imports
import MainHeaderContent from '../components/app-component/sense-about-page-components/main-header-content/main-header-content';


const about = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setMainHeaderBackgroundImage();
    }, []);

    // sets main header background image
    const setMainHeaderBackgroundImage = () => {
        dispatch(setBackgroundImage('/images/sense-header-bg2.png'));
        dispatch(setBackgroundContent(MainHeaderContent));
    }

    // jsx page content
    return (
        <Fragment>
            <SenseMainLayout 
                pageTitle='about us' 
                pageDescription='This is the about page'
                mainHeaderContent='hello'
            >
                <div style={{ position:'relative', height: '250px' }}>
                    Feature section
                </div>
            </SenseMainLayout>
        </Fragment>
    )
}

export default about
