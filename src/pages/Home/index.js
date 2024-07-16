//hook
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// images
import images from '~/assets/images';

// component
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import CityItems from '~/components/CityItems';

//library
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
    faCalendarDay,
    faChair,
    faMagnifyingGlass,
    faPlaneArrival,
    faPlaneDeparture,
    faUserLarge,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Poper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Phổ Thông',
    },
    {
        title: 'Phổ thông đặt biệt',
    },
    {
        title: 'Thương gia',
    },
    {
        title: 'Hạng nhất',
    },
];

function Home() {
    const [start, setStart] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [seatClass, setSeatClass] = useState('Phổ Thông');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [isPassengerInputActive, setIsPassengerInputActive] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setStart([]);
        }, 0);
    });

    const handleSearch = async () => {
        if (!from || !to || !departureDate) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/search-flights', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ from, to, departureDate, returnDate: isRoundTrip ? returnDate : '', seatClass }),
            });

            const data = await response.json();
            navigate('/ticket-plane', { state: { flights: data.flights } });
        } catch (error) {
            setError('Không thể tìm thấy chuyến bay.');
        }
    };
    const handlePassengerInputClick = () => {
        setIsPassengerInputActive(!isPassengerInputActive);
    };

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsPassengerInputActive(false);
        }
    };

    return (
        <div className={cx('home')}>
            {/* Banner */}
            <div className={cx('wrapper')}>
                <div className={cx('banner')}>
                    <div className={cx('title-banner')}>
                        <h1>Tìm và đặt vé máy bay khuyến mãi & vé giá rẻ chỉ với 3 bước đơn giản!</h1>
                        <h2>Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Traveloka!</h2>
                    </div>
                    <img src={images.banner} alt="banner" />
                </div>

                <div className={cx('next-link')}>Xem thêm khuyến mãi</div>
            </div>

            {/* Content */}

            <div className={cx('content')}>
                <div className={cx('find-ticket')}>
                    <div className={cx('ticket')}>
                        <div className={cx('title-content')}>Một chiều/ Khứ hồi</div>
                        <div className={cx('buy-ticket')}>
                            <div className={cx('info-customer')}>
                                <div className={cx('right-info')}>
                                    {/* Departure */}
                                    <Tippy
                                        placement="bottom"
                                        visible={start.length > 0}
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                                <PoperWrapper>
                                                    <h3>Thành Phố Hoặc Sân Bay Phổ biến</h3>
                                                    <CityItems />
                                                    <CityItems />
                                                    <CityItems />
                                                    <CityItems />
                                                </PoperWrapper>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('from')}>
                                            <p className={cx('name-input')}>Từ</p>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPlaneDeparture} />
                                            <input
                                                type="text"
                                                placeholder="Origin"
                                                value={from}
                                                onChange={(e) => setFrom(e.target.value)}
                                            />
                                        </div>
                                    </Tippy>

                                    {/* Arrival */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Đến</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPlaneArrival} />
                                        <Tippy
                                            placement="bottom"
                                            visible={start.length > 0}
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                                    <PoperWrapper>
                                                        <h3>Thành Phố Hoặc Sân Bay Phổ biến</h3>
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                    </PoperWrapper>
                                                </div>
                                            )}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Destination"
                                                value={to}
                                                onChange={(e) => setTo(e.target.value)}
                                            />
                                        </Tippy>
                                    </div>
                                </div>

                                {/* Amount customer */}
                                <div className="left-info" onBlur={handleBlur}>
                                    <div
                                        className={cx('amount-cus')}
                                        onFocus={() => setIsPassengerInputActive(true)}
                                        onClick={handlePassengerInputClick}
                                    >
                                        <p className={cx('name-input')}>Số hành khách</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faUserLarge} />
                                        <input
                                            type="text"
                                            placeholder={`${adultCount} Người lớn, ${childCount} Trẻ em, ${infantCount} Em bé`}
                                        />
                                        {isPassengerInputActive && (
                                            <div className={cx('passenger-details')}>
                                                <div className={cx('passenger-count')}>
                                                    <span>
                                                        Người lớn
                                                        <br /> <h6>(Từ 12 tuổi)</h6>
                                                    </span>
                                                    <button onClick={() => setAdultCount(adultCount - 1)}>-</button>
                                                    <span className={cx('person')}>{adultCount}</span>
                                                    <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
                                                </div>
                                                <div className={cx('passenger-count')}>
                                                    <span>
                                                        Trẻ em
                                                        <br /> <h6>(Từ 2 - 11 tuổi)</h6>
                                                    </span>
                                                    <button onClick={() => setChildCount(childCount - 1)}>-</button>
                                                    <span className={cx('person')}>{childCount}</span>
                                                    <button onClick={() => setChildCount(childCount + 1)}>+</button>
                                                </div>
                                                <div className={cx('passenger-count')}>
                                                    <span>
                                                        Em bé
                                                        <br /> <h6>(Dưới 2 tuổi)</h6>
                                                    </span>
                                                    <button onClick={() => setInfantCount(infantCount - 1)}>-</button>
                                                    <span className={cx('person')}>{infantCount}</span>
                                                    <button onClick={() => setInfantCount(infantCount + 1)}>+</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={cx('info-customer')}>
                                <div className={cx('right-info')}>
                                    {/* Departure */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Ngày đi</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCalendarDay} />
                                        <input
                                            type="date"
                                            placeholder="Origin"
                                            value={departureDate}
                                            onChange={(e) => setDepartureDate(e.target.value)}
                                        />
                                    </div>

                                    {/* Arrival */}

                                    <div className={cx('from')}>
                                        <div className={cx('btn-check-box')}>
                                            <input
                                                type="checkbox"
                                                checked={isRoundTrip}
                                                onChange={() => setIsRoundTrip(!isRoundTrip)}
                                            />
                                            <label>Khứ Hồi</label>
                                        </div>
                                        {isRoundTrip && (
                                            <div className={cx('day-return')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCalendarDay} />
                                                <input
                                                    type="date"
                                                    placeholder="Destination"
                                                    value={returnDate}
                                                    onChange={(e) => setReturnDate(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Amount customer */}
                                <div className="left-info">
                                    <Menu items={MENU_ITEMS}>
                                        <div className={cx('amount-cus')}>
                                            <p className={cx('name-input')}>Hạng ghế</p>
                                            <FontAwesomeIcon className={cx('icon')} icon={faChair} />
                                            <input
                                                type="text"
                                                value={seatClass}
                                                onChange={(e) => setSeatClass(e.MENU_ITEMS.title)}
                                            />
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                            <Button
                                large
                                leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />}
                                className={cx('btnFind')}
                                onClick={handleSearch}
                            >
                                Tìm chuyến bay
                            </Button>
                            {error && <p className={cx('error')}>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
