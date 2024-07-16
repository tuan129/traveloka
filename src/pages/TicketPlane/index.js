import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TicketPlane.module.scss';

const cx = classNames.bind(styles);

function TicketPlane() {
    const location = useLocation();
    const { flights } = location.state || { flights: [] };

    return (
        <div className={cx('ticket-plane')}>
            <h2>Kết quả tìm kiếm chuyến bay</h2>
            {flights.length > 0 ? (
                <ul>
                    {flights.map((flight) => (
                        <li key={flight.id} className={cx('flight-item')}>
                            <div>{flight.airline}</div>
                            <div>{flight.departureTime} - {flight.arrivalTime}</div>
                            <div>{flight.price}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Không tìm thấy chuyến bay.</p>
            )}
        </div>
    );
}

export default TicketPlane;
