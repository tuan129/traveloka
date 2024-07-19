// Hook
import { useState } from 'react';

import styles from './AddFlight.module.scss';
import Button from '~/components/Button';

// Component
import CityItems from '~/components/CityItems';
import AirlineItems from '~/components/AirlineItems';
import { Wrapper as PoperWrapper } from '~/components/Poper';

// Library
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function AddFlight() {
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');
    const [showAirlineResults, setShowAirlineResults] = useState(false);
    const [airlineResults, setAirlineResults] = useState([]);
    const [airlines, setAirlines] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchAirports = async (query) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/api/search?keyword=${query}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.results);
            setShowSearchResults(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
            setShowSearchResults(false);
        } finally {
            setLoading(false);
        }
    };

    const fetchAirlines = async (query) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/api/airlines?keyword=${query}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setAirlineResults(data.results);
            setShowAirlineResults(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setAirlineResults([]);
            setShowAirlineResults(false);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e, type) => {
        const query = e.target.value;
        if (type === 'departure') {
            setDepartureCity(query);
            if (query.length > 0) {
                fetchAirports(query);
            } else {
                setShowSearchResults(false);
            }
        } else if (type === 'arrival') {
            setArrivalCity(query);
            if (query.length > 0) {
                fetchAirports(query);
            } else {
                setShowSearchResults(false);
            }
        } else if (type === 'airlines') {
            setAirlines(query);
            if (query.length > 0) {
                fetchAirlines(query);
            } else {
                setShowAirlineResults(false);
            }
        }
    };

    const handleSelect = (item, type) => {
        if (type === 'departure') {
            setDepartureCity(`${item.city} (${item.code})`);
        } else if (type === 'arrival') {
            setArrivalCity(`${item.city} (${item.code})`);
        } else if (type === 'airlines') {
            setAirlines(`${item.fullName} (${item.code})`);
        }
        setShowSearchResults(false);
        setShowAirlineResults(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Add Flight</h1>
                <div className={cx('add-flight')}>
                    <div className={cx('flight-info')}>
                        <label>
                            <span>- Số hiệu chuyến bay:</span>
                            <input type="text" placeholder="Flight Number" />
                        </label>
                        <div>
                            <label>
                                <span>- Hãng hàng không:</span>
                                <Tippy
                                    className={cx('asdasd')}
                                    placement="bottom-start"
                                    interactive
                                    visible={showAirlineResults && airlines.length > 0}
                                    render={(attrs) => (
                                        <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                            <PoperWrapper>
                                                <h3>Hãng hàng không:</h3>
                                                <div className={cx('airline-items-list')}>
                                                    {loading ? (
                                                        <div>Loading...</div>
                                                    ) : (
                                                        airlineResults.map((airline) => (
                                                            <AirlineItems
                                                                key={airline.code}
                                                                code={airline.code}
                                                                name={airline.name}
                                                                fullName={airline.fullName}
                                                                onClick={() => handleSelect(airline, 'airlines')}
                                                            />
                                                        ))
                                                    )}
                                                </div>
                                            </PoperWrapper>
                                        </div>
                                    )}
                                >
                                    <input
                                        type="text"
                                        placeholder="Airlines"
                                        value={airlines}
                                        onFocus={() => setShowAirlineResults(true)}
                                        onChange={(e) => handleInputChange(e, 'airlines')}
                                    />
                                </Tippy>
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>- Sân bay khởi hành:</span>
                                <Tippy
                                    placement="bottom-start"
                                    interactive
                                    visible={showSearchResults && departureCity.length > 0}
                                    render={(attrs) => (
                                        <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                            <PoperWrapper>
                                                <h3>Các sân bay:</h3>
                                                <div className={cx('city-items-list')}>
                                                    {loading ? (
                                                        <div>Loading...</div>
                                                    ) : (
                                                        searchResults.map((airport) => (
                                                            <CityItems
                                                                key={airport.code}
                                                                name={airport.name}
                                                                city={airport.city}
                                                                country={airport.country}
                                                                onClick={() => handleSelect(airport, 'departure')}
                                                            />
                                                        ))
                                                    )}
                                                </div>
                                            </PoperWrapper>
                                        </div>
                                    )}
                                >
                                    <input
                                        type="text"
                                        placeholder="Departure City"
                                        value={departureCity}
                                        onFocus={() => setShowSearchResults(true)}
                                        onChange={(e) => handleInputChange(e, 'departure')}
                                    />
                                </Tippy>
                            </label>
                        </div>

                        <label>
                            <span>- Thời gian cất cánh:</span>
                            <input type="time" placeholder="Departure Time" />
                        </label>
                        <label className={cx('amount-ticket')}>
                            <span>- Số lượng vé:</span>
                            <div className={cx('level-ticket')}>
                                <input type="text" placeholder="Phổ thông" />
                                <input type="text" placeholder="Phổ thông đặc biệt" />
                                <input type="text" placeholder="Thương gia" />
                                <input type="text" placeholder="Hạng nhất" />
                            </div>
                        </label>
                    </div>
                    <div className={cx('flight-info')}>
                        <label>
                            <span>- Ngày khởi hành:</span>
                            <input type="date" placeholder="Departure Date" />
                        </label>
                        <div>
                            <label>
                                <span>- Sân bay đến:</span>
                                <Tippy
                                    placement="bottom-start"
                                    interactive
                                    visible={showSearchResults && arrivalCity.length > 0}
                                    render={(attrs) => (
                                        <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                            <PoperWrapper>
                                                <h3>Các sân bay:</h3>
                                                <div className={cx('city-items-list')}>
                                                    {loading ? (
                                                        <div>Loading...</div>
                                                    ) : (
                                                        searchResults.map((airport) => (
                                                            <CityItems
                                                                key={airport.code}
                                                                name={airport.name}
                                                                city={airport.city}
                                                                country={airport.country}
                                                                onClick={() => handleSelect(airport, 'arrival')}
                                                            />
                                                        ))
                                                    )}
                                                </div>
                                            </PoperWrapper>
                                        </div>
                                    )}
                                >
                                    <input
                                        type="text"
                                        placeholder="Arrival City"
                                        value={arrivalCity}
                                        onFocus={() => setShowSearchResults(true)}
                                        onChange={(e) => handleInputChange(e, 'arrival')}
                                    />
                                </Tippy>
                            </label>
                        </div>
                        <label>
                            <span>- Thời gian đến:</span>
                            <input type="time" placeholder="Arrival Time" />
                        </label>
                        <label className={cx('price-ticket')}>
                            <span>- Giá vé:</span>
                            <div className={cx('level-ticket')}>
                                <input type="text" placeholder="Phổ thông" />
                                <input type="text" placeholder="Phổ thông đặc biệt" />
                                <input type="text" placeholder="Thương gia" />
                                <input type="text" placeholder="Hạng nhất" />
                            </div>
                        </label>
                    </div>
                </div>
                <Button primary className={cx('btn-add-flight')}>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddFlight;
