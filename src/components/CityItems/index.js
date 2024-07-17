import React from 'react';
import classNames from 'classnames/bind';
import styles from './CityItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CityItems({ name, code, city, country }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <FontAwesomeIcon className={cx('icon')} icon={faPlane} />
                <div className={cx('info-airfield')}>
                    <div className={cx('name-airfield')}>
                        <p>{name}</p>
                        <span className={cx('code-airfield')}>{code}</span>
                    </div>
                    <p className={cx('name-country')}>
                        {city}, {country}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CityItems;
