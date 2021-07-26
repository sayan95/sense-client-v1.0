// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LazyMotion, domAnimation, m } from 'framer-motion';


/**
 *  HOC for lazy animate
 */
const SenseLazyAnimate = ({children, applyCondition, initial, animate, transition, exit, keyProp}) => {
    return (
        <Fragment>
            {applyCondition 
            ?   (<LazyMotion features={domAnimation}> 
                    <m.div 
                        key={keyProp}
                        initial={initial}
                        animate = {animate}
                        exit = {exit}
                        transition={transition}
                    >
                        {children}
                    </m.div>
                </LazyMotion>) 
            :   (
                    <Fragment>
                        {children}
                    </Fragment>
                )
            }
        </Fragment>
    )
}

// defalut props
SenseLazyAnimate.defaultProps = {
    keyProp: null,
    initial : null,
    animate : null,
    exit: null,
    transition : null,
    applyCondition: true,
}

// props validation
SenseLazyAnimate.propTypes = {
    applyCondition: PropTypes.bool,
    key: PropTypes.any,
    initial : PropTypes.object,
    animate : PropTypes.object,
    exit: PropTypes.object,
    transition : PropTypes.object,
}

export default SenseLazyAnimate
