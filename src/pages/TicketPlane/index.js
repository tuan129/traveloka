//Hook
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

//library
import classNames from 'classnames/bind';
import styles from './TicketPlane.module.scss';

//component
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function TicketPlane() {
    const location = useLocation();
    const flights = location.state?.flights || [];

    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleDetailClick = (flight) => {
        if (selectedFlight && selectedFlight.flightNumber === flight.flightNumber) {
            // Nếu chuyến bay hiện tại đang được chọn thì bỏ chọn (ẩn chi tiết)
            setSelectedFlight(null);
        } else {
            // Nếu chuyến bay khác được chọn thì hiển thị chi tiết của chuyến bay đó
            setSelectedFlight(flight);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <ul className={cx('list-tickets')}>
                    <h1>Danh sách các chuyến bay</h1>
                    {flights.map((flight, index) => (
                        <li key={index} className={cx('ticket-item')}>
                            <div className={cx('info-ticket')}>
                                <p>{flight.airline}</p>
                                <p className={cx('place')}>
                                    {flight.from} {flight.departureCode} - {flight.to} {flight.arrivalCode}
                                    <br />
                                    <span className={cx('time')}>
                                        {flight.departureTime} - {flight.arrivalTime}
                                    </span>
                                </p>
                                <p className={cx('money')}>Giá vé: {flight.price.toLocaleString()} VND</p>
                            </div>
                            <div className={cx('btn-handle')}>
                                <Button className={cx('details')} onClick={() => handleDetailClick(flight)}>
                                    Chi tiết
                                </Button>
                                <Button primary>Chọn</Button>
                            </div>
                            {selectedFlight && selectedFlight.flightNumber === flight.flightNumber && (
                                <div className={cx('flight-details')}>
                                    <h2>Chi tiết chuyến bay</h2>
                                    <p>Hãng hàng không: {selectedFlight.airline}</p>
                                    <p>Mã chuyến bay: {selectedFlight.flightNumber}</p>
                                    <p>
                                        Thành phố cất cánh: {selectedFlight.from} {selectedFlight.departureCode}
                                    </p>
                                    <p>
                                        Thành phố hạ cánh: {selectedFlight.to} {selectedFlight.arrivalCode}
                                    </p>
                                    <p>
                                        Thời gian cất cánh: {selectedFlight.departureTime} - Thời gian hạ cánh:{' '}
                                        {selectedFlight.arrivalTime}
                                    </p>
                                    <p>{selectedFlight.price.toLocaleString()} VND/ Khách </p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TicketPlane;
